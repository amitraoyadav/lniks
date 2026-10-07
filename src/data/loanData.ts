import { BankPartner, LoanProduct } from '../types';

export const BRAND_CONFIG = {
  name: 'Group ACH',
  tagline: 'Expert Home Loan & Property Loan Advisors',
  domain: 'www.achlinks.in',
  domainUrl: 'https://www.achlinks.in',
  phone: '+91 94825 37337',
  phoneClean: '+919482537337',
  whatsappNumber: '+91 94825 37337',
  whatsappRaw: '919482537337',
  email: 'achgrouplink@gmail.com',
  address: 'PO 1102, 4th T Block East Jayanagar, 3rd Block Jayanagar Bengaluru 560011',
  terms: 'Nil',
  termsDescription: 'Terms & Conditions: Nil. 100% free loan comparison and advisory with zero borrower fees.',
  workingHours: 'Mon–Sat · 9:30 AM – 7:00 PM IST',
  panIndiaStatement: 'Head Office: PO 1102, 4th T Block East Jayanagar, 3rd Block Jayanagar Bangalore 560011. Dedicated doorstep loan consultation and bank processing across all Bangalore localities.',
  legalDisclaimer:
    'Group ACH is an independent loan channel partner/connector and is not a bank or financial institution. We facilitate connections with multiple registered banks and financial institutions. Loan approval, interest rates, eligibility, processing fees and other terms are subject to the respective lender\'s policies, assessment and approval. Terms & Conditions for advisory: Nil.',
};

export const PARTNER_BANKS: BankPartner[] = [
  {
    name: 'State Bank of India',
    category: 'Public Bank',
    homeLoanRate: '8.40% onwards',
    lapRate: '9.35% onwards',
    maxTenure: 'Up to 30 Yrs',
    popularFor: 'Lowest overall interest & zero prepayment penalties',
  },
  {
    name: 'HDFC Bank',
    category: 'Private Bank',
    homeLoanRate: '8.45% onwards',
    lapRate: '9.40% onwards',
    maxTenure: 'Up to 30 Yrs',
    popularFor: 'Lightning fast sanctions & flexible repayment structures',
  },
  {
    name: 'ICICI Bank',
    category: 'Private Bank',
    homeLoanRate: '8.50% onwards',
    lapRate: '9.50% onwards',
    maxTenure: 'Up to 30 Yrs',
    popularFor: 'Instant digital pre-approvals & pre-approved builder projects',
  },
  {
    name: 'Axis Bank',
    category: 'Private Bank',
    homeLoanRate: '8.55% onwards',
    lapRate: '9.60% onwards',
    maxTenure: 'Up to 30 Yrs',
    popularFor: '12 EMI waiver schemes & high LTV property funding',
  },
  {
    name: 'Kotak Mahindra Bank',
    category: 'Private Bank',
    homeLoanRate: '8.45% onwards',
    lapRate: '9.35% onwards',
    maxTenure: 'Up to 25 Yrs',
    popularFor: 'Best balance transfer rates & special women borrower pricing',
  },
  {
    name: 'Bank of Baroda',
    category: 'Public Bank',
    homeLoanRate: '8.40% onwards',
    lapRate: '9.30% onwards',
    maxTenure: 'Up to 30 Yrs',
    popularFor: 'Baroda Home Loan Advantage (Overdraft facility linked)',
  },
  {
    name: 'PNB Housing Finance',
    category: 'Housing Finance Co',
    homeLoanRate: '8.60% onwards',
    lapRate: '9.75% onwards',
    maxTenure: 'Up to 30 Yrs',
    popularFor: 'Self-employed profile flexibility & customized tenure',
  },
  {
    name: 'Tata Capital',
    category: 'NBFC',
    homeLoanRate: '8.65% onwards',
    lapRate: '9.65% onwards',
    maxTenure: 'Up to 20 Yrs',
    popularFor: 'High-ticket LAP for business expansion with easy paperwork',
  },
  {
    name: 'Bajaj Finserv',
    category: 'NBFC',
    homeLoanRate: '8.60% onwards',
    lapRate: '9.50% onwards',
    maxTenure: 'Up to 25 Yrs',
    popularFor: 'Flexi-Hybrid hybrid credit line on property mortgage',
  },
  {
    name: 'Aditya Birla Capital',
    category: 'NBFC',
    homeLoanRate: '8.70% onwards',
    lapRate: '9.80% onwards',
    maxTenure: 'Up to 20 Yrs',
    popularFor: 'Commercial property LAP & debt consolidation',
  },
  {
    name: 'LIC Housing Finance',
    category: 'Housing Finance Co',
    homeLoanRate: '8.50% onwards',
    lapRate: '9.60% onwards',
    maxTenure: 'Up to 30 Yrs',
    popularFor: 'Panchayat & semi-urban property approval acceptance',
  },
  {
    name: 'Godrej Housing Finance',
    category: 'Housing Finance Co',
    homeLoanRate: '8.55% onwards',
    lapRate: '9.70% onwards',
    maxTenure: 'Up to 30 Yrs',
    popularFor: 'Smooth digital process & balance transfer top-ups',
  },
];

export const PRODUCTS_DATA: LoanProduct[] = [
  {
    id: 'home-loan',
    title: 'Home Loans',
    type: 'home_loan',
    tagline: 'Your dream home made effortless with competitive rates & comprehensive funding support.',
    interestRateStarting: '8.35% p.a.',
    maxTenureYears: 30,
    maxLtv: 'Up to 90% of Agreement Value',
    description:
      'Whether you are purchasing a new ready-to-move apartment, constructing an independent villa, or transferring an existing high-cost home loan for lower EMIs, Group ACH connects you with leading partner banks and NBFCs for competitive rate options and streamlined processing.',
    variants: [
      {
        title: 'New Home Purchase Loan',
        description: 'For buying under-construction or ready-to-move flats, villas, and row houses from approved builders or resale owners.',
      },
      {
        title: 'Home Construction Loan',
        description: 'Staged disbursal loan tailored specifically for constructing a house on your owned freehold plot.',
      },
      {
        title: 'Home Loan Balance Transfer (HLBT)',
        description: 'Switch your ongoing home loan from high interest rates (9.5%+) to starting 8.35% with an instant top-up loan option.',
      },
      {
        title: 'Composite Loan (Plot + Construction)',
        description: 'Single comprehensive loan sanction covering both residential land acquisition and subsequent house construction.',
      },
      {
        title: 'Home Improvement & Renovation Loan',
        description: 'Fund interior redesign, structural expansion, or modular furnishing with convenient extended tenure.',
      },
    ],
    keyBenefits: [
      'Interest rates starting from 8.35% p.a. from premier Indian banks',
      'Long tenure up to 30 years for affordable, stress-free EMIs',
      'High Loan-to-Value (LTV) up to 90% for properties up to ₹30 Lakhs (80% for higher ticket sizes)',
      'Tax deduction benefits up to ₹1.5 Lakhs (Sec 80C) & up to ₹2 Lakhs (Sec 24b)',
      'Doorstep document pickup and complete multi-bank representation by your Group ACH advisor',
      'Zero advisory charges to borrower',
    ],
    eligibility: [
      'Resident Indians & Non-Resident Indians (NRIs)',
      'Age: 21 years to 65 years (at time of loan maturity)',
      'Employment: Salaried (min 1-2 years experience) or Self-Employed / Professional (min 2 years vintage)',
      'Minimum Net Monthly Income: ₹25,000 / month',
      'Preferred Credit Score (CIBIL): 700+ for best interest rate tiers',
    ],
    documentsRequired: {
      salaried: [
        'PAN Card, Aadhaar Card, Passport / Voter ID',
        'Last 3 months salary slips with company seal',
        'Last 6 months salary bank account statement',
        'Form 16 (last 2 assessment years) / Latest ITR',
        'Property documents: Allotment letter, sale agreement draft, builder payment receipts',
      ],
      selfEmployed: [
        'PAN Card, Aadhaar Card, Business KYC (GST registration, Shop Act)',
        'Last 3 years audited financial statements (P&L and Balance Sheet)',
        'Last 2-3 years Income Tax Returns with computation sheet',
        'Last 12 months current & savings bank account statements',
        'Title deeds, sanctioned building plan, encumbrance certificate (EC)',
      ],
    },
  },
  {
    id: 'loan-against-property',
    title: 'Loan Against Property (LAP)',
    type: 'loan_against_property',
    tagline: 'Unlock maximum liquidity from your residential, commercial, or industrial asset.',
    interestRateStarting: '9.25% p.a.',
    maxTenureYears: 20,
    maxLtv: 'Up to 70% of Property Market Value',
    description:
      'Loan Against Property (Mortgage Loan) is the smartest route to secure substantial funding for working capital, business expansion, debt consolidation, medical emergency, or family milestones at significantly lower interest rates than unsecured business or personal loans.',
    variants: [
      {
        title: 'Residential Property Mortgage',
        description: 'Pledge self-occupied, vacant, or rented residential houses, apartments, and villas for substantial capital.',
      },
      {
        title: 'Commercial Property LAP',
        description: 'Borrow against commercial offices, retail shops, showrooms, or doctor clinics with flexible repayment structures.',
      },
      {
        title: 'Industrial & Warehouse Property Funding',
        description: 'Mortgage approved industrial sheds, factories, and logistics warehouses for operational scaling.',
      },
      {
        title: 'LAP Balance Transfer & High Top-Up',
        description: 'Refinance existing high-rate property mortgage with another bank and unlock supplementary capital at lower cost.',
      },
      {
        title: 'Lease Rental Discounting (LRD)',
        description: 'Raise capital based on the discounted present value of rental cash flows from premier corporate tenants.',
      },
    ],
    keyBenefits: [
      'Substantial loan sanctions from ₹20 Lakhs up to ₹25+ Crores',
      'Interest rates much lower than personal loans (starting 9.25% vs 14-20% for unsecured loans)',
      'Comfortable tenure up to 15 to 20 years enabling manageable cash outflows',
      'Zero end-use restrictions — utilize for business growth, inventory, machinery, or private needs',
      'Overdraft (OD) / Drop-line Flexi facility options to pay interest only on utilized funds',
      'Retain complete ownership and usage rights of your pledged property',
    ],
    eligibility: [
      'Salaried individuals, Self-employed professionals (Doctors, CAs, Architects), and Business Proprietors / Pvt Ltd',
      'Property owners with clear, marketable title free from disputes',
      'Minimum business vintage: 2–3 years for self-employed entities',
      'Clear property approval from municipal corporation or urban development authority',
      'CIBIL score 675+ accepted, with tailored NBFC pathways for nuanced profiles',
    ],
    documentsRequired: {
      salaried: [
        'KYC: PAN, Aadhaar, address proof',
        'Last 6 months salary account bank statements',
        'Last 3 months salary slips & latest Form 16',
        'Complete property chain of title documents, registered sale deed, parent deeds, approved plan',
      ],
      selfEmployed: [
        'Business entity proof: Certificate of Incorporation, Partnership Deed, GST Returns',
        'Last 3 years audited balance sheet & P&L statements with Tax Audit reports',
        'Last 12 months primary banking statements (current + operational accounts)',
        'Registered Title Deed, Mutation / Khata certificate, Property Tax paid receipts, Encumbrance Certificate (13–30 yrs)',
      ],
    },
  },
];

export const TRUST_PILLARS = [
  {
    title: 'Leading Banks & NBFCs',
    highlight: 'Comprehensive Network',
    description: 'We match your specific income and property profile to the exact lending institution suited to your profile.',
  },
  {
    title: 'Door-Step Document Service',
    highlight: 'Zero Branch Hassle',
    description: 'Our dedicated loan advisors collect your paperwork from your home or office and manage all bank liaison end-to-end.',
  },
  {
    title: 'Optimized Eligibility & LTV',
    highlight: 'Structured Assessment',
    description: 'We structure co-applicants, rental income, and business financials to help you understand your maximum permissible borrowing capacity.',
  },
  {
    title: 'Transparent Advisory Process',
    highlight: 'Secure Consultation',
    description: 'No hidden charges or surprise deductions. We help you compare processing fees and ROI directly across lenders.',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Instant Profile Assessment',
    description: 'Share your loan requirement via our quick form or Secured Line Chat. Your dedicated Group ACH advisor evaluates income, CIBIL, and property eligibility.',
  },
  {
    step: '02',
    title: 'Doorstep Paperwork Pickup',
    description: 'We organize and verify your document checklist at your doorstep, eliminating repetitive visits to multiple bank branches.',
  },
  {
    step: '03',
    title: 'Multi-Bank Negotiation',
    description: 'We present your application across our partner banking network to evaluate competitive interest rates and suitable loan terms.',
  },
  {
    step: '04',
    title: 'Sanction & Disbursement',
    description: 'Receive your formal sanction letter within standard processing timelines, followed by legal/technical clearance and loan disbursement.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Rajesh & Priyanka Sharma',
    role: 'IT Enterprise Director & Senior Architect',
    location: 'Whitefield, Bangalore',
    loanType: 'Home Loan Balance Transfer + Top Up',
    amount: '₹1.45 Crore',
    savings: 'Saved ₹11,200 monthly EMI',
    quote:
      'We were paying 9.65% with our earlier private lender. Group ACH advisor assigned to us analyzed our portfolio, handled all paperwork at our home, and shifted us to SBI at 8.40% with a ₹25 Lakh top-up for interiors. The entire transition was seamlessly executed without us stepping into a bank branch.',
  },
  {
    name: 'Anand K. Mehra',
    role: 'Managing Director, Precision Tech Components',
    location: 'Indiranagar, Bangalore',
    loanType: 'Loan Against Commercial Property',
    amount: '₹3.20 Crore',
    savings: 'Disbursed in 6 working days',
    quote:
      'We needed urgent business liquidity to finance a high-volume export order. Standard bank branches quoted 45 days. Group ACH structured our commercial showroom mortgage with a leading NBFC at 9.35% with an Overdraft facility. Their direct banking relationships made all the difference.',
  },
  {
    name: 'Dr. Sunita V. Rao',
    role: 'Senior Consultant Surgeon',
    location: 'Koramangala, Bangalore',
    loanType: 'New Luxury Villa Home Loan',
    amount: '₹2.10 Crore',
    savings: 'Zero processing fee negotiated',
    quote:
      'Given my demanding hospital shifts, I had zero bandwidth to visit banks. Group ACH managed everything from legal vetting of builder documents to coordinating bank valuation officers. Transparent, responsive on Secured Line Chat at any hour, and truly professional.',
  },
];

export const FAQ_LIST = [
  {
    q: 'How does Group ACH help me get a better loan rate than applying directly at a bank?',
    a: 'When you apply directly at a single bank branch, you are limited to their fixed internal rate card and strict single-lender risk parameters. Group ACH operates as an authorized loan channel partner connected to leading public, private banks and NBFCs. We help you navigate priority processing channels, evaluate rate options, and review documentation norms across institutions.',
  },
  {
    q: 'Does Group ACH charge any upfront service fees to borrowers?',
    a: 'No. Group ACH does not charge any upfront consulting or service fees to loan applicants. As an authorized institutional channel partner, our services to borrowers are completely free of charge. You only pay standard, transparent bank processing fees and statutory stamp duty directly to the lending institution upon sanction.',
  },
  {
    q: 'What is the key difference between a Home Loan and a Loan Against Property (LAP)?',
    a: 'A Home Loan is specifically taken to purchase, construct, or renovate a residential dwelling, with strict fund end-use rules and income tax deductions under Section 80C and Section 24b. In contrast, Loan Against Property (LAP) allows you to mortgage an already owned residential or commercial property to raise unrestricted liquidity for business working capital, personal milestones, debt consolidation, or emergency funding.',
  },
  {
    q: 'What is the minimum CIBIL score required for approval?',
    a: 'A credit score of 750 and above unlocks the best tier-1 interest rates from premier banks like SBI, HDFC, and Kotak. However, if your CIBIL score is between 650 and 749, Group ACH works with specialized partner NBFCs and housing finance companies that evaluate your banking cash flow and asset strength to approve loans that traditional branch managers might reject.',
  },
  {
    q: 'How much loan can I get on my property (LTV)?',
    a: 'For Home Loans, banks can fund up to 90% of agreement value for properties up to ₹30 Lakhs, and up to 75% to 80% for higher value properties. For Loan Against Property (LAP), lending institutions usually sanction between 50% to 70% of the independent market valuation report for residential property, and 50% to 65% for commercial premises.',
  },
  {
    q: 'Can I do a balance transfer of my existing loan to lower my EMI?',
    a: 'Yes! If you took a Home Loan or LAP 1–3 years ago at a higher interest rate (e.g. 9.5% or above), a Balance Transfer can save you tens of lakhs in lifetime interest. We calculate your exact break-even period, handle the foreclosure letter coordination from your existing lender, and secure an additional top-up loan at low rates if you need extra funds.',
  },
  {
    q: 'How fast can I get loan sanction through Group ACH?',
    a: 'With complete initial documentation, initial digital sanction/in-principle approval is obtained within 24 to 48 hours. Final legal and technical valuation clearance and physical sanction letter are typically issued within 3 to 7 working days.',
  },
];
