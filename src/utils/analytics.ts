/**
 * Google Analytics 4 (GA4), Meta Pixel & Ad Campaign Tracking Utility
 * Group ACH (https://www.achlinks.in/)
 */

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
}

const STORAGE_KEY_UTM = 'group_ach_utm_tracking';

/**
 * Capture and cache inbound UTM and ad click identifiers from current URL
 */
export function captureInboundUtms(): UtmParams {
  if (typeof window === 'undefined') return {};
  try {
    const params = new URLSearchParams(window.location.search);
    const captured: UtmParams = {};

    const utmKeys: (keyof UtmParams)[] = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_term',
      'utm_content',
      'gclid',
      'fbclid',
    ];

    let hasUtm = false;
    utmKeys.forEach((key) => {
      const val = params.get(key);
      if (val) {
        captured[key] = val;
        hasUtm = true;
      }
    });

    if (hasUtm) {
      sessionStorage.setItem(STORAGE_KEY_UTM, JSON.stringify(captured));
      return captured;
    }

    const saved = sessionStorage.getItem(STORAGE_KEY_UTM);
    return saved ? JSON.parse(saved) : {};
  } catch (err) {
    console.error('Error capturing UTM parameters:', err);
    return {};
  }
}

/**
 * Push structured event to dataLayer for GA4 / Google Tag Manager
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}): void {
  if (typeof window === 'undefined') return;
  try {
    const utms = captureInboundUtms();
    const payload = {
      event: eventName,
      timestamp: new Date().toISOString(),
      page_path: window.location.pathname,
      ...utms,
      ...params,
    };

    // Push to Google dataLayer
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push(payload);

    // If gtag is directly mounted
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', eventName, payload);
    }
  } catch (err) {
    console.warn('Analytics event dispatch warning:', err);
  }
}

export const analytics = {
  pageView: (path: string, title?: string) => {
    trackEvent('page_view', { page_location: window.location.href, page_path: path, page_title: title });
  },
  contactFormSubmit: (data: { loanType: string; amount: number | string; city: string }) => {
    trackEvent('contact_form_submit', {
      loan_type: data.loanType,
      loan_amount: data.amount,
      city: data.city,
      event_category: 'Lead Conversion',
    });
  },
  whatsappClick: (locationTag: string) => {
    trackEvent('whatsapp_click', {
      click_location: locationTag,
      destination: 'wa.me/919482537337',
      event_category: 'Direct Engagement',
    });
  },
  phoneClick: (locationTag: string) => {
    trackEvent('phone_click', {
      click_location: locationTag,
      destination: 'tel:+919482537337',
      event_category: 'Direct Engagement',
    });
  },
  ctaClick: (ctaName: string, destinationUrl?: string) => {
    trackEvent('cta_click', {
      cta_name: ctaName,
      destination_url: destinationUrl,
    });
  },
  consultationRequest: (source: string) => {
    trackEvent('consultation_request', {
      source,
      event_category: 'Lead Conversion',
    });
  },
};
