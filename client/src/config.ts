export const config = {
  apiEndpoint: process.env.NODE_ENV === 'production'
    ? 'https://YOUR_API_GATEWAY_ID.execute-api.YOUR_REGION.amazonaws.com/prod'
    : 'http://localhost:3001'
};