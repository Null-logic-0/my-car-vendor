📦 my-car-vendor
A simple and extensible NestJS + SQLite application using TypeORM. Features include authentication, user management, and reporting with location and pricing filters — ideal for car dealership or marketplace backends.

✨ Features
✅ Authentication

Signup/signin using session cookies

Passwords hashed securely

👤 User Management

Get all users

Update and delete users

🚗 Car Report System

Create reports

Query reports filtered by:

Year

Price

Latitude & Longitude

⚙️ TypeORM Integration

Entity-based data modeling (User, Report)

Environment-based configuration (.env)

CLI support for migrations

🗃️ Database

SQLite (development & test)

🧪 Validation

Global ValidationPipe to whitelist and validate input

🔐 Session Management

cookie-session based session handling

📂 Tech Stack
Backend: NestJS

ORM: TypeORM

Database: SQLite

Validation: class-validator

Session: cookie-session


🛠 Setup
# Install dependencies
    npm install

# Run the app in development mode
    npm run start:dev

