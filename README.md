# Hashnode Clone

This repository provides a fully functional clone of Hashnode, a popular online publishing platform. It's built using TypeScript for strong typing, Cloudflare for fast and secure hosting, Prisma for database management, Postgres for data persistence, React for the frontend, and Tailwind for styling.

## Features

- Authentication and user management
- Content creation and editing
- Customizable user profiles
- Tag-based article organization
- Advanced search and filtering

## Technologies Used

- TypeScript
- Cloudflare
- Prisma
- Postgres
- React
- Tailwind
- Hono
- Zod
- Axios
- Wrangler

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/hothead01th/hashnode-clone.git
cd hashnode-clone
```

2. Install dependencies:
```bash
npm install
```
```bash
npm run dev
```

3. Configure environment variables:
- Copy `.env.example` to `.env`
- Update database credentials and API keys

4. Set up the database:
```bash
npx prisma migrate dev
npx prisma generate
```

5. Start development server:
```bash
npm run dev
```

6. Deploy to Cloudflare:
```bash
npm run deploy
```
