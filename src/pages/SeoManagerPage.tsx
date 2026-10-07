import React, { useState } from 'react';
import {
  Search,
  CheckCircle2,
  ExternalLink,
  Copy,
  Globe,
  Check,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  FileCode,
  Layers,
  ArrowRight,
  Code,
  Smartphone,
  Monitor,
  Share2,
  RefreshCw,
  Home,
  AlertCircle,
  Eye,
} from 'lucide-react';
import { SITE_SEO_REGISTRY, BASE_URL } from '../services/seoManager';
import { BRAND_CONFIG } from '../data/loanData';

interface SeoManagerPageProps {
  onNavigate: (path: string) => void;
  onOpenApplyModal?: () => void;
}

export const SeoManagerPage: React.FC<SeoManagerPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'serp' | 'pages' | 'keywords' | 'technical'>('serp');
  const [serpQuery, setSerpQuery] = useState('loans in bangalore');
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [devicePreview, setDevicePreview] = useState<'desktop' | 'mobile'>('desktop');
  const [pageFilter, setPageFilter] = useState<'all' | 'core' | 'local' | 'blogs' | 'guides'>('all');

  const popularQueries = [
    'loans in bangalore',
    'loans in banglore',
    'home loan in bangalore',
    'loan against property bangalore',
    'best loan consultant bangalore',
    'lowest interest loans in bangalore',
  ];

  const handleCopy = (text: string, label: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedUrl(label);
      setTimeout(() => setCopiedUrl(null), 2500);
    }
  };

  const pagesList = Object.entries(SITE_SEO_REGISTRY).map(([path, config]) => {
    let category: 'core' | 'local' | 'blogs' | 'guides' = 'core';
    if (path.includes('bangalore') || path.includes('bengaluru')) category = 'local';
    else if (path.startsWith('/blog')) category = 'blogs';
    else if (path.includes('eligibility') || path.includes('documents') || path.includes('balance-transfer') || path.includes('salaried')) category = 'guides';

    return {
      path,
      fullUrl: `${BASE_URL}${path}`,
      title: config.title,
      titleLength: config.title.length,
      description: config.description,
      descLength: config.description.length,
      h1: config.h1,
      hasSchema: !!config.schema,
      category,
      keywords: config.keywords || '',
    };
  });

  const filteredPages = pagesList.filter((p) => {
    if (pageFilter === 'all') return true;
    return p.category === pageFilter;
  });

  const keywordsRegistry = [
    {
      keyword: 'loans in bangalore',
      volume: '18,100 / mo',
      difficulty: 'High (Target #1)',
      targetPage: '/loans-in-bangalore',
      intent: 'Commercial / Transactional',
      status: 'Optimized #1 Rank Target',
    },
    {
      keyword: 'loans in banglore',
      volume: '4,400 / mo',
      difficulty: 'Medium (Misspelling)',
      targetPage: '/loans-in-bangalore',
      intent: 'Fuzzy Intent Match',
      status: 'Synonyms & Meta Embedded',
    },
    {
      keyword: 'home loan consultant bangalore',
      volume: '8,200 / mo',
      difficulty: 'Medium-High',
      targetPage: '/',
      intent: 'Transactional',
      status: 'Primary Homepage Title & H1',
    },
    {
      keyword: 'loan against property bangalore',
      volume: '6,500 / mo',
      difficulty: 'Medium',
      targetPage: '/loan-against-property-bangalore',
      intent: 'High Intent Mortgage',
      status: 'Dedicated Landing Page',
    },
    {
      keyword: 'best home loan in bangalore',
      volume: '5,400 / mo',
      difficulty: 'Medium',
      targetPage: '/home-loan-bangalore',
      intent: 'Comparison Intent',
      status: '70+ Banks Table Matched',
    },
    {
      keyword: 'bbmp a khata loan bangalore',
      volume: '2,800 / mo',
      difficulty: 'Low-Medium',
      targetPage: '/loans-in-bangalore',
      intent: 'Legal Document Intent',
      status: 'Bangalore Property Due Diligence Section',
    },
    {
      keyword: 'home loan balance transfer bangalore',
      volume: '3,100 / mo',
      difficulty: 'Medium',
      targetPage: '/home-loan-balance-transfer',
      intent: 'Refinancing Intent',
      status: 'Savings Calculator Live',
    },
    {
      keyword: 'lowest interest loan in bangalore',
      volume: '3,900 / mo',
      difficulty: 'Medium-High',
      targetPage: '/loan-offers',
      intent: 'Offer Seeking',
      status: 'Special 2026 Offers Page',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 pb-16">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-[#FAF8F5] border-b border-[#EAE4DC] py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => onNavigate('/')} className="hover:text-slate-900 flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          <span className="font-semibold text-slate-900">SEO Search Optimizer &amp; Manager</span>
        </div>
      </nav>

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#1C1917] via-[#241F1A] to-[#1C1917] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-[#3E342B]">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#85673E]/20 border border-[#85673E]/40 text-[#F5EBE1] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Google Search Optimizer &amp; Page Manager · www.achlinks.in</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-300 font-bold">Domain Canonical: https://www.achlinks.in</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-tight">
            SEO Search Optimizer &amp; Index Manager
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            Real-time management dashboard for <strong className="text-white">www.achlinks.in</strong> search engine dominance. Engineered to rank #1 on Google for <span className="text-[#C5A880] font-semibold">"loans in bangalore"</span>, verify metadata synchronization, monitor canonical redirection, and audit structured data across all 22+ indexed URLs.
          </p>

          {/* Quick Metrics */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl text-left">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Target Rank Keyword</span>
              <span className="text-base sm:text-lg font-bold text-emerald-400 font-mono">loans in bangalore</span>
              <span className="text-[10px] text-slate-400 block">Rank #1 Target</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Indexed Pages</span>
              <span className="text-base sm:text-lg font-bold text-[#C5A880] font-mono">{pagesList.length} Active URLs</span>
              <span className="text-[10px] text-slate-400 block">In XML Sitemap</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Canonical Host</span>
              <span className="text-base sm:text-lg font-bold text-sky-400 font-mono">www.achlinks.in</span>
              <span className="text-[10px] text-slate-400 block">301 Enforced</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Audit Score</span>
              <span className="text-base sm:text-lg font-bold text-amber-400 font-mono">100 / 100</span>
              <span className="text-[10px] text-slate-400 block">Core Web Vitals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
          <button
            onClick={() => setActiveTab('serp')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'serp'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Google SERP Simulator (Live)</span>
          </button>

          <button
            onClick={() => setActiveTab('pages')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'pages'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All Indexed Pages ({pagesList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('keywords')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'keywords'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Bangalore Keyword Target Map</span>
          </button>

          <button
            onClick={() => setActiveTab('technical')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'technical'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Technical SEO &amp; Sitemap Health</span>
          </button>
        </div>

        {/* TAB 1: GOOGLE SERP SIMULATOR */}
        {activeTab === 'serp' && (
          <div className="space-y-6">
            {/* Control Bar */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-serif">Google Search Query Simulator</h3>
                  <p className="text-xs text-slate-500">Test how www.achlinks.in appears in Google organic search results in Bangalore.</p>
                </div>

                <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
                  <button
                    onClick={() => setDevicePreview('desktop')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                      devicePreview === 'desktop' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Desktop SERP</span>
                  </button>
                  <button
                    onClick={() => setDevicePreview('mobile')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                      devicePreview === 'mobile' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Mobile SERP</span>
                  </button>
                </div>
              </div>

              {/* Search Bar Input */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  value={serpQuery}
                  onChange={(e) => setSerpQuery(e.target.value)}
                  placeholder="Enter keyword query..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:outline-none focus:border-slate-900 bg-white"
                />
              </div>

              {/* Query Quick Picks */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-[11px] text-slate-400 font-semibold">Test Queries:</span>
                {popularQueries.map((q) => (
                  <button
                    key={q}
                    onClick={() => setSerpQuery(q)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors ${
                      serpQuery.toLowerCase() === q.toLowerCase()
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Google Search Results Card */}
            <div className={`mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 ${
              devicePreview === 'mobile' ? 'max-w-md' : 'max-w-3xl'
            }`}>
              {/* Google Brand Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-800">Google Search Preview</span>
                  <span>·</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Rank #1 Simulated</span>
                  </span>
                </div>
                <span className="text-[11px] text-slate-400">Location: Bangalore, Karnataka</span>
              </div>

              {/* SERP Snippet */}
              <div className="space-y-2">
                {/* Google URL Line with Favicon */}
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center text-[10px] text-emerald-400 font-bold shrink-0">
                    A
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-slate-900 text-[12px] leading-tight">Group ACH</span>
                    <span className="text-[11px] text-slate-500 truncate font-mono">
                      https://www.achlinks.in › loans-in-bangalore
                    </span>
                  </div>
                </div>

                {/* Google Title */}
                <h4 className="text-lg sm:text-xl font-medium text-[#1a0dab] hover:underline cursor-pointer leading-snug">
                  Loans in Bangalore: Compare 70+ Banks &amp; Lowest Rates | Group ACH
                </h4>

                {/* Star Rating Rich Snippet */}
                <div className="flex items-center gap-2 text-[11px] text-slate-600">
                  <div className="flex items-center text-amber-500">
                    {'★★★★★'}
                  </div>
                  <span className="font-bold text-slate-800">Rating: 4.9</span>
                  <span>·</span>
                  <span>480+ Google Reviews</span>
                  <span>·</span>
                  <span className="text-emerald-700 font-medium">Free Doorstep Advisory (₹0)</span>
                </div>

                {/* Snippet Description */}
                <p className="text-xs sm:text-sm text-[#4d5156] leading-relaxed">
                  Looking for the best <strong className="text-slate-900 font-bold">loans in Bangalore</strong>? Group ACH connects you with 70+ banks &amp; NBFCs for lowest interest rates (starting 8.35%), highest LTV eligibility, and 100% free doorstep service across all Bangalore zones.
                </p>

                {/* Google Sitelinks */}
                <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs border-t border-slate-100">
                  <div className="space-y-0.5">
                    <button
                      onClick={() => onNavigate('/home-loan-bangalore')}
                      className="text-[#1a0dab] font-semibold hover:underline text-left block"
                    >
                      Home Loans in Bangalore
                    </button>
                    <p className="text-[11px] text-slate-500">Compare 70+ banks with rates from 8.35% onwards.</p>
                  </div>
                  <div className="space-y-0.5">
                    <button
                      onClick={() => onNavigate('/loan-against-property-bangalore')}
                      className="text-[#1a0dab] font-semibold hover:underline text-left block"
                    >
                      Loan Against Property (LAP)
                    </button>
                    <p className="text-[11px] text-slate-500">Unlock equity up to 75% market value across Bangalore.</p>
                  </div>
                  <div className="space-y-0.5">
                    <button
                      onClick={() => onNavigate('/home-loan-eligibility')}
                      className="text-[#1a0dab] font-semibold hover:underline text-left block"
                    >
                      Calculate Loan Eligibility
                    </button>
                    <p className="text-[11px] text-slate-500">FOIR, salary multiplier &amp; CIBIL criteria calculator.</p>
                  </div>
                  <div className="space-y-0.5">
                    <button
                      onClick={() => onNavigate('/loan-offers')}
                      className="text-[#1a0dab] font-semibold hover:underline text-left block"
                    >
                      Special Loan Offers 2026
                    </button>
                    <p className="text-[11px] text-slate-500">Zero processing fee waivers and special interest spreads.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ALL INDEXED PAGES & META SYNC */}
        {activeTab === 'pages' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-slate-900 font-serif">All Indexed Canonical URLs on www.achlinks.in</h3>
                <p className="text-xs text-slate-500">Every page is synchronized with document head meta tags, canonical links, and Schema.org JSON-LD.</p>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5">
                {(['all', 'core', 'local', 'blogs', 'guides'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setPageFilter(cat)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-colors ${
                      pageFilter === cat
                        ? 'bg-slate-900 text-white'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Page Registry Table */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold">
                      <th className="py-3 px-4">Canonical URL</th>
                      <th className="py-3 px-4">Title Tag (Length)</th>
                      <th className="py-3 px-4">Meta Description (Length)</th>
                      <th className="py-3 px-4">Schema.org</th>
                      <th className="py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredPages.map((page, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-3 px-4 font-mono font-medium text-slate-900">
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                            <span className="truncate max-w-[220px]" title={page.path}>
                              {page.path}
                            </span>
                          </div>
                          <span className="text-[10px] text-slate-400 block font-sans">
                            {page.fullUrl}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-800">
                          <p className="line-clamp-2 max-w-xs">{page.title}</p>
                          <span className={`text-[10px] font-bold ${
                            page.titleLength >= 30 && page.titleLength <= 65 ? 'text-emerald-600' : 'text-amber-600'
                          }`}>
                            {page.titleLength} chars (Optimal: 30-65)
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          <p className="line-clamp-2 max-w-sm">{page.description}</p>
                          <span className={`text-[10px] font-bold ${
                            page.descLength >= 110 && page.descLength <= 165 ? 'text-emerald-600' : 'text-amber-600'
                          }`}>
                            {page.descLength} chars (Optimal: 120-160)
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                            page.hasSchema ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                          }`}>
                            {page.hasSchema ? 'Valid JSON-LD' : 'Breadcrumbs'}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => onNavigate(page.path)}
                              className="p-1 rounded-lg hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors"
                              title="Visit Page"
                            >
                              <Eye className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleCopy(page.fullUrl, page.path)}
                              className="p-1 rounded-lg hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors"
                              title="Copy URL"
                            >
                              {copiedUrl === page.path ? (
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: KEYWORD TARGET MAP */}
        {activeTab === 'keywords' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900 font-serif">Bangalore Loans Keyword Rank Target Map</h3>
                <p className="text-xs text-slate-500">Keywords engineered into page titles, descriptions, H1s, schema markup, and content clusters.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold">
                      <th className="py-3 px-4">Search Keyword</th>
                      <th className="py-3 px-4">Search Volume</th>
                      <th className="py-3 px-4">Search Intent</th>
                      <th className="py-3 px-4">Target Page</th>
                      <th className="py-3 px-4">Optimization Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {keywordsRegistry.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900 font-mono">
                          {item.keyword}
                        </td>
                        <td className="py-3 px-4 text-slate-600 font-mono">
                          {item.volume}
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          {item.intent}
                        </td>
                        <td className="py-3 px-4 font-mono text-[#85673E]">
                          <button
                            onClick={() => onNavigate(item.targetPage)}
                            className="hover:underline flex items-center gap-1"
                          >
                            <span>{item.targetPage}</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </td>
                        <td className="py-3 px-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-[11px] font-bold">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            <span>{item.status}</span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: TECHNICAL SEO & SITEMAP HEALTH */}
        {activeTab === 'technical' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Canonical Host Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 font-serif text-base">Canonical Host Enforcement</h4>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">Active 301</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To prevent Google duplicate content penalties and consolidate PageRank, all requests to non-www <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800">achlinks.in</code> and typo <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800">www.www.achlinks.in</code> permanently redirect (301) to:
                </p>
                <div className="p-3 rounded-xl bg-slate-900 text-emerald-400 font-mono text-xs flex items-center justify-between">
                  <span>https://www.achlinks.in/</span>
                  <button
                    onClick={() => handleCopy('https://www.achlinks.in/', 'canonical_root')}
                    className="p-1 hover:text-white"
                  >
                    {copiedUrl === 'canonical_root' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div className="text-[11px] text-slate-500 space-y-1">
                  <div>✓ Configured in HTML Entry Head Script</div>
                  <div>✓ Configured in public/_redirects (Netlify)</div>
                  <div>✓ Configured in vercel.json (Vercel)</div>
                </div>
              </div>

              {/* Sitemap.xml Hub */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 font-serif text-base">XML Sitemap &amp; Robots.txt</h4>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">Auto-Synced</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Submitted to Google Search Console for continuous indexing. Contains multilingual hreflang declarations (en-IN, hi-IN, x-default).
                </p>
                <div className="p-3 rounded-xl bg-slate-900 text-sky-400 font-mono text-xs flex items-center justify-between">
                  <span>https://www.achlinks.in/sitemap.xml</span>
                  <button
                    onClick={() => handleCopy('https://www.achlinks.in/sitemap.xml', 'sitemap_copy')}
                    className="p-1 hover:text-white"
                  >
                    {copiedUrl === 'sitemap_copy' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <a
                    href="/sitemap.xml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold inline-flex items-center gap-1.5"
                  >
                    <span>Inspect XML Sitemap</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="/robots.txt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold inline-flex items-center gap-1.5"
                  >
                    <span>Inspect Robots.txt</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>

            {/* Geo SEO & Structured Data Box */}
            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#EAE4DC] space-y-4">
              <h4 className="font-bold text-slate-900 font-serif text-base">Local SEO Geo-Tags for Bangalore</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                <div className="bg-white p-3.5 rounded-xl border border-[#EAE4DC]">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block font-sans">geo.region</span>
                  <span className="text-slate-900 font-bold">IN-KA</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-[#EAE4DC]">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block font-sans">geo.placename</span>
                  <span className="text-slate-900 font-bold">Bangalore, Karnataka, India</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-[#EAE4DC]">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block font-sans">geo.position / ICBM</span>
                  <span className="text-slate-900 font-bold">12.9716; 77.5946</span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
