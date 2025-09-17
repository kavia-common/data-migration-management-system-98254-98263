 // PUBLIC_INTERFACE
 /**
  * getSettings
  * Retrieve application settings (endpoints and parameters) from localStorage.
  * Returns a structured object with defaults when not yet configured.
  */
 export function getSettings() {
   /** Retrieves saved settings or returns defaults */
   try {
     const raw = localStorage.getItem(STORAGE_KEYS.settings);
     if (!raw) return defaultSettings();
     const parsed = JSON.parse(raw);
     return normalizeSettings(parsed);
   } catch (e) {
     console.warn('Failed to parse settings from localStorage. Using defaults.', e);
     return defaultSettings();
   }
 }
 
 // PUBLIC_INTERFACE
 /**
  * saveSettings
  * Save application settings (endpoints and parameters) to localStorage.
  * @param {object} settings - { endpoints: { trigger: string, logs: string }, params: Array<{key:string,value:string}> }
  */
 export function saveSettings(settings) {
   const normalized = normalizeSettings(settings);
   localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(normalized));
   return normalized;
 }
 
 // PUBLIC_INTERFACE
 /**
  * clearSettings
  * Remove saved application settings from localStorage.
  */
 export function clearSettings() {
   localStorage.removeItem(STORAGE_KEYS.settings);
 }
 
 // PUBLIC_INTERFACE
 /**
  * getTriggerEndpoint
  * Returns the saved trigger endpoint URL or empty string if unset.
  */
 export function getTriggerEndpoint() {
   const s = getSettings();
   return s.endpoints.trigger || '';
 }
 
 // PUBLIC_INTERFACE
 /**
  * getLogsEndpoint
  * Returns the saved logs endpoint URL or empty string if unset.
  */
 export function getLogsEndpoint() {
   const s = getSettings();
   return s.endpoints.logs || '';
 }
 
 // PUBLIC_INTERFACE
 /**
  * getParamsArray
  * Returns the saved task parameters as an array of {key, value}.
  */
 export function getParamsArray() {
   const s = getSettings();
   return Array.isArray(s.params) ? s.params : [];
 }
 
 // PUBLIC_INTERFACE
 /**
  * getParamsObject
  * Returns the saved task parameters as an object { [key]: value }.
  * Values are optionally coerced to boolean/number when possible.
  * @param {Array<{key:string,value:any}>} [paramsArray] optional, defaults to settings params
  */
 export function getParamsObject(paramsArray) {
   const arr = Array.isArray(paramsArray) ? paramsArray : getParamsArray();
   const obj = {};
   arr.forEach(({ key, value }) => {
     const k = String(key || '').trim();
     if (!k) return;
     obj[k] = coerceValue(value);
   });
   return obj;
 }
 
 // PUBLIC_INTERFACE
 /**
  * addHistoryEntry
  * Append a migration action record to local history in localStorage.
  * @param {object} entry - Arbitrary object describing the action (recommended fields below)
  * Recommended shape:
  * {
  *   timestamp: ISOString,
  *   endpoint: string,
  *   method: string,
  *   requestPayload: object|string|null,
  *   httpStatus: number|null,
  *   ok: boolean,
  *   statusText: string,
  *   status: 'success'|'failed'|'pending'|'unknown',
  *   message: string,
  *   error: string|null,
  *   responseData: any
  * }
  */
 export function addHistoryEntry(entry) {
   const list = getHistory();
   const withDefaults = {
     id: generateId(),
     timestamp: new Date().toISOString(),
     status: 'unknown',
     ...entry
   };
   list.unshift(withDefaults);
   localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(list));
   // also set last status
   localStorage.setItem(STORAGE_KEYS.lastStatus, JSON.stringify(withDefaults));
   return withDefaults;
 }
 
 // PUBLIC_INTERFACE
 /**
  * getHistory
  * Returns an array of local history entries.
  */
 export function getHistory() {
   try {
     const raw = localStorage.getItem(STORAGE_KEYS.history);
     if (!raw) return [];
     const parsed = JSON.parse(raw);
     return Array.isArray(parsed) ? parsed : [];
   } catch (e) {
     console.warn('Failed to parse history from localStorage.', e);
     return [];
   }
 }
 
 // PUBLIC_INTERFACE
 /**
  * clearHistory
  * Remove all local history entries.
  */
 export function clearHistory() {
   localStorage.removeItem(STORAGE_KEYS.history);
   localStorage.removeItem(STORAGE_KEYS.lastStatus);
 }
 
 // PUBLIC_INTERFACE
 /**
  * getExternalLogs
  * Returns the last fetched backend logs snapshot (if any).
  */
 export function getExternalLogs() {
   try {
     const raw = localStorage.getItem(STORAGE_KEYS.externalLogs);
     if (!raw) return [];
     const parsed = JSON.parse(raw);
     if (Array.isArray(parsed)) return parsed;
     if (parsed && typeof parsed === 'object') return [parsed];
     return [];
   } catch (e) {
     console.warn('Failed to parse external logs snapshot from localStorage.', e);
     return [];
   }
 }
 
 // PUBLIC_INTERFACE
 /**
  * saveExternalLogs
  * Save a snapshot of backend logs to localStorage.
  * @param {Array|object} logs
  */
 export function saveExternalLogs(logs) {
   localStorage.setItem(STORAGE_KEYS.externalLogs, JSON.stringify(logs));
 }
 
 // PUBLIC_INTERFACE
 /**
  * clearExternalLogs
  * Remove the cached backend logs snapshot.
  */
 export function clearExternalLogs() {
   localStorage.removeItem(STORAGE_KEYS.externalLogs);
 }
 
 // PUBLIC_INTERFACE
 /**
  * isValidHttpUrl
  * Verify if a string is a valid http(s) URL.
  * @param {string} url
  * @returns {boolean}
  */
 export function isValidHttpUrl(url) {
   if (!url || typeof url !== 'string') return false;
   try {
     const u = new URL(url);
     return u.protocol === 'http:' || u.protocol === 'https:';
   } catch {
     return false;
   }
 }
 
 // Internal constants and helpers (not exported)
 const STORAGE_KEYS = {
   settings: 'dmms_settings',
   history: 'dmms_migration_history',
   externalLogs: 'dmms_external_logs_snapshot',
   lastStatus: 'dmms_last_status'
 };
 
 function defaultSettings() {
   return {
     endpoints: { trigger: '', logs: '' },
     params: []
   };
 }
 
 function normalizeSettings(s) {
   const base = defaultSettings();
   const endpoints = s && s.endpoints ? s.endpoints : {};
   const params = Array.isArray(s && s.params) ? s.params : [];
   return {
     endpoints: {
       trigger: typeof endpoints.trigger === 'string' ? endpoints.trigger : '',
       logs: typeof endpoints.logs === 'string' ? endpoints.logs : ''
     },
     params: params
       .map((p) => ({
         key: typeof p.key === 'string' ? p.key : '',
         value: p.value !== undefined ? p.value : ''
       }))
       // keep all rows (even empty) - UI can filter on save
   };
 }
 
 function generateId() {
   // Simple unique id
   return 'id_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
 }
 
 function coerceValue(v) {
   if (typeof v !== 'string') return v;
   const trimmed = v.trim();
   if (trimmed === 'true') return true;
   if (trimmed === 'false') return false;
   if (/^-?\d+(\.\d+)?$/.test(trimmed)) return Number(trimmed);
   return v;
 }
 
 export const STORAGE = {
   KEYS: STORAGE_KEYS
 };
