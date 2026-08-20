
"use client"

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { UserButton } from '@clerk/nextjs'
import {
  Sparkles,
  BookOpen,
  Compass,
  PlusCircle,
  Menu,
  X,
  GraduationCap,
  Clock,
  Award,
  BrainCircuit,
  Zap,
  ArrowRight,
  Layers,
  Code2,
  CheckCircle2,
  ChevronRight
} from 'lucide-react'
import { useEffect, useState } from 'react'
import CourseCard from '@/components/WorkspceComponents/CourseCard'
import CourseList from '@/components/WorkspceComponents/CourseList'
import EnrollCourseList from '@/components/WorkspceComponents/EnrollCourseList'
import axios from 'axios'
import AddnewCourse from '@/components/WorkspceComponents/AddnewCourse'
import WorkspaceNavbar from '@/components/WorkspceComponents/Navbar'
import DashboardWidgets from '@/components/WorkspceComponents/DashboardWidgets'
import Footer from '@/components/HomePage/Footer'


/* -------------------------------------------------------------------------- */
/* 1. ANIMATED AI EDUCATOR ANIME MASCOT                                       */
/* -------------------------------------------------------------------------- */
const AIEducatorMascot = () => {
  return (
    <div className="relative w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center shrink-0">
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/30 via-orange-300/20 to-indigo-500/20 rounded-full blur-2xl animate-pulse" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-40 h-40 sm:w-52 sm:h-52 rounded-full border border-dashed border-amber-400/40 pointer-events-none"
      />

      <motion.div
        animate={{ y: [-8, 8, -8], rotate: [-1.5, 1.5, -1.5] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl">
          <defs>
            <linearGradient id="mascotBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="visorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
            <linearGradient id="robeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>

          <circle cx="25" cy="40" r="3" fill="#fbbf24" className="animate-ping" />
          <circle cx="175" cy="50" r="4" fill="#6366f1" />
          <path d="M 160 140 L 164 144 L 160 148 L 156 144 Z" fill="#f59e0b" />

          <g transform="translate(0, -5)">
            <polygon points="100,25 155,42 100,58 45,42" fill="#0f172a" />
            <polygon points="100,25 155,42 100,45 45,42" fill="#1e293b" />
            <rect x="94" y="28" width="12" height="6" rx="2" fill="#f59e0b" />
            <path d="M 145 42 Q 155 60 152 75" stroke="#fbbf24" strokeWidth="2.5" fill="none" />
            <circle cx="152" cy="77" r="3" fill="#fbbf24" />
          </g>

          <circle cx="100" cy="95" r="46" fill="#ffffff" stroke="#e2e8f0" strokeWidth="3" />
          <path d="M 56 85 Q 75 60 100 70 Q 125 60 144 85 Q 128 72 100 78 Q 72 72 56 85 Z" fill="#1e293b" />

          <rect x="68" y="82" width="64" height="24" rx="12" fill="url(#visorGrad)" className="shadow-inner" />
          <ellipse cx="86" cy="94" rx="6" ry="7" fill="#ffffff" />
          <ellipse cx="114" cy="94" rx="6" ry="7" fill="#ffffff" />
          <circle cx="88" cy="92" r="2" fill="#0f172a" />
          <circle cx="116" cy="92" r="2" fill="#0f172a" />

          <ellipse cx="68" cy="112" rx="6" ry="3" fill="#f472b6" opacity="0.6" />
          <ellipse cx="132" cy="112" rx="6" ry="3" fill="#f472b6" opacity="0.6" />

          <path d="M 92 114 Q 100 122 108 114" stroke="#334155" strokeWidth="3" strokeLinecap="round" fill="none" />

          <path d="M 60 138 Q 100 122 140 138 L 150 185 L 50 185 Z" fill="url(#robeGrad)" />
          <path d="M 90 138 L 100 160 L 110 138" fill="none" stroke="#f59e0b" strokeWidth="4" />
          <circle cx="100" cy="158" r="6" fill="#fbbf24" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ y: [4, -4, 4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-1 sm:bottom-0 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-amber-200/80 shadow-md flex items-center gap-1.5 z-20"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[11px] font-bold text-slate-800 tracking-tight">AI Tutor Active</span>
      </motion.div>
    </div>
  )
}



/* -------------------------------------------------------------------------- */
/* 3. HERO WELCOME BANNER                                                     */
/* -------------------------------------------------------------------------- */
const WelcomeBanner = ({ activeTab, setActiveTab }) => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-800 text-white p-6 sm:p-8 lg:p-10 shadow-2xl">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">

        {/* Left Copy Section */}
        <div className="flex-1 space-y-4 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>AI Powered Learning Engine 3.0</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight"
          >
            Advance Your Skills with <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Adaptive Intelligence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed mx-auto lg:mx-0"
          >
            Welcome back! Pick up where you left off or generate personalized, interactive courses tailored precisely to your career goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3"
          >
            <AddnewCourse>

              <button className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                <Zap className="w-4 h-4 fill-slate-950" />
                <span>Create AI Course</span>
              </button>
            </AddnewCourse>

            <button
              onClick={() => setActiveTab(activeTab === 'enrolled' ? 'explore' : 'enrolled')}
              className="px-5 py-3.5 rounded-2xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs sm:text-sm backdrop-blur-md transition-all flex items-center gap-2"
            >
              <span>{activeTab === 'enrolled' ? 'Explore Catalog' : 'View My Courses'}</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </motion.div>
        </div>

        {/* Mascot */}
        <div className="shrink-0 flex justify-center">
          <AIEducatorMascot />
        </div>

      </div>
    </section>
  )
}



/* -------------------------------------------------------------------------- */
/* 5. MAIN WORKSPACE PAGE COMPONENT                                           */
/* -------------------------------------------------------------------------- */
export default function WorkSpace() {
  const [activeTab, setActiveTab] = useState('enrolled')
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const getAllCourses = async () => {
    try {
      setLoading(true)
      const response = await axios.get('/api/courses')
      setCourses(response.data || [])
    } catch (err) {
      console.error('Failed to fetch courses:', err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getAllCourses()
  }, [])

  // Filter courses locally via debounced search term
  // const filteredCourses = courses.filter((course) => {
  //   const title = (course?.name || course?.courseJson?.course?.name || '').toLowerCase()
  //   const description = (course?.courseJson?.course?.description || '').toLowerCase()



  // })
  return (
    <div className="min-h-screen bg-slate-50/80 font-sans text-slate-800 flex flex-col">

      {/* Header Navigation with Clerk UserButton and Page Links */}
      <WorkspaceNavbar />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* Banner with Warm Ambient Glow & Anime AI Educator */}
        <WelcomeBanner activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Static Feature Overview Widgets */}
        <DashboardWidgets />

        {/* Dynamic Course Section */}
        <div className="space-y-6 pt-2">

          {/* Section Header & View Toggles */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                {activeTab === 'enrolled' ? (
                  <>
                    <BookOpen className="w-6 h-6 text-amber-600" />
                    <span>My Enrolled Courses</span>
                  </>
                ) : (
                  <>
                    <Compass className="w-6 h-6 text-amber-600" />
                    <span>Explore Course Catalog</span>
                  </>
                )}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {activeTab === 'enrolled'
                  ? 'Track your active learning journey and pick up where you left off.'
                  : 'Discover AI-generated interactive modules across diverse topics.'}
              </p>
            </div>

            {/* In-Page Workspace Tab Switcher */}
            <div className="inline-flex bg-slate-200/80 p-1.5 rounded-2xl self-start sm:self-auto border border-slate-300/60">
              <button
                onClick={() => setActiveTab('enrolled')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'enrolled'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                Enrolled
              </button>
              <button
                onClick={() => setActiveTab('explore')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'explore'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                Explore Catalog
              </button>
            </div>
          </div>

          {/* Dynamic Rendered Course Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'enrolled' ? (
              <motion.div
                key="enrolled-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
              >
                {/* Dynamic Enrolled Courses */}
                <EnrollCourseList />
              </motion.div>
            ) : (
              <motion.div
                key="explore-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
              >
                {/* Dynamic All Courses / Course Cards */}


                <CourseList />


              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </main>
      <Footer></Footer>
    </div>
  )
}