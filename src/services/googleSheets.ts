import { LeadFormData } from '../types';

/**
 * EXACT GOOGLE APPS SCRIPT WEB APP ENDPOINT FOR GROUP ACH (https://www.achlinks.in/)
 * The ONLY endpoint used for submitting website leads to Google Sheets.
 * Direct POST via URLSearchParams • No Google OAuth • No docs.google.com direct writes
 */
export const GOOGLE_APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxdfz99MLVqsQnxJmC33d2TXQEVS4yThL2P88PP-nTIv0MCwl3YQ3m_tXUWjT8PXseo/exec';

export const LOCAL_STORAGE_KEY_LEADS = 'group_ach_leads_queue';

export interface StoredLead extends LeadFormData {
  id: string;
  createdAt: string;
  syncedToSheet: boolean;
  syncedAt?: string;
}

export interface AppsScriptLeadPayload {
  name: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  message: string;
  source: string;
  page: string;
}

/**
 * Submit lead data to Google Apps Script Web App endpoint using POST with URLSearchParams.
 * This allows the Apps Script to receive the values directly through e.parameter.
 */
export async function submitLeadToGoogleSheets(lead: LeadFormData): Promise<{
  success: boolean;
  message: string;
}> {
  // Format service name
  let serviceName = 'Home Loan';
  if (lead.loanType === 'loan_against_property' || (lead.loanType as string) === 'lap') {
    serviceName = 'Loan Against Property';
  } else if (lead.loanType) {
    serviceName = String(lead.loanType);
  }

  // Construct readable message with requested loan amount if present
  let messageContent = lead.message || lead.propertyType || '';
  if (lead.loanAmount && !messageContent.includes(String(lead.loanAmount))) {
    const formattedAmt =
      typeof lead.loanAmount === 'number'
        ? `₹${lead.loanAmount.toLocaleString('en-IN')}`
        : lead.loanAmount;
    messageContent = messageContent
      ? `${messageContent} (Requested Loan: ${formattedAmt})`
      : `Requested Loan: ${formattedAmt}`;
  }

  const pageUrl = typeof window !== 'undefined' ? window.location.href : 'https://www.achlinks.in/';

  // Use URLSearchParams as required
  const body = new URLSearchParams();
  body.append('name', lead.fullName || '');
  body.append('phone', lead.phone ? lead.phone.replace(/\s+/g, '') : '');
  body.append('email', lead.email || '');
  body.append('city', lead.cityPincode || lead.city || 'Bangalore');
  body.append('service', serviceName);
  body.append('message', messageContent || 'Website Lead Inquiry');
  body.append('source', lead.utmSource || lead.leadSource || 'Website');
  body.append('page', pageUrl);

  // Debugging console logging as requested
  console.log('[Lead Submission] Form data before submission:', {
    name: body.get('name'),
    phone: body.get('phone'),
    email: body.get('email'),
    city: body.get('city'),
    service: body.get('service'),
    message: body.get('message'),
    source: body.get('source'),
    page: body.get('page'),
  });
  console.log('[Lead Submission] Apps Script URL:', GOOGLE_APPS_SCRIPT_URL);

  try {
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      body: body,
      mode: 'no-cors',
    });

    console.log('[Lead Submission] Request status:', response.status, response.type);
    console.log('[Lead Submission] Response:', response);

    return {
      success: true,
      message: 'Thank you! Your request has been submitted successfully.',
    };
  } catch (err: any) {
    console.error('[Lead Submission] Error submitting lead:', err);
    return {
      success: false,
      message: 'Unable to submit your request. Please try again.',
    };
  }
}

/**
 * Persist lead in local storage queue so it can be inspected or exported to CSV anytime.
 */
export function enqueueLead(lead: LeadFormData): StoredLead {
  const storedLead: StoredLead = {
    ...lead,
    id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    createdAt: new Date().toISOString(),
    syncedToSheet: false,
  };

  try {
    const existing = getStoredLeads();
    const updated = [storedLead, ...existing].slice(0, 500);
    localStorage.setItem(LOCAL_STORAGE_KEY_LEADS, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to store lead locally:', err);
  }

  return storedLead;
}

/**
 * Retrieve all leads stored locally in the browser queue.
 */
export function getStoredLeads(): StoredLead[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY_LEADS);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

/**
 * Mark a lead as synced after successful submission.
 */
export function markLeadAsSynced(leadId: string): void {
  try {
    const leads = getStoredLeads();
    const updated = leads.map((l) =>
      l.id === leadId
        ? {
            ...l,
            syncedToSheet: true,
            syncedAt: new Date().toISOString(),
          }
        : l
    );
    localStorage.setItem(LOCAL_STORAGE_KEY_LEADS, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to mark lead as synced:', err);
  }
}

// ==========================================
// BACKWARD COMPATIBILITY ALIASES
// ==========================================
export type SubmissionState =
  | 'idle'
  | 'Submitting...'
  | 'Lead submitted successfully'
  | 'Submission failed'
  | 'Invalid Google Apps Script URL';

export function getAppsScriptUrl(): string {
  return GOOGLE_APPS_SCRIPT_URL;
}

export function validateAppsScriptUrl(url: string): { isValid: boolean; error?: string } {
  if (!url || !url.trim()) {
    return { isValid: false, error: 'Please enter your Google Apps Script Web App URL.' };
  }
  const trimmed = url.trim();
  if (trimmed.includes('docs.google.com')) {
    return { isValid: false, error: APPS_SCRIPT_DOCS_ERROR };
  }
  const pattern = /^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec(\?.*)?$/;
  if (!pattern.test(trimmed)) {
    return { isValid: false, error: APPS_SCRIPT_INVALID_ERROR };
  }
  return { isValid: true };
}

export function saveAppsScriptUrl(_url: string): { success: boolean; error?: string } {
  return { success: true };
}

export function isSyncLinkLocked(): boolean {
  return true;
}

export function unlockSyncConfig() {}

export function removeFixedSyncConfig() {}

export function getFixedSheetViewUrl() {
  return '';
}

export const APPS_SCRIPT_DOCS_ERROR =
  'Please enter your Google Apps Script Web App URL ending with /exec, not the Google Sheet view/edit URL.';

export const APPS_SCRIPT_INVALID_ERROR =
  'Invalid Google Apps Script URL. Accept only URLs matching: https://script.google.com/macros/s/.../exec';

export async function submitLeadToAppsScript(lead: StoredLead): Promise<{
  state: SubmissionState;
  success: boolean;
  message: string;
}> {
  const res = await submitLeadToGoogleSheets(lead);
  if (res.success) {
    markLeadAsSynced(lead.id);
    return {
      state: 'Lead submitted successfully',
      success: true,
      message: 'Thank you! Your request has been submitted successfully.',
    };
  } else {
    return {
      state: 'Submission failed',
      success: false,
      message: 'Unable to submit your request. Please try again.',
    };
  }
}

export async function syncLeadToFixedUrl(lead: StoredLead) {
  const res = await submitLeadToGoogleSheets(lead);
  if (res.success) markLeadAsSynced(lead.id);
  return res;
}

export async function syncAllPendingLeadsToFixedUrl() {
  const leads = getStoredLeads();
  const pending = leads.filter((l) => !l.syncedToSheet);
  let successCount = 0;
  let failCount = 0;

  for (const lead of pending) {
    const res = await submitLeadToGoogleSheets(lead);
    if (res.success) {
      markLeadAsSynced(lead.id);
      successCount++;
    } else {
      failCount++;
    }
  }

  return { successCount, failCount };
}

/**
 * Google Apps Script Reference Code for the user's Google Sheet
 */
export const DEFAULT_APPS_SCRIPT_CODE = `function doPost(e) {
  try {
    // Read parameters from URLSearchParams (e.parameter) with fallback to JSON
    var data = e.parameter || {};
    if ((!data.name && !data.phone) && e.postData && e.postData.contents) {
      try {
        var parsed = JSON.parse(e.postData.contents);
        data = Object.assign({}, data, parsed);
      } catch (err) {}
    }

    // Target the active spreadsheet and tab
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName("Leads");

    // If 'Leads' tab does not exist, use active sheet and rename it
    if (!sheet) {
      sheet = spreadsheet.getActiveSheet();
      if (sheet.getName() === "Sheet1") {
        sheet.setName("Leads");
      }
    }

    // Auto-create formatted headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      var headers = [
        "Timestamp",
        "Name",
        "Phone",
        "Email",
        "City",
        "Service",
        "Message",
        "Source",
        "Page"
      ];
      sheet.appendRow(headers);
      sheet.getRange(1, 1, 1, headers.length)
        .setFontWeight("bold")
        .setBackground("#2F483E")
        .setFontColor("#FFFFFF");
      sheet.setFrozenRows(1);
    }

    // Append lead row
    sheet.appendRow([
      new Date(),
      data.name || "",
      data.phone || "",
      data.email || "",
      data.city || "",
      data.service || "",
      data.message || "",
      data.source || "Website",
      data.page || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: "Lead recorded successfully"
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}`;
