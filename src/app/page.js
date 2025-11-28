"use client"

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { motion } from "framer-motion"
import Link from "next/link";
export default function Home() {
  return (

    <div className="bg-white text-gray-900 min-h-screen font-sans">

      {/* =============== HEADER =============== */}
      <header className="w-full fixed top-0 left-0 bg-white/70 backdrop-blur-lg z-50 border-b border-purple-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-purple-600"
          >
            <div className="flex gap-2 justify-center items-center">
              {/* <Image src="/logo3.jpeg" width={80} height={20} alt="logo"></Image> */}
              EduAI

            </div>
          </motion.h1>

          <nav className="hidden md:flex gap-8 text-m font-medium">
            <a href="#features" className="hover:text-purple-600 transition">Features</a>
            <a href="#how" className="hover:text-purple-600 transition">How It Works</a>
            <a href="#testimonials" className="hover:text-purple-600 transition">Testimonials</a>
            <a href="#contact" className="hover:text-purple-600 transition">Contact</a>
          </nav>


          <SignedOut>
            <a
              href="/sign-in?redirect_url=/workspace"
              className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg"
            >
              Login
            </a>
          </SignedOut>

          {/* When user is logged IN */}
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>

        </div>
      </header >

      {/* =============== HERO SECTION =============== */}
      < section className="pt-32 pb-24 px-6 max-w-7xl mx-auto text-center" >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-purple-700 leading-tight"
        >
          Learn Smarter with <span className="text-purple-500">AI-Powered Courses</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          EduAI automatically generates structured courses, chapters, videos, and roadmaps—
          all personalized for you. No confusion, no endless searching. Just learn.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center gap-6"
        >

          <Link href="/workspace">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl text-xl shadow-lg transition">
              Get Started
            </button>
          </Link>


          <a href="#courses">
            <button className="border border-purple-600 hover:bg-purple-100 text-purple-700 px-8 py-3 rounded-xl text-xl transition">
              Browse Course
            </button>

          </a>
        </motion.div>

      </section >

      {/* =============== FEATURES SECTION =============== */}


      <section id="features" className="py-24 bg-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-5xl font-extrabold text-center text-purple-700 mb-16 tracking-tight">
            ✨ <span className="italic">Powerful, Intelligent</span> Features
          </h3>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: "🤖",
                title: "AI-Generated Courses",
                text: "Simply enter a topic — the AI instantly builds a full structured course for you."
              },
              {
                icon: "🎥",
                title: "YouTube Integration",
                text: "Automatically fetches high-quality, relevant videos for every chapter."
              },
              {
                icon: "📊",
                title: "Progress Tracking",
                text: "Beautiful UI lets you track your learning journey chapter by chapter."
              },
              {
                icon: "🧠",
                title: "Smart Topic Breakdown",
                text: "EduAI intelligently breaks down complex topics into digestible, easy lessons."
              },
              {
                icon: "⚙️",
                title: "Custom Chapter Count",
                text: "Choose how many chapters you want — the AI handles everything else elegantly."
              },
              {
                icon: "📚",
                title: "All in One Place",
                text: "Your *complete* learning roadmap with videos, content, and progress in one clean space."
              }
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="
            bg-white backdrop-blur-xl
            border border-purple-200
            p-8 rounded-2xl
            shadow-[0_4px_20px_rgba(125,85,210,0.15)]
            hover:shadow-[0_8px_35px_rgba(125,85,210,0.25)]
            hover:-translate-y-2
            hover:border-purple-300
            transition-all duration-300
            relative overflow-hidden
          "
              >
                {/* Gradient glow top border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-70"></div>

                {/* Icon */}
                <div className="text-5xl mb-5 drop-shadow-md">{f.icon}</div>

                <h4 className="text-2xl font-bold text-purple-700 leading-tight">
                  {f.title}
                </h4>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  {f.text}
                </p>

                {/* AI Glow Orb */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-300 rounded-full opacity-20 blur-3xl"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* =============== HOW IT WORKS SECTION =============== */}
      < section id="how" className="py-24 px-6 max-w-7xl mx-auto" >
        <h3 className="text-4xl font-bold text-center text-purple-700 mb-14">
          How EduAI Works
        </h3>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              step: "1",
              title: "Fill the Course Form",
              desc: "Enter your topic, chapter count, and difficulty level."
            },
            {
              step: "2",
              title: "AI Generates Everything",
              desc: "You instantly get chapters, topics, videos, and roadmap."
            },
            {
              step: "3",
              title: "Start Learning",
              desc: "Track progress and learn with structured content."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center bg-white border border-purple-200 p-8 rounded-xl shadow-sm"
            >
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-purple-600 text-white text-3xl font-bold rounded-full mb-6">
                {item.step}
              </div>
              <h4 className="text-2xl font-semibold text-purple-700">{item.title}</h4>
              <p className="text-gray-600 mt-3">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section >



      <section id="courses" className="px-6 md:px-20 py-20">
        <h3 className="text-center text-3xl md:text-4xl font-bold text-gray-900">
          Popular <span className="text-purple-600">Courses</span>
        </h3>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Course Card */}
          {["Web Development", "AI & Machine Learning", "Data Science"].map((course, i) => (
            <div key={i} className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition">
              <div className="h-44 bg-gradient-to-br from-blue-700 via-blue-200 to-purple-500 flex justify-center text-white  text-2xl items-center ">{course}</div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900">{course}</h4>
                <p className="text-gray-600 mt-3">
                  Learn {course} with step-by-step guided lessons.
                </p>
                <a
                  href="/workspace/explore"
                  className="text-purple-600 font-semibold mt-4 block hover:underline"
                >
                  View Course →
                </a>
              </div>
            </div>
          ))}

        </div>
      </section>


      {/* =============== TESTIMONIALS SECTION =============== */}
      < section id="testimonials" className="py-24 bg-purple-50" >
        <h3 className="text-4xl font-bold text-center text-purple-700 mb-14">
          What Our Learners Say
        </h3>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              name: "Aarav Sharma",
              text: "EduAI saved me hours of searching. The course structure is so clean and easy to follow!",
            },
            {
              name: "Mia Rodriguez",
              text: "I created a complete Python course in seconds. The roadmap and videos were perfect!",
            },
            {
              name: "Ethan Collins",
              text: "The progress tracking helps me stay motivated. Best AI learning tool I’ve used.",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-purple-200 p-6 rounded-xl shadow-sm"
            >
              <p className="text-gray-700 italic">“{t.text}”</p>
              <h4 className="mt-4 font-semibold text-purple-700">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section >

      {/* =============== CTA SECTION =============== */}
      < section id="cta" className="py-24 text-center" >
        <h3 className="text-4xl font-bold text-purple-700">
          Start Your AI-Powered Learning Journey Today
        </h3>
        <p className="mt-4 text-gray-600">
          Generate full courses with one click — no hassle, no confusion.
        </p>

        <a href="/workspace">
          <button className="mt-10 bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-xl text-xl shadow-lg transition">
            Get Started — It’s Free
          </button>

        </a>
      </section >

      {/* =============== PROFESSIONAL FOOTER =============== */}
      < footer id="contact" className="bg-gray-900 text-white py-12 px-6 md:px-20" >
        <div className="flex flex-col md:flex-row justify-between gap-10">

          <div>
            <h4 className="text-2xl font-bold text-purple-400">EduAI</h4>
            <p className="text-gray-400 mt-3 max-w-sm">
              AI-powered online learning made simple.
              Courses, videos, chapters & progress — all in one place.
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-purple-300">Quick Links</h5>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-purple-400">Features</a></li>
              <li><a href="#how" className="hover:text-purple-400">How It Works</a></li>
              <li><a href="#testimonials" className="hover:text-purple-400">Testimonials</a></li>
              <li><a href="#" className="hover:text-purple-400">Support</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-purple-300">Contact</h5>
            <p className="text-gray-400 mt-4">support@eduai.com</p>
            {/* <p className="text-gray-400 mt-2">+1 (555) 123-4567</p> */}
          </div>

        </div>

        <p className="text-center text-gray-500 mt-10 text-sm">
          © 2025 EduAI — All rights reserved.
        </p>
      </footer >
    </div >








  );
}




