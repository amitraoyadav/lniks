/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BankPartners } from './components/BankPartners';
import { ProductsSection } from './components/ProductsSection';
import { CalculatorsSection } from './components/CalculatorsSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FlyersSection } from './components/FlyersSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LeadModal } from './components/LeadModal';
import { LegalModals } from './components/LegalModals';
import { LoanType, LeadFormData } from './types';
import { BRAND_CONFIG } from './data/loanData';
import { buildWhatsAppLink, formatCurrencyINR } from './utils/loanCalculators';
import { CheckCircle2, MessageSquare, X } from 'lucide-react';
import { AchIconMark } from './components/AchLogo';
import { GoogleSheetSyncModal } from './components/GoogleSheetSyncModal';
import {
  enqueueLead,
  submitLeadToGoogleSheets,
  markLeadAsSynced,
  SubmissionState,
  StoredLead,
} from './services/googleSheets';
import { applyPageSeo } from './services/seoManager';
import { analytics } from './utils/analytics';

// SEO Canonical Pages
import { HomeLoanPage } from './pages/HomeLoanPage';
import { LoanAgainstPropertyPage } from './pages/LoanAgainstPropertyPage';
import { GuidesPage } from './pages/GuidesPage';
import { AboutPage, ContactPage, FaqPage } from './pages/StaticTrustPages';
import { BlogHubPage } from './pages/BlogHubPage';
import { LoanOffersPage } from './pages/LoanOffersPage';
import { BengaluruLocationPage } from './pages/BengaluruLocationPage';
import { LoansInBangalorePage } from './pages/LoansInBangalorePage';
import { SeoManagerPage } from './pages/SeoManagerPage';
import { SitemapPage } from './pages/SitemapPage';
import {
  BusinessLoanPage,
  PersonalLoanPage,
  LapEligibilityPage,
  LoanEmiCalculatorPage,
  HomeLoanInterestRatesPage,
} from './pages/AdditionalLoanPages';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [sheetSyncModalOpen, setSheetSyncModalOpen] = useState(false);
  const [modalLoanType, setModalLoanType] = useState<LoanType>('home_loan');
  const [modalAmount, setModalAmount] = useState<number>(5000000);
  const [modalTenure, setModalTenure] = useState<number>(20);
  const [modalEmi, setModalEmi] = useState<number | undefined>(undefined);
  const [modalVariant, setModalVariant] = useState<string | undefined>(undefined);

  // Legal Modals
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Toast notification state
  const [toastData, setToastData] = useState<LeadFormData | null>(null);
  const [syncStatusToast, setSyncStatusToast] = useState<{
    state: SubmissionState;
    message: string;
  } | null>(null);

  // Private Admin Portal triggers:
  // 1. URL hash: #admin, #sync, #leads or query ?admin=true
  // 2. Keyboard shortcut: Ctrl + Shift + L or Cmd + Shift + L
  // 3. Subtle discrete lock icon in the footer copyright area
  React.useEffect(() => {
    const checkAdminTrigger = () => {
      const hash = window.location.hash.toLowerCase();
      const params = new URLSearchParams(window.location.search);
      if (
        hash === '#admin' ||
        hash === '#sync' ||
        hash === '#leads' ||
        params.get('admin') === 'true' ||
        params.get('sync') === 'true'
      ) {
        setSheetSyncModalOpen(true);
      }
    };

    checkAdminTrigger();
    window.addEventListener('hashchange', checkAdminTrigger);

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'L' || e.key === 'l' || e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setSheetSyncModalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('hashchange', checkAdminTrigger);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleOpenApplyModal = (
    loanType: LoanType = 'home_loan',
    variantTitle?: string,
    amount: number = 5000000,
    tenure: number = 20,
    emi?: number
  ) => {
    setModalLoanType(loanType);
    setModalVariant(variantTitle);
    setModalAmount(amount);
    setModalTenure(tenure);
    setModalEmi(emi);
    setModalOpen(true);
  };

  const handleApplyWithEmi = (
    loanType: LoanType,
    amount: number,
    tenure: number,
    emi: number
  ) => {
    handleOpenApplyModal(loanType, undefined, amount, tenure, emi);
  };

  const handleLeadSuccess = async (data: LeadFormData): Promise<{ success: boolean; message: string }> => {
    // 1. Persist lead in local queue
    const stored = enqueueLead(data);
    setToastData(data);

    // 2. Automatically dispatch to Google Apps Script Web App (/exec endpoint)
    setSyncStatusToast({
      state: 'Submitting...',
      message: 'Submitting...',
    });

    try {
      const res = await submitLeadToGoogleSheets(data);
      if (res.success) {
        markLeadAsSynced(stored.id);
        setSyncStatusToast({
          state: 'Lead submitted successfully',
          message: 'Thank you! Your request has been submitted successfully.',
        });
      } else {
        setSyncStatusToast({
          state: 'Submission failed',
          message: 'Unable to submit your request. Please try again.',
        });
      }
      return res;
    } catch {
      setSyncStatusToast({
        state: 'Submission failed',
        message: 'Unable to submit your request. Please try again.',
      });
      return {
        success: false,
        message: 'Unable to submit your request. Please try again.',
      };
    } finally {
      setTimeout(() => {
        setToastData(null);
        setSyncStatusToast(null);
      }, 10000);
    }
  };

  // Routing state for SEO canonical URLs
  const [currentPath, setCurrentPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  const handleNavigate = (path: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Synchronize dynamic SEO head meta tags, canonical link & analytics tracking on every route
  React.useEffect(() => {
    applyPageSeo(currentPath);
    analytics.pageView(currentPath);
  }, [currentPath]);

  const scrollToCalculator = () => {
    if (currentPath !== '/') {
      handleNavigate('/');
      setTimeout(() => {
        const el = document.getElementById('calculators');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.getElementById('calculators');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 pb-16 md:pb-0">
      
      {/* Navigation with SEO routing */}
      <Navbar
        onOpenApplyModal={() => handleOpenApplyModal()}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections with SEO Routing */}
      <main className="flex-1">
        {(() => {
          const norm = currentPath.toLowerCase().replace(/\/$/, '') || '/';

          if (
            norm === '/home-loan' ||
            norm === '/home-loan-consultant' ||
            norm === '/home-loan-advisor'
          ) {
            return (
              <HomeLoanPage
                onOpenApplyModal={handleOpenApplyModal}
                onNavigate={handleNavigate}
              />
            );
          }

          if (
            norm === '/loan-against-property' ||
            norm === '/loan-against-property-consultant' ||
            norm === '/property-loan' ||
            norm === '/mortgage-loan'
          ) {
            return (
              <LoanAgainstPropertyPage
                onOpenApplyModal={handleOpenApplyModal}
                onNavigate={handleNavigate}
              />
            );
          }

          if (
            norm === '/loans-in-bangalore' ||
            norm === '/loans-in-bengaluru' ||
            norm === '/loans-bangalore' ||
            norm === '/bangalore-loans' ||
            norm === '/loans-in-banglore'
          ) {
            return (
              <LoansInBangalorePage
                onOpenApplyModal={handleOpenApplyModal}
                onNavigate={handleNavigate}
              />
            );
          }

          if (
            norm === '/seo-manager' ||
            norm === '/seo' ||
            norm === '/serp'
          ) {
            return (
              <SeoManagerPage
                onNavigate={handleNavigate}
                onOpenApplyModal={() => handleOpenApplyModal()}
              />
            );
          }

          if (
            norm === '/home-loan/bangalore' ||
            norm === '/home-loan-bengaluru' ||
            norm === '/home-loan-bangalore' ||
            norm === '/bangalore' ||
            norm === '/bengaluru'
          ) {
            return (
              <BengaluruLocationPage
                onOpenApplyModal={handleOpenApplyModal}
                onNavigate={handleNavigate}
              />
            );
          }

          if (
            norm === '/loan-against-property/bangalore' ||
            norm === '/loan-against-property-bangalore' ||
            norm === '/loan-against-property-bengaluru'
          ) {
            return (
              <BengaluruLocationPage
                onOpenApplyModal={handleOpenApplyModal}
                onNavigate={handleNavigate}
              />
            );
          }

          if (norm === '/home-loan/eligibility' || norm === '/home-loan-eligibility') {
            return (
              <GuidesPage
                type="eligibility"
                onOpenApplyModal={handleOpenApplyModal}
                onNavigate={handleNavigate}
              />
            );
          }

          if (
            norm === '/home-loan/emi-calculator' ||
            norm === '/loan-emi-calculator'
          ) {
            return (
              <LoanEmiCalculatorPage
                onOpenApplyModal={handleOpenApplyModal}
                onNavigate={handleNavigate}
              />
            );
          }

          if (
            norm === '/home-loan/documents-required' ||
            norm === '/home-loan-documents'
          ) {
            return (
              <GuidesPage
                type="documents"
                onOpenApplyModal={handleOpenApplyModal}
                onNavigate={handleNavigate}
              />
            );
          }

          if (norm === '/home-loan/interest-rates') {
            return (
              <HomeLoanInterestRatesPage
                onOpenApplyModal={() => handleOpenApplyModal()}
                onNavigate={handleNavigate}
              />
            );
          }

          if (
            norm === '/home-loan/balance-transfer' ||
            norm === '/home-loan-balance-transfer'
          ) {
            return (
              <GuidesPage
                type="balance_transfer"
                onOpenApplyModal={handleOpenApplyModal}
                onNavigate={handleNavigate}
              />
            );
          }

          if (norm === '/business-loan') {
            return (
              <BusinessLoanPage
                onOpenApplyModal={handleOpenApplyModal}
                onNavigate={handleNavigate}
              />
            );
          }

          if (norm === '/personal-loan') {
            return (
              <PersonalLoanPage
                onOpenApplyModal={() => handleOpenApplyModal()}
                onNavigate={handleNavigate}
              />
            );
          }

          if (norm === '/lap-eligibility') {
            return (
              <LapEligibilityPage
                onOpenApplyModal={() => handleOpenApplyModal()}
                onNavigate={handleNavigate}
              />
            );
          }

          if (norm === '/home-loan-for-salaried') {
            return (
              <GuidesPage
                type="salaried"
                onOpenApplyModal={handleOpenApplyModal}
                onNavigate={handleNavigate}
              />
            );
          }

          if (norm === '/home-loan-for-self-employed') {
            return (
              <GuidesPage
                type="self_employed"
                onOpenApplyModal={handleOpenApplyModal}
                onNavigate={handleNavigate}
              />
            );
          }

          if (norm === '/about') {
            return (
              <AboutPage
                onOpenApplyModal={() => handleOpenApplyModal()}
                onNavigate={handleNavigate}
              />
            );
          }

          if (norm === '/contact') {
            return (
              <ContactPage
                onOpenApplyModal={() => handleOpenApplyModal()}
                onNavigate={handleNavigate}
              />
            );
          }

          if (norm === '/faq') {
            return (
              <FaqPage
                onOpenApplyModal={() => handleOpenApplyModal()}
                onNavigate={handleNavigate}
              />
            );
          }

          if (
            norm === '/blogs' ||
            norm === '/blog' ||
            norm.startsWith('/blogs/') ||
            norm.startsWith('/blog/')
          ) {
            const slug = norm.startsWith('/blogs/')
              ? norm.replace('/blogs/', '')
              : norm.startsWith('/blog/')
              ? norm.replace('/blog/', '')
              : undefined;
            return (
              <BlogHubPage
                onOpenApplyModal={handleOpenApplyModal}
                onNavigate={handleNavigate}
                activeSlug={slug}
              />
            );
          }

          if (norm === '/loan-offers') {
            return (
              <LoanOffersPage
                onOpenApplyModal={handleOpenApplyModal}
                onNavigate={handleNavigate}
              />
            );
          }

          if (norm === '/home-loan-bengaluru' || norm === '/home-loan-bangalore') {
            return (
              <BengaluruLocationPage
                onOpenApplyModal={handleOpenApplyModal}
                onNavigate={handleNavigate}
              />
            );
          }

          if (norm === '/sitemap') {
            return (
              <SitemapPage
                onNavigate={handleNavigate}
              />
            );
          }

          // Default: High-converting, comprehensive homepage
          return (
            <>
              {/* Hero Section with Quick Lead Form on first fold */}
              <HeroSection
                onLeadSuccess={handleLeadSuccess}
                onOpenCalculator={scrollToCalculator}
                onNavigate={handleNavigate}
              />

              {/* 70+ Partner Banks & Financial Institutions Ecosystem */}
              <BankPartners
                onSelectBankQuote={(bankName) =>
                  handleOpenApplyModal('home_loan', `Quote preference: ${bankName}`)
                }
              />

              {/* Products Section: Home Loans & LAP */}
              <ProductsSection onOpenApplyModal={handleOpenApplyModal} />

              {/* Tools & Calculators: EMI, Eligibility, Balance Transfer */}
              <CalculatorsSection onApplyWithEmi={handleApplyWithEmi} />

              {/* About Us & 4-Step Process */}
              <AboutSection onOpenApplyModal={() => handleOpenApplyModal()} />

              {/* Testimonials & Case Studies */}
              <TestimonialsSection />

              {/* Official Home Loan & LAP Promotional Flyers */}
              <FlyersSection />

              {/* FAQ Section */}
              <FaqSection />

              {/* Contact Us Section with Direct Hotline & WhatsApp */}
              <ContactSection onLeadSuccess={handleLeadSuccess} />
            </>
          );
        })()}
      </main>

      {/* Footer with Mandatory Legal Disclaimer and Canonical Navigation */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenSheetSync={() => setSheetSyncModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Floating WhatsApp Action Button + Mobile Sticky Bar */}
      <FloatingWhatsApp onOpenApplyModal={() => handleOpenApplyModal()} />

      {/* Reusable Lead Modal */}
      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialLoanType={modalLoanType}
        initialAmount={modalAmount}
        initialTenure={modalTenure}
        initialEmi={modalEmi}
        initialVariant={modalVariant}
        onLeadSuccess={handleLeadSuccess}
      />

      {/* Legal & Terms Modals */}
      <LegalModals
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Google Sheets Lead Sync Modal */}
      <GoogleSheetSyncModal
        isOpen={sheetSyncModalOpen}
        onClose={() => setSheetSyncModalOpen(false)}
      />

      {/* Persistent Toast Banner on Lead Submission */}
      {toastData && (
        <div className="fixed top-20 right-4 z-50 max-w-sm w-full bg-slate-900 text-white rounded-2xl shadow-2xl border border-slate-700 p-4 animate-in slide-in-from-top-4 duration-300">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
              <AchIconMark className="w-3.5 h-4.5 shrink-0" color="#34D399" />
              <span>Inquiry Registered!</span>
            </div>
            <button
              onClick={() => {
                setToastData(null);
                setSyncStatusToast(null);
              }}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Sync status indicator */}
          {syncStatusToast && (
            <div
              className={`mt-2 py-1 px-2.5 rounded-lg text-[11px] font-semibold flex items-center justify-between ${
                syncStatusToast.state === 'Submitting...'
                  ? 'bg-blue-950/80 text-blue-300 border border-blue-800'
                  : syncStatusToast.state === 'Lead submitted successfully'
                  ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800'
                  : 'bg-red-950/80 text-red-300 border border-red-800'
              }`}
            >
              <span>Google Sheets: {syncStatusToast.state}</span>
            </div>
          )}

          <p className="text-xs text-slate-300 mt-2 leading-snug">
            Thank you, <strong className="text-white">{toastData.fullName}</strong>. Your inquiry has been registered. Want instant loan comparisons via Secured Line Chat?
          </p>

          <a
            href={buildWhatsAppLink(
              `Hi Group ACH, I just submitted an inquiry on www.achlinks.in for ${
                toastData.loanType === 'home_loan' ? 'Home Loan' : 'Loan Against Property'
              }. My name is ${toastData.fullName}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Secured Line Chat (+91 94825 37337)</span>
          </a>
        </div>
      )}

    </div>
  );
}
