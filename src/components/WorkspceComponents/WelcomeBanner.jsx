// "use client"

// import Image from 'next/image'
// import React from 'react'
// import { motion } from "framer-motion";
// import Link from 'next/link';
// import AddnewCourse from './AddnewCourse';
// const WelcomeBanner = () => {



//   const handleScroll = () => {
//     const section = document.getElementById("course");
//     section?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   }
//   return (
//     <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-blue-50 shadow-lg px-6 py-10 sm:px-10 lg:px-14">

//       {/* Decorative Blur Shapes */}
//       <div className="absolute top-0 right-0 w-44 h-44 bg-indigo-200/40 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 left-0 w-44 h-44 bg-blue-200/40 rounded-full blur-3xl" />

//       {/* Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="relative z-10 max-w-4xl"
//       >
//         {/* Badge */}
//         <motion.span
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.2 }}
//           className="inline-block mb-4 px-4 py-1 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full"
//         >
//           🚀 AI-Powered Learning Workspace
//         </motion.span>

//         {/* Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4"
//         >
//           Welcome to Edu<span className="text-indigo-600">AI</span>
//         </motion.h1>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="text-slate-600 text-base sm:text-lg max-w-2xl mb-8"
//         >
//           An AI-powered online learning platform built to personalize education,
//           accelerate skill development, and empower smarter learning.
//         </motion.p>

//         {/* CTA Buttons */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="flex flex-col sm:flex-row gap-4"
//         >

//           <AddnewCourse>
//             <button className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 transition" >
//               Get Started
//             </button>

//           </AddnewCourse>




//             <button className="px-6 py-3 rounded-lg bg-white text-indigo-600 font-semibold border border-indigo-200 hover:bg-indigo-50 transition" onClick={handleScroll}>
//               Explore Courses
//             </button>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

// export default WelcomeBanner




"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, BookOpen, Trophy, Zap } from 'lucide-react'
import { useUser } from '@clerk/nextjs'
import AddnewCourse from './AddnewCourse'

const WelcomeBanner = ({ activeTab, setActiveTab }) => {
  const { user } = useUser()

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-800 text-white p-6 sm:p-8 lg:p-10 shadow-xl shadow-amber-500/10">
      
      {/* Background Decorative Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] opacity-15" />
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-amber-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-amber-900/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        
        {/* Left Welcome Copy */}
        <div className="max-w-2xl space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md text-amber-100 border border-white/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-200" />
            <span>AI-Driven Personalized Learning</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white"
          >
            Welcome back, <span className="text-amber-200">{user?.firstName || 'Learner'}</span>! 👋
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-amber-100 text-sm sm:text-base max-w-xl leading-relaxed"
          >
            Track your course progress, explore new custom AI subjects, or generate a brand new interactive module in seconds.
          </motion.p>

          {/* Quick Action Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="pt-2 flex flex-wrap gap-3"
          >
            <AddnewCourse>
              <button className="px-5 py-3 rounded-2xl bg-white text-amber-900 font-bold text-xs sm:text-sm hover:bg-amber-50 shadow-md transition-all active:scale-95 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-600 fill-amber-600" />
                <span>Create New Course</span>
              </button>
            </AddnewCourse>

            <button 
              onClick={() => setActiveTab(activeTab === 'enrolled' ? 'explore' : 'enrolled')}
              className="px-5 py-3 rounded-2xl bg-amber-950/40 hover:bg-amber-950/60 text-amber-100 border border-amber-400/30 font-bold text-xs sm:text-sm backdrop-blur-md transition-all flex items-center gap-2"
            >
              <span>{activeTab === 'enrolled' ? 'Explore Catalog' : 'View My Courses'}</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </button>
          </motion.div>
        </div>

        {/* Right Metric Quick View Cards */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 gap-3 w-full lg:w-auto shrink-0"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex flex-col justify-center min-w-[130px]">
            <div className="flex items-center gap-2 text-amber-200 mb-1">
              <BookOpen className="w-4 h-4" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Active</span>
            </div>
            <span className="text-2xl sm:text-3xl font-black text-white">Interactive</span>
            <span className="text-[10px] text-amber-200/80">Self-Paced Learning</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex flex-col justify-center min-w-[130px]">
            <div className="flex items-center gap-2 text-amber-200 mb-1">
              <Trophy className="w-4 h-4" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Powered</span>
            </div>
            <span className="text-2xl sm:text-3xl font-black text-white">EduAI</span>
            <span className="text-[10px] text-amber-200/80">Adaptive Modules</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default WelcomeBanner
























