This is a **Next.js Dashboard Application** designed to provide a modern and responsive user interface for managing and visualizing data. The application is built with **Next.js**, **TypeScript**, and **Tailwind CSS**, ensuring scalability, performance, and maintainability.

## Features

- **Authentication**: Secure login and session management using `next-auth`.
- **Dashboard**: A dynamic dashboard for data visualization and management.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS.
- **Server-Side Rendering (SSR)**: Optimized for SEO and performance.
- **Middleware**: Custom middleware for route protection and request handling.
- **Static Assets**: Efficient handling of static assets like images and icons.

## Project Structure

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/nextjs-dashboard.git
   cd nextjs-dashboard
   ```

2. Install dependencies:
   npm install

# or

yarn install 3. Create a .env file in the root directory and configure the required environment variables (e.g., database connection, authentication secrets).
Development
Start the development server:
npm run dev

# or

yarn dev
Start the production server:

npm start

# or

yarn start

Authentication
This application uses next-auth for authentication. You can configure providers and callbacks in auth.config.ts.

Middleware
Custom middleware is implemented in middleware.ts to handle route protection and request processing.

Styling
The application uses Tailwind CSS for styling. You can customize the styles in tailwind.config.ts.

Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and open a pull request.

Sample user to login:
email: user@nextmail.com
Password: 123456
