# Portfolio Gallery

A modern portfolio website built with React, TypeScript, and Tailwind CSS, featuring a responsive gallery and serverless contact form.

## Features

- 🎨 **Modern Design**: Clean, professional interface with responsive layouts
- 📱 **Mobile-First**: Fully responsive design that works on all devices
- 🖼️ **Portfolio Gallery**: Showcase your work with a beautiful, interactive gallery
- 📬 **Contact Form**: Serverless contact form using AWS Lambda and SES
- 🚀 **Fast Loading**: Built with Vite for optimal performance
- 🎯 **Type-Safe**: Written in TypeScript for better reliability
- 💅 **Styled with Tailwind**: Modern utility-first CSS framework

## Tech Stack

- **Frontend**:
  - React
  - TypeScript
  - Tailwind CSS
  - Vite
  - React Query
  - Zod for validation

- **Backend**:
  - AWS Lambda
  - AWS SES (Simple Email Service)
  - AWS API Gateway

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/andygrillo/PortfolioGallery.git
cd PortfolioGallery
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
PortfolioGallery/
├── client/                # Frontend React application
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utility functions
│   └── index.html        # HTML entry point
├── lambda/               # AWS Lambda functions
│   └── contact-form/     # Contact form handler
└── shared/              # Shared types and schemas
```

## Deployment

### Frontend

The site is automatically deployed to GitHub Pages using GitHub Actions. Any push to the main branch triggers a new deployment.

Current live site: [https://andygrillo.github.io/PortfolioGallery/](https://andygrillo.github.io/PortfolioGallery/)

### Backend

The contact form backend is deployed on AWS Lambda. For deployment instructions, see [lambda/contact-form/DEPLOYMENT.md](lambda/contact-form/DEPLOYMENT.md).

## Contact Form

The contact form allows visitors to send messages directly to your email. When a visitor submits the form:

1. The form data is validated on the client side
2. The request is sent to AWS API Gateway
3. AWS Lambda processes the request
4. AWS SES sends an email with the form contents
5. A success message is shown to the visitor

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.