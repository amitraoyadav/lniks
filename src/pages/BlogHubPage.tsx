import React, { useState } from 'react';
import {
  BookOpen,
  Calendar,
  User,
  ArrowRight,
  Search,
  Tag,
  Home,
  Clock,
  Share2,
  CheckCircle2,
  Phone,
  MessageSquare,
} from 'lucide-react';
import { buildWhatsAppLink } from '../utils/loanCalculators';

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'home-loan-eligibility-criteria-guide',
    title: 'Home Loan Eligibility: Complete Guide to FOIR and Salary Multipliers',
    category: 'Eligibility',
    date: 'March 28, 2026',
    readTime: '6 min read',
    author: 'Amit Yadav (Lead Advisory Partner)',
    summary:
      'Learn how banks evaluate your net monthly salary, existing debts, FOIR ratio, and CIBIL score to calculate your maximum borrowing limit.',
    keyTakeaways: [
      'Banks generally cap FOIR at 50% to 65% of net monthly income.',
      'A CIBIL score above 750 unlocks prime repo-linked interest rates.',
      'Adding an earning co-applicant significantly enhances joint eligibility.',
      'Pre-closing high-interest credit card balances and personal loans boosts home loan capacity.',
    ],
    content: [
      'Securing a home loan sanction begins with understanding how bank underwriters assess credit risk and financial capacity. While property selection is crucial, your borrowing eligibility determines the quantum of capital lenders are willing to disburse.',
      '1. Understanding Fixed Obligation to Income Ratio (FOIR): FOIR is the percentage of your take-home monthly salary committed to existing EMIs. If your net monthly salary is ₹1,20,000 and you pay an auto loan EMI of ₹20,000, your current obligation ratio is 16.6%. If the lender has a maximum permissible FOIR of 60%, your total debt allocation can reach ₹72,000 per month, leaving ₹52,000 available for your new home loan EMI.',
      '2. The Net Salary Multiplier: For standard 20-year home loans, top lenders typically sanction approximately 55 to 60 times your net monthly income. A borrower earning ₹1,50,000 monthly with clean credit history can anticipate an indicative sanction of ₹80 to ₹90 Lakhs.',
      '3. Strategic Steps to Boost Your Eligibility: Before applying, clear outstanding credit card balances, consolidate short-term personal debts, add an earning spouse as co-borrower, and opt for a 25 or 30-year tenure to lower monthly installment calculations.',
    ],
  },
  {
    slug: 'complete-documents-checklist-home-loan',
    title: 'Documents Required for Home Loan in India: Salaried & Self-Employed Checklist',
    category: 'Documentation',
    date: 'March 20, 2026',
    readTime: '5 min read',
    author: 'Group ACH Credit Underwriting Desk',
    summary:
      'Exhaustive paperwork checklist for salaried employees, business owners, and property title vetting to prevent sanction rejections.',
    keyTakeaways: [
      'Salaried applicants require 3 months salary slips, 6 months bank statement, and 2 years Form 16.',
      'Self-employed applicants need 3 years audited ITR with CA-certified balance sheets and 12 months banking.',
      'Chain of title deeds must be verified for at least 30 continuous years.',
      'Sanctioned architectural building plan and Occupancy Certificate (OC) are mandatory for builder floors.',
    ],
    content: [
      'Document mismatches and incomplete title chains are the single most common cause of home loan processing delays in Bangalore. Having your financial dossier organized before initial credit submission ensures rapid approval.',
      'For Salaried Employees: Ensure that all salary slips reflect consistent provident fund (PF) deductions and that salary credits in your primary bank statement precisely match the net pay recorded on your payslips.',
      'For Self-Employed & MSMEs: Lenders scrutinize gross annual turnover, profit after tax (PAT), depreciation add-backs, and GST compliance. A clean bank account with healthy average quarterly balance (AQB) signals financial discipline.',
      'Legal Property Due Diligence: In resale acquisitions, verify that the seller possesses the original conveyance deed, mother deed, mutation certificates, and latest property tax assessment receipts.',
    ],
  },
  {
    slug: 'loan-against-property-vs-home-loan-differences',
    title: 'Home Loan vs Loan Against Property: Key Differences in Rates, Tenure & Tax',
    category: 'Property Finance',
    date: 'March 14, 2026',
    readTime: '7 min read',
    author: 'Mortgage Advisory Team',
    summary:
      'Comparison of Home Loans vs Loan Against Property (LAP) covering interest rate spreads, collateral rules, end-use restrictions, and tax treatments.',
    keyTakeaways: [
      'Home loans are restricted strictly to buying or constructing residential homes.',
      'Loan Against Property offers 100% end-use freedom for business or liquidity.',
      'Home loan interest rates are lower (benchmark linked) than LAP spreads.',
      'LAP offers up to 15-20 year repayment horizons compared to expensive 3-5 year business loans.',
    ],
    content: [
      'While both home loans and loans against property involve real estate collateral, their regulatory frameworks and end-use permissions differ substantially under RBI guidelines.',
      'End-Use Permissions: When you avail a home loan, disbursements are made directly to the developer, seller, or construction contractor. You cannot use these funds for personal or business needs. In contrast, Loan Against Property (LAP) funds are credited to your personal or current account and can be deployed freely for working capital, business expansion, or personal milestones.',
      'Interest Rates & Collateral: Home loans enjoy the lowest interest rates in the retail lending market. LAP rates carry a modest spread (usually 0.75% to 1.50% higher than home loans) but remain far cheaper than unsecured business or personal financing.',
    ],
  },
  {
    slug: 'home-loan-balance-transfer-savings-calculator',
    title: 'What Is Home Loan Balance Transfer? Calculate Interest Savings & Break-Even',
    category: 'Loan Transfer',
    date: 'March 05, 2026',
    readTime: '5 min read',
    author: 'Financial Advisory Desk',
    summary:
      'Learn how transferring an existing high-interest home loan to a lower repo-linked rate can save lakhs in interest and reduce tenure.',
    keyTakeaways: [
      'Switching from an old MCLR or high spread loan can save ₹3 to ₹8 Lakhs over 15 years.',
      'Foreclosure charges on floating rate home loans for individual borrowers are 0% as per RBI rules.',
      'Compute break-even by comparing upfront processing fees against monthly EMI savings.',
      'Avail additional top-up loans during transfer at prime mortgage rates.',
    ],
    content: [
      'Borrowers who initiated their home loans 3 to 7 years ago often find themselves paying higher floating spreads than currently offered to new applicants.',
      'Why Balance Transfer Works: When RBI reduces repo rates or when an applicant’s credit score improves significantly (e.g. from 680 to 780), refinancing your outstanding balance to a new bank reduces monthly interest outlays immediately.',
      'Zero Prepayment Penalty: Under RBI directives, banks and HFCs cannot levy any foreclosure penalty or prepayment fee on floating rate home loans sanctioned to individual borrowers.',
    ],
  },
  {
    slug: 'home-loan-tax-benefits-section-80c-24b',
    title: 'Home Loan Tax Benefits Explained: Section 80C, 24(b) & Joint Deduction Rules',
    category: 'Financial Planning',
    date: 'February 22, 2026',
    readTime: '6 min read',
    author: 'Tax & Real Estate Advisory',
    summary:
      'Detailed overview of income tax deductions on home loan principal and interest repayments under the Old Tax Regime.',
    keyTakeaways: [
      'Principal repayment qualifies for deduction up to ₹1.5 Lakhs under Section 80C.',
      'Interest payment on self-occupied home qualifies for deduction up to ₹2 Lakhs under Section 24(b).',
      'Joint borrowers (e.g., husband and wife) can both claim separate deductions, doubling tax benefits.',
      'Stamp duty and registration fees can be claimed under Section 80C in the year of purchase.',
    ],
    content: [
      'A residential home loan is not only a mechanism for property acquisition but also one of the most effective tax-saving tools for salaried and self-employed taxpayers in India.',
      'Section 24(b) Interest Deduction: You can deduct up to ₹2,00,000 annually against interest paid on a home loan for a self-occupied property. For rented properties, the entire interest can be set off against rental income subject to annual loss limits.',
      'Section 80C Principal Deduction: Up to ₹1,50,000 can be claimed annually towards principal repayment. Furthermore, one-time stamp duty and registration fees paid during the financial year qualify under this overall ceiling.',
    ],
  },
  {
    slug: 'self-employed-home-loan-income-proof-guide',
    title: 'Home Loan for Self-Employed Individuals: Approvals Without Standard ITR',
    category: 'Self-Employed Applicants',
    date: 'February 10, 2026',
    readTime: '6 min read',
    author: 'SME Mortgage Credit Desk',
    summary:
      'How business proprietors, traders, and consultants can qualify for high-ticket home loans using banking surrogates and GST turnover.',
    keyTakeaways: [
      'Banking surrogate programs evaluate average monthly bank balances rather than net taxable ITR.',
      'GST turnover schemes sanction loans based on verified gross business receipts and industry profit margins.',
      'Depreciation and directors remuneration can be added back to compute true cash flow.',
      'Co-applicant inclusion strengthens business stability scores.',
    ],
    content: [
      'Entrepreneurs and business proprietors often reinvest gross revenues into operating inventory, resulting in modest net profit figures on their ITR. Traditional algorithms that rely strictly on Form 16 or net taxable income may undervalue their repayment capacity.',
      'The Banking Surrogate Method: Lenders review 12 months current and savings account statements, calculating average bank balance (ABB) and debit-credit velocity to determine real cash generation.',
      'GST Turnover Assessment: By applying benchmark industry profit margins (typically 8% to 15%) against annual GST return filings (GSTR-3B), specialized underwriters compute an adjusted net income to sanction eligible loan amounts.',
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
    ? BLOG_POSTS.find((p) => p.slug === activeSlug)
    : null;

  const categories = [
    'All',
    'Eligibility',
    'Documentation',
    'Property Finance',
    'Loan Transfer',
    'Financial Planning',
    'Self-Employed Applicants',
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCat =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Individual Blog Post View
  if (activePost) {
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
            <button onClick={() => onNavigate('/blog')} className="hover:text-slate-900 transition-colors">
              Blog Hub
            </button>
            <span>/</span>
            <span className="font-semibold text-slate-900 truncate max-w-xs">{activePost.title}</span>
          </div>
        </nav>

        {/* Article Container */}
        <article className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Header */}
          <div className="space-y-4">
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
          </div>

          {/* Key Takeaways Box */}
          <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DC] space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Key Takeaways for Borrowers</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-700">
              {activePost.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#85673E] mt-1.5 shrink-0" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

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
            <h3 className="font-bold font-serif text-lg text-slate-900">
              Need Direct Guidance on This Subject?
            </h3>
            <p className="text-xs text-slate-600">
              Group ACH connects you with 70+ institutional lenders and structures your loan file for fastest approval.
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
          <div className="pt-8 border-t border-slate-200">
            <h3 className="font-bold text-slate-900 text-base mb-4 font-serif">Explore Related Loan Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BLOG_POSTS.filter((p) => p.slug !== activePost.slug)
                .slice(0, 2)
                .map((post) => (
                  <button
                    key={post.slug}
                    onClick={() => onNavigate(`/blog/${post.slug}`)}
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-400 text-left transition-colors space-y-1.5 shadow-xs"
                  >
                    <span className="text-[10px] font-bold uppercase text-[#85673E]">{post.category}</span>
                    <h4 className="font-semibold text-xs text-slate-900 line-clamp-2">{post.title}</h4>
                    <span className="text-[11px] text-slate-500 flex items-center gap-1 pt-1">
                      <span>Read guide</span>
                      <ArrowRight className="w-3 h-3 text-[#85673E]" />
                    </span>
                  </button>
                ))}
            </div>
          </div>

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
          <span className="font-semibold text-slate-900">Home Loan & Mortgage Guides</span>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-b from-[#FAF8F5] to-white border-b border-[#EAE4DC] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            <span>Educational Hub & Regulatory Insights</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight leading-tight">
            Mortgage Insights, Rate Trends & Home Loan Guides
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Written by experienced mortgage underwriters and financial advisors at Group ACH to empower buyers with transparent borrowing advice.
          </p>
        </div>
      </section>

      {/* Main Hub Body */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
        
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
                <h3 className="font-serif font-bold text-base sm:text-lg text-slate-900 hover:text-[#85673E] transition-colors leading-snug">
                  <button
                    onClick={() => onNavigate(`/blog/${post.slug}`)}
                    className="text-left"
                  >
                    {post.title}
                  </button>
                </h3>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium">{post.date}</span>
                <button
                  type="button"
                  onClick={() => onNavigate(`/blog/${post.slug}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#85673E] hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </section>
    </div>
  );
};
