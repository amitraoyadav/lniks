import React, { useState, useEffect } from 'react';
import {
  X,
  FileSpreadsheet,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  RefreshCw,
  Trash2,
  Sparkles,
  Database,
  Globe,
  FileCode,
  Check,
  Lock,
  Unlock,
  Copy,
  Send,
  HelpCircle,
  Download,
  Terminal,
} from 'lucide-react';
import {
  getStoredLeads,
  StoredLead,
  getAppsScriptUrl,
  getFixedSheetViewUrl,
  isSyncLinkLocked,
  saveAppsScriptUrl,
  unlockSyncConfig,
  removeFixedSyncConfig,
  submitLeadToAppsScript,
  validateAppsScriptUrl,
  syncAllPendingLeadsToFixedUrl,
  DEFAULT_APPS_SCRIPT_CODE,
  enqueueLead,
  SubmissionState,
  APPS_SCRIPT_DOCS_ERROR,
  APPS_SCRIPT_INVALID_ERROR,
} from '../services/googleSheets';

interface GoogleSheetSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSyncComplete?: () => void;
}

export const GoogleSheetSyncModal: React.FC<GoogleSheetSyncModalProps> = ({
  isOpen,
  onClose,
  onSyncComplete,
}) => {
  // Config state
  const [appsScriptUrlInput, setAppsScriptUrlInput] = useState<string>('');
  const [activeUrl, setActiveUrl] = useState<string>('');
  const [isLocked, setIsLocked] = useState<boolean>(false);

  // Status state matching the exact required states
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Operation states
  const [isTestingSync, setIsTestingSync] = useState<boolean>(false);
  const [isSyncingAll, setIsSyncingAll] = useState<boolean>(false);
  const [syncingLeadId, setSyncingLeadId] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [showSetupGuide, setShowSetupGuide] = useState<boolean>(true);

  // Leads queue state
  const [storedLeads, setStoredLeads] = useState<StoredLead[]>([]);

  // Destructive Confirmation Modal
  const [confirmDialog, setConfirmDialog] = useState<{
    isOpen: boolean;
    title: string;
    description: string;
    actionType: 'disconnect_link' | 'clear_leads';
  } | null>(null);

  // Tabs: 'sheet' | 'seo'
  const [adminTab, setAdminTab] = useState<'sheet' | 'seo'>('sheet');

  useEffect(() => {
    if (!isOpen) return;

    // Load initial Apps Script URL
    const savedUrl = getAppsScriptUrl();
    const locked = isSyncLinkLocked();

    setActiveUrl(savedUrl);
    setAppsScriptUrlInput(savedUrl);
    setIsLocked(locked && Boolean(savedUrl));
    setStoredLeads(getStoredLeads());

    // Reset temporary notices
    setErrorMessage(null);
    setSuccessMessage(null);
    setSubmissionState('idle');

    // Auto-detect tab from hash
    const hash = window.location.hash.toLowerCase();
    if (hash.includes('seo')) {
      setAdminTab('seo');
    } else {
      setAdminTab('sheet');
    }
  }, [isOpen]);

  const refreshLeads = () => {
    setStoredLeads(getStoredLeads());
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(DEFAULT_APPS_SCRIPT_CODE);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 3000);
  };

  // Live input validation on change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setAppsScriptUrlInput(val);

    // Rule 5: If user enters a Google Sheets docs.google.com URL, show exact required message immediately
    if (val.trim().includes('docs.google.com')) {
      setErrorMessage(APPS_SCRIPT_DOCS_ERROR);
      setSubmissionState('Invalid Google Apps Script URL');
    } else if (errorMessage === APPS_SCRIPT_DOCS_ERROR) {
      setErrorMessage(null);
      setSubmissionState('idle');
    }
  };

  const handleSaveAndLock = () => {
    setErrorMessage(null);
    setSuccessMessage(null);

    const validation = validateAppsScriptUrl(appsScriptUrlInput);
    if (!validation.isValid) {
      setSubmissionState('Invalid Google Apps Script URL');
      setErrorMessage(validation.error || APPS_SCRIPT_INVALID_ERROR);
      return;
    }

    const saveResult = saveAppsScriptUrl(appsScriptUrlInput);
    if (!saveResult.success) {
      setSubmissionState('Submission failed');
      setErrorMessage(saveResult.error || 'Failed to save URL');
      return;
    }

    setActiveUrl(appsScriptUrlInput.trim());
    setIsLocked(true);
    setSubmissionState('idle');
    setSuccessMessage('Google Apps Script Web App URL validated and locked successfully! All website leads will post to this endpoint.');
  };

  const handleUnlock = () => {
    unlockSyncConfig();
    setIsLocked(false);
    setSuccessMessage('URL unlocked for editing. Remember to lock it after making changes.');
  };

  const handleSendTestLead = async () => {
    const urlToTest = activeUrl || appsScriptUrlInput.trim();
    const validation = validateAppsScriptUrl(urlToTest);

    if (!validation.isValid) {
      setSubmissionState('Invalid Google Apps Script URL');
      setErrorMessage(validation.error || APPS_SCRIPT_INVALID_ERROR);
      return;
    }

    // Set exact state: Submitting...
    setSubmissionState('Submitting...');
    setIsTestingSync(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    // Create real test lead record
    const testLead = enqueueLead({
      fullName: 'Demo Borrower (Test Lead)',
      phone: '+91 94825 37337',
      email: 'achgrouplink@gmail.com',
      city: 'Bangalore',
      cityPincode: 'Bangalore 560011',
      loanType: 'home_loan',
      loanAmount: 5000000,
      monthlyIncome: 125000,
      employmentType: 'salaried',
      message: 'Demo test lead verifying live Google Sheets integration via Apps Script.',
    });

    try {
      const res = await submitLeadToAppsScript(testLead);
      setSubmissionState(res.state);

      if (res.success) {
        setSuccessMessage('Lead submitted successfully! Check your Google Sheet to confirm the new row.');
      } else {
        setErrorMessage(res.message);
      }
    } catch (err: any) {
      setSubmissionState('Submission failed');
      setErrorMessage(err?.message || 'Submission failed. Please check network connection.');
    } finally {
      setIsTestingSync(false);
      refreshLeads();
    }
  };

  const handleSyncSingleLead = async (lead: StoredLead) => {
    setSyncingLeadId(lead.id);
    setSubmissionState('Submitting...');
    setErrorMessage(null);

    try {
      const res = await submitLeadToAppsScript(lead);
      setSubmissionState(res.state);

      if (res.success) {
        setSuccessMessage(`Lead "${lead.fullName}" synchronized successfully.`);
      } else {
        setErrorMessage(res.message);
      }
    } catch (err: any) {
      setSubmissionState('Submission failed');
      setErrorMessage(err?.message || 'Failed to sync lead.');
    } finally {
      setSyncingLeadId(null);
      refreshLeads();
    }
  };

  const handleSyncAllPending = async () => {
    if (!activeUrl) {
      setSubmissionState('Invalid Google Apps Script URL');
      setErrorMessage('Please save and lock your Google Apps Script Web App URL first.');
      return;
    }

    setSubmissionState('Submitting...');
    setIsSyncingAll(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const { successCount, failCount } = await syncAllPendingLeadsToFixedUrl();
      if (successCount > 0) {
        setSubmissionState('Lead submitted successfully');
        setSuccessMessage(`Successfully synced ${successCount} lead(s) to your Google Sheet.`);
        if (onSyncComplete) onSyncComplete();
      } else if (failCount > 0) {
        setSubmissionState('Submission failed');
        setErrorMessage(`Failed to sync ${failCount} lead(s). Please verify your Apps Script permissions.`);
      } else {
        setSubmissionState('idle');
        setSuccessMessage('All leads are already synchronized!');
      }
    } catch (err: any) {
      setSubmissionState('Submission failed');
      setErrorMessage(err?.message || 'Failed to sync pending leads.');
    } finally {
      setIsSyncingAll(false);
      refreshLeads();
    }
  };

  const handleExportCSV = () => {
    const leads = getStoredLeads();
    if (leads.length === 0) {
      alert('No leads collected yet.');
      return;
    }

    const headers = [
      'Timestamp',
      'Name',
      'Phone',
      'Email',
      'City',
      'Service',
      'Loan Amount',
      'Message',
      'Source',
      'Page',
      'Sync Status',
    ];

    const rows = leads.map((l) => [
      `"${new Date(l.createdAt).toLocaleString('en-IN')}"`,
      `"${l.fullName || ''}"`,
      `"${l.phone || ''}"`,
      `"${l.email || ''}"`,
      `"${l.cityPincode || l.city || 'Bangalore'}"`,
      `"${l.loanType === 'home_loan' ? 'Home Loan' : 'Loan Against Property'}"`,
      `"${l.loanAmount || ''}"`,
      `"${(l.message || l.propertyType || '').replace(/"/g, '""')}"`,
      `"${l.utmSource || l.leadSource || 'achlinks.in'}"`,
      `"https://achlinks.in/"`,
      `"${l.syncedToSheet ? 'Synced' : 'Queued'}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `group_ach_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleConfirmAction = () => {
    if (!confirmDialog) return;

    if (confirmDialog.actionType === 'disconnect_link') {
      removeFixedSyncConfig();
      setActiveUrl('');
      setAppsScriptUrlInput('');
      setIsLocked(false);
      setSubmissionState('idle');
      setSuccessMessage('Google Apps Script URL disconnected.');
    } else if (confirmDialog.actionType === 'clear_leads') {
      localStorage.removeItem('group_ach_leads_queue');
      refreshLeads();
      setSuccessMessage('Locally stored lead queue cleared.');
    }

    setConfirmDialog(null);
  };

  if (!isOpen) return null;

  const unsyncedCount = storedLeads.filter((l) => !l.syncedToSheet).length;
  const syncedCount = storedLeads.filter((l) => l.syncedToSheet).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden my-6 animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 text-white flex items-center justify-between border-b border-emerald-900/50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-serif font-bold text-lg text-white">Google Sheets Lead Integration</span>
                <span className="text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  Apps Script Web App
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Direct POST Integration to Google Sheets • No Google OAuth • Secure Lead Dispatch
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            title="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3 space-x-2">
          <button
            onClick={() => setAdminTab('sheet')}
            className={`flex items-center space-x-2 pb-3 px-3 text-sm font-semibold border-b-2 transition-colors ${
              adminTab === 'sheet'
                ? 'border-emerald-700 text-emerald-800'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>Google Apps Script Endpoint</span>
            {unsyncedCount > 0 && (
              <span className="ml-1.5 px-2 py-0.5 bg-amber-500 text-white text-[11px] font-bold rounded-full">
                {unsyncedCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setAdminTab('seo')}
            className={`flex items-center space-x-2 pb-3 px-3 text-sm font-semibold border-b-2 transition-colors ${
              adminTab === 'seo'
                ? 'border-emerald-700 text-emerald-800'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>SEO Health & Indexing Dashboard</span>
          </button>
        </div>

        {/* State Banner: Submitting... / Lead submitted successfully / Submission failed / Invalid Google Apps Script URL */}
        {submissionState !== 'idle' && (
          <div
            className={`mx-6 mt-4 p-3 rounded-xl flex items-center justify-between text-xs font-semibold ${
              submissionState === 'Submitting...'
                ? 'bg-blue-50 border border-blue-200 text-blue-800'
                : submissionState === 'Lead submitted successfully'
                ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                : 'bg-red-50 border border-red-200 text-red-800'
            }`}
          >
            <div className="flex items-center space-x-2">
              {submissionState === 'Submitting...' && <RefreshCw className="w-4 h-4 animate-spin text-blue-600" />}
              {submissionState === 'Lead submitted successfully' && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
              {(submissionState === 'Submission failed' || submissionState === 'Invalid Google Apps Script URL') && (
                <AlertCircle className="w-4 h-4 text-red-500" />
              )}
              <span>Status: <strong>{submissionState}</strong></span>
            </div>
            <button
              onClick={() => setSubmissionState('idle')}
              className="text-[11px] underline opacity-75 hover:opacity-100"
            >
              Clear
            </button>
          </div>
        )}

        {/* Explicit Error Message */}
        {errorMessage && (
          <div className="mx-6 mt-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-start space-x-3 text-red-800 text-xs">
            <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
            <div className="flex-1 leading-relaxed">
              <strong className="font-semibold">Notice: </strong>
              {errorMessage}
            </div>
            <button
              onClick={() => setErrorMessage(null)}
              className="text-red-400 hover:text-red-700 text-xs font-bold"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Explicit Success Message */}
        {successMessage && (
          <div className="mx-6 mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start space-x-3 text-emerald-900 text-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div className="flex-1 font-medium">{successMessage}</div>
            <button
              onClick={() => setSuccessMessage(null)}
              className="text-emerald-500 hover:text-emerald-800 text-xs font-bold"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-800">
          {adminTab === 'sheet' ? (
            <>
              {/* CURRENT ENDPOINT STATUS CARD */}
              <div
                className={`p-5 rounded-2xl border transition-all ${
                  isLocked && activeUrl
                    ? 'bg-emerald-50/70 border-emerald-300 ring-1 ring-emerald-500/20'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start space-x-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isLocked && activeUrl
                          ? 'bg-emerald-600 text-white shadow-md'
                          : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {isLocked && activeUrl ? <Lock className="w-5 h-5" /> : <Unlock className="w-5 h-5" />}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-bold text-slate-900 text-base">
                          {isLocked && activeUrl
                            ? 'Google Apps Script Web App Active'
                            : 'Configure Google Apps Script Endpoint'}
                        </h4>
                        {isLocked && activeUrl && (
                          <span className="bg-emerald-100 text-emerald-800 font-bold text-[11px] px-2.5 py-0.5 rounded-full border border-emerald-300">
                            Active & Ready
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5">
                        {isLocked && activeUrl
                          ? 'All incoming leads from https://achlinks.in/ are automatically dispatched to your /exec endpoint.'
                          : 'Configure your Google Apps Script Web App URL below to begin receiving leads in your spreadsheet.'}
                      </p>
                    </div>
                  </div>

                  {/* Actions for active URL */}
                  {isLocked && activeUrl && (
                    <div className="flex items-center space-x-2 self-end sm:self-center">
                      <button
                        onClick={handleSendTestLead}
                        disabled={isTestingSync}
                        className="inline-flex items-center space-x-1.5 px-3 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors disabled:opacity-50"
                      >
                        <Send className={`w-3.5 h-3.5 ${isTestingSync ? 'animate-pulse' : ''}`} />
                        <span>{isTestingSync ? 'Submitting...' : 'Send Test Lead'}</span>
                      </button>
                      <button
                        onClick={handleUnlock}
                        className="inline-flex items-center space-x-1.5 px-3 py-2 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg transition-colors shadow-sm"
                        title="Unlock to edit URL"
                      >
                        <Unlock className="w-3.5 h-3.5" />
                        <span>Edit URL</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Show Active Target URL */}
                {isLocked && activeUrl && (
                  <div className="mt-4 pt-3 border-t border-emerald-200/60 flex items-center justify-between text-xs text-slate-600">
                    <div className="truncate max-w-xl">
                      <span className="font-semibold text-slate-700">Endpoint: </span>
                      <code className="bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-900 select-all font-mono text-[11px]">
                        {activeUrl}
                      </code>
                    </div>
                    <button
                      onClick={() =>
                        setConfirmDialog({
                          isOpen: true,
                          title: 'Disconnect Apps Script URL?',
                          description:
                            'This will remove the current Google Apps Script endpoint. New leads will remain safely saved in the website local queue until reconfigured.',
                          actionType: 'disconnect_link',
                        })
                      }
                      className="text-red-600 hover:text-red-700 font-semibold hover:underline text-[11px] shrink-0 ml-3"
                    >
                      Disconnect
                    </button>
                  </div>
                )}
              </div>

              {/* INPUT FORM: GOOGLE APPS SCRIPT WEB APP URL (Visible when unlocked or empty) */}
              {(!isLocked || !activeUrl) && (
                <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                        GOOGLE APPS SCRIPT WEB APP URL <span className="text-red-500">*</span>
                      </label>
                      <p className="text-xs text-slate-500">
                        Must match format:{' '}
                        <code className="text-emerald-800 bg-emerald-50 px-1 py-0.5 rounded font-mono text-[11px]">
                          https://script.google.com/macros/s/DEPLOYMENT_ID/exec
                        </code>
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowSetupGuide(!showSetupGuide)}
                      className="text-xs text-emerald-800 hover:text-emerald-950 font-semibold flex items-center space-x-1 underline"
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>{showSetupGuide ? 'Hide Instructions' : 'View Apps Script Code & Setup'}</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div className="relative">
                      <input
                        type="url"
                        value={appsScriptUrlInput}
                        onChange={handleInputChange}
                        placeholder="https://script.google.com/macros/s/AKfycb.../exec"
                        className={`w-full px-3.5 py-2.5 border rounded-xl text-xs font-mono placeholder:text-slate-400 focus:ring-2 transition-all ${
                          appsScriptUrlInput.includes('docs.google.com')
                            ? 'border-red-400 ring-2 ring-red-100 bg-red-50/20'
                            : 'border-slate-300 focus:ring-emerald-700 focus:border-emerald-700'
                        }`}
                      />
                    </div>

                    {/* Immediate guidance for docs.google.com */}
                    {appsScriptUrlInput.trim().includes('docs.google.com') && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-800 leading-relaxed">
                        <strong>Rule: </strong> {APPS_SCRIPT_DOCS_ERROR}
                      </div>
                    )}

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={handleSaveAndLock}
                        className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center space-x-2"
                      >
                        <Lock className="w-4 h-4" />
                        <span>Save & Lock Web App URL</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleSendTestLead}
                        disabled={isTestingSync || !appsScriptUrlInput.trim()}
                        className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-all flex items-center space-x-1.5 disabled:opacity-50"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>{isTestingSync ? 'Submitting...' : 'Send Test Lead'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* APPS SCRIPT CODE & DEPLOYMENT INSTRUCTIONS */}
              {showSetupGuide && (
                <div className="p-5 bg-gradient-to-br from-slate-50 to-emerald-50/30 border border-emerald-200/80 rounded-2xl space-y-4 animate-fade-in">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center space-x-2">
                      <Terminal className="w-4 h-4 text-emerald-700" />
                      <h4 className="font-bold text-slate-900 text-sm">
                        Google Apps Script Code (Ready to Deploy)
                      </h4>
                    </div>
                    <button
                      onClick={handleCopyCode}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-lg shadow-sm transition-colors self-start sm:self-auto"
                    >
                      {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedCode ? 'Code Copied!' : 'Copy Apps Script'}</span>
                    </button>
                  </div>

                  {/* Code Snippet Box */}
                  <pre className="p-3 bg-slate-900 text-emerald-400 rounded-xl text-[11px] font-mono overflow-x-auto max-h-48 border border-slate-800 leading-snug">
                    {DEFAULT_APPS_SCRIPT_CODE}
                  </pre>

                  {/* Step by step deployment */}
                  <div className="space-y-2 pt-2 border-t border-slate-200">
                    <h5 className="font-bold text-xs text-slate-900 uppercase tracking-wider">
                      Deployment Instructions:
                    </h5>
                    <ol className="text-xs text-slate-700 space-y-2 list-decimal list-inside leading-relaxed">
                      <li>
                        Open your Google Sheet (e.g. at{' '}
                        <a
                          href="https://sheets.new"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-700 font-bold underline inline-flex items-center"
                        >
                          sheets.new <ExternalLink className="w-3 h-3 ml-0.5" />
                        </a>
                        ).
                      </li>
                      <li>
                        In the top menu, click <strong>Extensions</strong> → <strong>Apps Script</strong>.
                      </li>
                      <li>
                        Delete any starter code, <strong>paste the script above</strong>, and click the disk save icon.
                      </li>
                      <li>
                        Click the blue <strong>Deploy</strong> button (top right) → choose <strong>New deployment</strong>.
                      </li>
                      <li>
                        Click the gear icon ⚙️ next to "Select type" → select <strong>Web app</strong>.
                      </li>
                      <li>
                        Set:
                        <ul className="list-disc list-inside ml-4 mt-1 space-y-1 font-mono text-[11px]">
                          <li>
                            <strong>Execute as:</strong> <span className="bg-slate-200 px-1 py-0.5 rounded text-slate-900">Me</span>
                          </li>
                          <li>
                            <strong>Who has access:</strong> <span className="bg-slate-200 px-1 py-0.5 rounded text-emerald-900 font-bold">Anyone</span>
                          </li>
                        </ul>
                      </li>
                      <li>
                        Click <strong>Deploy</strong>, copy the resulting <strong>Web app URL</strong> (ending in{' '}
                        <code className="font-bold text-emerald-800">/exec</code>), and paste it into the configuration field above.
                      </li>
                    </ol>
                  </div>

                  {/* Sheet Columns Schema */}
                  <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1.5">
                    <div className="text-xs font-bold text-slate-800">
                      Auto-Generated Column Headers (10 Columns):
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        'Timestamp',
                        'Name',
                        'Phone',
                        'Email',
                        'City',
                        'Service',
                        'Loan Amount',
                        'Message',
                        'Source',
                        'Page',
                      ].map((col, idx) => (
                        <span
                          key={col}
                          className="text-[11px] bg-slate-100 text-slate-800 px-2 py-0.5 rounded border border-slate-200 font-mono"
                        >
                          {idx + 1}. {col}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* LEADS QUEUE TABLE */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
                      <Database className="w-4 h-4 text-emerald-700" />
                      <span>Captured Website Leads ({storedLeads.length})</span>
                    </h4>
                    <span className="text-xs text-emerald-800 font-semibold bg-emerald-100 px-2 py-0.5 rounded-full">
                      {syncedCount} Synced
                    </span>
                    {unsyncedCount > 0 && (
                      <span className="text-xs text-amber-800 font-semibold bg-amber-100 px-2 py-0.5 rounded-full">
                        {unsyncedCount} Queued
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handleExportCSV}
                      disabled={storedLeads.length === 0}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-white border border-slate-300 hover:border-slate-400 text-slate-700 text-xs font-semibold rounded-lg transition-colors disabled:opacity-50"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Export CSV</span>
                    </button>

                    <button
                      onClick={handleSyncAllPending}
                      disabled={isSyncingAll || unsyncedCount === 0 || !activeUrl}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-lg shadow-sm transition-colors disabled:opacity-50"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${isSyncingAll ? 'animate-spin' : ''}`} />
                      <span>{isSyncingAll ? 'Submitting...' : `Sync Queued (${unsyncedCount})`}</span>
                    </button>

                    {storedLeads.length > 0 && (
                      <button
                        onClick={() =>
                          setConfirmDialog({
                            isOpen: true,
                            title: 'Clear Local Lead Queue?',
                            description:
                              'This will clear local browser cache. Rows already written to your Google Sheet remain untouched.',
                            actionType: 'clear_leads',
                          })
                        }
                        className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-slate-100 transition-colors"
                        title="Clear local queue"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {storedLeads.length === 0 ? (
                  <div className="p-8 text-center bg-slate-50 border border-dashed border-slate-200 rounded-2xl">
                    <FileSpreadsheet className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-slate-700">No leads recorded yet</p>
                    <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                      Any inquiries submitted on the website will be collected here and submitted directly to your Apps Script Web App.
                    </p>
                    <button
                      onClick={handleSendTestLead}
                      className="mt-3 inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Generate Sample Lead</span>
                    </button>
                  </div>
                ) : (
                  <div className="border border-slate-200 rounded-xl overflow-hidden max-h-64 overflow-y-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200 sticky top-0">
                        <tr>
                          <th className="py-2.5 px-3">Date</th>
                          <th className="py-2.5 px-3">Name</th>
                          <th className="py-2.5 px-3">Phone</th>
                          <th className="py-2.5 px-3">Product</th>
                          <th className="py-2.5 px-3">Amount</th>
                          <th className="py-2.5 px-3">Status</th>
                          <th className="py-2.5 px-3 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 font-sans">
                        {storedLeads.map((lead) => (
                          <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                            <td className="py-2 px-3 text-slate-500 whitespace-nowrap">
                              {new Date(lead.createdAt).toLocaleDateString('en-IN', {
                                day: '2-digit',
                                month: 'short',
                                hour: '2-digit',
                                minute: '2-digit',
                              })}
                            </td>
                            <td className="py-2 px-3 font-semibold text-slate-900">{lead.fullName}</td>
                            <td className="py-2 px-3 text-slate-600 font-mono text-[11px]">{lead.phone}</td>
                            <td className="py-2 px-3 text-slate-700">
                              {lead.loanType === 'home_loan' ? 'Home Loan' : 'Loan Against Property'}
                            </td>
                            <td className="py-2 px-3 font-semibold text-slate-900">
                              {typeof lead.loanAmount === 'number'
                                ? `₹${(lead.loanAmount / 100000).toFixed(1)}L`
                                : lead.loanAmount}
                            </td>
                            <td className="py-2 px-3">
                              {lead.syncedToSheet ? (
                                <span className="inline-flex items-center text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                  <Check className="w-3 h-3 mr-1 text-emerald-600" />
                                  Synced
                                </span>
                              ) : (
                                <span className="inline-flex items-center text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                                  Queued
                                </span>
                              )}
                            </td>
                            <td className="py-2 px-3 text-right">
                              {!lead.syncedToSheet && activeUrl && (
                                <button
                                  onClick={() => handleSyncSingleLead(lead)}
                                  disabled={syncingLeadId === lead.id}
                                  className="text-[11px] font-semibold text-emerald-700 hover:text-emerald-950 underline disabled:opacity-50"
                                >
                                  {syncingLeadId === lead.id ? 'Submitting...' : 'Push Now'}
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </>
          ) : (
            /* SEO Health & Indexing Dashboard */
            <div className="space-y-6">
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">achlinks.in Search Engine & Indexing Status</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Google Search Console verification tag active in &lt;head&gt; • XML Sitemap with 22 canonical URLs
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <a
                    href="/sitemap.xml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-white border border-slate-300 hover:border-emerald-600 text-slate-700 hover:text-emerald-800 text-xs font-semibold rounded-lg shadow-sm transition-colors"
                  >
                    <FileCode className="w-3.5 h-3.5 text-emerald-600" />
                    <span>View sitemap.xml</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="/robots.txt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-white border border-slate-300 hover:border-emerald-600 text-slate-700 hover:text-emerald-800 text-xs font-semibold rounded-lg shadow-sm transition-colors"
                  >
                    <FileCode className="w-3.5 h-3.5 text-slate-600" />
                    <span>View robots.txt</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Core Indexation Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Canonical URLs</div>
                  <div className="text-2xl font-bold text-slate-900 mt-1">22</div>
                  <div className="text-[11px] text-emerald-600 mt-1 flex items-center">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    100% in XML Sitemap
                  </div>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Google Verification</div>
                  <div className="text-sm font-bold text-emerald-700 mt-2 truncate font-mono">
                    9O92z6QI-fep...
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">Active in &lt;head&gt;</div>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Structured Data</div>
                  <div className="text-2xl font-bold text-slate-900 mt-1">7 Types</div>
                  <div className="text-[11px] text-slate-500 mt-1">FinancialService, FAQ, Org</div>
                </div>
              </div>

              {/* Indexable Routes Table */}
              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="p-3 bg-slate-100 border-b border-slate-200 font-bold text-xs text-slate-800">
                  Sitemap Routes (Ordered by Priority)
                </div>
                <div className="max-h-56 overflow-y-auto divide-y divide-slate-200 text-xs">
                  {[
                    { path: '/', priority: '1.0', change: 'daily', name: 'Homepage' },
                    { path: '/home-loan', priority: '0.9', change: 'weekly', name: 'Home Loan Hub' },
                    { path: '/loan-against-property', priority: '0.9', change: 'weekly', name: 'LAP Hub' },
                    { path: '/home-loan-consultant', priority: '0.9', change: 'weekly', name: 'Home Loan Consultant' },
                    { path: '/home-loan-bengaluru', priority: '0.95', change: 'daily', name: 'Bengaluru Location Hub' },
                    { path: '/loan-against-property-bangalore', priority: '0.95', change: 'daily', name: 'Bangalore LAP Hub' },
                    { path: '/home-loan-eligibility', priority: '0.8', change: 'weekly', name: 'Eligibility Calculator' },
                    { path: '/home-loan-documents', priority: '0.8', change: 'monthly', name: 'Documents Checklist' },
                    { path: '/home-loan-balance-transfer', priority: '0.8', change: 'weekly', name: 'Balance Transfer' },
                    { path: '/blog', priority: '0.8', change: 'daily', name: 'Blog Hub' },
                  ].map((r) => (
                    <div key={r.path} className="p-2.5 flex items-center justify-between hover:bg-slate-50">
                      <div>
                        <span className="font-semibold text-slate-900">{r.name}</span>
                        <span className="ml-2 font-mono text-[11px] text-slate-500">https://achlinks.in{r.path}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-slate-600">
                        <span className="text-[11px] bg-slate-100 px-2 py-0.5 rounded font-mono">P: {r.priority}</span>
                        <span className="text-[11px] text-emerald-600 font-bold">200 OK</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Google Apps Script /exec endpoint mode • Zero external tokens required</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {confirmDialog && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-xl shadow-xl border border-slate-200 max-w-sm w-full p-5 space-y-4">
            <div className="flex items-center space-x-2 text-red-600">
              <AlertCircle className="w-5 h-5" />
              <h4 className="font-bold text-slate-900">{confirmDialog.title}</h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">{confirmDialog.description}</p>
            <div className="flex items-center justify-end space-x-2 pt-2">
              <button
                onClick={() => setConfirmDialog(null)}
                className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900 font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmAction}
                className="px-4 py-1.5 text-xs bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-sm"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
