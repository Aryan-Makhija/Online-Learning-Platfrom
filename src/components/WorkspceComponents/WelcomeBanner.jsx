"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import AddnewCourse from './AddnewCourse';
const WelcomeBanner = () => {

  {/* <div className="w-full h-24 md:h-96 lg:h-[400px] relative overflow-hidden rounded-lg">
  <Image
    src="/banner.jpeg"
    alt="Banner"
    fill
    className="object-cover object-center w-full h-full"
    priority
  />
</div> */}

  const handleScroll = () => {
    const section = document.getElementById("course");
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-blue-50 shadow-lg px-6 py-10 sm:px-10 lg:px-14">

      {/* Decorative Blur Shapes */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-indigo-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-44 h-44 bg-blue-200/40 rounded-full blur-3xl" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl"
      >
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full"
        >
          🚀 AI-Powered Learning Workspace
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4"
        >
          Welcome to <span className="text-indigo-600">EduAI</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-slate-600 text-base sm:text-lg max-w-2xl mb-8"
        >
          An AI-powered online learning platform built to personalize education,
          accelerate skill development, and empower smarter learning.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >

          <AddnewCourse>
            <button className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 transition" >
              Get Started
            </button>

          </AddnewCourse>




            <button className="px-6 py-3 rounded-lg bg-white text-indigo-600 font-semibold border border-indigo-200 hover:bg-indigo-50 transition" onClick={handleScroll}>
              Explore Courses
            </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default WelcomeBanner