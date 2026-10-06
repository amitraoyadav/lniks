/**
 * SEO Manager for Group ACH (https://achlinks.in/)
 * Dynamically handles document head meta tags, canonical links, OpenGraph,
 * Twitter cards, and Schema.org structured data (JSON-LD) across all routes.
 */

export interface PageSeoConfig {
  title: string;
  description: string;
  canonicalPath: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  schema?: Record<string, any>;
  h1: string;
  breadcrumbs?: { name: string; path: string }[];
}

export const BASE_URL = 'https://achlinks.in';

export const SITE_SEO_REGISTRY: Record<string, PageSeoConfig> = {
  '/': {
    title: 'Home Loan & LAP Consultant in Bangalore | Group ACH',
    description:
      'Looking for a Home Loan or LAP in Bangalore? Group ACH connects you with 70+ banks & NBFCs for lowest rates & doorstep service.',
    canonicalPath: '/',
    h1: 'Home Loan & Loan Against Property Assistance in Bangalore',
    keywords:
      'home loan consultant Bangalore, home loan advisor Bangalore, loan against property consultant Bangalore, property loan Bangalore, mortgage loan, home loan eligibility, home loan balance transfer, Group ACH',
    breadcrumbs: [{ name: 'Home', path: '/' }],
  },
  '/home-loan': {
    title: 'Best Home Loan Rates & Advisory in Bangalore | Group ACH',
    description:
      'Compare top bank home loan rates in Bangalore starting from benchmark rates. Get instant sanction guidance across 70+ lenders.',
    canonicalPath: '/home-loan',
    h1: 'Home Loan Advisory & Lowest Interest Rates in Bangalore',
    keywords:
      'home loan Bangalore, home loan assistance, home loan rates, apply home loan, home loan in Bangalore, home loan advisor Bangalore',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Home Loan', path: '/home-loan' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Home Loan Advisory & Processing',
      provider: {
        '@type': 'FinancialService',
        name: 'Group ACH',
        url: 'https://achlinks.in/',
      },
      areaServed: 'Bangalore, Karnataka, India',
      description:
        'End-to-end home loan comparison, doorstep document pick up, rate negotiation, and priority sanction across 70+ partner banks.',
      serviceType: 'Mortgage Advisory',
    },
  },
  '/home-loan-consultant': {
    title: 'Expert Home Loan Consultant in Bangalore | Group ACH',
    description:
      'Consult top home loan advisors at Group ACH in Bangalore. We negotiate with 70+ banks for fastest sanction, lowest spread & maximum LTV.',
    canonicalPath: '/home-loan-consultant',
    h1: 'Independent Home Loan Consultant for Top Banks & NBFCs',
    keywords:
      'home loan consultant, home loan advisor, home loan agent, mortgage consultant Bangalore, best home loan consultant Bangalore',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Home Loan', path: '/home-loan' },
      { name: 'Home Loan Consultant', path: '/home-loan-consultant' },
    ],
  },
  '/loan-against-property': {
    title: 'Loan Against Property (LAP) Advisory & Rates in Bangalore | Group ACH',
    description:
      'Unlock up to 75% market value of residential or commercial property with Loan Against Property advisory in Bangalore.',
    canonicalPath: '/loan-against-property',
    h1: 'Loan Against Property (LAP) - Unlock Equity From Your Real Estate',
    keywords:
      'loan against property Bangalore, loan against property consultant, property loan, mortgage loan Bangalore, commercial property loan, residential lap Bangalore',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Loan Against Property', path: '/loan-against-property' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Loan Against Property (LAP) Advisory',
      provider: {
        '@type': 'FinancialService',
        name: 'Group ACH',
        url: 'https://achlinks.in/',
      },
      areaServed: 'Bangalore, Karnataka, India',
      description:
        'Mortgage financing against freehold residential, commercial, or industrial properties with high loan-to-value structuring and low interest rates in Bangalore.',
      serviceType: 'Property Mortgage Loan',
    },
  },
  '/loan-against-property-bangalore': {
    title: 'Loan Against Property in Bangalore: Highest LTV | Group ACH',
    description:
      'Get Loan Against Property in Bangalore with transparent valuation, high LTV & door-step processing for residential & commercial units.',
    canonicalPath: '/loan-against-property-bangalore',
    h1: 'Loan Against Property in Bangalore for Residential & Commercial Assets',
    keywords:
      'loan against property in Bangalore, loan against property consultant Bangalore, property loan Bangalore, commercial LAP Bangalore',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Loan Against Property', path: '/loan-against-property' },
      { name: 'Bangalore', path: '/loan-against-property-bangalore' },
    ],
  },
  '/home-loan-bangalore': {
    title: 'Home Loan in Bangalore: Compare 70+ Banks | Group ACH',
    description:
      'Get the best Home Loan in Bangalore for BBMP A-Khata, B-Khata, and BDA approved properties. Doorstep assistance & legal checks.',
    canonicalPath: '/home-loan-bangalore',
    h1: 'Home Loan Solutions & Advisory Across Bangalore',
    keywords:
      'home loan in Bangalore, home loan consultant in Bangalore, home loan advisor in Bangalore, home loan Jayanagar, home loan Whitefield',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Home Loan', path: '/home-loan' },
      { name: 'Home Loan Bangalore', path: '/home-loan-bangalore' },
    ],
  },
  '/home-loan-eligibility': {
    title: 'Home Loan Eligibility Calculator & Criteria | Group ACH',
    description:
      'Understand FOIR, salary multiplier, CIBIL score requirements & methods to boost your home loan eligibility with Group ACH advisors.',
    canonicalPath: '/home-loan-eligibility',
    h1: 'Home Loan Eligibility Criteria: Calculate Maximum Borrowing Power',
    keywords:
      'home loan eligibility, home loan eligibility criteria, foir calculation, how to improve home loan eligibility, home loan calculator',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Home Loan', path: '/home-loan' },
      { name: 'Eligibility Guide', path: '/home-loan-eligibility' },
    ],
  },
  '/home-loan-documents': {
    title: 'Home Loan Documents Checklist for Borrowers | Group ACH',
    description:
      'Complete checklist of documents required for Home Loan approval in India. KYC, income proofs, property chain & sanction requisites.',
    canonicalPath: '/home-loan-documents',
    h1: 'Complete Home Loan Documents Required Checklist',
    keywords:
      'home loan documents, documents required for home loan, home loan paperwork, property chain documents, ITR for home loan',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Home Loan', path: '/home-loan' },
      { name: 'Documents Checklist', path: '/home-loan-documents' },
    ],
  },
  '/home-loan-balance-transfer': {
    title: 'Home Loan Balance Transfer: Reduce EMI | Group ACH',
    description:
      'Transfer your existing home loan to a lower interest rate. Calculate interest savings, top-up eligibility & smooth takeover.',
    canonicalPath: '/home-loan-balance-transfer',
    h1: 'Home Loan Balance Transfer Assistance & Interest Savings',
    keywords:
      'home loan balance transfer, home loan transfer, lower home loan emi, home loan top up, switch home loan bank',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Home Loan', path: '/home-loan' },
      { name: 'Balance Transfer', path: '/home-loan-balance-transfer' },
    ],
  },
  '/home-loan-for-salaried': {
    title: 'Home Loan for Salaried Employees: Low Rates | Group ACH',
    description:
      'Exclusive home loan advisory for salaried professionals in MNCs, IT & government. Enjoy minimal documentation & low spreads.',
    canonicalPath: '/home-loan-for-salaried',
    h1: 'Home Loan for Salaried Professionals in MNCs & Government',
    keywords:
      'home loan for salaried, home loan for salaried person, salaried home loan interest rate, corporate employee home loan',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Home Loan', path: '/home-loan' },
      { name: 'For Salaried', path: '/home-loan-for-salaried' },
    ],
  },
  '/home-loan-for-self-employed': {
    title: 'Home Loan for Self Employed & Business | Group ACH',
    description:
      'Specialized home loan structuring for self-employed professionals & SME owners based on GST, turnover & banking surrogates.',
    canonicalPath: '/home-loan-for-self-employed',
    h1: 'Home Loan Solutions for Self-Employed & Business Proprietors',
    keywords:
      'home loan for self employed, home loan for business owner, banking surrogate loan, self employed mortgage',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Home Loan', path: '/home-loan' },
      { name: 'For Self-Employed', path: '/home-loan-for-self-employed' },
    ],
  },
  '/about': {
    title: 'About Group ACH: 70+ Partner Institutions | ACH Links',
    description:
      'Learn about Group ACH\'s mission, leadership, multi-bank network & customer-first loan advisory with zero upfront fees.',
    canonicalPath: '/about',
    h1: 'About Group ACH - Transparent Loan Connecting Advisory',
    keywords: 'about group ach, ach links, authorized loan connector, group ach leadership',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
    ],
  },
  '/contact': {
    title: 'Contact Group ACH: Direct Advisory Hotline | ACH Links',
    description:
      'Connect with Group ACH loan specialists for doorstep service, secured line chat advice & customized mortgage quotes in Bangalore.',
    canonicalPath: '/contact',
    h1: 'Contact Group ACH Loan Specialists',
    keywords:
      'contact group ach, home loan advisor near me, home loan consultation bangalore, achlinks contact',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Contact Us', path: '/contact' },
    ],
  },
  '/faq': {
    title: 'Frequently Asked Questions: Home Loans | Group ACH',
    description:
      'Answers to common questions regarding home loan approval, interest rate calculation, CIBIL impact, foreclosure & documents.',
    canonicalPath: '/faq',
    h1: 'Home Loan & Property Finance Knowledge Base',
    keywords: 'home loan faqs, loan against property questions, mortgage query India, cibil query',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'FAQs', path: '/faq' },
    ],
  },
  '/blog': {
    title: 'Home Loan & Property Finance Guides | Group ACH Blog',
    description:
      'Expert insights, regulatory updates, tax saving tips & smart borrowing strategies written by seasoned mortgage consultants.',
    canonicalPath: '/blog',
    h1: 'Mortgage Insights, Rate Trends & Home Loan Guides',
    keywords:
      'home loan blog, mortgage guides India, property finance articles, home loan tips',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Blog Hub', path: '/blog' },
    ],
  },
  '/loan-offers': {
    title: 'Best Home Loan Offers 2026: 0% Fee & Lowest Rates | Group ACH',
    description:
      'Compare exclusive bank home loan offers in 2026. Zero processing fees, repo-linked discounts from 8.40%, and high LTV funding across 70+ partner banks.',
    canonicalPath: '/loan-offers',
    h1: 'Best Home Loan & LAP Special Offers (2026)',
    keywords:
      'home loan offers 2026, lowest home loan rate, sbi home loan offer, hdfc loan offer, loan against property offer, zero processing fee home loan',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Special Loan Offers', path: '/loan-offers' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'SpecialAnnouncement',
      name: 'Special Concession Home Loan & Property Financing Offers 2026',
      category: 'https://schema.org/Finance',
      text: 'Special home loan interest rates starting 8.40% onwards with zero processing fee waivers across top partner banks.',
      provider: {
        '@type': 'FinancialService',
        name: 'Group ACH',
        url: 'https://achlinks.in/',
      },
    },
  },
  '/home-loan-bengaluru': {
    title: 'Home Loan in Bengaluru: Best Rates & Doorstep Advisory | Group ACH',
    description:
      'Get lowest home loan & LAP rates in Bengaluru from our Jayanagar headquarters. BBMP A-Khata, B-Khata, and BDA approved project loans across 70+ banks.',
    canonicalPath: '/home-loan-bengaluru',
    h1: 'Best Home Loan & LAP Advisory in Bengaluru',
    keywords:
      'home loan Bengaluru, home loan Bangalore, home loan consultant Jayanagar, property loan Whitefield, BBMP A Khata loan, Group ACH Bengaluru',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Bengaluru', path: '/home-loan-bengaluru' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Group ACH - Bengaluru Headquarters',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'PO 1102, 4th T Block East Jayanagar, 3rd Block Jayanagar',
        addressLocality: 'Bengaluru',
        postalCode: '560011',
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
      },
      telephone: '+919482537337',
      email: 'achgrouplink@gmail.com',
      url: 'https://achlinks.in/home-loan-bengaluru',
      priceRange: '₹0 (Free Advisory)',
    },
  },
  '/sitemap': {
    title: 'HTML Sitemap & Complete Website Directory | Group ACH',
    description:
      'Browse all home loan products, special offers, city landing pages, borrowing guides, calculators, and official flyers on Group ACH.',
    canonicalPath: '/sitemap',
    h1: 'Group ACH Website Directory & Search Index',
    keywords: 'group ach sitemap, home loan directory, property loan index',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Sitemap', path: '/sitemap' },
    ],
  },
};

/**
 * Apply SEO metadata and JSON-LD schema dynamically to document head
 */
export function applyPageSeo(path: string, customConfig?: Partial<PageSeoConfig>): PageSeoConfig {
  const normalizedPath = path.toLowerCase().replace(/\/$/, '') || '/';
  const matched = SITE_SEO_REGISTRY[normalizedPath] || SITE_SEO_REGISTRY['/'];
  const config: PageSeoConfig = {
    ...matched,
    ...customConfig,
  };

  if (typeof document === 'undefined') return config;

  // Title
  document.title = config.title;

  // Meta Description
  let descMeta = document.querySelector('meta[name="description"]');
  if (!descMeta) {
    descMeta = document.createElement('meta');
    descMeta.setAttribute('name', 'description');
    document.head.appendChild(descMeta);
  }
  descMeta.setAttribute('content', config.description);

  // Canonical Link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  const canonicalUrl = `${BASE_URL}${config.canonicalPath}`;
  canonicalLink.setAttribute('href', canonicalUrl);

  // Multilingual Hreflang Alternate Links (en-IN, hi-IN, x-default)
  const setHreflang = (lang: string, url: string) => {
    let link = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`);
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', lang);
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  };
  setHreflang('en-IN', canonicalUrl);
  setHreflang('hi-IN', canonicalUrl);
  setHreflang('x-default', canonicalUrl);

  // Open Graph
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', config.ogTitle || config.title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', config.ogDescription || config.description);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

  // Twitter Cards
  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute('content', config.title);

  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.setAttribute('content', config.description);

  // Inject BreadcrumbList Schema if breadcrumbs exist
  let dynamicScript = document.getElementById('dynamic-route-schema');
  if (!dynamicScript) {
    dynamicScript = document.createElement('script');
    dynamicScript.id = 'dynamic-route-schema';
    dynamicScript.setAttribute('type', 'application/ld+json');
    document.head.appendChild(dynamicScript);
  }

  const breadcrumbsSchema =
    config.breadcrumbs && config.breadcrumbs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: config.breadcrumbs.map((b, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: b.name,
            item: `${BASE_URL}${b.path}`,
          })),
        }
      : null;

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      ...(breadcrumbsSchema ? [breadcrumbsSchema] : []),
      ...(config.schema ? [config.schema] : []),
    ],
  };

  dynamicScript.textContent = JSON.stringify(combinedSchema);

  return config;
}
