

<h1 style="font-size: 45px; font-weight: bold;">
  📚 EduAI – AI-Powered Online Learning Platform
</h1>

EduAI is an AI-driven online learning platform that allows users to instantly generate personalized courses based on any topic they want to learn. Users simply enter the course topic, choose the number of chapters, select whether to include YouTube videos, and click Generate—EduAI handles the rest.

The platform automatically creates structured, chapter-wise content using AI (Google Gemini) and attaches relevant YouTube videos for each chapter. Users can track their learning progress, mark chapters as complete, and start learning within minutes.



🚀 Features

✨ AI-Generated Courses

Enter a topic of your choice.

Specify the number of chapters.

Choose whether to include related YouTube videos.

Click Generate and let AI create:

Chapter-wise structured content

Automatically attached and relevant YouTube videos

A full learning experience in minutes

🎥 Integrated YouTube Video Content

Smart extraction of relevant videos via YouTube API

Each chapter includes a curated video to support learning

📈 Progress Tracking

Track your overall course completion

Mark chapters as complete

Visual progress bar for clean and intuitive UX

👤 Authentication & User Management

Secure signup/login using Clerk

Profile management

Protected routes for courses and dashboards

⚡ Lightning-Fast Experience

Built with Next.js 16 for both frontend and backend APIs

Deployed on Vercel for optimal speed and reliability

🧠 Core AI Technology

EduAI uses:

Google Gemini – for generating high-quality course content

YouTube Data API – for attaching relevant videos to each chapter

🛠️ Tech Stack
Frontend & Backend

Next.js 16 (App Router)

Authentication

Clerk – login, signup, user profile, session management

Database

Neon Database – scalable Postgres database

Drizzle ORM – type-safe queries, schema migration

Styling

Tailwind CSS – responsive and modern UI

ShadCN UI – accessible and beautiful pre-built components

AI & External Services

Google Gemini AI – course generation

YouTube API – fetching related videos

Deployment

Vercel – edge-optimized full-stack hosting

📌 How It Works

User signs in via Clerk

Navigate to Generate Course page

Fill out the form:

Course topic

Number of chapters

Include YouTube videos (Yes/No)

Click Generate

AI generates:

Chapter titles

Chapter explanations

YouTube video suggestions

User can:

Read all chapters

Watch related videos

Mark chapters as complete

Track progress with a progress bar


🔐 Authentication (Clerk)

EduAI uses Clerk for:

Authentication (Email/Password, OAuth)

User profile management

Protected server components

Handling session tokens in Next.js

🗄️ Database (Neon + Drizzle ORM)

Courses and chapters are stored in Neon PostgreSQL

Drizzle ensures:

Type-safe queries

Easy migrations

Clean and maintainable database schema

🎨 UI / UX

Clean and minimalist UI with Tailwind CSS

Beautiful UI components from ShadCN

Fully responsive design across all devices

🚀 Deployment

EduAI is deployed on Vercel, offering:

Fast CI/CD

Edge network performance

Automatic routing

Zero-configuration deployment

📌 Future Enhancements (Optional Section)

User-created flashcards

AI-powered quizzes per chapter

Course sharing and collaboration

Dark mode

Mobile app version

🤝 Contributing

Contributions, issues, and feature requests are welcome!


<!-- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->
