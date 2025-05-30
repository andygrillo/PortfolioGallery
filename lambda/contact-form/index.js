const { z } = require('zod');
const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'us-east-1' }); // Update with your region

// Contact message schema validation
const contactMessageSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  projectType: z.string().min(1),
  message: z.string().min(1)
});

// Get allowed origin based on environment
const getAllowedOrigin = () => {
  const origin = process.env.NODE_ENV === 'production'
    ? 'https://andygrillo.github.io'
    : 'http://localhost:5173';
  return origin;
};

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': getAllowedOrigin(),
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Credentials': 'true'
};

exports.handler = async (event) => {
  // Handle OPTIONS request for CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: ''
    };
  }

  try {
    // Parse request body
    const body = JSON.parse(event.body);
    
    // Validate the request data
    const validatedData = contactMessageSchema.parse(body);
    
    // Prepare email parameters
    const emailParams = {
      Source: 'andresmeira@gmail.com', // This email must be verified in SES
      Destination: {
        ToAddresses: ['andresmeira@gmail.com']
      },
      Message: {
        Subject: {
          Data: `New Contact Form Submission: ${validatedData.projectType}`
        },
        Body: {
          Text: {
            Data: `
Name: ${validatedData.name}
Email: ${validatedData.email}
Project Type: ${validatedData.projectType}

Message:
${validatedData.message}
            `
          }
        }
      }
    };
    
    // Send email
    await ses.sendEmail(emailParams).promise();
    
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({
        message: 'Message sent successfully'
      })
    };
  } catch (error) {
    console.error('Error:', error);
    
    return {
      statusCode: error.name === 'ZodError' ? 400 : 500,
      headers: corsHeaders,
      body: JSON.stringify({
        message: error.name === 'ZodError' ? 'Invalid request data' : 'Internal server error'
      })
    };
  }
};