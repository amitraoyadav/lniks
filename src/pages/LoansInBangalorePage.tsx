import React, { useState } from 'react';
import {
  MapPin,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageSquare,
  Home,
  ArrowRight,
  ChevronDown,
  Percent,
  Clock,
  Sparkles,
  TrendingUp,
  FileText,
  BadgeCheck,
  Search,
  Calculator,
  Briefcase,
  UserCheck,
  HelpCircle,
} from 'lucide-react';
import { BRAND_CONFIG, PARTNER_BANKS } from '../data/loanData';
import { buildWhatsAppLink, formatCurrencyINR, calculateEmi } from '../utils/loanCalculators';

interface LoansInBangalorePageProps {
  onOpenApplyModal: (loanType?: 'home_loan' | 'loan_against_property', note?: string) => void;
  onNavigate: (path: string) => void;
}

export const LoansInBangalorePage: React.FC<LoansInBangalorePageProps> = ({
  onOpenApplyModal,
  onNavigate,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeLocality, setActiveLocality] = useState<number>(0);

  // EMI Calculator State
  const [calcAmount, setCalcAmount] = useState<number>(5000000);
  const [calcTenure, setCalcTenure] = useState<number>(20);
  const [calcRate, setCalcRate] = useState<number>(8.5);

  const emiResult = calculateEmi(calcAmount, calcRate, calcTenure);
  const calculatedEmi = emiResult.monthlyEmi;
  const totalRepayment = emiResult.totalPayment;
  const totalInterest = emiResult.totalInterest;

  // Core Bangalore Loan Categories
  const bangaloreLoanTypes = [
    {
      id: 'home_loan',
      title: 'Home Loans in Bangalore',
      tagline: 'Apartments, Independent Villas & Resale Homes',
      tenure: 'Up to 30 Years',
      features: [
        'Financing for BBMP A-Khata, BDA, and approved builder projects',
        'Doorstep document collection across Bengaluru',
        'Guidance on developer tie-ups and title vetting',
      ],
      description:
        'Whether purchasing a ready apartment in Whitefield, an under-construction flat on Sarjapur Road, or a plotted villa in North Bangalore, compare lender offers suited to your profile.',
      modalType: 'home_loan' as const,
    },
    {
      id: 'lap',
      title: 'Loan Against Property (LAP)',
      tagline: 'Mortgage Residential or Commercial Real Estate',
      tenure: 'Up to 20 Years',
      features: [
        'Liquidity against self-occupied homes or rented commercial units',
        'Term loan and overdraft (OD) facilities available',
        'Higher loan quantum for business working capital or personal needs',
      ],
      description:
        'Unlock equity from residential houses, commercial shops, or industrial properties in Bangalore with structured repayment schedules and transparent valuation criteria.',
      modalType: 'loan_against_property' as const,
    },
    {
      id: 'business_loan',
      title: 'Business Loans in Bangalore',
      tagline: 'Working Capital & Business Expansion Credit',
      tenure: '1 to 5 Years',
      features: [
        'Unsecured and secured commercial credit options',
        'Tailored for MSMEs, trading firms, and service enterprises',
        'Banking and GST surrogate assessments',
      ],
      description:
        'Support business expansion, machinery purchase, or seasonal inventory across Bangalore trade hubs like Peenya, Yeshwanthpur, and SP Road.',
      modalType: 'home_loan' as const,
    },
    {
      id: 'personal_loan',
      title: 'Personal Loans in Bangalore',
      tagline: 'Unsecured Financing for Salaried Professionals',
      tenure: '1 to 5 Years',
      features: [
        'Fast digital appraisal for salaried employees in IT and MNCs',
        'Zero collateral or property pledge required',
        'Fixed monthly installments for planned family expenses',
      ],
      description:
        'Immediate personal funding for medical needs, home renovation, or education expenses for corporate employees across Electronic City, Marathahalli, and Bellandur.',
      modalType: 'home_loan' as const,
    },
    {
      id: 'balance_transfer',
      title: 'Home Loan Balance Transfer',
      tagline: 'Refinance Ongoing High-Interest Loans',
      tenure: 'Up to 30 Years',
      features: [
        'Transfer high-rate mortgages to more competitive lending benchmarks',
        'Top-up loan facility alongside transfer',
        'Guidance on foreclosure norms and break-even calculations',
      ],
      description:
        'Borrowers who secured home loans during higher rate cycles can evaluate balance transfers to lower monthly EMIs or shorten repayment tenure.',
      modalType: 'home_loan' as const,
    },
  ];

  const bangaloreLocalities = [
    {
      area: 'South Bangalore',
      hubs: 'Jayanagar, JP Nagar, Banashankari, BTM Layout',
      highlight: 'Group ACH Registered Office Hub · Local Advisory',
      desc: 'Established residential localities with BDA layouts, independent houses, and commercial property financing on Kanakapura and Bannerghatta Roads.',
    },
    {
      area: 'East Bangalore (IT Corridor)',
      hubs: 'Whitefield, Marathahalli, Varthur, Kadugodi, Hoodi',
      highlight: 'IT & MNC Professional Financing',
      desc: 'High-density tech corridor with major residential apartment communities. Tailored guidance for salaried IT couples and corporate professionals.',
    },
    {
      area: 'South-East Bangalore',
      hubs: 'HSR Layout, Koramangala, Bellandur, Sarjapur Road',
      highlight: 'Startup & Residential Hubs',
      desc: 'Dynamic tech and entrepreneurial zone with resale apartments, villa projects, and business loan advisory for growing enterprises.',
    },
    {
      area: 'Central & CBD Bangalore',
      hubs: 'Indiranagar, MG Road, Lavelle Road, Richmond Town',
      highlight: 'High-Value Freehold & Commercial Mortgages',
      desc: 'Premium freehold residential properties, luxury apartments, and commercial showroom property financing with detailed title evaluation.',
    },
    {
      area: 'North Bangalore (Airport Corridor)',
      hubs: 'Hebbal, Yelahanka, Thanisandra, Devanahalli, Jakkur',
      highlight: 'Plotted Developments & Plotted Villa Loans',
      desc: 'Rapidly growing infrastructure corridor with BDA and BIAPPA approved plotted developments, composite plot-plus-construction loans, and gated villas.',
    },
    {
      area: 'West & North-West Bangalore',
      hubs: 'Malleshwaram, Rajajinagar, Yeshwanthpur, Peenya',
      highlight: 'MSME & Heritage Property Advisory',
      desc: 'Heritage residential properties in Malleshwaram and industrial enterprise financing in Peenya Industrial Area and Yeshwanthpur.',
    },
  ];

  const bangaloreFaqs = [
    {
      q: 'Why work with a loan advisor in Bangalore like Group ACH?',
      a: 'Approaching individual bank branches directly often limits you to one institution’s specific eligibility rules, valuation policies, and processing timeframes. Group ACH provides independent guidance across leading institutional lenders in Bangalore. We evaluate your credit profile, match you with appropriate banks or NBFCs, assist with doorstep document collation, and help clarify property title requirements under Karnataka regulations.',
    },
    {
      q: 'What are the current home loan interest rates in Bangalore?',
      a: 'Home loan interest rates in Bangalore are typically floating and linked to the RBI repo rate (External Benchmark Lending Rate / EBLR). As of 2026, benchmark rates generally range from 8.35% to 9.25% per annum for creditworthy borrowers with CIBIL scores of 750 and above. Exact rates depend on the lender, loan quantum, applicant category (salaried vs. self-employed), and property profile.',
    },
    {
      q: 'Can I obtain a property loan in Bangalore for B-Khata or e-Khata properties?',
      a: 'Major public sector banks primarily finance BBMP A-Khata and BDA allotted properties. However, select private banks and registered Housing Finance Companies (HFCs) consider verified e-Khata or B-Khata properties if they possess clear conversion orders, authentic title chains, and updated property tax receipts. Our team helps you understand which lenders consider your specific khata category.',
    },
    {
      q: 'What is FOIR and how does it determine home loan eligibility in Bangalore?',
      a: 'FOIR stands for Fixed Obligation to Income Ratio. Lenders in Bangalore generally permit 40% to 55% (and up to 60% for higher income earners) of your net monthly income to service all ongoing EMIs combined, including the new proposed home loan. Lower existing liabilities increase your eligible loan sanction amount.',
    },
    {
      q: 'What documents are required to apply for a home loan in Bangalore?',
      a: 'For salaried borrowers: PAN, Aadhaar, recent 3 months payslips, 6 months salary bank account statement, and Form 16 / ITR. For self-employed borrowers: 3 years ITR with computation, audited financial statements, 12 months business banking, and GST returns. Property paperwork includes the Mother Deed (chronological chain), Registered Sale Agreement, BBMP/BDA Khata certificate and tax paid receipts, Kaveri Encumbrance Certificate (EC Form 15), and Sanctioned Plan.',
    },
    {
      q: 'Are there any upfront consultation charges payable to Group ACH?',
      a: 'No. Group ACH provides consultation, eligibility assessments, and doorstep documentation support across Bangalore without charging consulting fees to the borrower. Institutional channel relationships allow us to assist borrowers transparently.',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-[#FAF8F5] border-b border-[#EAE4DC] py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <button
            onClick={() => onNavigate('/')}
            className="hover:text-slate-900 flex items-center gap-1 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          <span className="font-semibold text-slate-900">Loans in Bangalore</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1C1917] via-[#241F1A] to-[#1C1917] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#3E342B] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#85673E_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#85673E]/20 border border-[#85673E]/40 text-[#F5EBE1] text-xs font-semibold">
            <MapPin className="w-4 h-4 text-[#C5A880]" />
            <span>Bangalore &amp; Bengaluru Comprehensive Loan Advisory · Jayanagar Office</span>
          </div>

          {/* Primary H1 */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight leading-tight text-balance">
            Loans in Bangalore: Home Loans, LAP &amp; Financing Advisory
          </h1>

          <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Looking for a loan in Bangalore? <strong className="text-white">Group ACH</strong> provides independent guidance for home loans, loans against property, business financing, and personal loans across Bengaluru. Compare lender options, understand Karnataka property documentation, and plan your EMI with clarity.
          </p>

          {/* Value Highlights */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Home Loans</span>
              <span className="text-xl font-extrabold text-emerald-400 font-mono">From 8.35%*</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">Repo-Linked Spreads</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Property Loans (LAP)</span>
              <span className="text-xl font-extrabold text-[#C5A880] font-mono">From 9.25%*</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">Residential &amp; Commercial</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Doorstep Service</span>
              <span className="text-xl font-extrabold text-sky-400 font-mono">Across Bengaluru</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">All Zones Covered</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Advisory Charges</span>
              <span className="text-xl font-extrabold text-amber-400 font-mono">₹0 to Borrower</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">Free Consultation</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenApplyModal('home_loan', 'Bangalore Loans Page - Direct Inquiry')}
              className="py-3.5 px-7 rounded-xl bg-[#85673E] hover:bg-[#735730] text-white font-bold text-sm transition-all shadow-lg shadow-black/30 flex items-center gap-2"
            >
              <span>Request Loan Advisory</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={buildWhatsAppLink('Hello Group ACH, I would like guidance on loan options in Bangalore. Please connect me with an advisor.')}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Advisory: {BRAND_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">

        {/* 1. Core Loan Categories in Bangalore */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#85673E]">Comprehensive Financing Portfolio</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Loan Options Available in Bangalore
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Explore financing programs tailored for salaried individuals, self-employed professionals, and business enterprises across Bengaluru.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bangaloreLoanTypes.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-[11px] font-bold">
                      {item.tagline}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{item.tenure}</span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onOpenApplyModal(item.modalType, `Bangalore: ${item.title}`)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-[#85673E] text-white text-xs font-bold transition-colors text-center"
                  >
                    Check Eligibility &amp; Options
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Interactive EMI Calculation Section */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
          <div className="max-w-2xl mx-auto text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#85673E]">Repayment Estimator</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Calculate Your Loan EMI in Bangalore
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Estimate your Equated Monthly Installment (EMI), total interest outflow, and principal schedule across different loan amounts and tenures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders */}
            <div className="lg:col-span-7 space-y-6">
              {/* Amount */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-700">Loan Amount</span>
                  <span className="text-slate-900 font-mono text-sm">{formatCurrencyINR(calcAmount)}</span>
                </div>
                <input
                  type="range"
                  min={1000000}
                  max={30000000}
                  step={500000}
                  value={calcAmount}
                  onChange={(e) => setCalcAmount(Number(e.target.value))}
                  className="w-full accent-[#85673E] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>₹10 Lakhs</span>
                  <span>₹1.5 Crores</span>
                  <span>₹3 Crores</span>
                </div>
              </div>

              {/* Tenure */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-700">Repayment Tenure</span>
                  <span className="text-slate-900 font-mono text-sm">{calcTenure} Years</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={30}
                  step={1}
                  value={calcTenure}
                  onChange={(e) => setCalcTenure(Number(e.target.value))}
                  className="w-full accent-[#85673E] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>5 Years</span>
                  <span>15 Years</span>
                  <span>30 Years</span>
                </div>
              </div>

              {/* Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-700">Interest Rate (% p.a.)</span>
                  <span className="text-slate-900 font-mono text-sm">{calcRate}%</span>
                </div>
                <input
                  type="range"
                  min={8.0}
                  max={13.0}
                  step={0.1}
                  value={calcRate}
                  onChange={(e) => setCalcRate(Number(e.target.value))}
                  className="w-full accent-[#85673E] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>8.0%</span>
                  <span>10.5%</span>
                  <span>13.0%</span>
                </div>
              </div>
            </div>

            {/* Output Card */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs uppercase font-bold text-slate-400 block tracking-wider">Estimated Monthly EMI</span>
                <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono block mt-1">
                  {formatCurrencyINR(calculatedEmi)}
                </span>
                <span className="text-[11px] text-slate-400 block mt-1">per month for {calcTenure * 12} months</span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px]">Principal Amount</span>
                  <span className="font-mono font-bold text-slate-200 mt-0.5 block">{formatCurrencyINR(calcAmount)}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Total Interest</span>
                  <span className="font-mono font-bold text-amber-300 mt-0.5 block">{formatCurrencyINR(totalInterest)}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <div className="flex justify-between text-xs text-slate-300 mb-4">
                  <span>Total Payable:</span>
                  <span className="font-bold font-mono text-white">{formatCurrencyINR(totalRepayment)}</span>
                </div>
                <button
                  onClick={() => onOpenApplyModal('home_loan', `EMI Calculator Inquiry: ${formatCurrencyINR(calcAmount)} for ${calcTenure} Yrs`)}
                  className="w-full py-3 px-4 rounded-xl bg-[#85673E] hover:bg-[#735730] text-white font-bold text-xs transition-colors text-center"
                >
                  Apply With This EMI
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Home Loan Eligibility Criteria in Bangalore */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Eligibility Framework</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Home Loan Eligibility in Bangalore
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              How financial institutions evaluate your borrowing capacity under standard underwriting guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold">
                <Percent className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900">1. FOIR Norms</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Banks generally permit 40% to 55% of your net monthly income for all EMI obligations combined. Higher salaries (e.g. ₹1.5L+ per month) may qualify for up to 60% FOIR.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900">2. CIBIL Score</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A credit score of 750 or above unlocks prime interest rates and faster sanction. Scores between 680 and 749 are evaluated with additional documentation or co-applicant support.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900">3. Employment Stability</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Salaried professionals require at least 2 years of total work experience (with minimum 6 months in the current company). Self-employed applicants require 3 years of business continuity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-800 flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900">4. Property Valuation &amp; LTV</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Lenders finance up to 75% to 90% of the agreement value (or technical valuation, whichever is lower) depending on the loan quantum as per RBI mortgage regulations.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Complete Checklist of Required Documents */}
        <div className="bg-[#FAF8F5] rounded-3xl border border-[#EAE4DC] p-6 sm:p-10 space-y-8">
          <div className="max-w-2xl mx-auto text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#85673E]">Paperwork Checklist</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Documents Required for Bangalore Loans
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear documentation prevents sanction delays. Here is the standard paperwork requested by lenders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            {/* Salaried */}
            <div className="bg-white p-6 rounded-2xl border border-[#EAE4DC] space-y-4">
              <div className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-emerald-700" />
                <h3 className="font-serif font-bold text-base text-slate-900">Salaried Borrowers</h3>
              </div>
              <ul className="space-y-2.5 text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>PAN Card and Aadhaar Card copy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Recent 3 months salary slips with corporate seal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>6 months salary account bank statements (PDF)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Latest 2 years Form 16 / Income Tax Returns</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Current company appointment letter / ID proof</span>
                </li>
              </ul>
            </div>

            {/* Self-Employed */}
            <div className="bg-white p-6 rounded-2xl border border-[#EAE4DC] space-y-4">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-700" />
                <h3 className="font-serif font-bold text-base text-slate-900">Self-Employed / Business</h3>
              </div>
              <ul className="space-y-2.5 text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>PAN, Aadhaar, and Business PAN / Registration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>3 years ITR with detailed Computation of Income</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Audited Balance Sheet &amp; Profit and Loss statement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>12 months current account bank statements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>GST registration certificate and 12 months GST returns</span>
                </li>
              </ul>
            </div>

            {/* Property Title Documents */}
            <div className="bg-white p-6 rounded-2xl border border-[#EAE4DC] space-y-4">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-700" />
                <h3 className="font-serif font-bold text-base text-slate-900">Bangalore Property Papers</h3>
              </div>
              <ul className="space-y-2.5 text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Mother Deed &amp; uninterrupted title chain (30 years)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Registered Sale Agreement with builder or vendor</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>BBMP A-Khata / e-Khata &amp; updated property tax receipts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Kaveri 2.0 Encumbrance Certificate (Form 15, 13–30 yrs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Sanctioned Architectural Plan &amp; OC/CC (if apartment)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 5. Step-by-Step Application Process */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#85673E]">Step-by-Step Roadmap</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              How the Loan Process Works in Bangalore
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              From your initial inquiry to final account disbursal, here is how Group ACH coordinates your application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                step: '01',
                title: 'Profile Assessment',
                desc: 'We review income, CIBIL report, and required loan quantum to shortlist matching institutions.',
              },
              {
                step: '02',
                title: 'Doorstep Pickup',
                desc: 'Our advisor collects KYC, financial proofs, and property copy sets directly from your residence or office.',
              },
              {
                step: '03',
                title: 'Credit Appraisal',
                desc: 'The lender verifies income documents, completes employer verification, and issues an in-principle sanction.',
              },
              {
                step: '04',
                title: 'Legal & Technical',
                desc: 'Bank empanelled advocates conduct search at the Sub-Registrar office while civil engineers appraise property value.',
              },
              {
                step: '05',
                title: 'Disbursal Execution',
                desc: 'Signing loan agreements, setting up NACH auto-debit, and releasing cheque or RTGS funds.',
              },
            ].map((st, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2 relative">
                <span className="text-2xl font-black text-[#85673E]/30 font-mono block">{st.step}</span>
                <h3 className="font-serif font-bold text-sm text-slate-900">{st.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. How Borrowers Can Compare Lenders in Bangalore */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
          <div className="max-w-2xl mx-auto text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Borrower Guide</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              How Borrowers Can Compare Lenders in Bangalore
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Looking beyond just the advertised headline interest rate helps save substantial money and effort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700 leading-relaxed">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="font-bold text-slate-900 block text-sm">1. Benchmark Index and Spread</span>
              <p>
                Floating rate home loans are tied to the RBI repo rate (EBLR). Understand both the current benchmark and the lender’s fixed spread. A lower spread remains advantageous across all future interest rate cycles.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="font-bold text-slate-900 block text-sm">2. Processing Fees &amp; Incidental Charges</span>
              <p>
                Processing fees generally range from flat rates (e.g. ₹5,000 + GST) up to 0.50% of the loan amount. Compare legal appraisal fees, valuation costs, and MODT (Memorandum of Deposit of Title Deed) stamp duty charges in Karnataka.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="font-bold text-slate-900 block text-sm">3. Prepayment and Part-Payment Flexibility</span>
              <p>
                RBI guidelines mandate zero prepayment or foreclosure penalties on floating rate home loans for individual borrowers. Check whether the lender provides a digital portal or mobile app for convenient part-payments anytime.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="font-bold text-slate-900 block text-sm">4. Turnaround Time &amp; Property Flexibility</span>
              <p>
                Public sector banks often offer lower baseline spreads but take 10 to 18 business days for sanction. Private banks and HFCs typically process approvals in 4 to 7 days and may demonstrate greater flexibility on complex property khata types.
              </p>
            </div>
          </div>
        </div>

        {/* 7. Bangalore Regional Locality Map & Coverage */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#85673E]">Local Presence</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Doorstep Loan Assistance Across Bangalore Localities
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Our mobile loan advisors visit your home or workplace anywhere in Bengaluru for document collection and consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bangaloreLocalities.map((loc, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-[#85673E]/40 hover:shadow-md transition-all space-y-3"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                  <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{loc.area}</span>
                </div>

                <div className="text-[11px] font-semibold text-slate-800">
                  Hubs: {loc.hubs}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {loc.desc}
                </p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-emerald-700">{loc.highlight}</span>
                  <button
                    onClick={() => onOpenApplyModal('home_loan', `Locality Inquiry: ${loc.area}`)}
                    className="font-bold text-[#85673E] hover:underline"
                  >
                    Inquire for {loc.area.split(' ')[0]} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 8. Bangalore Loans FAQ */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Frequently Asked Questions</span>
            <h2 className="text-2xl font-bold font-serif text-slate-900 mt-1">
              Common Questions About Loans in Bangalore
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Answers to frequent borrower inquiries regarding rates, eligibility, and documentation in Bengaluru.
            </p>
          </div>

          <div className="space-y-3">
            {bangaloreFaqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-xs">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === index ? 'rotate-180 text-slate-900' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 9. Bottom Banner / Contact Action */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white text-center space-y-5 relative overflow-hidden shadow-xl">
          <div className="space-y-2 relative z-10">
            <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">Independent Loan Advisory in Bangalore</span>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold">
              Looking for the Right Loan in Bangalore?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Connect with Group ACH loan specialists at Jayanagar. We help you compare lending options, evaluate borrowing limits, and navigate paperwork smoothly. Free consultation for borrowers.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 relative z-10">
            <button
              onClick={() => onOpenApplyModal('home_loan', 'Bangalore Bottom Banner')}
              className="py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md"
            >
              Request Free Bangalore Consultation
            </button>
            <a
              href={`tel:${BRAND_CONFIG.phoneClean}`}
              className="py-3 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all border border-white/20 inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Us: {BRAND_CONFIG.phone}</span>
            </a>
          </div>
        </div>

      </section>
    </div>
  );
};
