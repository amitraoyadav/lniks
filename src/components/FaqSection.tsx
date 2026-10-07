import React, { useState } from 'react';
import { BRAND_CONFIG } from '../data/loanData';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, Phone, CheckCircle2, Calculator } from 'lucide-react';
import { buildWhatsAppLink, formatCurrencyINR } from '../utils/loanCalculators';

export const FaqSection: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number>(5000000);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const quickAmounts = [
    { label: '₹15 Lakh', value: 1500000 },
    { label: '₹25 Lakh', value: 2500000 },
    { label: '₹50 Lakh', value: 5000000 },
    { label: '₹75 Lakh', value: 7500000 },
    { label: '₹1 Crore', value: 10000000 },
    { label: '₹2 Crore+', value: 20000000 },
  ];

  const faqs = [
    {
      q: 'How much loan can I get on my property?',
      a: 'For Home Loans, you can typically get between 75% and 90% of the registered property cost depending on ticket size and RBI guidelines. For Loan Against Property (LAP), lenders typically provide 60% to 70% of the current fair market valuation across leading partner banks and NBFCs.',
    },
    {
      q: 'What are the Terms & Conditions or advisory fees?',
      a: 'Terms & Conditions: Nil. Group ACH provides 100% free loan comparison, eligibility checks, and doorstep pickup with zero consulting charges for retail borrowers.',
    },
    {
      q: 'How quickly is the sanction processed?',
      a: 'Initial loan sanction advisory and eligibility check is completed within 24 hours. Formal sanction letter from partner banks is typically issued in 3 to 7 working days following technical property inspection.',
    },
  ];

  const getWhatsAppMessage = () => {
    return `Hello Group ACH, I require a loan of ${formatCurrencyINR(selectedAmount)}. Please share the best bank rates and eligibility criteria.`;
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Instant Assistance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How much loan do you require?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl mx-auto">
            Select your required amount below and connect directly with a Group ACH specialist on our Secured Line Chat for guidance across leading banks in Bangalore.
          </p>
        </div>

        {/* PRIMARY INTERACTIVE CARD: Loan Requirement + Direct Secured Line Chat Button */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-8 text-center space-y-6">
          
          <div className="space-y-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Select Loan Amount:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {quickAmounts.map((item) => {
                const isSelected = selectedAmount === item.value;
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setSelectedAmount(item.value)}
                    className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      isSelected
                        ? 'bg-slate-900 text-white shadow-md scale-105'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-2 text-2xl sm:text-3xl font-extrabold font-mono text-blue-700">
              {formatCurrencyINR(selectedAmount)}
            </div>
          </div>

          {/* Primary Action Button: Secured Line Chat +91 94825 37337 */}
          <div className="pt-2 max-w-md mx-auto space-y-3">
            <a
              href={buildWhatsAppLink(getWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-2xl text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-[0.99] transition-all shadow-lg shadow-emerald-600/25"
            >
              <MessageSquare className="w-5 h-5 fill-white/20" />
              <span>Secured Line Chat ({BRAND_CONFIG.whatsappNumber})</span>
            </a>

            <div className="flex items-center justify-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1 text-emerald-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" /> Terms: Nil
              </span>
              <span>·</span>
              <a
                href={`tel:${BRAND_CONFIG.phoneClean}`}
                className="hover:text-slate-900 flex items-center gap-1 font-mono font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-sky-600" />
                <span>Call {BRAND_CONFIG.phone}</span>
              </a>
            </div>
          </div>

          {/* Transparent Credentials Note */}
          <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-400 text-center max-w-lg mx-auto">
            Head Office: {BRAND_CONFIG.address} · Email: {BRAND_CONFIG.email}
          </div>
        </div>

        {/* Concise FAQ Accordions */}
        <div className="mt-12 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 text-center mb-4">
            Common Inquiries
          </h3>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left px-5 py-4 sm:px-6 sm:py-4.5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm font-semibold text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600">
                    {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
