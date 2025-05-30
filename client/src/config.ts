export const config = {
  apiEndpoint: process.env.NODE_ENV === 'production'
    ? 'https://uc00uuzw02.execute-api.us-east-1.amazonaws.com/prod'
    : 'http://localhost:3001'
};