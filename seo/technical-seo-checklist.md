# Group ACH Technical SEO & Search Engine Console Master Checklist
**Domain**: https://achlinks.in/  
**Brand**: Group ACH / ACH Links  
**Industry**: Home Loan & Loan Against Property Advisory  
**Target Geo**: Delhi, Delhi NCR, and Pan-India Doorstep Presence  

---

## 1. Technical SEO & Crawlability Baseline

- [x] **robots.txt**: Configured at `/robots.txt` with unrestricted crawling for major search bots (Googlebot, Bingbot), explicit CSS/JS resource access, and dynamic sitemap reference `https://achlinks.in/sitemap.xml`.
- [x] **XML Sitemap**: Canonical sitemap deployed at `/sitemap.xml` with indexable URLs, ISO-8601 timestamps, priority weights, and change frequencies.
- [x] **Self-Referential Canonical Tags**: Every indexable page includes an explicit `<link rel="canonical" href="..." />` matching its canonical HTTPS URL to prevent duplicate content dilution.
- [x] **Viewport & Mobile-First**: Verified `<meta name="viewport" content="width=device-width, initial-scale=1.0" />` with responsive layout scaling across all modern mobile viewports (360px–1920px+).
- [x] **Character Encoding**: UTF-8 declared explicitly as the first meta tag in `<head>`.
- [x] **Language & Regional Targeting**: Set `<html lang="en-IN">` with Local SEO geo tags (`IN-DL`, Delhi NCR coordinates `28.6139;77.2090`).
- [x] **Semantic HTML Hierarchy**: Strictly enforced single `<h1>` per page, sequential `<h2>` and `<h3>` tags, semantic `<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>` elements.
- [x] **Broken Links / 404 Prevention**: Seamless client-side and fallback routing with graceful 404 handling and instant return to high-intent service hubs.
- [x] **Resource Optimization**: Font preconnects to Google Fonts (`fonts.googleapis.com` & `fonts.gstatic.com`), modern SVG vectors, and zero blocking third-party scripts.

---

## 2. Structured Data (Schema.org JSON-LD) Architecture

| Schema Type | Target URL | Purpose & Google Rich Snippet Target |
|:---|:---|:---|
| **FinancialService** | `/` (Homepage) | Official NAP, opening hours, geo coordinates, service area, and multi-bank catalog. |
| **WebSite** | `/` | Declares site search and publisher identity for Knowledge Graph enrichment. |
| **Organization** | Sitewide | Brand name, official contact point, logo, and leadership information. |
| **Service** | `/home-loan`, `/loan-against-property`, etc. | Declares specialized financial loan facilitation services with category classification. |
| **LocalBusiness** | `/home-loan-delhi`, `/loan-against-property-delhi` | Localized geo targeting for Delhi & NCR boroughs. |
| **FAQPage** | `/faq`, Service Pages with visible FAQs | Enables FAQ rich drop-down results in Google SERPs for queries with visible accordions. |
| **BreadcrumbList** | All subpages | Breadcrumb navigation snippets in search engine SERPs (`Home > Home Loans > Eligibility`). |
| **Article** | Blog posts (`/blog/*`) | Full authorship, publisher details, date published, and headline for Google Discover and Article carousels. |

*Note: No misleading ratings, government affiliations, or fake reviews are included.*

---

## 3. Google Search Console (GSC) Setup & Verification Checklist

1. **Domain Property Verification**:
   - Add Domain property `achlinks.in` in Google Search Console via DNS TXT record for full coverage across HTTP, HTTPS, `www`, and non-`www` protocols.
   - Alternatively, add URL-prefix property `https://achlinks.in/` using HTML tag or Firebase hosting verification.
2. **Sitemap Submission**:
   - Navigate to **Sitemaps** in GSC and submit `https://achlinks.in/sitemap.xml`.
   - Verify that Googlebot reports Status: **Success** with all submitted URLs recognized.
3. **URL Inspection**:
   - Inspect `https://achlinks.in/` and click **Test Live URL**.
   - Confirm Googlebot Smartphone can render the page without blocked resources.
   - Check mobile usability and structured data parsing.
4. **Core Web Vitals Monitoring**:
   - Monitor Largest Contentful Paint (LCP < 2.5s).
   - Interaction to Next Paint (INP < 200ms).
   - Cumulative Layout Shift (CLS < 0.1).
5. **Search Performance Cadence (Weekly/Monthly)**:
   - Filter queries with high impressions but low CTR (< 2%). Optimize their titles and meta descriptions with higher relevance.
   - Monitor average ranking positions for target commercial keywords (`home loan consultant in delhi`, `loan against property consultant`).
   - Identify indexation anomalies in the **Page Indexing** report.

---

## 4. Google Analytics 4 (GA4) & Conversion Tracking Framework

### Core Custom Events to Track:
- `contact_form_submit`: Triggered when an inquiry is submitted via any lead form.
- `whatsapp_click`: Triggered when the user clicks "Start Secure Chat" or floating WhatsApp button.
- `phone_click`: Triggered when a visitor clicks `tel:+919482537337`.
- `calculator_interaction`: Triggered when users recalculate Home Loan / LAP EMIs.
- `cta_click`: Triggered on primary navigation or hero action buttons.
- `lead_sheet_synced`: Background event recording successful Google Sheets synchronization.

### DataLayer Implementation Snippet:
```javascript
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX', {
  send_page_view: true,
  cookie_flags: 'SameSite=None;Secure'
});

// Example Lead Submission Event
gtag('event', 'contact_form_submit', {
  event_category: 'Lead Generation',
  loan_type: leadData.loanType,
  loan_amount: leadData.loanAmount,
  city: leadData.cityPincode
});
```

---

## 5. Google Ads & Meta Ads Tracking & Landing Page Architecture

### Dedicated Paid Campaign Landing Pages:
- `/home-loan` (Google Ads search campaigns targeting "apply home loan", "home loan rates")
- `/loan-against-property` (Google Ads search targeting "loan against commercial property", "lap low rate")
- `/home-loan-delhi` (Geo-targeted search campaigns for Delhi NCR residents)

### Canonical Handling:
Paid advertising URLs containing UTM tags or tracking parameters must always point their canonical tag to the pristine base URL:
- Request: `https://achlinks.in/home-loan?utm_source=google&utm_medium=cpc&utm_campaign=delhi_home_loan&utm_term=home+loan+consultant`
- Canonical: `https://achlinks.in/home-loan`

### Recommended UTM Taxonomy:
| Platform | Parameter | Recommended Value Format | Example |
|:---|:---|:---|:---|
| Google Ads | `utm_source` | `google` | `google` |
| Google Ads | `utm_medium` | `cpc` | `cpc` |
| Google Ads | `utm_campaign` | `[geo]_[product]_[objective]` | `delhi_homeloan_leadgen` |
| Google Ads | `utm_term` | `{keyword}` | `{keyword}` |
| Meta Ads | `utm_source` | `facebook` / `instagram` | `facebook` |
| Meta Ads | `utm_medium` | `paid_social` | `paid_social` |
| Meta Ads | `utm_campaign` | `[audience]_[product]_[placement]` | `salaried_lap_carousel` |
| Meta Ads | `utm_content` | `{{ad.name}}` | `rate_comparison_v1` |

---

## 6. Local SEO & NAP Consistency Framework

- **Legal Business Name**: Group ACH (Operating domain: `achlinks.in`)
- **Address Line**: Connaught Place / South Delhi Central Hub, New Delhi, Delhi 110001
- **Direct Advisory Hotline**: +91-94825-37337
- **Official Domain**: https://achlinks.in/
- **Google Business Profile (GBP) Recommendations**:
  1. Claim or optimize primary GBP listing as "Group ACH - Home Loan & Loan Against Property Consultant".
  2. Set category to **Mortgage Broker** (Primary) and **Loan Agency** / **Financial Consultant** (Secondary).
  3. Service areas: Delhi, Gurugram, Noida, Greater Noida, Ghaziabad, Faridabad.
  4. Weekly GBP photo updates, customer testimonial highlights, and loan eligibility Q&As.
