"use client"

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { motion } from "framer-motion"
import Link from "next/link";


import {
  FaBook,
  FaPenFancy,
  FaClipboard,
  FaGraduationCap,
  FaLightbulb,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaFileAlt,
  FaCertificate,
  FaFlask
} from "react-icons/fa";

const floatingIcons = [
  FaBook,
  FaPenFancy,
  FaClipboard,
  FaGraduationCap,
  FaLightbulb,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaFileAlt,
  FaCertificate,
  FaFlask
];

export default function Home() {
  return (

    // <div className="bg-white text-gray-900 min-h-screen font-sans">

    //   {/* =============== HEADER =============== */}
    //   <header className="w-full fixed top-0 left-0 bg-white/70 backdrop-blur-lg z-50 border-b border-purple-200">
    //     <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
    //       <motion.h1
    //         initial={{ opacity: 0, y: -20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         className="text-3xl font-bold text-purple-600"
    //       >
    //         <div className="flex gap-2 justify-center items-center">
    //           {/* <Image src="/logo3.jpeg" width={80} height={20} alt="logo"></Image> */}
    //           EduAI

    //         </div>
    //       </motion.h1>

    //       <nav className="hidden md:flex gap-8 text-m font-medium">
    //         <a href="#features" className="hover:text-purple-600 transition">Features</a>
    //         <a href="#how" className="hover:text-purple-600 transition">How It Works</a>
    //         <a href="#testimonials" className="hover:text-purple-600 transition">Testimonials</a>
    //         <a href="#contact" className="hover:text-purple-600 transition">Contact</a>
    //       </nav>


    //       <SignedOut>
    //         <a
    //           href="/sign-in?redirect_url=/workspace"
    //           className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg"
    //         >
    //           Login
    //         </a>
    //       </SignedOut>

    //       {/* When user is logged IN */}
    //       <SignedIn>
    //         <UserButton
    //           appearance={{
    //             elements: {
    //               avatarBox: "w-10 h-10",
    //             },
    //           }}
    //           afterSignOutUrl="/"
    //         />
    //       </SignedIn>

    //     </div>
    //   </header >

    //   {/* =============== HERO SECTION =============== */}
    //   < section className="pt-32 pb-24 px-6 max-w-7xl mx-auto text-center" >
    //     <motion.h2
    //       initial={{ opacity: 0, scale: 0.9 }}
    //       animate={{ opacity: 1, scale: 1 }}
    //       transition={{ duration: 0.6 }}
    //       className="text-5xl md:text-6xl font-extrabold text-purple-700 leading-tight"
    //     >
    //       Learn Smarter with <span className="text-purple-500">AI-Powered Courses</span>
    //     </motion.h2>

    //     <motion.p
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ delay: 0.2 }}
    //       className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
    //     >
    //       EduAI automatically generates structured courses, chapters, videos, and roadmaps—
    //       all personalized for you. No confusion, no endless searching. Just learn.
    //     </motion.p>

    //     {/* CTA Buttons */}
    //     <motion.div
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{ delay: 0.4 }}
    //       className="mt-10 flex justify-center gap-6"
    //     >

    //       <Link href="/workspace">
    //         <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl text-xl shadow-lg transition">
    //           Get Started
    //         </button>
    //       </Link>


    //       <a href="#courses">
    //         <button className="border border-purple-600 hover:bg-purple-100 text-purple-700 px-8 py-3 rounded-xl text-xl transition">
    //           Browse Course
    //         </button>

    //       </a>
    //     </motion.div>

    //   </section >

    //   {/* =============== FEATURES SECTION =============== */}


    //   <section id="features" className="py-24 bg-purple-50">
    //     <div className="max-w-7xl mx-auto px-6">
    //       <h3 className="text-5xl font-extrabold text-center text-purple-700 mb-16 tracking-tight">
    //         ✨ <span className="italic">Powerful, Intelligent</span> Features
    //       </h3>

    //       <div className="grid md:grid-cols-3 gap-12">
    //         {[
    //           {
    //             icon: "🤖",
    //             title: "AI-Generated Courses",
    //             text: "Simply enter a topic — the AI instantly builds a full structured course for you."
    //           },
    //           {
    //             icon: "🎥",
    //             title: "YouTube Integration",
    //             text: "Automatically fetches high-quality, relevant videos for every chapter."
    //           },
    //           {
    //             icon: "📊",
    //             title: "Progress Tracking",
    //             text: "Beautiful UI lets you track your learning journey chapter by chapter."
    //           },
    //           {
    //             icon: "🧠",
    //             title: "Smart Topic Breakdown",
    //             text: "EduAI intelligently breaks down complex topics into digestible, easy lessons."
    //           },
    //           {
    //             icon: "⚙️",
    //             title: "Custom Chapter Count",
    //             text: "Choose how many chapters you want — the AI handles everything else elegantly."
    //           },
    //           {
    //             icon: "📚",
    //             title: "All in One Place",
    //             text: "Your *complete* learning roadmap with videos, content, and progress in one clean space."
    //           }
    //         ].map((f, i) => (
    //           <motion.div
    //             key={i}
    //             initial={{ opacity: 0, y: 30 }}
    //             whileInView={{ opacity: 1, y: 0 }}
    //             viewport={{ once: true }}
    //             transition={{ delay: i * 0.1 }}
    //             className="
    //         bg-white backdrop-blur-xl
    //         border border-purple-200
    //         p-8 rounded-2xl
    //         shadow-[0_4px_20px_rgba(125,85,210,0.15)]
    //         hover:shadow-[0_8px_35px_rgba(125,85,210,0.25)]
    //         hover:-translate-y-2
    //         hover:border-purple-300
    //         transition-all duration-300
    //         relative overflow-hidden
    //       "
    //           >
    //             {/* Gradient glow top border */}
    //             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-70"></div>

    //             {/* Icon */}
    //             <div className="text-5xl mb-5 drop-shadow-md">{f.icon}</div>

    //             <h4 className="text-2xl font-bold text-purple-700 leading-tight">
    //               {f.title}
    //             </h4>

    //             <p className="text-gray-600 mt-4 leading-relaxed">
    //               {f.text}
    //             </p>

    //             {/* AI Glow Orb */}
    //             <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-300 rounded-full opacity-20 blur-3xl"></div>
    //           </motion.div>
    //         ))}
    //       </div>
    //     </div>
    //   </section>


    //   {/* =============== HOW IT WORKS SECTION =============== */}
    //   < section id="how" className="py-24 px-6 max-w-7xl mx-auto" >
    //     <h3 className="text-4xl font-bold text-center text-purple-700 mb-14">
    //       How EduAI Works
    //     </h3>

    //     <div className="grid md:grid-cols-3 gap-12">
    //       {[
    //         {
    //           step: "1",
    //           title: "Fill the Course Form",
    //           desc: "Enter your topic, chapter count, and difficulty level."
    //         },
    //         {
    //           step: "2",
    //           title: "AI Generates Everything",
    //           desc: "You instantly get chapters, topics, videos, and roadmap."
    //         },
    //         {
    //           step: "3",
    //           title: "Start Learning",
    //           desc: "Track progress and learn with structured content."
    //         }
    //       ].map((item, i) => (
    //         <motion.div
    //           key={i}
    //           initial={{ opacity: 0, y: 20 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           viewport={{ once: true }}
    //           transition={{ delay: i * 0.2 }}
    //           className="text-center bg-white border border-purple-200 p-8 rounded-xl shadow-sm"
    //         >
    //           <div className="w-16 h-16 mx-auto flex items-center justify-center bg-purple-600 text-white text-3xl font-bold rounded-full mb-6">
    //             {item.step}
    //           </div>
    //           <h4 className="text-2xl font-semibold text-purple-700">{item.title}</h4>
    //           <p className="text-gray-600 mt-3">{item.desc}</p>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </section >



    //   <section id="courses" className="px-6 md:px-20 py-20">
    //     <h3 className="text-center text-3xl md:text-4xl font-bold text-gray-900">
    //       Popular <span className="text-purple-600">Courses</span>
    //     </h3>

    //     <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

    //       {/* Course Card */}
    //       {["Web Development", "AI & Machine Learning", "Data Science"].map((course, i) => (
    //         <div key={i} className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition">
    //           <div className="h-44 bg-gradient-to-br from-blue-700 via-blue-200 to-purple-500 flex justify-center text-white  text-2xl items-center ">{course}</div>
    //           <div className="p-6">
    //             <h4 className="text-xl font-semibold text-gray-900">{course}</h4>
    //             <p className="text-gray-600 mt-3">
    //               Learn {course} with step-by-step guided lessons.
    //             </p>
    //             <a
    //               href="/workspace/explore"
    //               className="text-purple-600 font-semibold mt-4 block hover:underline"
    //             >
    //               View Course →
    //             </a>
    //           </div>
    //         </div>
    //       ))}

    //     </div>
    //   </section>


    //   {/* =============== TESTIMONIALS SECTION =============== */}
    //   < section id="testimonials" className="py-24 bg-purple-50" >
    //     <h3 className="text-4xl font-bold text-center text-purple-700 mb-14">
    //       What Our Learners Say
    //     </h3>

    //     <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
    //       {[
    //         {
    //           name: "Aarav Sharma",
    //           text: "EduAI saved me hours of searching. The course structure is so clean and easy to follow!",
    //         },
    //         {
    //           name: "Mia Rodriguez",
    //           text: "I created a complete Python course in seconds. The roadmap and videos were perfect!",
    //         },
    //         {
    //           name: "Ethan Collins",
    //           text: "The progress tracking helps me stay motivated. Best AI learning tool I’ve used.",
    //         },
    //       ].map((t, i) => (
    //         <motion.div
    //           key={i}
    //           initial={{ opacity: 0, y: 20 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           viewport={{ once: true }}
    //           className="bg-white border border-purple-200 p-6 rounded-xl shadow-sm"
    //         >
    //           <p className="text-gray-700 italic">“{t.text}”</p>
    //           <h4 className="mt-4 font-semibold text-purple-700">{t.name}</h4>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </section >

    //   {/* =============== CTA SECTION =============== */}
    //   < section id="cta" className="py-24 text-center" >
    //     <h3 className="text-4xl font-bold text-purple-700">
    //       Start Your AI-Powered Learning Journey Today
    //     </h3>
    //     <p className="mt-4 text-gray-600">
    //       Generate full courses with one click — no hassle, no confusion.
    //     </p>

    //     <a href="/workspace">
    //       <button className="mt-10 bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-xl text-xl shadow-lg transition">
    //         Get Started — It’s Free
    //       </button>

    //     </a>
    //   </section >

    //   {/* =============== PROFESSIONAL FOOTER =============== */}
    //   < footer id="contact" className="bg-gray-900 text-white py-12 px-6 md:px-20" >
    //     <div className="flex flex-col md:flex-row justify-between gap-10">

    //       <div>
    //         <h4 className="text-2xl font-bold text-purple-400">EduAI</h4>
    //         <p className="text-gray-400 mt-3 max-w-sm">
    //           AI-powered online learning made simple.
    //           Courses, videos, chapters & progress — all in one place.
    //         </p>
    //       </div>

    //       <div>
    //         <h5 className="font-semibold text-purple-300">Quick Links</h5>
    //         <ul className="mt-4 space-y-2 text-gray-400">
    //           <li><a href="#features" className="hover:text-purple-400">Features</a></li>
    //           <li><a href="#how" className="hover:text-purple-400">How It Works</a></li>
    //           <li><a href="#testimonials" className="hover:text-purple-400">Testimonials</a></li>
    //           <li><a href="#" className="hover:text-purple-400">Support</a></li>
    //         </ul>
    //       </div>

    //       <div>
    //         <h5 className="font-semibold text-purple-300">Contact</h5>
    //         <p className="text-gray-400 mt-4">support@eduai.com</p>
    //         {/* <p className="text-gray-400 mt-2">+1 (555) 123-4567</p> */}
    //       </div>

    //     </div>

    //     <p className="text-center text-gray-500 mt-10 text-sm">
    //       © 2025 EduAI — All rights reserved.
    //     </p>
    //   </footer >
    // </div >


    <div className="bg-white text-slate-900 min-h-screen font-sans">

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold"
          >
            Edu<span className="text-blue-600">AI</span>
          </motion.h1>

          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-700">
            <a href="#features" className="hover:text-blue-600 transition">Features</a>
            <a href="#how" className="hover:text-blue-600 transition">How It Works</a>
            <a href="#courses" className="hover:text-blue-600 transition">Courses</a>
            <a href="#testimonials" className="hover:text-blue-600 transition">Testimonials</a>
          </nav>

          <SignedOut>
            <Link
              href="/sign-in?redirect_url=/workspace"
              className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium transition"
            >
              Login
            </Link>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </header>

      {/* ================= HERO ================= */}
      {/* <section className="pt-36 pb-28 px-6 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          AI-Powered Learning <br />
          <span className="text-blue-600">Built for Serious Growth</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto"
        >
          EduAI intelligently generates structured courses, curated videos,
          and guided learning paths—so you can focus on mastering skills,
          not searching for resources.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center gap-5"
        >
          <Link
            href="/workspace"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium shadow transition"
          >
            Get Started
          </Link>

          <a
            href="#courses"
            className="border border-slate-300 hover:bg-slate-100 text-slate-800 px-8 py-3 rounded-lg text-lg transition"
          >
            Browse Courses
          </a>
        </motion.div>
      </section> */}
      <section className="relative pt-36 pb-28 px-6 max-w-7xl mx-auto text-center overflow-hidden">
        {/* ================= Semi-Transparent Background to match header ================= */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-md z-0"></div>

        {/* ================= Floating Icons Background ================= */}
        {Array.from({ length: 25 }).map((_, i) => {
          const IconComponent = floatingIcons[Math.floor(Math.random() * floatingIcons.length)];
          const size = Math.floor(Math.random() * 20 + 20);
          const left = Math.random() * 100;
          const topStart = Math.random() * 100;
          const delay = Math.random() * 5;
          const duration = Math.random() * 5 + 5;

          return (
            <motion.div
              key={i}
              className="absolute text-indigo-600 opacity-40"
              style={{ fontSize: size, left: `${left}%`, top: `${topStart}%` }}
              animate={{ y: ["0%", "20%", "0%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: duration,
                delay: delay,
                ease: "easeInOut"
              }}
            >
              <IconComponent />
            </motion.div>
          );
        })}

        {/* ================= Hero Text ================= */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-4xl md:text-6xl font-bold leading-tight text-slate-900"
        >
          AI-Powered Learning <br />
          <span className="text-blue-600">Built for Serious Growth</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative z-10 mt-6 text-lg text-slate-700 max-w-2xl mx-auto"
        >
          EduAI intelligently generates structured courses, curated videos,
          and guided learning paths—so you can focus on mastering skills,
          not searching for resources.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative z-10 mt-10 flex justify-center gap-5"
        >
          <Link
            href="/workspace"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium shadow transition"
          >
            Get Started
          </Link>

          <a
            href="#courses"
            className="border border-slate-300 hover:bg-slate-100 text-slate-800 px-8 py-3 rounded-lg text-lg transition"
          >
            Browse Courses
          </a>
        </motion.div>
      </section>
      {/* ================= FEATURES ================= */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Designed for <span className="text-indigo-600">Focused Learning</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              ["AI-Generated Courses", "Instantly generate structured courses from any topic."],
              ["Curated Video Content", "Automatically sourced, high-quality learning videos."],
              ["Progress Tracking", "Clear progress indicators to stay consistent."],
              ["Smart Topic Breakdown", "Complex subjects simplified into logical steps."],
              ["Custom Learning Paths", "Control depth, chapters, and difficulty."],
              ["All-in-One Platform", "Everything you need—organized in one place."]
            ].map(([title, text], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white border border-slate-300 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden p-8"
              >
                {/* Indigo top gradient line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-500 opacity-80"></div>

                <h4 className="text-xl font-semibold text-slate-900 mb-3">{title}</h4>
                <p className="text-slate-600">{text}</p>

                {/* Optional subtle indigo orb */}
                <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section id="how" className="py-24 px-6 max-w-7xl mx-auto bg-indigo-600">
        <h3 className="text-4xl font-bold text-center mb-14">
          How <span className="text-white"> <span className="text-black">Edu</span>AI Works</span>
        </h3>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            ["1", "Create Your Course", "Choose topic, depth, and structure."],
            ["2", "AI Builds Everything", "Chapters, videos, roadmap generated instantly."],
            ["3", "Learn & Track Progress", "Stay consistent with structured guidance."]
          ].map(([step, title, desc], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center bg-white border border-slate-200 p-8 rounded-xl"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center border-2 border-blue-600 text-blue-600 text-xl font-semibold rounded-full mb-6">
                {step}
              </div>
              <h4 className="text-xl font-semibold">{title}</h4>
              <p className="text-slate-600 mt-3">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= COURSES ================= */}
      <section id="courses" className="px-6 md:px-20 py-24 bg-slate-50">
        <h3 className="text-center text-4xl font-bold">
          Popular <span className="text-indigo-600">Courses</span>
        </h3>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {["Web Development", "AI & Machine Learning", "Data Science"].map((course, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition">
              <div className="h-44 b bg-gradient-to-br from-blue-700 via-blue-200 to-indigo-500  flex items-center justify-center text-white text-xl font-semibold">
                {course}
              </div>
              <div className="p-6">
                <p className="text-slate-600 mt-2">
                  Learn {course} with structured, AI-guided lessons.
                </p>
                <Link
                  href="/workspace/explore"
                  className="text-blue-600 font-medium mt-4 inline-block hover:underline"
                >
                  View Course →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section id="testimonials" className="py-24 bg-white">
        <h3 className="text-4xl font-bold text-center mb-14">
          Trusted by <span className="text-indigo-600">Learners</span>
        </h3>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            ["Aarav Sharma", "EduAI helped me stay focused and save time."],
            ["Mia Rodriguez", "The structured roadmap makes learning effortless."],
            ["Ethan Collins", "Exactly what modern online learning should be."]
          ].map(([name, text], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 border border-slate-200 p-6 rounded-xl"
            >
              <p className="text-slate-700 italic">“{text}”</p>
              <h4 className="mt-4 font-semibold">{name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center bg-slate-900 text-white">
        <h3 className="text-4xl font-bold">
          Start Learning Smarter Today
        </h3>
        <p className="mt-4 text-slate-300">
          Build structured courses in seconds with AI.
        </p>

        <Link
          href="/workspace"
          className="inline-block mt-10 bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-lg text-lg font-medium transition"
        >
          Get Started Free
        </Link>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h4 className="text-2xl font-bold text-white">
              Edu<span className="text-blue-500">AI</span>
            </h4>
            <p className="mt-3 max-w-sm">
              AI-powered learning platform for structured, focused education.
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-white">Quick Links</h5>
            <ul className="mt-4 space-y-2">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#how" className="hover:text-white">How It Works</a></li>
              <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-white">Contact</h5>
            <p className="mt-4">support@eduai.com</p>
          </div>
        </div>

        <p className="text-center text-slate-500 mt-10 text-sm">
          © 2025 EduAI. All rights reserved.
        </p>
      </footer>
    </div>
  );
}







