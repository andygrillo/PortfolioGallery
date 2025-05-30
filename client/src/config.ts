export const config = {
  apiEndpoint: import.meta.env.VITE_API_ENDPOINT || 'http://localhost:3001',
  hcaptchaSiteKey: import.meta.env.VITE_HCAPTCHA_SITE_KEY || '10000000-ffff-ffff-ffff-000000000001'
};