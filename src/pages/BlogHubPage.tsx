import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Calendar,
  User,
  ArrowRight,
  Search,
  Tag,
  Home,
  Clock,
  CheckCircle2,
  Phone,
  MessageSquare,
} from 'lucide-react';
import { buildWhatsAppLink } from '../utils/loanCalculators';

export interface BlogPost {
  slug: string;
  aliases?: string[];
  title: string;
  category: string;
  date: string;
  dateIso?: string;
  readTime: string;
  author: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'how-to-apply-home-loan-bangalore',
    title: 'How to Apply for a Home Loan in Bangalore: Step-by-Step Borrower Guide',
    category: 'Home Loan Process',
    date: 'April 05, 2026',
    dateIso: '2026-04-05',
    readTime: '7 min read',
    author: 'Group ACH Mortgage Advisory Desk',
    summary:
      'A practical step-by-step roadmap to applying for a home loan in Bangalore—from credit check and property due diligence to bank comparison and final disbursal.',
    keyTakeaways: [
      'Check credit history and resolve outstanding unsecured debts before applying.',
      'Organize Bangalore-specific property papers including BBMP Khata, Kaveri EC, and parent deeds.',
      'Compare quotes from at least 3 institutions across public, private, and HFC sectors.',
      'Working with an independent loan connector eliminates multiple branch runs and streamlines valuation.',
    ],
    content: [
      'Applying for a home loan in Bangalore involves navigating both lender credit underwriting and municipal real estate documentation. Understanding the sequential process prevents avoidable delays and unexpected fee surprises.',
      'Step 1: Financial Self-Assessment & Credit Review. Check your credit score across CIBIL, Experian, or CRIF. A score of 750 or higher positions you for benchmark repo-linked interest rates. Evaluate your existing monthly liabilities to ensure your Fixed Obligation to Income Ratio (FOIR) stays under 50% to 60%.',
      'Step 2: Property Document Verification in Bangalore. Ensure the builder or resale seller has BBMP A-Khata (or verified DC conversion), BDA approvals, Form 15 Non-Encumbrance Certificate from Kaveri portal for at least 15 to 30 continuous years, and sanctioned architectural layout blueprints.',
      'Step 3: Multi-Lender Rate & Spread Comparison. Do not settle for a single bank branch walk-in quote. Public lenders typically provide lower benchmark spreads, while private banks and housing finance companies offer faster turnaround and flexible surrogate underwriting.',
      'Step 4: Application Submission, Valuation & Disbursal. Once KYC and income dossiers are submitted, the lender initiates legal title search and technical valuation. Upon sanction letter acceptance and stamp duty execution, funds are disbursed directly to the seller or developer in stages.',
    ],
  },
  {
    slug: 'home-loan-eligibility-bangalore',
    aliases: ['home-loan-eligibility-criteria-guide'],
    title: 'Home Loan Eligibility in Bangalore: FOIR, Salary Multipliers & Co-Borrower Rules',
    category: 'Eligibility',
    date: 'March 28, 2026',
    dateIso: '2026-03-28',
    readTime: '6 min read',
    author: 'Amit Yadav (Bangalore Credit Desk Head)',
    summary:
      'Learn how banks evaluate net monthly income, existing debt obligations (FOIR), CIBIL score, and salary multipliers to calculate your borrowing limit.',
    keyTakeaways: [
      'Lenders generally cap debt service (FOIR) at 50% to 65% of net monthly take-home income.',
      'Standard salary multiplier for a 20 to 30-year loan is approximately 55 to 65 times net monthly pay.',
      'Adding an earning co-applicant (spouse, parent) enhances joint loan sanction potential.',
      'Pre-closing high-interest credit card lines directly frees up eligible monthly EMI capacity.',
    ],
    content: [
      'Borrowing eligibility determines how much capital lending institutions will advance against your selected property. Understanding how credit underwriters calculate repayment capacity helps you structure your file effectively.',
      'Fixed Obligation to Income Ratio (FOIR): FOIR is the percentage of your take-home monthly salary committed to existing EMIs. For example, on a net monthly salary of ₹1,50,000 with ₹20,000 in existing vehicle EMIs, a 60% allowable FOIR provides up to ₹70,000 in available EMI capacity for your new mortgage.',
      'The Net Salary Multiplier: For standard long-tenure home loans, lenders typically offer sanctions roughly equal to 55 to 60 times your verifiable monthly income. Borrowers earning ₹1,20,000 monthly can anticipate indicative sanctions between ₹65 Lakhs and ₹75 Lakhs, subject to credit checks.',
      'Enhancing Your Borrowing Power: If your independent income falls short of your target property price, adding a working spouse or co-owner as co-borrower combines incomes, significantly increasing joint eligibility while providing tax benefits under Section 24(b) and 80C.',
    ],
  },
  {
    slug: 'documents-required-for-home-loan',
    aliases: ['complete-documents-checklist-home-loan'],
    title: 'Documents Required for a Home Loan: Salaried & Self-Employed Checklist',
    category: 'Documentation',
    date: 'March 20, 2026',
    dateIso: '2026-03-20',
    readTime: '6 min read',
    author: 'Group ACH Credit Underwriting Desk',
    summary:
      'Exhaustive paperwork checklist for salaried employees, business proprietors, and property title vetting to prevent sanction rejections.',
    keyTakeaways: [
      'Salaried applicants need 3 months payslips, 6 months bank statements, and 2 years Form 16 / ITR.',
      'Self-employed applicants require 3 years audited ITR with CA computations and 12 months primary banking.',
      'Bangalore properties require registered sale deed chain, Kaveri Form 15 EC, and BBMP Khata certificate.',
      'Discrepancies between salary slips and bank credit entries are a leading cause of underwriting delays.',
    ],
    content: [
      'Incomplete documentation dossiers cause most underwriting delays. Having verified copies of identity, income proofs, and property title documents ready ensures swift processing.',
      'Salaried Borrower Dossier: Valid KYC (PAN and Aadhaar), last 3 months salary slips bearing corporate seal or digital authentication, last 6 months operative salary account statements, Form 16 for the past 2 assessment years, and employment confirmation letter.',
      'Self-Employed & MSME Dossier: Business identity proof (GST registration, Partnership Deed, Certificate of Incorporation), audited P&L statements and balance sheets for 3 financial years, income computation sheets, and 12 months current account statements.',
      'Property Legal Chain: Registered agreement for sale, unbroken 30-year chain of title deeds (parent/mother deeds), latest BBMP A-Khata certificate with property tax paid receipt, Kaveri 2.0 digital Encumbrance Certificate, and approved building layout blueprint.',
    ],
  },
  {
    slug: 'how-home-loan-emi-calculated',
    title: 'How Home Loan EMI Is Calculated: Formula, Amortization & Practical Examples',
    category: 'Financial Planning',
    date: 'April 02, 2026',
    dateIso: '2026-04-02',
    readTime: '5 min read',
    author: 'Financial Advisory Desk',
    summary:
      'Understand the mathematical formula behind Equated Monthly Installments (EMI), how interest vs principal shifts over time, and tenure impacts.',
    keyTakeaways: [
      'EMI formula: [P × R × (1+R)^N] / [(1+R)^N - 1], where R is monthly interest rate.',
      'Early loan years are heavily interest-weighted; principal repayment accelerates later.',
      'Extending loan tenure reduces monthly installment but significantly increases total lifetime interest.',
      'Interactive EMI calculators allow you to model rate fluctuations and tenure scenarios.',
    ],
    content: [
      'Equated Monthly Installment (EMI) is the fixed monthly repayment amount comprising both interest and principal components. In the early stages of a 20 or 30-year home loan, up to 70% to 80% of each EMI goes toward servicing interest.',
      'The EMI Formula: EMI = [P × R × (1+R)^N] / [(1+R)^N - 1]. Here, P is the principal loan amount, R is the monthly interest rate (annual interest divided by 12 and then 100), and N is the total number of months in the loan tenure.',
      'Understanding Amortization: As you make payments month after month, the outstanding principal decreases, causing subsequent monthly interest charges to decrease and allowing a larger proportion of your installment to retire the principal debt.',
      'Tenure Trade-Off: A ₹50 Lakh loan at 8.5% over 20 years results in an EMI of ~₹43,391 with total interest of ~₹54.1 Lakhs. Extending the tenure to 30 years lowers the EMI to ~₹38,446, but increases total lifetime interest to ~₹88.4 Lakhs.',
    ],
  },
  {
    slug: 'fixed-vs-floating-home-loan-interest-rates',
    title: 'Fixed vs Floating Home Loan Interest Rates: Which Is Best for Your Mortgage?',
    category: 'Interest Rates',
    date: 'March 25, 2026',
    dateIso: '2026-03-25',
    readTime: '6 min read',
    author: 'Mortgage Advisory Desk',
    summary:
      'Comparison of fixed and floating home loan interest rates in India covering market cycles, repo rate transmission, and prepayment penalty rules.',
    keyTakeaways: [
      'Floating interest rates are linked to external benchmarks (Repo Rate) and adjust automatically.',
      'Under RBI rules, individual borrowers on floating rate loans pay 0% foreclosure or prepayment penalties.',
      'Fixed rate loans carry a premium of 1.5% to 2.5% over floating rates and may restrict pre-closure.',
      'Over 90% of retail home loans in India are sanctioned under floating benchmark regimes.',
    ],
    content: [
      'Choosing between fixed and floating interest rate structures is a fundamental decision when structuring your mortgage financing.',
      'Floating Rate Mechanics: Since October 2019, RBI mandates that all floating retail home loans from commercial banks be pegged to an External Benchmark Lending Rate (EBLR), predominantly the RBI Repo Rate. When the central bank revises policy rates, your lending rate adjusts proportionally.',
      'Prepayment Freedom: A decisive advantage of floating rate loans is the mandatory waiver of foreclosure charges for individual borrowers. You can make lump-sum prepayments or balance transfers without penalty fees.',
      'When Do Fixed Rates Make Sense? Fixed rate loans provide budget certainty when interest rates are at historical cyclical bottoms. However, true fixed loans across the entire 20-year span are rare in India; most represent hybrid reset products that revert to floating after 2 to 5 years.',
    ],
  },
  {
    slug: 'home-loan-balance-transfer-guide',
    aliases: ['home-loan-balance-transfer-savings-calculator'],
    title: 'Home Loan Balance Transfer: When Does It Make Sense to Switch Lenders?',
    category: 'Loan Transfer',
    date: 'March 15, 2026',
    dateIso: '2026-03-15',
    readTime: '6 min read',
    author: 'Refinancing Desk',
    summary:
      'How transferring your ongoing home loan to a lower rate can save lakhs in interest, when to refinance, and break-even calculations.',
    keyTakeaways: [
      'Refinancing makes financial sense if the interest rate differential is at least 0.40% to 0.75%.',
      'Calculate the break-even period: total switching fees divided by monthly EMI savings.',
      'Zero foreclosure fees apply on existing floating rate home loans for individual borrowers.',
      'Balance transfer allows you to unlock high-value top-up equity loans at prime mortgage rates.',
    ],
    content: [
      'Borrowers who secured home loans years ago may be paying higher historical interest spreads than currently available in the competitive retail lending landscape.',
      'When Does a Balance Transfer Make Sense? Refinancing is typically worthwhile if you have at least 10 to 15 years remaining on your tenure, an outstanding balance above ₹25–30 Lakhs, and can achieve an interest rate reduction of 0.40% or more.',
      'Break-Even Analysis: Switching lenders involves nominal processing fees, legal search charges, and stamp duty for the new mortgage deed. If switching costs total ₹25,000 and your monthly EMI drops by ₹3,500, you break even in just over 7 months.',
      'Securing a Top-Up Facility: During a balance transfer, you can leverage property appreciation to secure an additional top-up loan at low home loan rates for home renovation, debt consolidation, or business working capital.',
    ],
  },
  {
    slug: 'loan-against-property-bangalore-eligibility-documents',
    aliases: ['loan-against-property-vs-home-loan-differences'],
    title: 'Loan Against Property in Bangalore: Eligibility, Documents & Valuation Norms',
    category: 'Property Finance',
    date: 'March 12, 2026',
    dateIso: '2026-03-12',
    readTime: '7 min read',
    author: 'Commercial Mortgage Desk',
    summary:
      'Complete guide to unlocking liquidity against residential, commercial, or industrial real estate in Bangalore with LTV guidelines and document lists.',
    keyTakeaways: [
      'LAP funds can be utilized with 100% end-use freedom for business, medical, or milestone needs.',
      'Loan-to-Value (LTV) limits range from 50% to 75% of independent property market valuation.',
      'Repayment tenure extends up to 15 to 20 years, far longer than unsecured business loans.',
      'Pledged property must have undisputed freehold title with BBMP, BDA, or municipal clearance.',
    ],
    content: [
      'Loan Against Property (LAP) is a secured mortgage option allowing property owners to borrow against the equity in their real estate assets without liquidating ownership.',
      'Valuation & LTV Structuring: In Bangalore, lenders appoint independent valuation engineers to inspect the property. For self-occupied residential houses and apartments, sanctions range up to 65% to 75% of market value. Commercial retail shops and office spaces typically qualify for 50% to 65% LTV.',
      'Documentation Requisites: In addition to standard KYC and income proofs (Form 16 for salaried, 3-year ITR with balance sheets for business owners), lenders require original title deeds, sanctioned building plans, Khata certificates, and Kaveri Form 15 Non-Encumbrance Certificate.',
      'Overdraft vs Term Loan: Business borrowers can opt for a drop-line flexi overdraft facility, where interest is charged only on utilized funds rather than the entire sanctioned limit.',
    ],
  },
  {
    slug: 'home-loan-vs-loan-against-property',
    title: 'Home Loan vs Loan Against Property: Key Differences in Rates, Tenure & Tax Rules',
    category: 'Property Finance',
    date: 'March 08, 2026',
    dateIso: '2026-03-08',
    readTime: '6 min read',
    author: 'Mortgage Advisory Team',
    summary:
      'Detailed comparison of Home Loans and LAP covering interest rate spreads, end-use restrictions, collateral rules, and income tax deductions.',
    keyTakeaways: [
      'Home loans are strictly restricted to acquiring, constructing, or renovating residential dwellings.',
      'LAP offers unrestricted fund utilization for business expansion, liquidity, or personal goals.',
      'Home loan interest rates are lower than LAP due to priority retail risk weighting.',
      'Tax deductions under Section 80C and Section 24(b) apply exclusively to residential home loans.',
    ],
    content: [
      'While both financing options utilize real estate collateral, their regulatory frameworks, interest pricing, and end-use permissions differ significantly under RBI guidelines.',
      'End-Use Permissions: Home loan proceeds are disbursed directly to the developer, builder, or property seller. Funds cannot be diverted to personal bank accounts. Conversely, LAP funds are credited directly to your account and can be deployed freely.',
      'Interest Rate Spreads: Home loans represent the lowest interest financing available in the retail banking sector. Loan Against Property rates typically carry a modest spread (0.75% to 1.50% higher than home loans) but remain far cheaper than unsecured business or personal loans.',
      'Tax Treatment: Home loan borrowers can claim tax deductions up to ₹1.5 Lakhs on principal repayment (Section 80C) and up to ₹2 Lakhs on interest payments (Section 24b). LAP does not qualify for these housing tax deductions unless the funds are provably deployed into business revenue generation.',
    ],
  },
  {
    slug: 'how-cibil-score-affects-loan-eligibility',
    title: 'How CIBIL Score Can Affect Loan Eligibility and Interest Rates in India',
    category: 'Credit & CIBIL',
    date: 'March 02, 2026',
    dateIso: '2026-03-02',
    readTime: '5 min read',
    author: 'Credit Risk Analysis Desk',
    summary:
      'Learn how credit scores (300 to 900) influence loan sanction probability, interest pricing bands, and actionable steps to improve your credit report.',
    keyTakeaways: [
      'A CIBIL score of 750+ qualifies borrowers for prime risk pricing tiers and lowest interest spreads.',
      'Scores between 650 and 749 may face interest rate markups (0.25% to 0.75%) or stricter LTV caps.',
      'Credit utilization ratio should be maintained below 30% of total credit card limits.',
      'Never submit simultaneous loan applications to multiple banks as hard inquiries drag down scores.',
    ],
    content: [
      'Your credit score is a numerical summary of your credit history, compiled by credit bureaus including CIBIL, Experian, Equifax, and CRIF High Mark.',
      'Risk-Based Pricing Bands: Most banks tier their interest rates based on credit scores. Borrowers with scores of 750–800+ receive the lowest benchmark spreads. A borrower with a score of 710 might be charged 25 to 50 basis points higher, costing tens of thousands annually in extra interest.',
      'Factors Influencing Your Score: Payment history accounts for roughly 35% of your score. Delinquencies, delayed EMI payments, or credit card settlements negatively impact ratings for years. High credit utilization ratios and frequent hard inquiries also depress scores.',
      'Actionable Steps to Rebuild Credit: Pay all credit card balances in full before the billing due date, maintain a healthy balance between secured and unsecured credit, and dispute any reporting errors on your bureau report promptly.',
    ],
  },
  {
    slug: 'home-loan-for-self-employed-applicants',
    aliases: ['self-employed-home-loan-income-proof-guide'],
    title: 'Home Loan for Self-Employed Applicants: Approvals, ITR & Banking Surrogates',
    category: 'Self-Employed',
    date: 'February 24, 2026',
    dateIso: '2026-02-24',
    readTime: '6 min read',
    author: 'SME Mortgage Credit Desk',
    summary:
      'How business proprietors, traders, and consultants can qualify for substantial home loans using banking surrogates, GST turnover, and depreciation add-backs.',
    keyTakeaways: [
      'Banking surrogate programs evaluate average monthly bank balances rather than net taxable ITR.',
      'GST turnover schemes sanction loans based on verified gross business receipts and industry profit margins.',
      'Depreciation and directors remuneration can be added back to compute true cash flow.',
      'Co-applicant inclusion strengthens business stability scores.',
    ],
    content: [
      'Entrepreneurs and business proprietors often reinvest gross revenues into operating inventory, resulting in modest net taxable profit figures on their ITR. Traditional algorithms that rely strictly on Form 16 may undervalue their true repayment capacity.',
      'The Banking Surrogate Method: Lenders review 12 months of current and savings account statements, calculating average bank balance (ABB) and debit-credit velocity to determine real cash generation capacity.',
      'GST Turnover Assessment: By applying benchmark industry profit margins (typically 8% to 15%) against annual GST return filings (GSTR-3B), specialized underwriters compute an adjusted net income to sanction eligible loan amounts.',
      'Depreciation Add-Backs: Credit analysts add back non-cash expenses like asset depreciation and director remuneration to net profit after tax, presenting a true picture of business cash generation.',
    ],
  },
  {
    slug: 'home-loan-for-salaried-employees',
    title: 'Home Loan for Salaried Employees: Benefits, Documentation & Corporate Discounts',
    category: 'Salaried Applicants',
    date: 'February 18, 2026',
    dateIso: '2026-02-18',
    readTime: '5 min read',
    author: 'Retail Lending Desk',
    summary:
      'Guidance for salaried professionals in IT, MNCs, and government sectors on securing preferential rates, step-up EMIs, and fast digital sanctions.',
    keyTakeaways: [
      'Corporate categorization (Category A, B, C) by banks provides special interest rate discounts.',
      'Salaried employees qualify for high loan-to-value (up to 80%–90%) with minimal paperwork.',
      'Variable components (bonuses, incentives) are evaluated using average historical payouts.',
      'Job continuity of at least 1 to 2 years establishes employment stability for credit approval.',
    ],
    content: [
      'Salaried individuals represent the preferred borrower segment for retail lenders due to predictable monthly cash flows and verifiable tax deductions at source (TDS).',
      'Corporate Categorization: Leading lenders categorize employers into Category A (Fortune 500, top Indian IT companies, public sector undertakings) down to Category C. Employees in top-tier categories often receive rate concessions of 5 to 15 basis points and waived processing fees.',
      'Evaluating Variable Pay: For tech professionals receiving quarterly bonuses or annual performance incentives, banks typically consider 50% to 70% of the 2-year average bonus amount when calculating eligible monthly income.',
      'Step-Up Repayment Options: Young professionals expecting regular career progression can opt for step-up home loans, where initial EMIs are lower and gradually escalate over time as salary levels increase.',
    ],
  },
  {
    slug: 'how-much-home-loan-can-i-afford',
    title: 'How Much Home Loan Can I Afford? A Practical Guide to Budgeting & Down Payments',
    category: 'Financial Planning',
    date: 'February 12, 2026',
    dateIso: '2026-02-12',
    readTime: '6 min read',
    author: 'Financial Advisory Desk',
    summary:
      'Calculate your realistic home purchase budget factoring in down payment reserves, registration charges, interior fit-outs, and emergency buffers.',
    keyTakeaways: [
      'Follow the 30/40 rule: housing costs should not exceed 30%–40% of net family monthly income.',
      'Account for upfront non-fundable costs: stamp duty, registration fees, GST, and interior expenses.',
      'Maintain an emergency liquidity reserve covering at least 6 months of living expenses and EMIs.',
      'Do not exhaust your entire life savings to maximize down payment.',
    ],
    content: [
      'While a bank may sanction a generous loan limit, determining how much mortgage debt you can comfortably afford without straining your family lifestyle requires independent financial discipline.',
      'The 30/40 Affordability Rule: Financial advisors recommend that your monthly home loan installment should not exceed 35% to 40% of your take-home family income, leaving ample bandwidth for living expenses, children’s education, and retirement investments.',
      'Factoring in Hidden Acquisition Costs: In Bangalore, property acquisition involves stamp duty (5% on sale value plus surcharge and cess), registration charges (1%), advance maintenance deposits, and interior furnishing costs that banks do not fund.',
      'Preserving Emergency Buffers: Never exhaust all liquid savings to increase your down payment. Retain an emergency fund covering at least 6 months of EMIs and essential household expenditure in liquid instruments.',
    ],
  },
  {
    slug: 'home-loan-processing-step-by-step',
    title: 'Home Loan Processing: Step-by-Step Guide From Application to Account Disbursal',
    category: 'Home Loan Process',
    date: 'February 05, 2026',
    dateIso: '2026-02-05',
    readTime: '6 min read',
    author: 'Operations & Credit Desk',
    summary:
      'Detailed overview of the 6 core stages of loan processing: credit appraisal, legal title search, property valuation, sanction letter, and disbursal.',
    keyTakeaways: [
      'Credit underwriting confirms applicant identity, employment, FOIR, and CIBIL score.',
      'Legal title vetting reviews parent deeds and non-encumbrance for at least 30 continuous years.',
      'Technical valuation determines the property market value and distress sale valuation.',
      'Final disbursement occurs only after original title deeds are safely deposited with the lending bank.',
    ],
    content: [
      'Understanding the internal operational workflow of mortgage lending institutions demystifies loan turnaround timelines.',
      'Stage 1: File Login & Credit Verification. Your dossier is logged into the bank loan origination system. The credit team verifies KYC, calls your employer for employment confirmation, and pulls bureau reports.',
      'Stage 2: Legal Due Diligence. The bank assigns an empaneled advocate to scrutinize property ownership papers, verifying registered sale deeds, municipal approvals, conversion orders, and issuing an official title search report.',
      'Stage 3: Technical Inspection. A bank-approved civil engineer visits the property site to verify construction quality, approved setbacks, carpet area measurements, and establish fair market value.',
      'Stage 4: Sanction & Disbursement. Upon positive credit, legal, and technical clearances, the sanction letter is issued. After signing loan agreements and depositing original title documents, loan funds are disbursed.',
    ],
  },
  {
    slug: 'common-reasons-for-home-loan-rejection',
    title: 'Common Reasons for Home Loan Rejection & How to Overcome Them in India',
    category: 'Credit & CIBIL',
    date: 'January 28, 2026',
    dateIso: '2026-01-28',
    readTime: '6 min read',
    author: 'Credit Underwriting Desk',
    summary:
      'Discover the most frequent triggers for mortgage application rejection and proven strategies to rectify issues before reapplying.',
    keyTakeaways: [
      'Low CIBIL score (&lt;650) and recent loan default settlements trigger immediate rejection.',
      'Excessive existing debt obligations exceeding permissible FOIR limit.',
      'Defects in property title chain or unapproved architectural plan deviations.',
      'Unstable employment vintage or frequent job hopping within probationary periods.',
    ],
    content: [
      'A loan rejection can be frustrating and negatively impacts your credit bureau footprint. Understanding why underwriters decline applications helps you address vulnerabilities proactively.',
      'Credit Bureau Flags: Settled accounts, write-offs, or recent 90+ DPD (days past due) records signal elevated default probability. Rebuilding credit for 6 to 12 months with disciplined repayments is necessary before reapplying.',
      'Property Legal Flaws: In Bangalore, properties without clear DC conversion orders, unauthorized layout formations, or missing parent deeds are rejected by tier-1 banks. Group ACH legal specialists pre-screen property papers to identify documentation gaps before submission.',
      'High Existing FOIR: If you currently pay multiple personal or consumer loans, lenders conclude you lack sufficient disposable income to service a new mortgage. Consolidating or pre-closing smaller debts restores eligibility.',
    ],
  },
  {
    slug: 'home-loan-prepayment-what-to-consider',
    title: 'Home Loan Prepayment: What to Consider, Savings Math & Part-Payment Rules',
    category: 'Financial Planning',
    date: 'January 18, 2026',
    dateIso: '2026-01-18',
    readTime: '5 min read',
    author: 'Financial Advisory Desk',
    summary:
      'Should you prepay your home loan early or invest surplus funds? Analyze interest savings, tax trade-offs, and part-prepayment strategies.',
    keyTakeaways: [
      'Prepaying early in the loan tenure produces the highest compounding interest savings.',
      'Under RBI rules, individual borrowers on floating rate home loans pay zero prepayment penalties.',
      'Compare your guaranteed loan interest rate savings against realistic post-tax investment yields.',
      'Opting for tenure reduction rather than EMI reduction saves dramatically more lifetime interest.',
    ],
    content: [
      'Retiring your home loan ahead of schedule frees you from monthly debt obligations, but deciding whether to deploy surplus funds toward prepayment or financial investments requires careful calculation.',
      'The Power of Part-Prepayment: Paying just one additional EMI each year or making modest lump-sum principal payments (e.g., using annual bonuses) can reduce a 20-year mortgage by 3 to 5 years, saving lakhs in compound interest.',
      'Zero Prepayment Penalties: RBI regulations explicitly prohibit banks and housing finance companies from charging any pre-closure or part-payment penalty on floating rate loans sanctioned to individual borrowers.',
      'Tenure vs EMI Reduction: When making a part-prepayment, lenders allow you to either reduce your monthly EMI or shorten your loan tenure. Shortening tenure yields substantially greater overall interest savings over time.',
    ],
  },
];

interface BlogHubPageProps {
  onOpenApplyModal: (loanType?: 'home_loan' | 'loan_against_property', note?: string) => void;
  onNavigate: (path: string) => void;
  activeSlug?: string;
}

export const BlogHubPage: React.FC<BlogHubPageProps> = ({
  onOpenApplyModal,
  onNavigate,
  activeSlug,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activePost = activeSlug
    ? BLOG_POSTS.find(
        (p) =>
          p.slug === activeSlug ||
          (p.aliases && p.aliases.includes(activeSlug))
      )
    : null;

  // Dynamic Schema Injection for Article
  useEffect(() => {
    if (activePost && typeof document !== 'undefined') {
      let script = document.getElementById('article-structured-data');
      if (!script) {
        script = document.createElement('script');
        script.id = 'article-structured-data';
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: activePost.title,
        description: activePost.summary,
        author: {
          '@type': 'Person',
          name: activePost.author,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Group ACH',
          url: 'https://www.achlinks.in/',
          logo: 'https://www.achlinks.in/logo.png',
        },
        datePublished: activePost.dateIso || '2026-03-01',
        mainEntityOfPage: `https://www.achlinks.in/blogs/${activePost.slug}`,
      });

      return () => {
        const s = document.getElementById('article-structured-data');
        if (s) s.remove();
      };
    }
  }, [activePost]);

  const categories = [
    'All',
    'Home Loan Process',
    'Eligibility',
    'Documentation',
    'Interest Rates',
    'Property Finance',
    'Credit & CIBIL',
    'Financial Planning',
    'Salaried Applicants',
    'Self-Employed',
    'Loan Transfer',
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCat =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Individual Blog Post View
  if (activePost) {
    return (
      <div className="bg-slate-50 min-h-screen">
        {/* Visible Breadcrumbs with semantic tags */}
        <nav aria-label="Breadcrumb" className="bg-[#FAF8F5] border-b border-[#EAE4DC] py-3 px-4">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
            <button onClick={() => onNavigate('/')} className="hover:text-slate-900 flex items-center gap-1 transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span>/</span>
            <button onClick={() => onNavigate('/blogs')} className="hover:text-slate-900 transition-colors">
              Blogs
            </button>
            <span>/</span>
            <span className="font-semibold text-slate-900 truncate max-w-xs">{activePost.title}</span>
          </div>
        </nav>

        {/* Article Container */}
        <article className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Header */}
          <header className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#85673E]/10 text-[#85673E] uppercase tracking-wider">
                {activePost.category}
              </span>
              <span className="text-slate-400 text-xs">•</span>
              <span className="text-slate-500 text-xs flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {activePost.readTime}
              </span>
            </div>

            {/* ONE clear H1 */}
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight leading-tight">
              {activePost.title}
            </h1>

            <div className="flex items-center gap-4 text-xs text-slate-500 pt-2 border-b border-slate-200 pb-4">
              <div className="flex items-center gap-1.5 font-medium text-slate-800">
                <User className="w-4 h-4 text-slate-400" />
                <span>{activePost.author}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{activePost.date}</span>
              </div>
            </div>
          </header>

          {/* Key Takeaways Box */}
          <aside className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DC] space-y-3" aria-label="Key Takeaways">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Key Takeaways for Borrowers</span>
            </h2>
            <ul className="space-y-2 text-xs text-slate-700">
              {activePost.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#85673E] mt-1.5 shrink-0" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </aside>

          {/* Body Content */}
          <div className="space-y-6 text-sm text-slate-700 leading-relaxed font-sans">
            {activePost.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Contextual In-Article Call to Action */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md space-y-3">
            <h2 className="font-bold font-serif text-lg text-slate-900">
              Need Direct Guidance on This Subject?
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Group ACH connects you with 70+ institutional lenders and structures your loan file for fastest approval without branch hassle.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => onOpenApplyModal('home_loan', `From Article: ${activePost.title}`)}
                className="px-5 py-2.5 rounded-xl bg-[#85673E] hover:bg-[#735730] text-white text-xs font-bold transition-all shadow-xs"
              >
                Check My Eligibility
              </button>
              <a
                href={buildWhatsAppLink(`Hello Group ACH, I just read your article "${activePost.title}" and have questions about my loan.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all flex items-center gap-2 shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Secured Line Chat</span>
              </a>
            </div>
          </div>

          {/* Related Articles Navigation */}
          <nav className="pt-8 border-t border-slate-200" aria-label="Related Guides">
            <h2 className="font-bold text-slate-900 text-base mb-4 font-serif">Explore Related Loan Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BLOG_POSTS.filter((p) => p.slug !== activePost.slug)
                .slice(0, 2)
                .map((post) => (
                  <button
                    key={post.slug}
                    onClick={() => onNavigate(`/blogs/${post.slug}`)}
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-400 text-left transition-colors space-y-1.5 shadow-xs"
                  >
                    <span className="text-[10px] font-bold uppercase text-[#85673E]">{post.category}</span>
                    <h3 className="font-semibold text-xs text-slate-900 line-clamp-2">{post.title}</h3>
                    <span className="text-[11px] text-slate-500 flex items-center gap-1 pt-1">
                      <span>Read guide</span>
                      <ArrowRight className="w-3 h-3 text-[#85673E]" />
                    </span>
                  </button>
                ))}
            </div>
          </nav>

        </article>
      </div>
    );
  }

  // Blog Hub Overview List View
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-[#FAF8F5] border-b border-[#EAE4DC] py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => onNavigate('/')} className="hover:text-slate-900 flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          <span className="font-semibold text-slate-900">Home Loan &amp; Mortgage Guides</span>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-gradient-to-b from-[#FAF8F5] to-white border-b border-[#EAE4DC] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            <span>Educational Hub &amp; Mortgage Guides</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight leading-tight">
            Mortgage Insights, Rate Trends &amp; Home Loan Guides
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Written by experienced mortgage underwriters and financial advisors at Group ACH to empower buyers with transparent borrowing advice.
          </p>
        </div>
      </header>

      {/* Main Hub Body */}
      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
        
        {/* Search & Category Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-slate-900 bg-white"
            />
          </div>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow space-y-4 shadow-xs"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-bold text-[#85673E] uppercase tracking-wider">{post.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="font-serif font-bold text-base sm:text-lg text-slate-900 hover:text-[#85673E] transition-colors leading-snug">
                  <button
                    onClick={() => onNavigate(`/blogs/${post.slug}`)}
                    className="text-left"
                  >
                    {post.title}
                  </button>
                </h2>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium">{post.date}</span>
                <button
                  type="button"
                  onClick={() => onNavigate(`/blogs/${post.slug}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#85673E] hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </main>
    </div>
  );
};
