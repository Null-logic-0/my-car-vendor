📦 my-car-vendor

A simple NestJS application using SQLite with built-in authentication and reporting features. Built as a foundational backend for managing users and car reports.


✨ Features
✅ Authentication

Signup, signin with session cookies

Secure password hashing

👤 User Management

Get all users

Update user

Delete user

🚗 Car Report Management

Create and retrieve car reports

Filter reports by:

Year

Price

Latitude & Longitude proximity

📦 SQLite database for easy setup

⚙️ ValidationPipe for request data validation

🔐 Session-based auth using cookie-session

📁 Environment-specific configs (.env.development, .env.test, etc.)

📂 Tech Stack
Backend: NestJS

ORM: TypeORM

Database: SQLite

Validation: class-validator

Session: cookie-session

🚀 Getting Started

# Install dependencies
    npm install

# Run in development
    npm run start:dev
