import React, { useState } from 'react';
import {
  MapPin,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageSquare,
  Mail,
  Home,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Percent,
  Clock,
  Sparkles
} from 'lucide-react';
import { BRAND_CONFIG, PARTNER_BANKS } from '../data/loanData';
import { buildWhatsAppLink, formatCurrencyINR } from '../utils/loanCalculators';

interface BengaluruLocationPageProps {
  onOpenApplyModal: (loanType?: 'home_loan' | 'loan_against_property', note?: string) => void;
  onNavigate: (path: string) => void;
}

export const BengaluruLocationPage: React.FC<BengaluruLocationPageProps> = ({
  onOpenApplyModal,
  onNavigate,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const localities = [
    {
      name: 'South Bengaluru (Jayanagar & JP Nagar)',
      desc: 'Head office vicinity. Rapid doorstep pickup, BDA layout approvals, ancestral property documentation, and independent house loans.',
      popularFor: 'High-ticket residential villas & commercial LAP',
    },
    {
      name: 'East Bengaluru (Whitefield & Marathahalli)',
      desc: 'Tech-corridor hub. Special fast-track tie-ups with leading builder high-rises and pre-approved projects with zero technical fees.',
      popularFor: 'IT employee step-up home loans',
    },
    {
      name: 'South-East (Sarjapur Road, HSR & Bellandur)',
      desc: 'High demand gated communities. High LTV sanctions up to 85% with multi-bank valuation for top resale apartments.',
      popularFor: 'Apartment purchase & balance transfers',
    },
    {
      name: 'Central & CBD (Indiranagar, Koramangala & MG Road)',
      desc: 'Prime luxury real estate. High-ticket Loan Against Property funding from ₹1 Crore to ₹10 Crore+ at competitive spreads.',
      popularFor: 'Commercial real estate equity release',
    },
    {
      name: 'North Bengaluru (Hebbal, Thanisandra & Yelahanka)',
      desc: 'Airport expressway expansion corridor. Greenfield projects, BIAPPA approvals, and builder floor loans.',
      popularFor: 'Under-construction & plotted development funding',
    },
    {
      name: 'Electronic City & Bannerghatta Road',
      desc: 'Affordable and mid-market apartments. Low-interest public bank sanctions (SBI, Bank of Baroda) with 0% processing fee.',
      popularFor: 'First-time home buyer concessions',
    },
  ];

  const bangaloreFaqs = [
    {
      q: 'Can I get a home loan for B-Khata or e-Khata properties in Bengaluru?',
      a: 'Yes. While top nationalized banks predominantly finance BBMP A-Khata or BDA approved properties, several of our empaneled private banks and Housing Finance Companies (HFCs) evaluate B-Khata properties with verified title deeds, DC conversion certificates, and property tax receipts.',
    },
    {
      q: 'Do you offer doorstep document pickup in Bengaluru?',
      a: 'Yes. Our advisors provide 100% doorstep document verification and pickup across Jayanagar, Whitefield, Indiranagar, Electronic City, and all major areas in Bengaluru. Consultation is 100% free with Terms & Conditions: Nil.',
    },
    {
      q: 'What is the maximum loan tenure and loan amount for Bengaluru properties?',
      a: 'For Home Loans in Bengaluru, tenure can extend up to 30 years with funding up to ₹10 Crore+. For Loan Against Property (LAP), funding extends up to 70% of market value with tenures up to 20 years.',
    },
    {
      q: 'How fast can I get a sanction letter for a Bangalore apartment?',
      a: 'For pre-approved builder projects, in-principle sanction is delivered within 24 to 48 hours. For resale or independent house properties, legal and technical valuation is completed within 3 to 5 business days.',
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
          <span className="font-semibold text-slate-900">Bengaluru Home Loans & LAP</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FAF8F5] via-white to-slate-50 border-b border-[#EAE4DC] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-emerald-700" />
            <span>Head Office in Jayanagar, Bengaluru</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-slate-900 tracking-tight leading-tight">
            Best Home Loan & LAP Advisory in Bengaluru
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Direct doorstep assistance across Bengaluru from our Jayanagar headquarters. We compare rates across leading partner banks to secure competitive EMI terms. Terms & Conditions: Nil.
          </p>

          {/* Quick Metrics */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Home Loan Rates</span>
              <span className="text-xl font-extrabold text-emerald-700 font-mono">8.40% onwards</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">LAP Rates</span>
              <span className="text-xl font-extrabold text-blue-700 font-mono">9.35% onwards</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Doorstep Coverage</span>
              <span className="text-xl font-extrabold text-purple-700 font-mono">All Bengaluru</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Advisory Charges</span>
              <span className="text-xl font-extrabold text-amber-700 font-mono">Nil (100% Free)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        
        {/* Head Office Spotlight Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase">
                Registered Head Office
              </span>
              <span className="text-xs text-slate-500">Karnataka, India</span>
            </div>
            <h2 className="text-2xl font-bold font-serif text-slate-900">
              Group ACH - Bengaluru Headquarters
            </h2>
            <p className="text-sm font-medium text-slate-700">
              {BRAND_CONFIG.address}
            </p>
            <p className="text-xs text-slate-500">
              Providing end-to-end loan coordination, legal title search, and doorstep document collection across all Bangalore zones.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={`tel:${BRAND_CONFIG.phoneClean}`}
              className="py-3 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {BRAND_CONFIG.phone}</span>
            </a>
            <a
              href={buildWhatsAppLink("Hello Group ACH Bengaluru, I would like to schedule a doorstep loan consultation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Secured Line Chat</span>
            </a>
          </div>
        </div>

        {/* Localities Covered */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-serif text-slate-900">
              Bengaluru Localities & Regional Coverage
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Whether purchasing a high-rise in Whitefield or unlocking equity from a commercial shop in Jayanagar, our specialists assist you at your doorstep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {localities.map((loc, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-3"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{loc.name}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {loc.desc}
                </p>
                <div className="pt-2 border-t border-slate-100 text-[11px] font-semibold text-slate-800">
                  Specialty: {loc.popularFor}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bangalore Property Document Guidelines */}
        <div className="bg-[#FAF8F5] rounded-3xl border border-[#EAE4DC] p-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-serif text-slate-900">
              Bengaluru Property Document Checklist
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Essential property papers required for express loan approval in Karnataka.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">1. Khata Certificate</span>
              <p className="text-slate-600">BBMP A-Khata, BDA allotment or e-Khata with latest tax paid receipt.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">2. Title Deed & Flow</span>
              <p className="text-slate-600">Registered Sale Deed, Mother Deed flow of prior 30 years.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">3. Encumbrance (EC)</span>
              <p className="text-slate-600">Form 15 non-encumbrance certificate from Kaveri online portal.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">4. Sanctioned Plan</span>
              <p className="text-slate-600">Approved building blueprint, commencement certificate (CC) / OC.</p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold font-serif text-slate-900">
              Bengaluru Home Loan FAQs
            </h3>
            <p className="text-xs text-slate-600 mt-1">Got questions about property loans in Bangalore? We have answers.</p>
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

        {/* CTA Bar */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white text-center space-y-4">
          <h3 className="text-2xl font-serif font-bold">
            Ready to Compare Bengaluru Loan Rates?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Speak directly with an advisor from our Jayanagar team. We negotiate with leading partner banks and NBFCs for competitive interest rates and suitable loan terms.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenApplyModal('home_loan', 'Bengaluru Location Inquiry')}
              className="py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md"
            >
              Request Free Bangalore Consultation
            </button>
            <a
              href={buildWhatsAppLink("Hello Group ACH, I need a home loan in Bengaluru.")}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all border border-white/20 inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Secured Line Chat: {BRAND_CONFIG.phone}</span>
            </a>
          </div>
        </div>

      </section>
    </div>
  );
};
