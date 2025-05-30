export const config = {
  apiEndpoint: process.env.NODE_ENV === 'production'
    ? process.env.VITE_API_ENDPOINT
    : 'http://localhost:3001'
};