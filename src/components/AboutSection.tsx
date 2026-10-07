import React from 'react';
import { BRAND_CONFIG, HOW_IT_WORKS_STEPS, TRUST_PILLARS } from '../data/loanData';
import {
  Users,
  Shield,
  Briefcase,
  MapPin,
  CheckCircle2,
  FileCheck,
  Scale,
  HandCoins,
  MessageSquare,
  Phone,
  Sparkles,
} from 'lucide-react';
import { buildWhatsAppLink } from '../utils/loanCalculators';
import { AchIconMark } from './AchLogo';

interface AboutSectionProps {
  onOpenApplyModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenApplyModal }) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white scroll-mt-14 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#2F483E] uppercase tracking-wider">
              <AchIconMark className="w-4 h-5 shrink-0" color="#2F483E" />
              <span>About Group ACH · Trusted Loan Advisory</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Your Dedicated Loan Advisory & Connector Partner
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                Navigating retail bank branches for a Home Loan or Loan Against Property in India is notoriously tedious: rigid internal credit score cards, opaque valuation procedures, repetitive branch visits, and endless paperwork delays.
              </p>
              <p>
                <strong className="text-slate-900 font-semibold">{BRAND_CONFIG.name}</strong> was founded to flip this balance of power back to the borrower. As an independent loan connector associated with <strong className="text-slate-900 font-semibold">leading premier registered scheduled banks, housing finance companies (HFCs), and NBFCs</strong>, we act as your personal financial advocate.
              </p>
              <p>
                From understanding title deeds and municipal plan sanctions, to negotiating fractional basis points off the lending rate and handling doorstep document collection, your dedicated Group ACH advisor manages the entire lifecycle until final disbursement into your account.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-sky-600" />
                  <span>Borrower-First Philosophy</span>
                </div>
                <p className="text-xs text-slate-600">
                  Zero consulting charges to clients. We recommend lenders strictly based on who offers you the most competitive terms and suitable sanction structure.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>Deep Local & Pan-India Footprint</span>
                </div>
                <p className="text-xs text-slate-600">
                  On-ground documentation desks across all Bangalore localities and rapid doorstep loan assistance.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={buildWhatsAppLink(
                  `Hi Group ACH advisor, I would like to speak directly about my property loan options in Bangalore.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Secured Line Chat</span>
              </a>

              <a
                href={`tel:${BRAND_CONFIG.phoneClean}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call Hotline: {BRAND_CONFIG.phone}</span>
              </a>
            </div>

          </div>

          {/* Visual Trust Card Column */}
          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 border border-slate-800 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-bold text-sky-400 font-mono tracking-wider">
                    {BRAND_CONFIG.domain}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">{BRAND_CONFIG.name} Promise</h3>
                </div>
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <AchIconMark className="w-6 h-8" color="#38BDF8" />
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-emerald-950 text-emerald-400 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Independent Multi-Lender Representation</strong>
                    We compare underwriting norms across leading partner banks and NBFCs rather than locking you into one bank's criteria.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-emerald-950 text-emerald-400 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Door-Step Document Verification</strong>
                    No printing hassles or repeated branch visits. We handle legal vetting coordination directly.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-emerald-950 text-emerald-400 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Competitive Rate Negotiation</strong>
                    Direct institutional channel access allows us to request concessions on ROI and processing fee waivers.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-emerald-950 text-emerald-400 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Zero Upfront Consulting Charge</strong>
                    100% free service for borrowers. Official channel compensation is settled directly by partner institutions.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px]">Primary Contact:</span>
                  <span className="text-white font-mono font-semibold">{BRAND_CONFIG.whatsappNumber}</span>
                </div>
                <button
                  onClick={onOpenApplyModal}
                  className="px-3.5 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs transition-colors"
                >
                  Secure Cost-Free Consultation
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Step Streamlined Process (Section How It Works) */}
        <div id="process" className="scroll-mt-16 pt-8 border-t border-slate-200">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 uppercase tracking-wider mb-2">
              <span>Streamlined Execution</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our 4-Step Fast Approval Workflow
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              How we guide you from initial inquiry to final funds disbursement in as little as 3 to 7 working days.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS_STEPS.map((item) => (
              <div
                key={item.step}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-sky-300 transition-all hover:shadow-sm"
              >
                <div>
                  <div className="text-2xl font-mono font-extrabold text-sky-600 mb-3">
                    {item.step}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] text-slate-500 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Managed by Group ACH</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
