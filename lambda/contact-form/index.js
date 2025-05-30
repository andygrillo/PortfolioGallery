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

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS,POST',
  'Access-Control-Allow-Headers': 'Content-Type'
};

exports.handler = async (event) => {
  console.log('Event:', JSON.stringify(event, null, 2));

  // Handle OPTIONS request for CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    console.log('Handling OPTIONS request');
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ message: 'OK' })
    };
  }

  try {
    console.log('Handling POST request');
    // Parse request body
    const body = JSON.parse(event.body);
    console.log('Request body:', body);
    
    // Validate the request data
    const validatedData = contactMessageSchema.parse(body);
    console.log('Validated data:', validatedData);
    
    // Prepare email parameters
    const emailParams = {
      Source: `"${validatedData.name}" <andresmeira@gmail.com>`, // Verified email with sender's name
      Destination: {
        ToAddresses: ['andresmeira@gmail.com']
      },
      ReplyToAddresses: [validatedData.email], // Set reply-to as sender's email
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
    console.log('Sending email');
    await ses.sendEmail(emailParams).promise();
    console.log('Email sent successfully');
    
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
        message: error.name === 'ZodError' ? 'Invalid request data' : 'Internal server error',
        error: error.message
      })
    };
  }
};