import React, { useState } from 'react';
import {
  ShieldCheck,
  Building2,
  Users,
  Award,
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Home,
  HelpCircle,
  ChevronDown,
} from 'lucide-react';
import { BRAND_CONFIG } from '../data/loanData';
import { buildWhatsAppLink } from '../utils/loanCalculators';

// ==========================================
// 1. ABOUT US PAGE COMPONENT (/about)
// ==========================================
interface AboutPageProps {
  onOpenApplyModal: () => void;
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenApplyModal, onNavigate }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <nav aria-label="Breadcrumb" className="bg-[#FAF8F5] border-b border-[#EAE4DC] py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => onNavigate('/')} className="hover:text-slate-900 flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          <span className="font-semibold text-slate-900">About Group ACH</span>
        </div>
      </nav>

      <section className="bg-gradient-to-b from-[#FAF8F5] to-white border-b border-[#EAE4DC] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Authorized Institutional Loan Advisory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight leading-tight">
            About Group ACH - Transparent Loan Connecting Advisory
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Empowering property buyers and homeowners across Bangalore with unbiased rate comparisons, multi-lender evaluation, and complete doorstep assistance across leading partner banks and NBFCs.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12 text-slate-700">
        
        {/* Mission & Positioning */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-xs leading-relaxed">
            <h2 className="text-2xl font-bold font-serif text-slate-900">Our Advisory Mission</h2>
            <p>
              Navigating India’s lending ecosystem can be overwhelming. Individual branch managers are incentivized to sell only their internal products, regardless of whether a competitive lender offers a lower spread or higher valuation.
            </p>
            <p>
              <strong>Group ACH</strong> was established to level the playing field for borrowers. Acting as an independent loan connector and credit structuring specialist, we evaluate your income credentials and property title deeds against the underwriting criteria of <strong>leading public banks, private lenders, and Housing Finance Companies (HFCs)</strong>.
            </p>
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-medium">
              Zero Upfront Fees: We do not charge retail borrowers upfront consultation fees. Our objective is ensuring you secure competitive EMI terms and structured loan guidance.
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-4">
            <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wide">Key Benchmarks at a Glance</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="block text-2xl font-bold font-serif text-[#85673E]">Multi-Lender</span>
                <span className="text-[11px] text-slate-600">Partner Banks & NBFCs</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="block text-2xl font-bold font-serif text-[#85673E]">100%</span>
                <span className="text-[11px] text-slate-600">Doorstep Assistance</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="block text-2xl font-bold font-serif text-[#85673E]">3 to 7</span>
                <span className="text-[11px] text-slate-600">Days Express Sanction</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="block text-2xl font-bold font-serif text-[#85673E]">₹0</span>
                <span className="text-[11px] text-slate-600">Upfront Retail Fee</span>
              </div>
            </div>
          </div>
        </div>

        {/* E-E-A-T Disclaimer Banner */}
        <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DC] text-xs text-slate-600 space-y-2">
          <h4 className="font-bold text-slate-900 text-sm">Regulatory Transparency & Role Clarification</h4>
          <p>
            Group ACH (operating via <span className="font-mono text-slate-800">www.achlinks.in</span>) is an independent corporate loan connector and financial advisory facilitator. Group ACH is not a bank, Non-Banking Financial Company (NBFC), government department, or Reserve Bank of India (RBI) affiliate. All loan sanctions, interest rate decisions, credit underwriting, and fund disbursements are at the sole discretion of our empaneled partner financial institutions.
          </p>
        </div>

      </section>
    </div>
  );
};

// ==========================================
// 2. CONTACT US PAGE COMPONENT (/contact)
// ==========================================
interface ContactPageProps {
  onOpenApplyModal: () => void;
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenApplyModal, onNavigate }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <nav aria-label="Breadcrumb" className="bg-[#FAF8F5] border-b border-[#EAE4DC] py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => onNavigate('/')} className="hover:text-slate-900 flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          <span className="font-semibold text-slate-900">Contact Us</span>
        </div>
      </nav>

      <section className="bg-gradient-to-b from-[#FAF8F5] to-white border-b border-[#EAE4DC] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>Direct Advisory Hotline & Doorstep Pickup</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight leading-tight">
            Contact Group ACH Loan Specialists
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about an ongoing home loan, eligibility, or loan against property? Speak directly with our senior credit specialists today.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Phone */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold">
              <Phone className="w-5 h-5 text-sky-600" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Direct Phone</h3>
            <p className="text-xs text-slate-600">Mon–Sat, 9:30 AM to 7:00 PM</p>
            <a href={`tel:${BRAND_CONFIG.phoneClean}`} className="font-mono font-bold text-xs text-sky-700 hover:underline block pt-1">
              {BRAND_CONFIG.phone}
            </a>
          </div>

          {/* Card 2: Secured Line Chat */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <MessageSquare className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Secured Line Chat</h3>
            <p className="text-xs text-slate-600">Direct chat with loan specialists</p>
            <a
              href={buildWhatsAppLink('Hello Group ACH, I would like to schedule a loan consultation in Bangalore.')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-xs text-emerald-700 hover:underline block pt-1"
            >
              Secured Line Chat →
            </a>
          </div>

          {/* Card 3: Email */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Official Email</h3>
            <p className="text-xs text-slate-600">Send property docs or inquiries</p>
            <a
              href={`mailto:${BRAND_CONFIG.email}`}
              className="font-medium text-xs text-blue-700 hover:underline block pt-1 break-all"
            >
              {BRAND_CONFIG.email}
            </a>
          </div>

          {/* Card 4: Registered Office */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold">
              <MapPin className="w-5 h-5 text-[#85673E]" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Registered Office</h3>
            <p className="text-xs text-slate-700 leading-snug">
              {BRAND_CONFIG.address}
            </p>
            <span className="text-[11px] font-semibold text-emerald-700 block pt-1">Terms: Nil</span>
          </div>

        </div>

        <div className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#EAE4DC] text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>Terms & Conditions: Nil · 100% Free Borrowing Advisory</span>
          </div>
          <h3 className="text-xl font-serif font-bold text-slate-900">Prefer an Immediate Callback?</h3>
          <p className="text-xs text-slate-600 max-w-lg mx-auto">
            Fill our quick 30-second inquiry form to have a dedicated loan advisor call you back with customized rate comparisons.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenApplyModal}
              className="px-6 py-3 rounded-xl bg-[#85673E] hover:bg-[#735730] text-white text-xs font-bold transition-all shadow-md"
            >
              Request Instant Consultation
            </button>
            <a
              href={buildWhatsAppLink("Hello Group ACH, I would like to check my loan eligibility in Bangalore.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md inline-flex items-center gap-2"
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

// ==========================================
// 3. FAQS HUB COMPONENT (/faq)
// ==========================================
interface FaqPageProps {
  onOpenApplyModal: () => void;
  onNavigate: (path: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenApplyModal, onNavigate }) => {
  const [selectedLoanAmount, setSelectedLoanAmount] = useState<number>(5000000);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const quickPicks = [
    { label: '₹15 Lakh', val: 1500000 },
    { label: '₹25 Lakh', val: 2500000 },
    { label: '₹50 Lakh', val: 5000000 },
    { label: '₹75 Lakh', val: 7500000 },
    { label: '₹1 Crore', val: 10000000 },
    { label: '₹2 Crore+', val: 20000000 },
  ];

  const allFaqs = [
    {
      q: 'How much loan can I get on my property?',
      a: 'For Home Loans, you can typically borrow between 75% and 90% of the property cost depending on ticket size and RBI guidelines. For Loan Against Property (LAP), lenders provide 60% to 70% of the market valuation across leading partner banks and NBFCs.',
    },
    {
      q: 'Are there any Terms & Conditions or advisory fees?',
      a: 'Terms & Conditions: Nil. Group ACH charges zero consultation or file processing fees from borrowers. Our institutional advisory and comparison services are 100% free.',
    },
    {
      q: 'How does Group ACH help me obtain a lower interest rate?',
      a: 'Group ACH compares floating repo-linked spreads across leading partner banks and NBFCs to present you with competitive interest rates and suitable processing fee terms.',
    },
    {
      q: 'Can I prepay or foreclose my home loan without penalty?',
      a: 'Yes. Under Reserve Bank of India (RBI) guidelines, banks cannot charge any prepayment or foreclosure penalty on floating-rate home loans availed by individual borrowers.',
    },
  ];

  const getFaqWhatsAppText = () => {
    return `Hello Group ACH, I require a loan of ₹${(selectedLoanAmount / 100000).toFixed(0)} Lakh. Please guide me with the best bank rates and zero-cost advisory.`;
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <nav aria-label="Breadcrumb" className="bg-[#FAF8F5] border-b border-[#EAE4DC] py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => onNavigate('/')} className="hover:text-slate-900 flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          <span className="font-semibold text-slate-900">Frequently Asked Questions</span>
        </div>
      </nav>

      <section className="bg-gradient-to-b from-[#FAF8F5] to-white border-b border-[#EAE4DC] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Loan Inquiries & FAQs</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight leading-tight">
            How much loan do you require?
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Select your loan requirement and connect directly on Secured Line Chat with our credit advisors in Bangalore. Terms & Conditions: Nil.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
        
        {/* Interactive Loan Selection & Action Box */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-md text-center space-y-5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
            Choose Your Loan Requirement
          </span>
          
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {quickPicks.map((pick) => {
              const isSelected = selectedLoanAmount === pick.val;
              return (
                <button
                  key={pick.label}
                  type="button"
                  onClick={() => setSelectedLoanAmount(pick.val)}
                  className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-md scale-105'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {pick.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 max-w-md mx-auto space-y-3">
            <a
              href={buildWhatsAppLink(getFaqWhatsAppText())}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 py-3.5 px-6 rounded-2xl text-sm sm:text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-md"
            >
              <MessageSquare className="w-5 h-5 fill-white/20" />
              <span>Secured Line Chat ({BRAND_CONFIG.phone})</span>
            </a>
            
            <div className="text-[11px] text-slate-500 flex items-center justify-center gap-3">
              <span className="text-emerald-700 font-semibold">Terms: Nil</span>
              <span>·</span>
              <span>Head Office: {BRAND_CONFIG.address}</span>
            </div>
          </div>
        </div>

        {/* Quick FAQs */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 text-center mb-2">
            Frequently Asked Questions
          </h3>
          {allFaqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-xs">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openIndex === index ? 'rotate-180 text-slate-900' : ''}`} />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
