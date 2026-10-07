/**
 * SEO Manager for Group ACH (https://www.achlinks.in/)
 * Strictly enforces canonical URL: https://www.achlinks.in/
 * Dynamically handles document head meta tags, canonical links, OpenGraph,
 * Twitter cards, BreadcrumbList, and Schema.org structured data (JSON-LD).
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

export const BASE_URL = 'https://www.achlinks.in';

export const SITE_SEO_REGISTRY: Record<string, PageSeoConfig> = {
  // 1. Homepage
  '/': {
    title: 'Home Loan & Loan Against Property Consultant in Bangalore | Group ACH',
    description:
      'Get expert assistance for home loans, loan against property and other financing options in Bangalore. Compare suitable lenders, eligibility, documentation and repayment options with Group ACH.',
    canonicalPath: '/',
    h1: 'Home Loan & Loan Against Property Consultant in Bangalore',
    keywords:
      'home loan consultant Bangalore, home loan advisor Bangalore, home loan in Bangalore, loan against property Bangalore, property loan Bangalore, mortgage loan Bangalore, home loan eligibility Bangalore, Group ACH, achlinks',
    breadcrumbs: [{ name: 'Home', path: '/' }],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'FinancialService',
      name: 'Group ACH',
      alternateName: ['Group ACH Financial Advisory', 'ACH Links'],
      url: 'https://www.achlinks.in/',
      logo: 'https://www.achlinks.in/logo.png',
      image: 'https://www.achlinks.in/og-image.jpg',
      telephone: '+91-94825-37337',
      email: 'achgrouplink@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'PO 1102, 4th T Block East Jayanagar, 3rd Block Jayanagar',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        postalCode: '560011',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '12.9716',
        longitude: '77.5946',
      },
      areaServed: [
        { '@type': 'City', name: 'Bangalore' },
        { '@type': 'City', name: 'Bengaluru' },
      ],
      priceRange: '₹0 (Free Advisory)',
      description:
        'Independent loan advisory firm in Bangalore connecting borrowers with institutional lenders and NBFCs for home loans and loan against property.',
    },
  },

  // 2. Primary Product & City Pages
  '/home-loan': {
    title: 'Home Loan Consultant & Advisory in Bangalore | Group ACH',
    description:
      'Compare home loan options across leading partner banks and NBFCs in Bangalore. Get doorstep assistance, documentation support, and customized mortgage advice with Group ACH.',
    canonicalPath: '/home-loan',
    h1: 'Home Loan Advisory & Comparative Financing in Bangalore',
    keywords:
      'home loan Bangalore, home loan assistance, home loan rates, apply home loan, home loan consultant Bangalore, housing loan Bangalore',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Home Loan', path: '/home-loan' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Home Loan Advisory',
      provider: {
        '@type': 'FinancialService',
        name: 'Group ACH',
        url: 'https://www.achlinks.in/',
      },
      areaServed: 'Bangalore, Karnataka, India',
      serviceType: 'Mortgage Advisory',
    },
  },
  '/home-loan/bangalore': {
    title: 'Home Loan in Bangalore: Compare Bank & NBFC Options | Group ACH',
    description:
      'Looking for a home loan in Bangalore? Group ACH assists with BBMP A-Khata, B-Khata, and BDA approved properties across Whitefield, Jayanagar, Electronic City, and more.',
    canonicalPath: '/home-loan/bangalore',
    h1: 'Home Loan Solutions & Doorstep Advisory Across Bangalore',
    keywords:
      'home loan in Bangalore, home loan Bangalore, home loan Bengaluru, home loan consultant Bangalore, home loan advisor Bangalore, housing loan Bangalore',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Home Loan', path: '/home-loan' },
      { name: 'Bangalore', path: '/home-loan/bangalore' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Group ACH - Bangalore Home Loan Desk',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'PO 1102, 4th T Block East Jayanagar, 3rd Block Jayanagar',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        postalCode: '560011',
        addressCountry: 'IN',
      },
      telephone: '+91-94825-37337',
      url: 'https://www.achlinks.in/home-loan/bangalore',
      priceRange: '₹0 (Free Advisory)',
    },
  },
  '/loans-in-bangalore': {
    title: 'Loans in Bangalore | Home Loan & LAP Advisory | Group ACH',
    description:
      'Explore home loans, loan against property and other financing options in Bangalore. Get guidance on eligibility, documents, rates and lenders with Group ACH.',
    canonicalPath: '/loans-in-bangalore',
    h1: 'Loans in Bangalore - Home Loans, LAP & Financing Advisory',
    keywords:
      'loans in Bangalore, home loan Bangalore, home loan in Bangalore, loan against property Bangalore, business loan Bangalore, personal loan Bangalore, mortgage loan Bangalore, home finance Bangalore, Bengaluru loans',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Loans in Bangalore', path: '/loans-in-bangalore' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'FinancialService',
      name: 'Group ACH - Loans in Bangalore Advisory Desk',
      url: 'https://www.achlinks.in/loans-in-bangalore',
      telephone: '+91-94825-37337',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'PO 1102, 4th T Block East Jayanagar, 3rd Block Jayanagar',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        postalCode: '560011',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '12.9716',
        longitude: '77.5946',
      },
      areaServed: [
        { '@type': 'City', name: 'Bangalore' },
        { '@type': 'City', name: 'Bengaluru' },
      ],
      priceRange: '₹0 (Free Advisory)',
    },
  },
  '/home-loan/eligibility': {
    title: 'Home Loan Eligibility Criteria & Calculator | Group ACH',
    description:
      'Understand FOIR requirements, net salary multipliers, CIBIL score benchmarks, and methods to assess and improve your home loan eligibility with Group ACH.',
    canonicalPath: '/home-loan/eligibility',
    h1: 'Home Loan Eligibility Criteria: Assess Your Borrowing Capacity',
    keywords:
      'home loan eligibility, home loan eligibility Bangalore, foir calculation, salary multiplier home loan, home loan criteria',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Home Loan', path: '/home-loan' },
      { name: 'Eligibility', path: '/home-loan/eligibility' },
    ],
  },
  '/home-loan/emi-calculator': {
    title: 'Home Loan EMI Calculator: Monthly Repayment Estimator | Group ACH',
    description:
      'Calculate your monthly home loan EMI, total interest payable, and amortization schedule across different loan tenures and benchmark interest rates.',
    canonicalPath: '/home-loan/emi-calculator',
    h1: 'Interactive Home Loan EMI Calculator',
    keywords:
      'home loan emi calculator, home loan emi Bangalore, housing loan emi calculator, loan installment calculator',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Home Loan', path: '/home-loan' },
      { name: 'EMI Calculator', path: '/home-loan/emi-calculator' },
    ],
  },
  '/home-loan/documents-required': {
    title: 'Documents Required for Home Loan: Complete Checklist | Group ACH',
    description:
      'Comprehensive checklist of required KYC, income proofs, bank statements, and Bangalore property title deeds for smooth home loan processing.',
    canonicalPath: '/home-loan/documents-required',
    h1: 'Complete Checklist of Documents Required for Home Loan',
    keywords:
      'home loan documents, documents required for home loan, Bangalore property documents, home loan paperwork',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Home Loan', path: '/home-loan' },
      { name: 'Documents Required', path: '/home-loan/documents-required' },
    ],
  },
  '/home-loan/interest-rates': {
    title: 'Home Loan Interest Rates in Bangalore (2026 Comparison) | Group ACH',
    description:
      'Compare benchmark repo-linked home loan interest rates, floating spreads, and loan terms across leading Indian public, private, and housing finance companies.',
    canonicalPath: '/home-loan/interest-rates',
    h1: 'Home Loan Interest Rates in Bangalore (2026 Benchmark Guide)',
    keywords:
      'home loan interest rates Bangalore, home loan interest rates, repo linked lending rate, bank home loan rates',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Home Loan', path: '/home-loan' },
      { name: 'Interest Rates', path: '/home-loan/interest-rates' },
    ],
  },
  '/home-loan/balance-transfer': {
    title: 'Home Loan Balance Transfer: Refinance & Lower Your EMI | Group ACH',
    description:
      'Explore transferring your existing home loan to a more competitive rate. Calculate break-even periods, top-up options, and hassle-free takeover guidance.',
    canonicalPath: '/home-loan/balance-transfer',
    h1: 'Home Loan Balance Transfer Assistance & Interest Savings',
    keywords:
      'home loan balance transfer, home loan balance transfer Bangalore, switch home loan bank, lower home loan emi',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Home Loan', path: '/home-loan' },
      { name: 'Balance Transfer', path: '/home-loan/balance-transfer' },
    ],
  },

  // 3. Loan Against Property
  '/loan-against-property': {
    title: 'Loan Against Property (LAP) Advisory in Bangalore | Group ACH',
    description:
      'Unlock liquidity against residential or commercial property in Bangalore. Compare loan-to-value options, repayment tenures, and mortgage solutions with Group ACH.',
    canonicalPath: '/loan-against-property',
    h1: 'Loan Against Property (LAP) - Unlock Equity From Your Real Estate',
    keywords:
      'loan against property Bangalore, loan against property consultant, property loan, mortgage loan Bangalore, residential lap, commercial lap',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Loan Against Property', path: '/loan-against-property' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Loan Against Property Advisory',
      provider: {
        '@type': 'FinancialService',
        name: 'Group ACH',
        url: 'https://www.achlinks.in/',
      },
      areaServed: 'Bangalore, Karnataka, India',
      serviceType: 'Property Mortgage Loan',
    },
  },
  '/loan-against-property/bangalore': {
    title: 'Loan Against Property in Bangalore: Commercial & Residential | Group ACH',
    description:
      'Secured property mortgage advisory across Bangalore. Leverage commercial units, residential villas, or industrial properties with doorstep consultation.',
    canonicalPath: '/loan-against-property/bangalore',
    h1: 'Loan Against Property in Bangalore for Residential & Commercial Assets',
    keywords:
      'loan against property Bangalore, LAP loan Bangalore, loan against property consultant Bangalore, property loan Bangalore, loan against property Bengaluru',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Loan Against Property', path: '/loan-against-property' },
      { name: 'Bangalore', path: '/loan-against-property/bangalore' },
    ],
  },
  '/lap-eligibility': {
    title: 'Loan Against Property Eligibility & LTV Guidelines | Group ACH',
    description:
      'Detailed guide to property valuation criteria, Loan-to-Value (LTV) limits, debt-service coverage, and title requirements for Loan Against Property.',
    canonicalPath: '/lap-eligibility',
    h1: 'Loan Against Property Eligibility & Valuation Guidelines',
    keywords:
      'lap eligibility, loan against property eligibility, ltv criteria, mortgage loan eligibility',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Loan Against Property', path: '/loan-against-property' },
      { name: 'Eligibility', path: '/lap-eligibility' },
    ],
  },

  // 4. Business & Personal Loans
  '/business-loan': {
    title: 'Business Loan & Commercial Financing in Bangalore | Group ACH',
    description:
      'Explore MSME working capital, business expansion loans, and commercial property mortgage credit with doorstep advisory across Bangalore.',
    canonicalPath: '/business-loan',
    h1: 'Business Loan & Commercial Mortgage Financing in Bangalore',
    keywords:
      'business loan Bangalore, business loan consultant Bangalore, msme loan Bangalore, commercial property loan',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Business Loan', path: '/business-loan' },
    ],
  },
  '/personal-loan': {
    title: 'Personal Loan Advisory & Secured Financing in Bangalore | Group ACH',
    description:
      'Need immediate personal financing in Bangalore? Compare salaried personal loans and explore cost-effective property top-up loan alternatives.',
    canonicalPath: '/personal-loan',
    h1: 'Personal Loan Guidance & Financing Alternatives in Bangalore',
    keywords:
      'personal loan Bangalore, salaried loan Bangalore, personal loan advisor Bangalore, quick financing',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Personal Loan', path: '/personal-loan' },
    ],
  },
  '/loan-emi-calculator': {
    title: 'Loan EMI Calculator: Estimate Installments Online | Group ACH',
    description:
      'Interactive loan calculator to estimate monthly installments and total interest outlays for home loans, property loans, and business financing.',
    canonicalPath: '/loan-emi-calculator',
    h1: 'Comprehensive Loan EMI Calculator',
    keywords:
      'loan emi calculator, emi calculator, loan installment calculator, interest calculation',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'EMI Calculator', path: '/loan-emi-calculator' },
    ],
  },

  // 5. Trust & E-E-A-T Pages
  '/about': {
    title: 'About Group ACH: Institutional Loan Connector & Advisory',
    description:
      'Learn about Group ACH\'s mission, authorized channel partnership with 70+ financial institutions, transparent advisory, and Bangalore leadership.',
    canonicalPath: '/about',
    h1: 'About Group ACH - Transparent Loan Connecting Advisory',
    keywords: 'about group ach, ach links, authorized loan connector, group ach leadership',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
    ],
  },
  '/contact': {
    title: 'Contact Group ACH: Bangalore Home Loan Advisory Hotline',
    description:
      'Connect with Group ACH mortgage advisors in Jayanagar, Bangalore. Get doorstep consultation, WhatsApp inquiry support, and clear loan guidance.',
    canonicalPath: '/contact',
    h1: 'Contact Group ACH Loan Specialists',
    keywords: 'contact group ach, loan advisor Bangalore, home loan consultant near me, achlinks contact',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Contact Us', path: '/contact' },
    ],
  },
  '/faq': {
    title: 'Frequently Asked Questions: Home Loans & Property Loans | Group ACH',
    description:
      'Clear answers to common questions on home loan eligibility, documentation, CIBIL score requirements, interest calculations, and doorstep service.',
    canonicalPath: '/faq',
    h1: 'Frequently Asked Questions About Loans & Mortgages',
    keywords: 'home loan faqs, loan against property questions, mortgage query India',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'FAQs', path: '/faq' },
    ],
  },
  '/blogs': {
    title: 'Home Loan & Property Finance Knowledge Hub | Group ACH Blogs',
    description:
      'Educational guides, regulatory updates, borrowing strategies, and property finance insights authored by seasoned mortgage advisors at Group ACH.',
    canonicalPath: '/blogs',
    h1: 'Mortgage Insights, Rate Trends & Home Loan Guides',
    keywords: 'home loan blog, mortgage guides India, property finance articles, home loan tips',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Blogs', path: '/blogs' },
    ],
  },
  '/sitemap': {
    title: 'Website Directory & Sitemap | Group ACH',
    description:
      'Comprehensive HTML sitemap and directory of all home loan products, Bangalore services, calculators, borrower guides, and official contacts.',
    canonicalPath: '/sitemap',
    h1: 'Group ACH Website Directory & Site Index',
    keywords: 'group ach sitemap, home loan directory, property loan index',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Sitemap', path: '/sitemap' },
    ],
  },

  // 6. The 15 Requested In-Depth Guides
  '/blogs/how-to-apply-home-loan-bangalore': {
    title: 'How to Apply for a Home Loan in Bangalore: Step-by-Step Guide | Group ACH',
    description:
      'A practical step-by-step roadmap to applying for a home loan in Bangalore—from credit check and property due diligence to bank comparison and final disbursal.',
    canonicalPath: '/blogs/how-to-apply-home-loan-bangalore',
    h1: 'How to Apply for a Home Loan in Bangalore: Step-by-Step Borrower Guide',
    keywords: 'how to apply home loan bangalore, apply home loan bangalore, home loan process bangalore',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Blogs', path: '/blogs' },
      { name: 'Apply Home Loan Guide', path: '/blogs/how-to-apply-home-loan-bangalore' },
    ],
  },
  '/blogs/home-loan-eligibility-bangalore': {
    title: 'Home Loan Eligibility in Bangalore: FOIR & Salary Multipliers | Group ACH',
    description:
      'Learn how banks evaluate net monthly income, existing debt obligations (FOIR), CIBIL score, and salary multipliers to calculate your borrowing limit.',
    canonicalPath: '/blogs/home-loan-eligibility-bangalore',
    h1: 'Home Loan Eligibility in Bangalore: FOIR, Salary Multipliers & Co-Borrower Rules',
    keywords: 'home loan eligibility bangalore, calculate home loan eligibility, foir ratio',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Blogs', path: '/blogs' },
      { name: 'Eligibility Guide', path: '/blogs/home-loan-eligibility-bangalore' },
    ],
  },
  '/blogs/documents-required-for-home-loan': {
    title: 'Documents Required for a Home Loan: Complete Checklist | Group ACH',
    description:
      'Exhaustive paperwork checklist for salaried employees, business proprietors, and property title vetting to prevent sanction rejections.',
    canonicalPath: '/blogs/documents-required-for-home-loan',
    h1: 'Documents Required for a Home Loan: Salaried & Self-Employed Checklist',
    keywords: 'documents required for home loan, home loan documents, home loan papers checklist',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Blogs', path: '/blogs' },
      { name: 'Documents Checklist', path: '/blogs/documents-required-for-home-loan' },
    ],
  },
  '/blogs/how-home-loan-emi-calculated': {
    title: 'How Home Loan EMI Is Calculated: Formula & Amortization | Group ACH',
    description:
      'Understand the mathematical formula behind Equated Monthly Installments (EMI), how interest vs principal shifts over time, and tenure impacts.',
    canonicalPath: '/blogs/how-home-loan-emi-calculated',
    h1: 'How Home Loan EMI Is Calculated: Formula, Amortization & Practical Examples',
    keywords: 'how home loan emi is calculated, emi formula, loan amortization',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Blogs', path: '/blogs' },
      { name: 'EMI Calculation Guide', path: '/blogs/how-home-loan-emi-calculated' },
    ],
  },
  '/blogs/fixed-vs-floating-home-loan-interest-rates': {
    title: 'Fixed vs Floating Home Loan Interest Rates: Which Is Best? | Group ACH',
    description:
      'Comparison of fixed and floating home loan interest rates in India covering market cycles, repo rate transmission, and prepayment penalty rules.',
    canonicalPath: '/blogs/fixed-vs-floating-home-loan-interest-rates',
    h1: 'Fixed vs Floating Home Loan Interest Rates: Which Is Best for Your Mortgage?',
    keywords: 'fixed vs floating home loan interest rates, floating interest rate home loan',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Blogs', path: '/blogs' },
      { name: 'Fixed vs Floating', path: '/blogs/fixed-vs-floating-home-loan-interest-rates' },
    ],
  },
  '/blogs/home-loan-balance-transfer-guide': {
    title: 'Home Loan Balance Transfer: When Does It Make Sense? | Group ACH',
    description:
      'How transferring your ongoing home loan to a lower rate can save lakhs in interest, when to refinance, and break-even calculations.',
    canonicalPath: '/blogs/home-loan-balance-transfer-guide',
    h1: 'Home Loan Balance Transfer: When Does It Make Sense to Switch Lenders?',
    keywords: 'home loan balance transfer guide, when to transfer home loan, refinance mortgage',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Blogs', path: '/blogs' },
      { name: 'Balance Transfer Guide', path: '/blogs/home-loan-balance-transfer-guide' },
    ],
  },
  '/blogs/loan-against-property-bangalore-eligibility-documents': {
    title: 'Loan Against Property in Bangalore: Eligibility & Documents | Group ACH',
    description:
      'Complete guide to unlocking liquidity against residential, commercial, or industrial real estate in Bangalore with LTV guidelines and document lists.',
    canonicalPath: '/blogs/loan-against-property-bangalore-eligibility-documents',
    h1: 'Loan Against Property in Bangalore: Eligibility, Documents & Valuation Norms',
    keywords: 'loan against property bangalore, lap documents bangalore, property loan eligibility',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Blogs', path: '/blogs' },
      { name: 'LAP Bangalore Guide', path: '/blogs/loan-against-property-bangalore-eligibility-documents' },
    ],
  },
  '/blogs/home-loan-vs-loan-against-property': {
    title: 'Home Loan vs Loan Against Property: Key Differences | Group ACH',
    description:
      'Detailed comparison of Home Loans and LAP covering interest rate spreads, end-use restrictions, collateral rules, and income tax deductions.',
    canonicalPath: '/blogs/home-loan-vs-loan-against-property',
    h1: 'Home Loan vs Loan Against Property: Key Differences in Rates, Tenure & Tax Rules',
    keywords: 'home loan vs loan against property, difference between home loan and lap',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Blogs', path: '/blogs' },
      { name: 'Home Loan vs LAP', path: '/blogs/home-loan-vs-loan-against-property' },
    ],
  },
  '/blogs/how-cibil-score-affects-loan-eligibility': {
    title: 'How CIBIL Score Can Affect Loan Eligibility and Rates | Group ACH',
    description:
      'Learn how credit scores (300 to 900) influence loan sanction probability, interest pricing bands, and actionable steps to improve your credit report.',
    canonicalPath: '/blogs/how-cibil-score-affects-loan-eligibility',
    h1: 'How CIBIL Score Can Affect Loan Eligibility and Interest Rates in India',
    keywords: 'how cibil score affects loan eligibility, cibil score for home loan, minimum cibil for loan',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Blogs', path: '/blogs' },
      { name: 'CIBIL Score Guide', path: '/blogs/how-cibil-score-affects-loan-eligibility' },
    ],
  },
  '/blogs/home-loan-for-self-employed-applicants': {
    title: 'Home Loan for Self-Employed Applicants: ITR & Surrogates | Group ACH',
    description:
      'How business proprietors, traders, and consultants can qualify for substantial home loans using banking surrogates, GST turnover, and depreciation add-backs.',
    canonicalPath: '/blogs/home-loan-for-self-employed-applicants',
    h1: 'Home Loan for Self-Employed Applicants: Approvals, ITR & Banking Surrogates',
    keywords: 'home loan for self-employed applicants, self employed mortgage, banking surrogate loan',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Blogs', path: '/blogs' },
      { name: 'Self-Employed Home Loan', path: '/blogs/home-loan-for-self-employed-applicants' },
    ],
  },
  '/blogs/home-loan-for-salaried-employees': {
    title: 'Home Loan for Salaried Employees: Benefits & Guidelines | Group ACH',
    description:
      'Guidance for salaried professionals in IT, MNCs, and government sectors on securing preferential rates, step-up EMIs, and fast digital sanctions.',
    canonicalPath: '/blogs/home-loan-for-salaried-employees',
    h1: 'Home Loan for Salaried Employees: Benefits, Documentation & Corporate Discounts',
    keywords: 'home loan for salaried employees, corporate home loan, salaried applicant mortgage',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Blogs', path: '/blogs' },
      { name: 'Salaried Home Loan', path: '/blogs/home-loan-for-salaried-employees' },
    ],
  },
  '/blogs/how-much-home-loan-can-i-afford': {
    title: 'How Much Home Loan Can I Afford? Practical Budgeting Guide | Group ACH',
    description:
      'Calculate your realistic home purchase budget factoring in down payment reserves, registration charges, interior fit-outs, and emergency buffers.',
    canonicalPath: '/blogs/how-much-home-loan-can-i-afford',
    h1: 'How Much Home Loan Can I Afford? A Practical Guide to Budgeting & Down Payments',
    keywords: 'how much home loan can i afford, home affordability calculator, home buying budget',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Blogs', path: '/blogs' },
      { name: 'Affordability Guide', path: '/blogs/how-much-home-loan-can-i-afford' },
    ],
  },
  '/blogs/home-loan-processing-step-by-step': {
    title: 'Home Loan Processing: Step-by-Step From Login to Disbursal | Group ACH',
    description:
      'Detailed overview of the 6 core stages of loan processing: credit appraisal, legal title search, property valuation, sanction letter, and disbursal.',
    canonicalPath: '/blogs/home-loan-processing-step-by-step',
    h1: 'Home Loan Processing: Step-by-Step Guide From Application to Account Disbursal',
    keywords: 'home loan processing step-by-step, loan disbursal stages, mortgage underwriting steps',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Blogs', path: '/blogs' },
      { name: 'Processing Guide', path: '/blogs/home-loan-processing-step-by-step' },
    ],
  },
  '/blogs/common-reasons-for-home-loan-rejection': {
    title: 'Common Reasons for Home Loan Rejection & Solutions | Group ACH',
    description:
      'Discover the most frequent triggers for mortgage application rejection and proven strategies to rectify issues before reapplying.',
    canonicalPath: '/blogs/common-reasons-for-home-loan-rejection',
    h1: 'Common Reasons for Home Loan Rejection & How to Overcome Them in India',
    keywords: 'common reasons for home loan rejection, why home loan rejected, overcome loan rejection',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Blogs', path: '/blogs' },
      { name: 'Rejection Reasons', path: '/blogs/common-reasons-for-home-loan-rejection' },
    ],
  },
  '/blogs/home-loan-prepayment-what-to-consider': {
    title: 'Home Loan Prepayment: What to Consider & Savings Math | Group ACH',
    description:
      'Should you prepay your home loan early or invest surplus funds? Analyze interest savings, tax trade-offs, and part-prepayment strategies.',
    canonicalPath: '/blogs/home-loan-prepayment-what-to-consider',
    h1: 'Home Loan Prepayment: What to Consider, Savings Math & Part-Payment Rules',
    keywords: 'home loan prepayment, part prepayment home loan, home loan pre closure',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Blogs', path: '/blogs' },
      { name: 'Prepayment Guide', path: '/blogs/home-loan-prepayment-what-to-consider' },
    ],
  },
};

// Aliases mapping for clean routing consolidation
export const ROUTE_ALIASES: Record<string, string> = {
  '/home-loan-bangalore': '/home-loan/bangalore',
  '/home-loan-bengaluru': '/home-loan/bangalore',
  '/bengaluru': '/home-loan/bangalore',
  '/bangalore': '/home-loan/bangalore',
  '/home-loan-consultant': '/home-loan',
  '/home-loan-advisor': '/home-loan',
  '/home-loan-eligibility': '/home-loan/eligibility',
  '/home-loan-documents': '/home-loan/documents-required',
  '/home-loan-balance-transfer': '/home-loan/balance-transfer',
  '/home-loan-for-salaried': '/blogs/home-loan-for-salaried-employees',
  '/home-loan-for-self-employed': '/blogs/home-loan-for-self-employed-applicants',
  '/loan-against-property-bangalore': '/loan-against-property/bangalore',
  '/loan-against-property-bengaluru': '/loan-against-property/bangalore',
  '/loan-against-property-consultant': '/loan-against-property',
  '/property-loan': '/loan-against-property',
  '/mortgage-loan': '/loan-against-property',
  '/blog': '/blogs',
  '/loans-in-bengaluru': '/loans-in-bangalore',
  '/loans-bangalore': '/loans-in-bangalore',
  '/bangalore-loans': '/loans-in-bangalore',
  '/loans-in-banglore': '/loans-in-bangalore',
  // Blog aliases
  '/blog/home-loan-eligibility-criteria-guide': '/blogs/home-loan-eligibility-bangalore',
  '/blog/complete-documents-checklist-home-loan': '/blogs/documents-required-for-home-loan',
  '/blog/loan-against-property-vs-home-loan-differences': '/blogs/home-loan-vs-loan-against-property',
  '/blog/home-loan-balance-transfer-savings-calculator': '/blogs/home-loan-balance-transfer-guide',
  '/blog/self-employed-home-loan-income-proof-guide': '/blogs/home-loan-for-self-employed-applicants',
};

/**
 * Apply SEO metadata and JSON-LD schema dynamically to document head
 */
export function applyPageSeo(path: string, customConfig?: Partial<PageSeoConfig>): PageSeoConfig {
  const cleanPath = path.toLowerCase().replace(/\/$/, '') || '/';
  const targetPath = ROUTE_ALIASES[cleanPath] || cleanPath;
  const matched = SITE_SEO_REGISTRY[targetPath] || SITE_SEO_REGISTRY['/'];
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

  // Meta Robots
  let robotsMeta = document.querySelector('meta[name="robots"]');
  if (!robotsMeta) {
    robotsMeta = document.createElement('meta');
    robotsMeta.setAttribute('name', 'robots');
    document.head.appendChild(robotsMeta);
  }
  const isInternal = cleanPath === '/seo-manager' || cleanPath === '/seo' || cleanPath === '/serp';
  if (isInternal) {
    robotsMeta.setAttribute('content', 'noindex, nofollow');
  } else {
    robotsMeta.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
  }

  // Canonical Link: strictly https://www.achlinks.in/...
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  const canonicalUrl = `${BASE_URL}${config.canonicalPath}`;
  canonicalLink.setAttribute('href', canonicalUrl);

  // Open Graph Tags
  const setOg = (property: string, content: string) => {
    let el = document.querySelector(`meta[property="${property}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('property', property);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };
  setOg('og:title', config.ogTitle || config.title);
  setOg('og:description', config.ogDescription || config.description);
  setOg('og:url', canonicalUrl);
  setOg('og:site_name', 'Group ACH');
  setOg('og:type', config.canonicalPath.startsWith('/blogs/') ? 'article' : 'website');
  setOg('og:image', config.ogImage || `${BASE_URL}/og-image.jpg`);

  // Twitter Cards
  const setTwitter = (name: string, content: string) => {
    let el = document.querySelector(`meta[name="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('name', name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };
  setTwitter('twitter:card', 'summary_large_image');
  setTwitter('twitter:title', config.title);
  setTwitter('twitter:description', config.description);
  setTwitter('twitter:image', config.ogImage || `${BASE_URL}/og-image.jpg`);

  // Inject BreadcrumbList & Schema.org JSON-LD
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

  const graphElements = [
    ...(breadcrumbsSchema ? [breadcrumbsSchema] : []),
    ...(config.schema ? [config.schema] : []),
  ];

  if (graphElements.length > 0) {
    dynamicScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': graphElements,
    });
  }

  return config;
}
