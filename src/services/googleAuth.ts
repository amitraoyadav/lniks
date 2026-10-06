/**
 * Google OAuth Visitor Flow has been removed.
 * Leads now submit directly to the Google Apps Script /exec endpoint without user authentication.
 */
export const getAccessToken = (): string | null => null;
export const googleSignIn = async () => null;
export const googleSignOut = async () => {};
export const initAuth = () => () => {};
