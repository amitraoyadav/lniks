import React, { useState } from 'react';
import {
  Tag,
  Percent,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Building2,
  Gift,
  ArrowRight,
  Phone,
  MessageSquare,
  Sparkles,
  Download,
  Home,
  ChevronRight,
  TrendingDown
} from 'lucide-react';
import { BRAND_CONFIG, PARTNER_BANKS } from '../data/loanData';
import { buildWhatsAppLink, formatCurrencyINR } from '../utils/loanCalculators';

interface LoanOffersPageProps {
  onOpenApplyModal: (loanType?: 'home_loan' | 'loan_against_property', note?: string) => void;
  onNavigate: (path: string) => void;
}

export const LoanOffersPage: React.FC<LoanOffersPageProps> = ({
  onOpenApplyModal,
  onNavigate,
}) => {
  const [selectedOfferFilter, setSelectedOfferFilter] = useState<'all' | 'home_loan' | 'lap' | 'transfer'>('all');

  const offers = [
    {
      id: 'sbi-special',
      bank: 'State Bank of India',
      category: 'home_loan',
      title: 'SBI Festive Concession Home Loan',
      rate: '8.40% onwards',
      processingFee: 'Zero / 100% Fee Waiver',
      validity: 'Limited Time Seasonal Offer',
      badge: 'Lowest Interest Spread',
      accent: 'emerald',
      benefits: [
        '0% Processing Fee on approved residential projects',
        'Special 65 bps concession on standard Card Rate',
        'Zero prepayment penalty on floating rate loans',
        'Max tenure up to 30 years or age 75',
      ],
      idealFor: 'Salaried borrowers with CIBIL 750+',
    },
    {
      id: 'hdfc-fast',
      bank: 'HDFC Bank',
      category: 'home_loan',
      title: 'HDFC Express Sanction & Project Offer',
      rate: '8.45% onwards',
      processingFee: 'Flat ₹3,000 + GST (50% Off)',
      validity: 'Active This Month',
      badge: 'Fastest 48-Hour Sanction',
      accent: 'blue',
      benefits: [
        'Digital in-principle sanction in 48 hours',
        'Zero technical valuation charge for 12,000+ approved builders',
        'Flexible Step-Up repayment option for young professionals',
        'Doorstep biometric document pickup',
      ],
      idealFor: 'IT / Corporate professionals purchasing builder flats',
    },
    {
      id: 'icici-preapproved',
      bank: 'ICICI Bank',
      category: 'home_loan',
      title: 'ICICI Extra Home Loans with Linked Overdraft',
      rate: '8.50% onwards',
      processingFee: '0.25% or min ₹5,000',
      validity: 'Available Pan-India',
      badge: 'Interest Saver Feature',
      accent: 'amber',
      benefits: [
        'Save up to 40% total interest via Money Saver Account',
        'Instant top-up facility up to ₹50 Lakh alongside home loan',
        'Pre-approved project sanction with minimal legal checks',
        'Part-payment permitted anytime via internet banking',
      ],
      idealFor: 'Borrowers with surplus liquidity and business cash flows',
    },
    {
      id: 'axis-waiver',
      bank: 'Axis Bank',
      category: 'home_loan',
      title: 'Axis Shubh Aarambh 12-EMI Waiver Scheme',
      rate: '8.55% onwards',
      processingFee: '₹10,000 flat',
      validity: 'Active Scheme',
      badge: '12 Free EMIs',
      accent: 'purple',
      benefits: [
        '4 EMIs waived at end of 4th year, 4 at 8th year, 4 at 12th year',
        'Applicable on loans up to ₹30 Lakh without extra interest premium',
        'Full benefit passed directly to reduce principal loan balance',
        'Available on affordable & mid-segment housing',
      ],
      idealFor: 'First-time home buyers seeking long-term EMI rewards',
    },
    {
      id: 'lap-mega',
      bank: 'Multi-Bank Consortium',
      category: 'lap',
      title: 'High-Value Loan Against Property Mega Offer',
      rate: '9.35% onwards',
      processingFee: 'Negotiated flat concession',
      validity: 'High-Ticket Special',
      badge: 'Funding Up to ₹10 Crore+',
      accent: 'emerald',
      benefits: [
        'Unlock up to 70% of current fair market valuation',
        'Approved for residential bungalows, commercial shops & industrial sheds',
        'Tenure up to 20 years with low monthly EMI outflow',
        'No restriction on end-use (business growth, equity, debt consolidation)',
      ],
      idealFor: 'Business owners, traders, manufacturers & self-employed',
    },
    {
      id: 'bt-switch',
      bank: 'Top 5 Public & Private Banks',
      category: 'transfer',
      title: 'Home Loan Balance Transfer & Rate Drop Special',
      rate: '8.35% - 8.45%',
      processingFee: 'Zero Login Fee + Legal Reimbursement',
      validity: 'Switch & Save',
      badge: 'Save ₹4L - ₹12L Interest',
      accent: 'teal',
      benefits: [
        'Drop your current home loan interest by 0.75% to 1.50%',
        'Get top-up cash loan at same low home loan rate',
        'Complete doorstep transfer handling with existing lender foreclosure',
        'Instant EMI reduction from immediate next billing cycle',
      ],
      idealFor: 'Borrowers currently paying 9.25%+ to old banks/NBFCs',
    },
  ];

  const filteredOffers = selectedOfferFilter === 'all'
    ? offers
    : offers.filter((o) => o.category === selectedOfferFilter);

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
          <span className="font-semibold text-slate-900">Special Loan Offers 2026</span>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#FAF8F5] via-white to-slate-50 border-b border-[#EAE4DC] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Curated Partner Bank Concessions</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-slate-900 tracking-tight leading-tight">
            Best Home Loan & LAP Special Offers (2026)
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Compare zero-processing-fee schemes, repo-linked rate options, and structured financing across leading partner banks and NBFCs. Terms & Conditions: Nil.
          </p>

          {/* Quick Stats Bar */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Starting Rates</span>
              <span className="text-xl font-extrabold text-emerald-700 font-mono">8.40% p.a.</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Processing Fee</span>
              <span className="text-xl font-extrabold text-blue-700 font-mono">0% Waiver</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Max Funding</span>
              <span className="text-xl font-extrabold text-purple-700 font-mono">₹10 Cr+</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Advisory Fee</span>
              <span className="text-xl font-extrabold text-amber-700 font-mono">Nil (Free)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Offers Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        
        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'All Special Offers' },
            { id: 'home_loan', label: 'Home Loan Offers' },
            { id: 'lap', label: 'Loan Against Property (LAP)' },
            { id: 'transfer', label: 'Balance Transfer Special' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedOfferFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedOfferFilter === tab.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Offers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOffers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Top */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-[11px] font-bold">
                    {offer.bank}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase">
                    {offer.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold font-serif text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {offer.title}
                  </h3>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    {offer.validity}
                  </span>
                </div>

                {/* Rate & Fee Box */}
                <div className="grid grid-cols-2 gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Interest Rate</span>
                    <span className="font-extrabold text-emerald-700 font-mono text-base">{offer.rate}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Processing Fee</span>
                    <span className="font-bold text-slate-900 text-xs leading-tight block">{offer.processingFee}</span>
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Offer Highlights:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {offer.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 text-[11px] text-slate-500 italic">
                  Best fit: {offer.idealFor}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex gap-2">
                <button
                  type="button"
                  onClick={() => onOpenApplyModal('home_loan', `Claim Offer: ${offer.title} (${offer.bank})`)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs text-center"
                >
                  Apply for Offer
                </button>
                <a
                  href={buildWhatsAppLink(`Hello Group ACH, I want to check my eligibility for the ${offer.title} from ${offer.bank}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center justify-center shadow-xs"
                  title="Secured Line Chat"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* EMI Savings Benchmark Comparison Table */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-md space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
            <div>
              <h3 className="text-xl font-bold font-serif text-slate-900">
                How Much Can You Save With Special Concession Rates?
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Calculated on a ₹50 Lakh loan over a 20-year tenure compared against market rates.
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full self-start sm:self-auto">
              Save Up to ₹5.5 Lakhs Total Interest
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 text-[11px] uppercase">
                  <th className="py-3 px-3">Offer Tier</th>
                  <th className="py-3 px-3">Interest Rate</th>
                  <th className="py-3 px-3">Monthly EMI</th>
                  <th className="py-3 px-3">Total Interest Paid</th>
                  <th className="py-3 px-3">Net Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="bg-emerald-50/50 font-semibold text-emerald-950">
                  <td className="py-3 px-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Group ACH Negotiated Offer</span>
                  </td>
                  <td className="py-3 px-3 font-mono text-emerald-700">8.40%</td>
                  <td className="py-3 px-3 font-mono">₹43,075</td>
                  <td className="py-3 px-3 font-mono">₹53.38 Lakh</td>
                  <td className="py-3 px-3 text-emerald-700 font-bold">Baseline Lowest</td>
                </tr>
                <tr className="text-slate-700">
                  <td className="py-3 px-3">Standard Bank Rate</td>
                  <td className="py-3 px-3 font-mono">8.75%</td>
                  <td className="py-3 px-3 font-mono">₹44,186</td>
                  <td className="py-3 px-3 font-mono">₹56.04 Lakh</td>
                  <td className="py-3 px-3 text-slate-900 font-medium">+ ₹2.66 Lakh Extra Cost</td>
                </tr>
                <tr className="text-slate-700">
                  <td className="py-3 px-3">Average NBFC / Walk-in Rate</td>
                  <td className="py-3 px-3 font-mono">9.25%</td>
                  <td className="py-3 px-3 font-mono">₹45,793</td>
                  <td className="py-3 px-3 font-mono">₹59.90 Lakh</td>
                  <td className="py-3 px-3 text-rose-700 font-bold">+ ₹6.52 Lakh Extra Cost</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 3-Step Process To Claim Any Offer */}
        <div className="bg-[#FAF8F5] rounded-3xl border border-[#EAE4DC] p-8 text-center space-y-6">
          <h3 className="text-2xl font-serif font-bold text-slate-900">
            How to Lock In These Special Bank Rates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">1</span>
              <h4 className="font-bold text-sm text-slate-900">Quick Eligibility Check</h4>
              <p className="text-xs text-slate-600">Send your income and Bangalore property location details via Secured Line Chat or our 30-sec form.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">2</span>
              <h4 className="font-bold text-sm text-slate-900">Multi-Bank Negotiation</h4>
              <p className="text-xs text-slate-600">We evaluate your file across multiple lenders to identify competitive spreads.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">3</span>
              <h4 className="font-bold text-sm text-slate-900">Doorstep Sanction</h4>
              <p className="text-xs text-slate-600">Official sanction letter issued in 3-7 days with 0% advisory fee across Bangalore. Terms: Nil.</p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenApplyModal('home_loan', 'General Special Offer Inquiry')}
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-md"
            >
              Claim Your Special Rate
            </button>
            <a
              href={buildWhatsAppLink("Hello Group ACH, please check my eligibility for current home loan special offers in Bangalore.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Secured Line Chat (+91 94825 37337)</span>
            </a>
          </div>

          <div className="pt-2 text-[11px] text-slate-500">
            Registered Head Office: {BRAND_CONFIG.address} · Email: {BRAND_CONFIG.email}
          </div>
        </div>

      </section>
    </div>
  );
};
