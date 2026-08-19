// "use client"

// import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
// import Image from "next/image";
// import { motion } from "framer-motion"
// import Link from "next/link";


// import {
//   FaBook,
//   FaPenFancy,
//   FaClipboard,
//   FaGraduationCap,
//   FaLightbulb,
//   FaLaptopCode,
//   FaChalkboardTeacher,
//   FaFileAlt,
//   FaCertificate,
//   FaFlask
// } from "react-icons/fa";
// import MobileMenu from "@/components/MobileMenu";


// const floatingIcons = [
//   FaBook,
//   FaPenFancy,
//   FaClipboard,
//   FaGraduationCap,
//   FaLightbulb,
//   FaLaptopCode,
//   FaChalkboardTeacher,
//   FaFileAlt,
//   FaCertificate,
//   FaFlask
// ];

// export default function Home() {
//   return (




//     <div className="bg-white text-slate-900 min-h-screen font-sans">

//       {/* ================= HEADER ================= */}
//       <header className=" relative fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//           <motion.h1
//             initial={{ opacity: 0, y: -15 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-2xl font-bold"
//           >
//             Edu<span className="text-blue-600">AI</span>
//           </motion.h1>

//           <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-700">
//             <a href="#features" className="hover:text-blue-600 transition">Features</a>
//             <a href="#how" className="hover:text-blue-600 transition">How It Works</a>
//             <a href="#courses" className="hover:text-blue-600 transition">Courses</a>
//             <a href="#testimonials" className="hover:text-blue-600 transition">Testimonials</a>
//           </nav>

//           <SignedOut>
//             <Link
//               href="/sign-in?redirect_url=/workspace"
//               className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium transition"
//             >
//               Login
//             </Link>
//           </SignedOut>


//           <SignedIn>
//             <div className="md:flex  hidden justify-center items-center ">
//               <UserButton afterSignOutUrl="/" />

//             </div>
//           </SignedIn>





//           <div className="md:hidden block">
//             <MobileMenu></MobileMenu>
//           </div>
//         </div>
//       </header>

//       {/* ================= HERO ================= */}
//       {/* <section className="pt-36 pb-28 px-6 max-w-7xl mx-auto text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl md:text-6xl font-bold leading-tight"
//         >
//           AI-Powered Learning <br />
//           <span className="text-blue-600">Built for Serious Growth</span>
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto"
//         >
//           EduAI intelligently generates structured courses, curated videos,
//           and guided learning paths—so you can focus on mastering skills,
//           not searching for resources.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="mt-10 flex justify-center gap-5"
//         >
//           <Link
//             href="/workspace"
//             className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium shadow transition"
//           >
//             Get Started
//           </Link>

//           <a
//             href="#courses"
//             className="border border-slate-300 hover:bg-slate-100 text-slate-800 px-8 py-3 rounded-lg text-lg transition"
//           >
//             Browse Courses
//           </a>
//         </motion.div>
//       </section> */}
//       <section className="relative pt-36 pb-28 px-6 max-w-7xl mx-auto text-center overflow-hidden">
//         {/* ================= Semi-Transparent Background to match header ================= */}
//         <div className="absolute inset-0 bg-white/60 backdrop-blur-md z-0"></div>

//         {/* ================= Floating Icons Background ================= */}
//         {Array.from({ length: 25 }).map((_, i) => {
//           const IconComponent = floatingIcons[Math.floor(Math.random() * floatingIcons.length)];
//           const size = Math.floor(Math.random() * 20 + 20);
//           const left = Math.random() * 100;
//           const topStart = Math.random() * 100;
//           const delay = Math.random() * 5;
//           const duration = Math.random() * 5 + 5;

//           return (
//             <motion.div
//               key={i}
//               className="absolute text-indigo-600 opacity-40"
//               style={{ fontSize: size, left: `${left}%`, top: `${topStart}%` }}
//               animate={{ y: ["0%", "20%", "0%"] }}
//               transition={{
//                 repeat: Infinity,
//                 repeatType: "mirror",
//                 duration: duration,
//                 delay: delay,
//                 ease: "easeInOut"
//               }}
//             >
//               <IconComponent />
//             </motion.div>
//           );
//         })}

//         {/* ================= Hero Text ================= */}
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="relative z-10 text-4xl md:text-6xl font-bold leading-tight text-slate-900"
//         >
//           AI-Powered Learning <br />
//           <span className="text-blue-600">Built for Serious Growth</span>
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="relative z-10 mt-6 text-lg text-slate-700 max-w-2xl mx-auto"
//         >
//           EduAI intelligently generates structured courses, curated videos,
//           and guided learning paths—so you can focus on mastering skills,
//           not searching for resources.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="relative z-10 mt-10 flex justify-center gap-5"
//         >
//           <Link
//             href="/workspace"
//             className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium shadow transition"
//           >
//             Get Started
//           </Link>

//           <a
//             href="#courses"
//             className="border border-slate-300 hover:bg-slate-100 text-slate-800 px-8 py-3 rounded-lg text-lg transition"
//           >
//             Browse Courses
//           </a>
//         </motion.div>
//       </section>
//       {/* ================= FEATURES ================= */}
//       <section id="features" className="py-24 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <h3 className="text-4xl font-bold text-center mb-16 text-slate-900">
//             Designed for <span className="text-indigo-600">Focused Learning</span>
//           </h3>

//           <div className="grid md:grid-cols-3 gap-10">
//             {[
//               ["AI-Generated Courses", "Instantly generate structured courses from any topic."],
//               ["Curated Video Content", "Automatically sourced, high-quality learning videos."],
//               ["Progress Tracking", "Clear progress indicators to stay consistent."],
//               ["Smart Topic Breakdown", "Complex subjects simplified into logical steps."],
//               ["Custom Learning Paths", "Control depth, chapters, and difficulty."],
//               ["All-in-One Platform", "Everything you need—organized in one place."]
//             ].map(([title, text], i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white border border-slate-300 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden p-8"
//               >
//                 {/* Indigo top gradient line */}
//                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-500 opacity-80"></div>

//                 <h4 className="text-xl font-semibold text-slate-900 mb-3">{title}</h4>
//                 <p className="text-slate-600">{text}</p>

//                 {/* Optional subtle indigo orb */}
//                 <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>


//       {/* ================= HOW IT WORKS ================= */}
//       <section id="how" className="py-24 px-6 max-w-7xl mx-auto bg-indigo-600">
//         <h3 className="text-4xl font-bold text-center mb-14">
//           How <span className="text-white"> <span className="text-black">Edu</span>AI Works</span>
//         </h3>

//         <div className="grid md:grid-cols-3 gap-12">
//           {[
//             ["1", "Create Your Course", "Choose topic, depth, and structure."],
//             ["2", "AI Builds Everything", "Chapters, videos, roadmap generated instantly."],
//             ["3", "Learn & Track Progress", "Stay consistent with structured guidance."]
//           ].map(([step, title, desc], i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.15 }}
//               className="text-center bg-white border border-slate-200 p-8 rounded-xl"
//             >
//               <div className="w-14 h-14 mx-auto flex items-center justify-center border-2 border-blue-600 text-blue-600 text-xl font-semibold rounded-full mb-6">
//                 {step}
//               </div>
//               <h4 className="text-xl font-semibold">{title}</h4>
//               <p className="text-slate-600 mt-3">{desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ================= COURSES ================= */}
//       <section id="courses" className="px-6 md:px-20 py-24 bg-slate-50">
//         <h3 className="text-center text-4xl font-bold">
//           Popular <span className="text-indigo-600">Courses</span>
//         </h3>

//         <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {["Web Development", "AI & Machine Learning", "Data Science"].map((course, i) => (
//             <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition">
//               <div className="h-44 b bg-gradient-to-br from-blue-700 via-blue-200 to-indigo-500  flex items-center justify-center text-white text-xl font-semibold">
//                 {course}
//               </div>
//               <div className="p-6">
//                 <p className="text-slate-600 mt-2">
//                   Learn {course} with structured, AI-guided lessons.
//                 </p>
//                 <Link
//                   href="/workspace/explore"
//                   className="text-blue-600 font-medium mt-4 inline-block hover:underline"
//                 >
//                   View Course →
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= TESTIMONIALS ================= */}
//       <section id="testimonials" className="py-24 bg-white">
//         <h3 className="text-4xl font-bold text-center mb-14">
//           Trusted by <span className="text-indigo-600">Learners</span>
//         </h3>

//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
//           {[
//             ["Aarav Sharma", "EduAI helped me stay focused and save time."],
//             ["Mia Rodriguez", "The structured roadmap makes learning effortless."],
//             ["Ethan Collins", "Exactly what modern online learning should be."]
//           ].map(([name, text], i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="bg-slate-50 border border-slate-200 p-6 rounded-xl"
//             >
//               <p className="text-slate-700 italic">“{text}”</p>
//               <h4 className="mt-4 font-semibold">{name}</h4>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="py-24 text-center bg-slate-900 text-white">
//         <h3 className="text-4xl font-bold">
//           Start Learning Smarter Today
//         </h3>
//         <p className="mt-4 text-slate-300">
//           Build structured courses in seconds with AI.
//         </p>

//         <Link
//           href="/workspace"
//           className="inline-block mt-10 bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-lg text-lg font-medium transition"
//         >
//           Get Started Free
//         </Link>
//       </section>

//       {/* ================= FOOTER ================= */}
//       <footer id="contact" className="bg-slate-950 text-slate-400 py-12 px-6 md:px-20">
//         <div className="flex flex-col md:flex-row justify-between gap-10">
//           <div>
//             <h4 className="text-2xl font-bold text-white">
//               Edu<span className="text-blue-500">AI</span>
//             </h4>
//             <p className="mt-3 max-w-sm">
//               AI-powered learning platform for structured, focused education.
//             </p>
//           </div>

//           <div>
//             <h5 className="font-semibold text-white">Quick Links</h5>
//             <ul className="mt-4 space-y-2">
//               <li><a href="#features" className="hover:text-white">Features</a></li>
//               <li><a href="#how" className="hover:text-white">How It Works</a></li>
//               <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
//             </ul>
//           </div>

//           <div>
//             <h5 className="font-semibold text-white">Contact</h5>
//             <p className="mt-4">support@eduai.com</p>
//           </div>
//         </div>

//         <p className="text-center text-slate-500 mt-10 text-sm">
//           © 2025 EduAI. All rights reserved.
//         </p>
//       </footer>
//     </div>
//   );
// }





"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";
import {
  Book,
  PenTool,
  GraduationCap,
  Lightbulb,
  Laptop,
  Presentation,
  FileText,
  Award,
  FlaskConical,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Play,
  ChevronDown,
  Star,
  Brain,
  TrendingUp,
  Flame,
  Zap,
  Target,
  Layers,
  Signal,
  Loader2,
  Video
} from "lucide-react";

import MobileMenu from "@/components/MobileMenu";
import Footer from "@/components/WorkspceComponents/Footer";

// Background floating icons
const floatingIcons = [
  Book,
  PenTool,
  GraduationCap,
  Lightbulb,
  Laptop,
  Presentation,
  FileText,
  Award,
  FlaskConical,
  Brain
];

// Interactive Feature Tabs
const interactiveFeatures = [
  {
    id: "syllabus",
    title: "Instant AI Syllabus Architect",
    tagline: "Custom-curated learning roadmaps in seconds",
    description:
      "Specify any subject, difficulty level, or career target. EduAI structures comprehensive chapters, key milestones, and sub-topics automatically.",
    icon: Brain,
    previewTitle: "Generated Syllabus: Advanced Next.js & Micro-Frontends",
    previewItems: [
      { step: "01", name: "Core Architecture & SSR Hydration", duration: "2 hrs" },
      { step: "02", name: "State Synchronization with Socket.io", duration: "3 hrs" },
      { step: "03", name: "Edge API Routes & Vector Database Integration", duration: "2.5 hrs" },
      { step: "04", name: "Production Deployment & Performance Audit", duration: "1.5 hrs" }
    ]
  },
  {
    id: "curation",
    title: "Smart Video & Article Aggregation",
    tagline: "No low-quality fluff—only top-tier resources",
    description:
      "EduAI scans thousands of verified tutorials, documentation pages, and lectures to curate precisely matched multimedia content for each chapter.",
    icon: Play,
    previewTitle: "Curated Resource Stream: Master AI Model Fine-Tuning",
    previewItems: [
      { step: "Video", name: "Understanding LoRA & PEFT Mechanics", duration: "24 min" },
      { step: "Guide", name: "Dataset Formatting for Instruction Tuning", duration: "10 min read" },
      { step: "Lab", name: "Hands-on PyTorch Fine-Tuning Environment", duration: "Interactive" }
    ]
  },
  {
    id: "tracking",
    title: "Real-Time Mastery & Analytics",
    tagline: "Track progress and test knowledge as you learn",
    description:
      "Interactive knowledge checks, milestone tracking, and dynamic quizzes adapt to your pace so you never lose momentum.",
    icon: TrendingUp,
    previewTitle: "Learner Dashboard & Progress Analytics",
    previewItems: [
      { step: "85%", name: "Course Completion Score", duration: "Active Track" },
      { step: "12", name: "Modules Mastered This Month", duration: "+35% vs Last Month" },
      { step: "4.9", name: "Skill Proficiency Assessment", duration: "Advanced Level" }
    ]
  }
];

// Course track suggestions
const courseTracks = [
  {
    category: "Web Development",
    title: "Full-Stack Next.js & Real-Time Architectures",
    lessons: "18 Lessons",
    level: "Intermediate",
    description: "Build production-grade applications with Server Components, Socket.io, and Clerk Authentication."
  },
  {
    category: "AI & ML",
    title: "Generative AI & Multi-Agent Workflows",
    lessons: "24 Lessons",
    level: "Advanced",
    description: "Design LLM pipelines, prompt chains, and automated agent orchestrations from scratch."
  },
  {
    category: "Data Science",
    title: "Data Analytics & Predictive Modeling",
    lessons: "15 Lessons",
    level: "Beginner",
    description: "Master Python, Pandas, machine learning models, and real-time data visualization."
  }
];

// FAQs Data
const faqs = [
  {
    q: "How does EduAI generate course content?",
    a: "EduAI leverages advanced LLMs to break down complex topics into structured chapters, sub-topics, and quizzes. It then aggregates top verified educational resources and videos to construct a complete learning pathway."
  },
  {
    q: "Can I customize the depth and focus of generated courses?",
    a: "Yes! You can specify your skill level (Beginner, Intermediate, Advanced), expected completion time, and specific focus areas before generating your course roadmap."
  },
  {
    q: "How does Clerk authentication work on EduAI?",
    a: "EduAI uses Clerk for fast, secure authentication. Simply click 'Sign In' or 'Get Started Free' anywhere on the page to open the seamless authentication modal."
  },
  {
    q: "Is EduAI free to use?",
    a: "EduAI offers free starter credits that let you build and explore custom courses. Upgraded plans unlock unlimited AI course generations and high-tier analytics."
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(interactiveFeatures[0].id);
  const [openFaq, setOpenFaq] = useState(0);

  const selectedFeature = interactiveFeatures.find((f) => f.id === activeTab) || interactiveFeatures[0];

  return (
    <div className="bg-[#fcfbf7] text-slate-800 min-h-screen font-sans selection:bg-amber-200 selection:text-slate-900">

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full bg-[#fcfbf7]/90 backdrop-blur-md z-50 border-b border-amber-900/10 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-slate-900 leading-none">
                Edu<span className="text-amber-600">AI</span>
              </span>

            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-amber-600 transition-colors">Features</a>
            <a href="#how" className="hover:text-amber-600 transition-colors">How It Works</a>
            <a href="#courses" className="hover:text-amber-600 transition-colors">Explore Tracks</a>
            <a href="#faq" className="hover:text-amber-600 transition-colors">FAQ</a>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-sm font-medium text-slate-700 hover:text-slate-900 px-4 py-2 transition">
                  Sign In
                </button>
              </SignInButton>

              <SignUpButton mode="modal">
                <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-5 py-2.5 rounded-lg font-medium text-sm transition shadow-sm hover:shadow-amber-500/20">
                  Get Started Free
                </button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center gap-4">
                <Link
                  href="/workspace"
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-medium text-sm px-4 py-2 rounded-lg transition shadow-sm"
                >
                  Go to Workspace
                </Link>
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-6 max-w-7xl mx-auto overflow-hidden">

        {/* Soft amber ambient background glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-amber-200/40 via-orange-200/30 to-amber-100/50 blur-[120px] rounded-full pointer-events-none z-0"></div>

        {/* Floating Icons Background Layer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10 z-0">
          {Array.from({ length: 18 }).map((_, i) => {
            const IconComponent = floatingIcons[i % floatingIcons.length];
            const size = Math.floor((i % 5) * 6 + 22);
            const left = (i * 13) % 95;
            const topStart = (i * 17) % 85;

            return (
              <motion.div
                key={i}
                className="absolute text-amber-700"
                style={{ fontSize: size, left: `${left}%`, top: `${topStart}%` }}
                animate={{ y: ["0%", "15%", "0%"] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 6 + (i % 4),
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              >
                <IconComponent size={size} />
              </motion.div>
            );
          })}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm font-medium mb-8 shadow-sm"
          >
            <div className="w-4 h-4 rounded-full bg-amber-500 flex items-center justify-center text-slate-950 font-bold text-[10px]">
              <Sparkles className="w-2.5 h-2.5 text-slate-950" />
            </div>
            <span>AI Educator v2.0 — Powered Learning Paths</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.2] text-slate-900"
          >
            Master Any Skill with <br className="hidden sm:inline" />
            <span className="text-amber-600 font-serif italic">
              AI-Generated Roadmaps
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Transform raw prompts into structured multi-chapter video and text courses in seconds.
            Focused learning, curated modules, and real progress tracking.
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <SignedOut>
              <SignUpButton mode="modal">
                <button className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 px-7 py-3.5 rounded-xl text-base font-semibold shadow-md shadow-amber-500/10 transition-all flex items-center justify-center gap-2 group">
                  <span>Start Learning for Free</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </SignUpButton>
              <SignInButton mode="modal">
                <button className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 px-7 py-3.5 rounded-xl text-base font-medium transition">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <Link
                href="/workspace"
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 px-7 py-3.5 rounded-xl text-base font-semibold shadow-md shadow-amber-500/10 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Enter Workspace</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </SignedIn>
          </motion.div>

          {/* Trust points */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-slate-500 text-xs sm:text-sm font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-600" /> Instant AI Syllabus Setup
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-600" /> Automated Video Curation
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-600" /> No Credit Card Required
            </span>
          </div>
        </div>

        {/* HERO INTERACTIVE WORKSPACE MOCKUP PREVIEW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 max-w-2xl mx-auto rounded-xl bg-white border border-amber-900/10 p-4 shadow-lg shadow-amber-900/5"
        >
          {/* Compact Top Status Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
            <div className="flex items-center gap-2">
              
              <span className="text-xs font-bold text-slate-900">
                Course Generator <span className="text-amber-600">Snapshot</span>
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
              <Sparkles className="w-3 h-3 text-amber-600" /> Generating Track
            </div>
          </div>

          {/* Course Title */}
          <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200/80 mb-3">
            <span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
              Topic / Title
            </span>
            <p className="text-xs sm:text-sm font-bold text-slate-800 truncate">
             Java Programming language Course
            </p>
          </div>

          {/* Selected Form Options Chips */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="bg-white p-2 rounded-lg border border-slate-200 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <div className="truncate">
                <span className="block text-[9px] font-medium text-slate-400 uppercase">Chapters</span>
                <span className="text-xs font-bold text-slate-700">4 Chapters</span>
              </div>
            </div>

            <div className="bg-white p-2 rounded-lg border border-slate-200 flex items-center gap-2">
              <Signal className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <div className="truncate">
                <span className="block text-[9px] font-medium text-slate-400 uppercase">Level</span>
                <span className="text-xs font-bold text-amber-700">Advanced</span>
              </div>
            </div>

            <div className="bg-white p-2 rounded-lg border border-slate-200 flex items-center gap-2">
              <Video className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <div className="truncate">
                <span className="block text-[9px] font-medium text-slate-400 uppercase">Video</span>
                <span className="text-xs font-bold text-emerald-700">Included</span>
              </div>
            </div>
          </div>

          {/* Mini Outline / Progress Preview */}
          <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200/80 space-y-1.5">
            <div className="flex items-center justify-between text-xs bg-white p-2 rounded border border-slate-200">
              <span className="font-medium text-slate-700 truncate">1. Next.js App Router Architecture</span>
              <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 shrink-0">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Done
              </span>
            </div>

            <div className="flex items-center justify-between text-xs bg-white p-2 rounded border border-slate-200">
              <span className="font-medium text-slate-700 truncate">2. React.js Advance Course</span>
              <span className="flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 shrink-0">
                <Loader2 className="w-3 h-3 text-amber-600 animate-spin" /> Building
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= STATS COUNTER STRIP ================= */}
      <section className="border-y border-amber-900/10 bg-white/60 py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-amber-600">
              50K+
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5 font-medium">Courses Generated</p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-amber-600">
              98.4%
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5 font-medium">Completion Rate</p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-amber-600">
              120+
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5 font-medium">Skill Domains</p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-amber-600">
              4.9/5
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5 font-medium">Learner Rating</p>
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE WORKFLOW SECTION ================= */}
      <section id="features" className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Designed for <span className="text-amber-600 font-serif italic">Focused Learning</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Say goodbye to endless, unorganized YouTube playlists and scattered tutorial blogs. EduAI organizes everything into unified pathways.
          </p>
        </div>

        {/* Feature Tab Selector Controls */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {interactiveFeatures.map((feature) => {
            const Icon = feature.icon;
            const isActive = activeTab === feature.id;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${isActive
                  ? "bg-amber-500 text-slate-950 shadow-sm font-semibold"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-amber-50"
                  }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-slate-950" : "text-amber-600"}`} />
                <span>{feature.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Preview Container */}
        <div className="bg-white border border-amber-900/10 rounded-2xl p-6 sm:p-8 grid lg:grid-cols-12 gap-8 items-center shadow-lg shadow-amber-900/5">
          <div className="lg:col-span-5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mb-1">
              <selectedFeature.icon className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">{selectedFeature.tagline}</span>
            <h3 className="text-2xl font-bold text-slate-900">{selectedFeature.title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">{selectedFeature.description}</p>

            <div className="pt-2">
              <SignedOut>
                <SignUpButton mode="modal">
                  <button className="inline-flex items-center gap-1.5 text-amber-700 hover:text-amber-800 font-semibold text-sm group">
                    <span>Try this feature now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Link href="/workspace" className="inline-flex items-center gap-1.5 text-amber-700 hover:text-amber-800 font-semibold text-sm group">
                  <span>Open in Workspace</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </SignedIn>
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-inner">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFeature.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-200">
                  <h4 className="text-xs font-semibold text-slate-700">{selectedFeature.previewTitle}</h4>
                  <span className="text-[11px] font-mono text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">Active View</span>
                </div>

                <div className="space-y-2">
                  {selectedFeature.previewItems.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200 hover:border-amber-300 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-7 h-7 rounded bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center font-mono text-xs font-semibold">
                          {item.step}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-slate-800">{item.name}</span>
                      </div>
                      <span className="text-xs text-slate-500 font-medium">{item.duration}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section id="how" className="py-20 bg-white/70 border-y border-amber-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              How <span className="text-amber-600 font-serif italic">EduAI</span> Works
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              Three simple steps to generate a personalized course tailored specifically to your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                icon: Target,
                title: "Enter Your Goal",
                description: "Input any topic, skill, or project idea you want to master along with your current experience level."
              },
              {
                step: "02",
                icon: Zap,
                title: "AI Architects the Course",
                description: "EduAI structures chapters, selects top video tutorials, builds reading material, and organizes quizzes."
              },
              {
                step: "03",
                icon: Flame,
                title: "Learn & Track Progress",
                description: "Follow your tailored workspace roadmap, complete modules, and measure your real-time skill growth."
              }
            ].map((s, i) => {
              const StepIcon = s.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="bg-[#fcfbf7] border border-amber-900/10 p-6 rounded-2xl relative group hover:border-amber-300 transition-all duration-200 shadow-sm"
                >
                  <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 font-bold text-lg flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <StepIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= EXPLORE POPULAR TRACKS ================= */}
      <section id="courses" className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Featured <span className="text-amber-600 font-serif italic">Learning Tracks</span>
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              Explore pre-curated AI learning pathways created by our community.
            </p>
          </div>

          <Link
            href="/workspace"
            className="inline-flex items-center gap-1.5 text-amber-700 hover:text-amber-800 font-semibold text-sm group self-start md:self-auto"
          >
            <span>Explore All Tracks in Workspace</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {courseTracks.map((track, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-amber-900/10 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-300 transition-all duration-200 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                    {track.category}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{track.level}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{track.title}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{track.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">{track.lessons}</span>

                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1">
                      <span>View Track</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </SignInButton>
                </SignedOut>

                <SignedIn>
                  <Link href="/workspace" className="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1">
                    <span>View Track</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </SignedIn>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-20 bg-white/70 border-y border-amber-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Loved by <span className="text-amber-600 font-serif italic">Serious Learners</span>
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              Here is what developers and students say about building custom paths with EduAI.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Aarav Sharma",
                role: "Full-Stack Engineer",
                review: "EduAI saved me weeks of bookmarking random video tutorials. It created a clean Next.js architecture path that kept me completely focused."
              },
              {
                name: "Mia Rodriguez",
                role: "CS Student",
                review: "The dynamic topic breakdown is insane. When I felt confused about vector search mechanics, EduAI broke it down step by step with relevant clips."
              },
              {
                name: "Ethan Collins",
                role: "Self-Taught Developer",
                review: "Clerk sign-in is seamless and the generated course workspace feels like a personalized LMS built exclusively for my needs."
              }
            ].map((t, i) => (
              <div key={i} className="bg-[#fcfbf7] border border-amber-900/10 p-6 rounded-2xl flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex gap-1 text-amber-500 mb-3">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-5">&quot;{t.review}&quot;</p>
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold text-sm">{t.name}</h4>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section id="faq" className="py-20 max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Frequently Asked <span className="text-amber-600 font-serif italic">Questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-amber-900/10 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left text-slate-800 font-medium hover:text-amber-700 transition-colors text-sm sm:text-base"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-amber-600 transition-transform duration-200 ${openFaq === index ? "rotate-180" : ""
                    }`}
                />
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer></Footer>
    </div>
  );
}





