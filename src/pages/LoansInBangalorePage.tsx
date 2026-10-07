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
  ExternalLink,
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
  const [selectedLoanType, setSelectedLoanType] = useState<'all' | 'home_loan' | 'lap' | 'balance_transfer'>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeLocality, setActiveLocality] = useState<number>(0);

  // Quick Loan Rate Matrix for Bangalore
  const bangaloreLoanTypes = [
    {
      id: 'home_loan',
      title: 'Home Loans in Bangalore',
      tagline: 'New Flat, Villa & Under-Construction Purchase',
      rate: '8.35% onwards',
      tenure: 'Up to 30 Years',
      maxFunding: 'Up to 90% LTV',
      processingTime: '3–5 Days Sanction',
      features: ['BBMP A-Khata, BDA & BMRDA approvals', 'Zero branch visits — 100% doorstep', 'Pre-approved builder tie-ups across Whitefield & Sarjapur'],
      popularFor: 'IT employees, MNC executives & doctors in Bangalore',
    },
    {
      id: 'lap',
      title: 'Loan Against Property (LAP)',
      tagline: 'Mortgage Residential or Commercial Real Estate',
      rate: '9.25% onwards',
      tenure: 'Up to 20 Years',
      maxFunding: 'Up to 75% Property Value',
      processingTime: '4–7 Days Disbursal',
      features: ['Unrestricted end-use for business or personal liquidity', 'Overdraft (OD) & Drop-line Flexi facilities', 'High loan ticket sizes from ₹25 Lakhs to ₹25+ Crores'],
      popularFor: 'Business owners, startup founders & traders across Bangalore',
    },
    {
      id: 'balance_transfer',
      title: 'Loan Balance Transfer & Top-Up',
      tagline: 'Switch High-Interest Loans to Prime Rates',
      rate: '8.30% onwards',
      tenure: 'Up to 30 Years',
      maxFunding: 'Full Outstanding + ₹50L+ Top-up',
      processingTime: 'Express Switch (Zero Penalty)',
      features: ['Save ₹5 to ₹15 Lakhs in lifetime interest', 'Zero foreclosure charges under RBI rules', 'Immediate top-up funds at prime home loan rates'],
      popularFor: 'Homeowners who borrowed in 2020-2024 at 9.25%+',
    },
  ];

  const bangaloreLocalities = [
    {
      area: 'South Bangalore',
      hubs: 'Jayanagar, JP Nagar, Banashankari, BTM Layout',
      highlight: 'Group ACH Head Office Hub · 15-Min Doorstep Pickup',
      desc: 'Prime residential heartland. Fast-track approvals for BDA layout bungalows, ancestral property partitions, and high-ticket commercial showroom mortgages on Kanakapura & Bannerghatta Road.',
      rates: '8.35% - 9.25%',
    },
    {
      area: 'East Bangalore (IT Corridor)',
      hubs: 'Whitefield, Marathahalli, Kadugodi, Varthur, Hoodi',
      highlight: 'Special IT Professional Rate Concessions',
      desc: 'High-density tech corridor. Pre-approved project sanctions for Prestige, Sobha, Godrej, and Brigade high-rises with step-up EMI programs tailored for IT corporate salaries.',
      rates: '8.35% - 8.50%',
    },
    {
      area: 'South-East Bangalore',
      hubs: 'HSR Layout, Koramangala, Bellandur, Sarjapur Road',
      highlight: 'High-LTV Resale & Startup Founder Financing',
      desc: 'Vibrant startup hub. Quick property valuation reports, combined salary structuring for dual-income tech couples, and LAP financing for expanding enterprises.',
      rates: '8.40% - 9.30%',
    },
    {
      area: 'Central & CBD Bangalore',
      hubs: 'Indiranagar, MG Road, Lavelle Road, Richmond Town',
      highlight: 'Luxury Real Estate & High-Ticket Commercial LAP',
      desc: 'High-value freehold properties, luxury villas, and prime retail real estate equity extraction ranging from ₹2 Crores to ₹20+ Crores with multi-bank bidding.',
      rates: '8.35% - 9.15%',
    },
    {
      area: 'North Bangalore (Airport Corridor)',
      hubs: 'Hebbal, Yelahanka, Thanisandra, Devanahalli, Jakkur',
      highlight: 'Greenfield Villas & Plotted Composite Loans',
      desc: 'Fastest expanding infrastructure zone. Plotted development funding, BIAPPA approvals, composite plot purchase plus house construction disbursals.',
      rates: '8.40% - 8.60%',
    },
    {
      area: 'West & North-West Bangalore',
      hubs: 'Malleshwaram, Rajajinagar, Yeshwanthpur, Peenya',
      highlight: 'MSME Industrial & Commercial LAP Hub',
      desc: 'Industrial manufacturing sheds in Peenya, wholesale trader financing in Yeshwanthpur, and heritage residential properties in Malleshwaram.',
      rates: '8.45% - 9.40%',
    },
  ];

  const bangaloreFaqs = [
    {
      q: 'Why apply for loans in Bangalore through Group ACH instead of going directly to a bank branch?',
      a: 'When you walk into a single bank branch in Bangalore, you are locked into that specific lender’s rigid risk policy, standard interest rates, and high processing fees. Group ACH is an authorized direct loan connector for 70+ institutional lenders across Bangalore (SBI, HDFC, ICICI, Axis, Kotak, Bank of Baroda, Tata Capital, etc.). Because we originate massive monthly loan volumes, our advisors negotiate lower benchmark interest spreads, 0% to 50% processing fee waivers, faster legal clearance, and provide complete doorstep service across Bangalore — with 100% free consultation (Terms: Nil).',
    },
    {
      q: 'What is the current interest rate for Home Loans and LAP in Bangalore for 2026?',
      a: 'In Bangalore, Home Loan interest rates currently start from 8.35% to 8.50% p.a. for borrowers with a CIBIL score of 750+. Loan Against Property (LAP) rates start from 9.25% to 9.50% p.a. with tenures up to 20 years. Balance Transfer rates can be secured as low as 8.30% with minimal takeover fees.',
    },
    {
      q: 'Can I get a property loan in Bangalore for B-Khata or e-Khata properties?',
      a: 'Yes. While top public banks like SBI primarily finance BBMP A-Khata and BDA properties, Group ACH works with specialized partner private banks and premier Housing Finance Companies (HFCs) that finance verified B-Khata and e-Khata properties in Bangalore, provided they have clear title deeds, DC conversion orders, and up-to-date property tax receipts.',
    },
    {
      q: 'How fast can I get a loan sanctioned in Bangalore with Group ACH?',
      a: 'With complete initial documentation collected at your doorstep, digital in-principle sanction is delivered within 24 to 48 hours. Legal search and physical property valuation in Bangalore are completed within 3 to 5 business days, followed by formal sanction and disbursal.',
    },
    {
      q: 'Do you charge any upfront consultation or processing fee to the borrower?',
      a: 'None at all. Our advisory and doorstep document service across Bangalore is 100% free for borrowers. Group ACH operates under institutional partnership agreements, so our terms are Terms & Conditions: Nil.',
    },
    {
      q: 'Which documents are required for loans in Bangalore?',
      a: 'For salaried borrowers: PAN, Aadhaar, 3 months payslips, 6 months bank statement, Form 16 / ITR. For self-employed: 3 years ITR with computations, CA-certified balance sheet, 12 months banking, GST returns. Property documents include Registered Sale Deed, Mother Deed (30 years), BBMP A-Khata / e-Khata certificate, Form 15 Encumbrance Certificate (EC), and Sanctioned Plan / OC.',
    },
  ];

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
          <span className="font-semibold text-slate-900">Loans in Bangalore</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1C1917] via-[#241F1A] to-[#1C1917] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#3E342B] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#85673E_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
        
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#85673E]/20 border border-[#85673E]/40 text-[#F5EBE1] text-xs font-semibold">
            <MapPin className="w-4 h-4 text-[#C5A880]" />
            <span>Bangalore Premier Loan Advisory Desk · Jayanagar Head Office</span>
          </div>

          {/* Primary H1 targeting 'Loans in Bangalore' */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight leading-tight text-balance">
            Loans in Bangalore: Compare 70+ Banks &amp; Lowest Rates
          </h1>

          <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Looking for the best loan in Bangalore? <strong className="text-white">Group ACH</strong> connects home buyers, business owners, and property owners with <span className="text-[#C5A880] font-semibold">70+ premier banks &amp; NBFCs</span> for lowest interest rates, highest LTV eligibility, and free doorstep service across all Bangalore localities.
          </p>

          {/* Key Value Cards */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Home Loans</span>
              <span className="text-2xl font-extrabold text-emerald-400 font-mono">8.35%*</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">70+ Banks Compared</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Property Loans (LAP)</span>
              <span className="text-2xl font-extrabold text-[#C5A880] font-mono">9.25%*</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">Up to ₹25 Cr Funding</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Doorstep Service</span>
              <span className="text-2xl font-extrabold text-sky-400 font-mono">100% Free</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">All Bangalore Zones</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Consultation Fee</span>
              <span className="text-2xl font-extrabold text-amber-400 font-mono">Nil</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">Terms: Nil</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenApplyModal('home_loan', 'Bangalore Loans Page - Direct Inquiry')}
              className="py-3.5 px-7 rounded-xl bg-[#85673E] hover:bg-[#735730] text-white font-bold text-sm transition-all shadow-lg shadow-black/30 flex items-center gap-2"
            >
              <span>Get Bangalore Loan Quotes</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={buildWhatsAppLink("Hello Group ACH, I am looking for the best loan in Bangalore. Please connect me with a senior advisor.")}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Secured Line Chat: {BRAND_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">

        {/* 1. Compare Bangalore Loan Categories */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#85673E]">Tailored Mortgage Programs</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Loan Options Available Across Bangalore
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Choose your requirement below to compare institutional rates, tenures, and eligibility requirements across 70+ partner banks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    <span className="text-xs font-semibold text-slate-500">{item.processingTime}</span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-slate-900">
                    {item.title}
                  </h3>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Starting ROI</span>
                      <span className="text-lg font-bold text-emerald-700 font-mono">{item.rate}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Max Tenure</span>
                      <span className="text-sm font-bold text-slate-800">{item.tenure}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-600 pt-1">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <span className="text-[11px] text-slate-500 block italic">
                    Ideal for: {item.popularFor}
                  </span>
                  <button
                    onClick={() => onOpenApplyModal(item.id === 'lap' ? 'loan_against_property' : 'home_loan', `Bangalore: ${item.title}`)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-[#85673E] text-white text-xs font-bold transition-colors text-center"
                  >
                    Check Bangalore Rates
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Top 70+ Partner Banks Comparison Table */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#85673E]">Live Market Benchmarks</span>
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                Top Bank Loan Rates in Bangalore (2026)
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Comparing public, private, and NBFC loan interest rates and features available through Group ACH.
              </p>
            </div>
            <a
              href={`tel:${BRAND_CONFIG.phoneClean}`}
              className="py-2 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold inline-flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Direct Bank Liaison Desk: {BRAND_CONFIG.phone}</span>
            </a>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-y border-slate-200 text-slate-700">
                  <th className="py-3 px-4 font-bold">Lender Name</th>
                  <th className="py-3 px-4 font-bold">Category</th>
                  <th className="py-3 px-4 font-bold">Home Loan Rates</th>
                  <th className="py-3 px-4 font-bold">LAP (Property) Rates</th>
                  <th className="py-3 px-4 font-bold">Max Tenure</th>
                  <th className="py-3 px-4 font-bold">Key Specialty in Bangalore</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {PARTNER_BANKS.slice(0, 8).map((bank, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      <span>{bank.name}</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">{bank.category}</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-emerald-700">{bank.homeLoanRate}</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-blue-700">{bank.lapRate}</td>
                    <td className="py-3.5 px-4 text-slate-700">{bank.maxTenure}</td>
                    <td className="py-3.5 px-4 text-slate-600">{bank.popularFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
            <span>*Interest rates are indicative and subject to individual credit assessment, CIBIL score &gt;750, and lender risk guidelines.</span>
            <button
              onClick={() => onOpenApplyModal('home_loan', 'Full Bank Comparison Request')}
              className="font-bold text-[#85673E] hover:underline"
            >
              Get Custom Quote for All 70+ Banks →
            </button>
          </div>
        </div>

        {/* 3. Bangalore Regional Locality Map & Coverage */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Local Presence</span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Doorstep Loan Assistance Across All Bangalore Zones
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Our dedicated mobile loan advisors visit your home or workplace anywhere in Bengaluru for document collection and consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bangaloreLocalities.map((loc, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-[#85673E]/40 hover:shadow-md transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                    <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>{loc.area}</span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#85673E]">{loc.rates}</span>
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
                    Apply in {loc.area.split(' ')[0]} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Bangalore Real Estate Legal Due Diligence Guide */}
        <div className="bg-[#FAF8F5] rounded-3xl border border-[#EAE4DC] p-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#85673E]">Bangalore Property Approvals</span>
            <h3 className="text-2xl font-serif font-bold text-slate-900">
              BBMP, BDA &amp; Kaveri Property Paper Guidelines
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Navigating Karnataka property laws is our expertise. Here is what bank underwriters scrutinize for Bangalore loans.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="bg-white p-5 rounded-2xl border border-[#EAE4DC] space-y-2">
              <span className="font-bold text-slate-900 block text-sm">1. BBMP A-Khata vs B-Khata</span>
              <p className="text-slate-600 leading-relaxed">
                BBMP A-Khata is eligible for all top public and private bank loans. B-Khata properties require specific title flow vetting with approved NBFC partners.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-[#EAE4DC] space-y-2">
              <span className="font-bold text-slate-900 block text-sm">2. Kaveri 2.0 Encumbrance (EC)</span>
              <p className="text-slate-600 leading-relaxed">
                Form 15 Non-Encumbrance Certificate for 13 to 30 continuous years retrieved from the Kaveri online portal to ensure zero prior legal hypothecation.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-[#EAE4DC] space-y-2">
              <span className="font-bold text-slate-900 block text-sm">3. Parent Deeds &amp; Mother Deed</span>
              <p className="text-slate-600 leading-relaxed">
                Unbroken chronological chain of ownership deeds proving clear, marketable freehold title without inheritance disputes or pending litigation.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-[#EAE4DC] space-y-2">
              <span className="font-bold text-slate-900 block text-sm">4. Approved Sanction Plan &amp; OC</span>
              <p className="text-slate-600 leading-relaxed">
                BBMP or BDA sanctioned architectural layout plan with Occupancy Certificate (OC) or Commencement Certificate (CC) for multi-story apartments.
              </p>
            </div>
          </div>
        </div>

        {/* 5. Bangalore Loans FAQ */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Frequently Asked Questions</span>
            <h3 className="text-2xl font-bold font-serif text-slate-900 mt-1">
              Common Questions About Loans in Bangalore
            </h3>
            <p className="text-xs text-slate-600 mt-1">Everything you need to know about loan rates, eligibility, and process in Bangalore.</p>
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

        {/* 6. Bottom Banner / Contact Action */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white text-center space-y-5 relative overflow-hidden shadow-xl">
          <div className="space-y-2 relative z-10">
            <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">Fast-Track Loan Approval in Bangalore</span>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold">
              Ready to Get the Lowest Loan Rate in Bangalore?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Contact our Bangalore loan advisors at Jayanagar. We negotiate across 70+ partner banks for your lowest EMI and highest loan sanction. 100% free consultation.
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
