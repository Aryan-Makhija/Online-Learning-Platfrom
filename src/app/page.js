"use client"

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { motion } from "framer-motion"
import Link from "next/link";
export default function Home() {
  return (

    // <div className="min-h-screen bg-white">

    //   {/* ============ HEADER ============ */}
    //   <header className="w-full py-5 px-6 md:px-16 flex items-center justify-between shadow-sm bg-white sticky top-0 z-50">
    //     <h1 className="text-2xl font-bold text-purple-600">EduAI</h1>

    //     <nav className="hidden md:flex items-center gap-10 text-gray-700">
    //       <a href="#features" className="hover:text-purple-600">Features</a>
    //       <a href="#courses" className="hover:text-purple-600">Courses</a>
    //       <a href="#testimonials" className="hover:text-purple-600">Testimonials</a>
    //       <a href="#contact" className="hover:text-purple-600">Contact</a>
    //     </nav>

    //     {/* <a
    //         href="/sign-in"
    //         className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg"
    //       >
    //         Login
    //       </a> */}

    //     <SignedOut>
    //       <a
    //         href="/sign-in?redirect_url=/workspace"
    //         className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg"
    //       >
    //         Login
    //       </a>
    //     </SignedOut>

    //     {/* When user is logged IN */}
    //     <SignedIn>
    //       <UserButton
    //         appearance={{
    //           elements: {
    //             avatarBox: "w-10 h-10",
    //           },
    //         }}
    //         afterSignOutUrl="/"
    //       />
    //     </SignedIn>


    //     {/* Mobile menu icon */}
    //     <div className="md:hidden text-purple-600 text-3xl">
    //       ☰
    //     </div>
    //   </header>

    //   {/* ============ HERO SECTION ============ */}
    //   <section className="px-6 md:px-20 py-20 flex flex-col md:flex-row items-center justify-between">

    //     {/* Left */}
    //     <div className="flex-1">
    //       <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
    //         Learn Smarter with <span className="text-purple-600">AI-Powered</span> Education
    //       </h2>

    //       <p className="text-gray-600 mt-5 text-lg md:text-xl">
    //         Unlock knowledge anytime, anywhere. Personalised learning paths, AI-generated quizzes,
    //         and expert-led courses to help you grow faster.
    //       </p>

    //       <div className="mt-8 flex gap-4">
    //         <a
    //           href="/workspace"
    //           className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-lg"
    //         >
    //           Get Started
    //         </a>

    //         <a
    //           href="#courses"
    //           className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg text-lg"
    //         >
    //           Browse Courses
    //         </a>
    //       </div>
    //     </div>

    //     {/* Right */}
    //     <div className="flex-1 mt-10 md:mt-0">
    //       <img
    //         src="/hero-illustration.png"
    //         alt="Learning"
    //         className="w-full"
    //       />
    //     </div>
    //   </section>

    //   {/* ============ FEATURES SECTION ============ */}
    //   <section id="features" className="px-6 md:px-20 py-20 bg-purple-50">
    //     <h3 className="text-center text-3xl md:text-4xl font-bold text-gray-900">
    //       Platform <span className="text-purple-600">Features</span>
    //     </h3>

    //     <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
    //       {/* Feature */}
    //       <div className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition">
    //         <h4 className="text-xl font-semibold text-purple-600">AI-Generated Quizzes</h4>
    //         <p className="text-gray-600 mt-3">Automatically generated quizzes based on your progress.</p>
    //       </div>

    //       <div className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition">
    //         <h4 className="text-xl font-semibold text-purple-600">Personalised Learning</h4>
    //         <p className="text-gray-600 mt-3">AI recommends lessons based on your performance.</p>
    //       </div>

    //       <div className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition">
    //         <h4 className="text-xl font-semibold text-purple-600">Expert Tutors</h4>
    //         <p className="text-gray-600 mt-3">Learn from industry professionals.</p>
    //       </div>
    //     </div>
    //   </section>

    //   {/* ============ COURSES SECTION ============ */}
    //   <section id="courses" className="px-6 md:px-20 py-20">
    //     <h3 className="text-center text-3xl md:text-4xl font-bold text-gray-900">
    //       Popular <span className="text-purple-600">Courses</span>
    //     </h3>

    //     <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

    //       {/* Course Card */}
    //       {["Web Development", "AI & Machine Learning", "Data Science"].map((course, i) => (
    //         <div key={i} className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition">
    //           <div className="h-44 bg-purple-200"></div>
    //           <div className="p-6">
    //             <h4 className="text-xl font-semibold text-gray-900">{course}</h4>
    //             <p className="text-gray-600 mt-3">
    //               Learn {course} with step-by-step guided lessons.
    //             </p>
    //             <a
    //               href="/courses"
    //               className="text-purple-600 font-semibold mt-4 block hover:underline"
    //             >
    //               View Course →
    //             </a>
    //           </div>
    //         </div>
    //       ))}

    //     </div>
    //   </section>

    //   {/* ============ TESTIMONIALS SECTION ============ */}
    //   <section id="testimonials" className="px-6 md:px-20 py-20 bg-purple-50">
    //     <h3 className="text-center text-3xl md:text-4xl font-bold text-gray-900">
    //       Student <span className="text-purple-600">Testimonials</span>
    //     </h3>

    //     <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">

    //       {[1, 2, 3].map((t) => (
    //         <div key={t} className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
    //           <p className="text-gray-600">“This platform helped me learn faster with AI-based suggestions!”</p>
    //           <h4 className="mt-4 font-semibold text-gray-900">Student {t}</h4>
    //         </div>
    //       ))}

    //     </div>
    //   </section>

    //   {/* ============ CTA SECTION ============ */}
    //   <section className="px-6 md:px-20 py-20 text-center">
    //     <h3 className="text-4xl font-bold text-gray-900">
    //       Start Learning with <span className="text-purple-600">AI Today</span>
    //     </h3>
    //     <p className="text-gray-600 mt-3 text-lg">
    //       Join thousands of learners upgrading their skills.
    //     </p>

    //     <a
    //       href="/signup"
    //       className="inline-block mt-8 bg-purple-600 text-white px-10 py-4 rounded-lg text-xl hover:bg-purple-700"
    //     >
    //       Get Started
    //     </a>
    //   </section>

    //   {/* ============ FOOTER ============ */}
    //   <footer id="contact" className="bg-gray-900 text-white py-10 px-6 md:px-20">
    //     <div className="flex flex-col md:flex-row justify-between gap-6">

    //       <div>
    //         <h4 className="text-xl font-bold text-purple-400">EduAI</h4>
    //         <p className="text-gray-400 mt-3">AI-powered online learning made simple.</p>
    //       </div>

    //       <div>
    //         <h5 className="font-semibold text-purple-300">Quick Links</h5>
    //         <ul className="mt-3 space-y-2 text-gray-400">
    //           <li><a href="#" className="hover:text-purple-400">About Us</a></li>
    //           <li><a href="#" className="hover:text-purple-400">Courses</a></li>
    //           <li><a href="#" className="hover:text-purple-400">Support</a></li>
    //         </ul>
    //       </div>

    //       <div>
    //         <h5 className="font-semibold text-purple-300">Contact</h5>
    //         <p className="text-gray-400 mt-3">support@eduai.com</p>
    //       </div>

    //     </div>

    //     <p className="text-center text-gray-500 mt-10 text-sm">
    //       © 2025 EduAI — All rights reserved.
    //     </p>
    //   </footer>

    // </div>


    <div className="bg-white text-gray-900 min-h-screen font-sans">

      {/* =============== HEADER =============== */}
      <header className="w-full fixed top-0 left-0 bg-white/70 backdrop-blur-lg z-50 border-b border-purple-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-purple-600"
          >
            EduAI
          </motion.h1>

          <nav className="hidden md:flex gap-8 text-m font-medium">
            <a href="#features" className="hover:text-purple-600 transition">Features</a>
            <a href="#how" className="hover:text-purple-600 transition">How It Works</a>
            <a href="#testimonials" className="hover:text-purple-600 transition">Testimonials</a>
            <a href="#contact" className="hover:text-purple-600 transition">Contact</a>
          </nav>
          {/* 
          <a h href="/sign-in?redirect_url=/workspace">

            <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg shadow">
              Login
            </button>

          </a> */}

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

        {/* Animated AI Circle */}
        {/* <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="mt-16 mx-auto w-64 h-64 border-4 border-purple-200 rounded-full flex items-center justify-center"
        >
          <div className="w-40 h-40 bg-purple-300/30 blur-xl rounded-full" />
        </motion.div> */}
      </section >

      {/* =============== FEATURES SECTION =============== */}
      < section id="features" className="py-24 bg-purple-50" >
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-purple-700 mb-14">
            Powerful Features
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "AI-Generated Courses",
                text: "Enter a topic—EduAI builds your full course structure instantly."
              },
              {
                title: "YouTube Integration",
                text: "Relevant videos automatically added to each chapter."
              },
              {
                title: "Progress Tracking",
                text: "Track your learning progress chapter by chapter."
              },
              {
                title: "Smart Topic Breakdown",
                text: "Each chapter contains digestible, easy-to-learn topics."
              },
              {
                title: "Custom Chapter Count",
                text: "Choose how many chapters you want—AI handles the rest."
              },
              {
                title: "All in One Place",
                text: "No researching. No confusion. Your entire roadmap ready."
              }
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-purple-200 p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition"
              >
                <h4 className="text-2xl font-semibold text-purple-700">{f.title}</h4>
                <p className="text-gray-600 mt-3">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

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
              <div className="h-44 bg-purple-200"></div>
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




