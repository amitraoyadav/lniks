import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { BRAND_CONFIG } from '../data/loanData';
import { buildWhatsAppLink } from '../utils/loanCalculators';
import { AchIconMark, AchLogo } from './AchLogo';

interface NavbarProps {
  onOpenApplyModal: (loanType?: 'home_loan' | 'loan_against_property') => void;
  onNavigate?: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApplyModal, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const directWhatsAppUrl = `https://wa.me/919482537337?text=${encodeURIComponent(
    'Hello Group ACH, I would like to discuss a Home Loan / Loan Against Property.'
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE4DC]">
      {/* Top utility alert bar */}
      <div className="bg-[#1C1917] text-[#FAF7F2] text-xs py-2 px-4 border-b border-[#2D2721]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#8C6D46] animate-pulse" />
            <span className="font-medium text-[#FAF7F2]">Connecting you to 70+ Banks & NBFCs</span>
            <span className="hidden sm:inline text-[#6B6560]">·</span>
            <span className="hidden sm:inline text-[#C5A880]">Direct Loan Advisory</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <a
              href={`tel:${BRAND_CONFIG.phoneClean}`}
              className="flex items-center gap-1.5 text-[#E6DDD0] hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{BRAND_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar: Strict 3-zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Zone 1: Single text element Brand wordmark with domain anchor */}
          <a
            href="/"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('/');
              }
            }}
            className="flex items-center gap-3.5 group py-1"
          >
            <div className="w-10 h-13 rounded-xl bg-white border border-[#EAE4DC] flex items-center justify-center p-1 shadow-xs group-hover:border-[#2F483E]/50 transition-colors shrink-0">
              <AchIconMark className="w-8 h-11 group-hover:scale-105 transition-transform" color="#2F483E" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight block leading-none">
                <span className="text-[#1C1917]">Group </span>
                <span className="text-[#2F483E]">ACH</span>
              </span>
              <span className="block text-[11px] font-mono text-[#8C7A6B] tracking-wider mt-1">
                {BRAND_CONFIG.domain}
              </span>
            </div>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#4E4843]">
            <a
              href="/loan-offers"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/loan-offers');
                }
              }}
              className="text-[#85673E] hover:text-[#6F522C] font-semibold transition-colors inline-flex items-center gap-1"
            >
              <span>Offers 2026</span>
              <span className="px-1.5 py-0.2 rounded-md bg-amber-100 text-amber-900 text-[10px] font-bold uppercase">New</span>
            </a>
            <a
              href="/home-loan"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/home-loan');
                }
              }}
              className="hover:text-[#1C1917] transition-colors"
            >
              Home Loans
            </a>
            <a
              href="/loan-against-property"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/loan-against-property');
                }
              }}
              className="hover:text-[#1C1917] transition-colors"
            >
              Loan Against Property
            </a>
            <a
              href="/loans-in-bangalore"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/loans-in-bangalore');
                }
              }}
              className="text-emerald-800 hover:text-emerald-950 transition-colors font-semibold flex items-center gap-1"
            >
              <span>Loans in Bangalore</span>
              <span className="px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">Top</span>
            </a>
            <a
              href="/home-loan/bangalore"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/home-loan/bangalore');
                }
              }}
              className="hover:text-[#1C1917] transition-colors"
            >
              Advisory
            </a>
            <a
              href="/home-loan/eligibility"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/home-loan/eligibility');
                }
              }}
              className="hover:text-[#1C1917] transition-colors"
            >
              Eligibility
            </a>
            <a
              href="/blogs"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/blogs');
                }
              }}
              className="hover:text-[#1C1917] transition-colors"
            >
              Blogs
            </a>
            <a
              href="/about"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/about');
                }
              }}
              className="hover:text-[#1C1917] transition-colors"
            >
              About
            </a>
            <a
              href="/contact"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/contact');
                }
              }}
              className="hover:text-[#1C1917] transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => onOpenApplyModal()}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#85673E] hover:bg-[#735730] rounded-lg transition-colors shadow-sm whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#F3EDE5]" />
              <span>Secured Line Chat</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E6DDD0]" />
            </button>
          </div>

          {/* Mobile hamburger toggle on the right */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenApplyModal()}
              className="sm:hidden px-2.5 py-1.5 text-xs font-semibold text-white bg-[#85673E] rounded-md"
            >
              Chat
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#4E4843] hover:text-[#1C1917] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8C6D46]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#EAE4DC] bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center gap-3 pb-3 border-b border-[#EAE4DC]">
            <div className="w-9 h-12 rounded-xl bg-white border border-[#EAE4DC] flex items-center justify-center p-1 shadow-xs shrink-0">
              <AchIconMark className="w-7 h-10" color="#2F483E" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold text-slate-900 leading-tight">
                Group <span className="text-[#2F483E]">ACH</span>
              </span>
              <span className="text-[10px] font-mono text-slate-500">{BRAND_CONFIG.domain}</span>
            </div>
          </div>
          <nav className="flex flex-col space-y-2 text-base font-medium text-[#2E2822]">
            <a
              href="/loan-offers"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/loan-offers');
                }
                setMobileMenuOpen(false);
              }}
              className="px-3 py-2 rounded-md bg-amber-50 text-amber-900 font-bold hover:bg-amber-100 transition-colors flex items-center justify-between"
            >
              <span>Special Loan Offers (2026)</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-200">New</span>
            </a>
            <a
              href="/loans-in-bangalore"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/loans-in-bangalore');
                }
                setMobileMenuOpen(false);
              }}
              className="px-3 py-2 rounded-md bg-emerald-50 text-emerald-900 font-bold hover:bg-emerald-100 transition-colors flex items-center justify-between"
            >
              <span>Loans in Bangalore (70+ Banks)</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-200">#1</span>
            </a>
            <a
              href="/home-loan-bengaluru"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/home-loan-bengaluru');
                }
                setMobileMenuOpen(false);
              }}
              className="px-3 py-2 rounded-md hover:bg-[#F2EDE4] transition-colors"
            >
              Bangalore (Head Office Advisory)
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#F2EDE4] transition-colors"
            >
              Loan Products (Home Loan & LAP)
            </a>
            <a
              href="#calculators"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#F2EDE4] transition-colors"
            >
              Interactive EMI Calculator
            </a>
            <a
              href="#eligibility"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#F2EDE4] transition-colors"
            >
              Loan Eligibility Estimator
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#F2EDE4] transition-colors"
            >
              4-Step Fast Approval Process
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#F2EDE4] transition-colors"
            >
              About Group ACH
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#F2EDE4] transition-colors"
            >
              Contact & Direct Hotline
            </a>
          </nav>

          <div className="pt-3 border-t border-[#EAE4DC] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplyModal();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-white bg-[#85673E] hover:bg-[#735730] rounded-lg shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#F3EDE5]" />
              <span>Secured Line Chat</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
