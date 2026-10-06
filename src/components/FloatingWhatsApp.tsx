import React, { useState } from 'react';
import { MessageSquare, Phone, X, ShieldCheck } from 'lucide-react';
import { BRAND_CONFIG } from '../data/loanData';
import { buildWhatsAppLink } from '../utils/loanCalculators';

interface FloatingWhatsAppProps {
  onOpenApplyModal: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenApplyModal }) => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <>
      {/* 1. Mobile Bottom Sticky Action Bar (Strictly <15% of mobile viewport height) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-lg flex items-center justify-between gap-2">
        <a
          href={`tel:${BRAND_CONFIG.phoneClean}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl text-xs font-bold transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-sky-600" />
          <span>Call Us</span>
        </a>

        <button
          onClick={onOpenApplyModal}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-2 bg-[#85673E] hover:bg-[#735730] text-white rounded-xl text-xs font-bold transition-colors shadow-sm"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Secured Line Chat</span>
        </button>

        <a
          href="#contact"
          className="flex-1 inline-flex items-center justify-center gap-1 py-2 px-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors"
        >
          <span>Contact</span>
        </a>
      </div>

      {/* 2. Desktop Floating Chat Button (Bottom-Right) */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2">
        {/* Subtle tooltip banner */}
        {!tooltipDismissed && (
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-3.5 max-w-xs text-xs text-slate-700 animate-in fade-in slide-in-from-bottom-2 duration-300 relative">
            <button
              onClick={() => setTooltipDismissed(true)}
              className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 p-1"
              aria-label="Dismiss chat tooltip"
            >
              <X className="w-3 h-3" />
            </button>
            <div className="flex items-center gap-2 mb-1.5 font-bold text-slate-900">
              <span className="w-2 h-2 rounded-full bg-[#85673E] animate-pulse" />
              <span>Group ACH Loan Advisor</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed mb-2">
              Have questions about Home Loan or LAP rates in Bangalore? Start a secured line chat with an advisor.
            </p>
            <button
              onClick={onOpenApplyModal}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#85673E] hover:text-[#735730]"
            >
              <span>Secured Line Chat</span>
              <span>→</span>
            </button>
          </div>
        )}

        <button
          onClick={onOpenApplyModal}
          className="w-14 h-14 rounded-full bg-[#85673E] hover:bg-[#735730] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-[#85673E]/30"
          aria-label="Secured Line Chat with Group ACH"
        >
          <MessageSquare className="w-7 h-7" />
        </button>
      </div>
    </>
  );
};
