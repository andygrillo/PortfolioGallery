# Contact Form Lambda Deployment Guide

## 1. AWS SES (Simple Email Service) Setup

1. Verify your email in AWS SES:
   - Go to AWS SES Console
   - Click "Verified identities"
   - Click "Create identity"
   - Choose "Email address"
   - Enter: andresmeira@gmail.com
   - Click "Create identity"
   - Check your email and click the verification link

2. If your account is in sandbox mode:
   - You can only send to verified email addresses
   - Request production access if needed through SES Console

## 2. Lambda Function Setup

1. Create a new Lambda function:
   ```bash
   # Install dependencies
   cd lambda/contact-form
   npm install

   # Create zip for deployment
   zip -r function.zip ./*
   ```

2. Create Lambda function in AWS Console:
   - Name: `portfolio-contact-form`
   - Runtime: Node.js 18.x
   - Architecture: x86_64
   - Upload the function.zip file

3. Configure IAM Role:
   - Add the following policy to your Lambda's role:
   ```json
   {
       "Version": "2012-10-17",
       "Statement": [
           {
               "Effect": "Allow",
               "Action": [
                   "ses:SendEmail",
                   "ses:SendRawEmail"
               ],
               "Resource": "*"
           }
       ]
   }
   ```

## 3. API Gateway Setup

1. Create new REST API:
   - Name: `portfolio-api`
   - Endpoint Type: Regional

2. Create resource and method:
   - Create resource: `/contact`
   - Create POST method:
     - Integration type: Lambda Function
     - Lambda Function: portfolio-contact-form
     - Use Lambda Proxy integration: Yes

3. Enable CORS:
   - Go to the `/contact` resource
   - Click "Enable CORS"
   - Add the following headers:
     - Access-Control-Allow-Origin: 'https://andygrillo.github.io'
     - Access-Control-Allow-Headers: 'Content-Type'
     - Access-Control-Allow-Methods: 'POST'

4. Deploy API:
   - Create new stage: `prod`
   - Note the API endpoint URL

## 4. Update Frontend Configuration

1. Update the API endpoint in `client/src/config.ts`:
   ```typescript
   export const config = {
     apiEndpoint: process.env.NODE_ENV === 'production'
       ? 'https://YOUR_API_ID.execute-api.YOUR_REGION.amazonaws.com/prod'
       : 'http://localhost:3001'
   };
   ```

## Security Considerations

1. Set up AWS WAF to protect your API from abuse
2. Consider implementing rate limiting
3. Monitor SES sending limits and quotas
4. Ensure proper IAM roles and permissions
5. Monitor Lambda and API Gateway metrics

## Testing

1. Test the endpoint:
   ```bash
   curl -X POST https://YOUR_API_ID.execute-api.YOUR_REGION.amazonaws.com/prod/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test User","email":"test@example.com","projectType":"Test","message":"Test message"}'
   ```

2. Verify that you receive the test email at andresmeira@gmail.com

## Monitoring

1. Set up CloudWatch Alarms for:
   - Lambda errors
   - API Gateway 4xx/5xx errors
   - SES bounces and complaints

2. Configure logging:
   - Enable detailed CloudWatch logs
   - Set up log retention periods
   - Consider using X-Ray for tracing