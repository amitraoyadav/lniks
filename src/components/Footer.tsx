import React from 'react';
import { BRAND_CONFIG } from '../data/loanData';
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  ShieldAlert,
  ArrowUpRight,
  ShieldCheck,
  Lock,
  FileSpreadsheet,
} from 'lucide-react';
import { buildWhatsAppLink } from '../utils/loanCalculators';
import { AchIconMark, AchLogo } from './AchLogo';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenSheetSync?: () => void;
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenSheetSync,
  onNavigate,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      
      {/* Mandatory Regulatory & Legal Notice Banner */}
      <div className="bg-slate-900/90 border-b border-slate-800/80 py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-slate-200 uppercase tracking-wider text-[11px] block">
              Mandatory Legal Disclosure & Institutional Channel Disclaimer
            </span>
            <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
              {BRAND_CONFIG.legalDisclaimer}
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand & Identity Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-13 rounded-xl bg-slate-900 flex items-center justify-center p-1 border border-slate-700 shadow-sm shrink-0">
                <AchIconMark className="w-8 h-11" color="#E2E8F0" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold tracking-tight text-white block leading-none">
                  Group <span className="text-emerald-400">ACH</span>
                </span>
                <span className="text-xs font-mono text-emerald-400 block mt-1">
                  {BRAND_CONFIG.domain}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Connecting home buyers and property owners with leading Indian banks and NBFCs for competitive interest rates, suitable financing options, and doorstep document assistance.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={buildWhatsAppLink("Hello Group ACH, I would like to discuss a Home Loan / Loan Against Property.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors text-xs font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Secured Line Chat: {BRAND_CONFIG.whatsappNumber}</span>
              </a>

              <a
                href={`tel:${BRAND_CONFIG.phoneClean}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 transition-colors text-xs font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>Call: {BRAND_CONFIG.phone}</span>
              </a>
            </div>
          </div>

          {/* Core Loan Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Loan Portfolios
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/loans-in-bangalore"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('/loans-in-bangalore');
                    }
                  }}
                  className="hover:text-white transition-colors text-emerald-400 font-semibold"
                >
                  Loans in Bangalore
                </a>
              </li>
              <li>
                <a
                  href="/home-loan"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('/home-loan');
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  Home Loans (New Purchase)
                </a>
              </li>
              <li>
                <a
                  href="/home-loan-bengaluru"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('/home-loan-bengaluru');
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  Home Loan in Bangalore
                </a>
              </li>
              <li>
                <a
                  href="/home-loan-balance-transfer"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('/home-loan-balance-transfer');
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  Home Loan Balance Transfer
                </a>
              </li>
              <li>
                <a
                  href="/loan-against-property"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('/loan-against-property');
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  Loan Against Property (LAP)
                </a>
              </li>
              <li>
                <a
                  href="/home-loan-bengaluru"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('/home-loan-bengaluru');
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  Property Loan in Bangalore
                </a>
              </li>
              <li>
                <a
                  href="/home-loan-for-self-employed"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('/home-loan-for-self-employed');
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  Self-Employed Loan Schemes
                </a>
              </li>
            </ul>
          </div>

          {/* Interactive Tools & Guides */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Tools & Advisory
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/home-loan-eligibility"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('/home-loan-eligibility');
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  Loan Eligibility Estimator
                </a>
              </li>
              <li>
                <a
                  href="/home-loan-documents"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('/home-loan-documents');
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  Documents Required Checklist
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('/blog');
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  Mortgage Knowledge & Guides
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('/faq');
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a
                  href="/loan-offers"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('/loan-offers');
                    }
                  }}
                  className="hover:text-white transition-colors text-amber-300 font-semibold"
                >
                  Special Loan Offers (2026)
                </a>
              </li>
              <li>
                <a
                  href="/home-loan-bengaluru"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('/home-loan-bengaluru');
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  Bangalore (Head Office Advisory)
                </a>
              </li>
              <li>
                <a
                  href="#flyers"
                  className="hover:text-white transition-colors text-emerald-300 font-medium"
                >
                  Loan Marketing Flyers (Download)
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('/about');
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  About Group ACH
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('/contact');
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  Contact & Direct Advisory
                </a>
              </li>
              <li>
                <a
                  href="/sitemap"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('/sitemap');
                    }
                  }}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  Website Directory (Sitemap)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Office & Contact
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-300">
                  {BRAND_CONFIG.address}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <a
                  href={`mailto:${BRAND_CONFIG.email}`}
                  className="hover:text-white transition-colors"
                >
                  {BRAND_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <a href={`tel:${BRAND_CONFIG.phoneClean}`} className="hover:text-white transition-colors">
                  {BRAND_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <a
                  href={buildWhatsAppLink("Hello Group ACH, I would like to discuss a Home Loan / Loan Against Property.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors font-medium text-emerald-300"
                >
                  Secured Line Chat: {BRAND_CONFIG.whatsappNumber}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright and legal policy links */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-300">
          <div className="flex items-center gap-2">
            <AchIconMark className="w-3.5 h-4.5 shrink-0" color="#94A3B8" />
            <span>© {currentYear} <strong className="text-slate-200">{BRAND_CONFIG.name}</strong> ({BRAND_CONFIG.domain}). All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <span className="text-emerald-400 font-medium">Terms: Nil</span>
            <span>·</span>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-100 transition-colors underline"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-slate-100 transition-colors underline"
            >
              Terms & Conditions
            </button>
            <span>·</span>
            <span className="font-mono text-slate-400">Authorized Loan Connector</span>
            {onOpenSheetSync && (
              <>
                <span>·</span>
                <button
                  type="button"
                  onClick={onOpenSheetSync}
                  className="text-slate-400 hover:text-emerald-400 p-0.5 rounded transition-colors inline-flex items-center space-x-1"
                  title="Direct Spreadsheet Lead Sync & Settings"
                  aria-label="Direct Spreadsheet Lead Sync & Settings"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-[11px] underline">Spreadsheet Sync</span>
                </button>
              </>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
};
