// import EnrollCourseList from '@/components/WorkspceComponents/EnrollCourseList'
// import WelcomeBanner from '@/components/WorkspceComponents/WelcomeBanner'
// import React from 'react'

// const MyLearning = () => {
//     return (
//         <div>
//             <WelcomeBanner></WelcomeBanner>
//             {/* <h2 className='text-2xl font-bold mt-5 mb-5'>My Learning</h2> */}


//             <EnrollCourseList></EnrollCourseList>


//         </div>
//     )
// }

// export default MyLearning





// "use client"

// import React, { useState } from 'react'
// import { motion } from 'framer-motion'
// import {
//     Flame,
//     Trophy,
//     Clock,
//     BookMarked,
//     Sparkles,
//     ArrowRight,
//     CheckCircle2,
//     PlayCircle,
//     Layers,
//     Calendar
// } from 'lucide-react'

// // Imports matching your project structure
// import EnrollCourseList from '@/components/WorkspceComponents/EnrollCourseList'
// import WelcomeBanner from '@/components/WorkspceComponents/WelcomeBanner'
// import { Button } from '@/components/ui/button'
// import WorkspaceNavbar from '@/components/WorkspceComponents/Navbar'

// const MyLearning = ({ user, activeCourse }) => {
//     const [selectedShelf, setSelectedShelf] = useState('active') // 'active', 'completed', 'all'

//     // Page Animation Variants
//     const containerVariants = {
//         hidden: { opacity: 0, y: 15 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: { duration: 0.4, staggerChildren: 0.1 }
//         }
//     }

//     return (

//         <div>
//             <WorkspaceNavbar></WorkspaceNavbar>
//             <motion.div
//                 variants={containerVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="min-h-screen bg-slate-50/50 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-8"
//             >

//                 {/* 1. WELCOME BANNER SECTION */}
//                 <div className="text-xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">

//                     My Learning Progress

//                 </div>

//                 {/* 2. STATS & STUDY MOMENTUM SHELF */}
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">

//                     {/* STAT 1: STREAK */}
//                     <div className="bg-white border border-amber-200/80 rounded-2xl p-4 shadow-sm flex items-center gap-3.5">
//                         <div className="p-3 bg-amber-100 text-amber-800 rounded-xl shrink-0">
//                             <Flame className="w-5 h-5 text-amber-600 fill-amber-500" />
//                         </div>
//                         <div className="min-w-0">
//                             <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Streak</p>
//                             <p className="text-base sm:text-xl font-extrabold text-slate-900 truncate">5 Days 🔥</p>
//                         </div>
//                     </div>

//                     {/* STAT 2: TOTAL TIME */}
//                     <div className="bg-white border border-amber-200/80 rounded-2xl p-4 shadow-sm flex items-center gap-3.5">
//                         <div className="p-3 bg-amber-100 text-amber-800 rounded-xl shrink-0">
//                             <Clock className="w-5 h-5 text-amber-600" />
//                         </div>
//                         <div className="min-w-0">
//                             <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Study Time</p>
//                             <p className="text-base sm:text-xl font-extrabold text-slate-900 truncate">14.2 Hours</p>
//                         </div>
//                     </div>

//                     {/* STAT 3: IN PROGRESS */}
//                     <div className="bg-white border border-amber-200/80 rounded-2xl p-4 shadow-sm flex items-center gap-3.5">
//                         <div className="p-3 bg-amber-100 text-amber-800 rounded-xl shrink-0">
//                             <Layers className="w-5 h-5 text-amber-600" />
//                         </div>
//                         <div className="min-w-0">
//                             <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">In Progress</p>
//                             <p className="text-base sm:text-xl font-extrabold text-slate-900 truncate">3 Courses</p>
//                         </div>
//                     </div>

//                     {/* STAT 4: MASTERED */}
//                     <div className="bg-white border border-amber-200/80 rounded-2xl p-4 shadow-sm flex items-center gap-3.5">
//                         <div className="p-3 bg-emerald-100 text-emerald-800 rounded-xl shrink-0">
//                             <Trophy className="w-5 h-5 text-emerald-600" />
//                         </div>
//                         <div className="min-w-0">
//                             <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Mastered</p>
//                             <p className="text-base sm:text-xl font-extrabold text-slate-900 truncate">2 Completed</p>
//                         </div>
//                     </div>

//                 </div>

//                 {/* 3. QUICK JUMP: LAST ACCESSED COURSE HERO WIDGET */}
//                 {activeCourse && (
//                     <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
//                         <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />

//                         <div className="relative z-10 space-y-2 max-w-xl">
//                             <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold border border-white/20 inline-flex items-center gap-1.5 text-amber-100">
//                                 <PlayCircle className="w-3.5 h-3.5" />
//                                 Continue Learning
//                             </span>
//                             <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
//                                 {activeCourse?.name || "React Real-Time Architecture"}
//                             </h3>
//                             <p className="text-xs sm:text-sm text-amber-100 line-clamp-2">
//                                 Next Up: Chapter 3 — Integrating Socket.io real-time connection handlers.
//                             </p>
//                         </div>

//                         <Button className="relative z-10 bg-white hover:bg-amber-50 text-amber-900 font-extrabold px-6 py-6 rounded-2xl shadow-sm transition-all gap-2 shrink-0">
//                             <span>Resume Lesson</span>
//                             <ArrowRight className="w-4 h-4" />
//                         </Button>
//                     </div>
//                 )}

//                 {/* 4. COURSE SHELF SECTION HEADER & TABS */}
//                 <div className="space-y-6">

//                     <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
//                         <div className="space-y-1">
//                             <div className="flex items-center gap-2">
//                                 <BookMarked className="w-5 h-5 text-amber-600" />
//                                 <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
//                                     My Course Shelf
//                                 </h2>
//                             </div>
//                             <p className="text-xs sm:text-sm text-slate-500">
//                                 Access your enrolled modules, review active progress, and explore completed courses.
//                             </p>
//                         </div>

//                         {/* SHELF VIEW SELECTOR SWITCHER */}
//                         <div className="flex items-center gap-1 bg-slate-200/60 p-1 rounded-2xl shrink-0 self-start sm:self-auto">
//                             <button
//                                 onClick={() => setSelectedShelf('active')}
//                                 className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedShelf === 'active'
//                                     ? 'bg-white text-slate-900 shadow-sm'
//                                     : 'text-slate-600 hover:text-slate-900'
//                                     }`}
//                             >
//                                 In Progress
//                             </button>
//                             <button
//                                 onClick={() => setSelectedShelf('completed')}
//                                 className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedShelf === 'completed'
//                                     ? 'bg-white text-slate-900 shadow-sm'
//                                     : 'text-slate-600 hover:text-slate-900'
//                                     }`}
//                             >
//                                 Mastered
//                             </button>
//                             <button
//                                 onClick={() => setSelectedShelf('all')}
//                                 className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedShelf === 'all'
//                                     ? 'bg-white text-slate-900 shadow-sm'
//                                     : 'text-slate-600 hover:text-slate-900'
//                                     }`}
//                             >
//                                 All Courses
//                             </button>
//                         </div>
//                     </div>

//                     {/* 5. ENROLLED COURSE LIST CONTAINER */}
//                     <div className="pt-2">
//                         <EnrollCourseList filter={selectedShelf} />
//                     </div>

//                 </div>

//             </motion.div>
//         </div>
//     )
// }

// export default MyLearning






"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import {
  Flame,
  Trophy,
  Clock,
  BookMarked,
  ArrowRight,
  PlayCircle,
  Layers,
} from "lucide-react";

import EnrollCourseList from "@/components/WorkspceComponents/EnrollCourseList";
import { Button } from "@/components/ui/button";
import WorkspaceNavbar from "@/components/WorkspceComponents/Navbar";
import Footer from "@/components/WorkspceComponents/Footer";

const MyLearning = ({ user, activeCourse }) => {
  const [selectedShelf, setSelectedShelf] = useState("active");

  const [stats, setStats] = useState({
    totalStudyTime: 0,
    totalCourses: 0,
    masteredCourses: 0,
    inProgressCourses: 0,
  });

  const [courses, setCourses] = useState([]);

  const [loading, setLoading] = useState(true);

  // -----------------------------------------
  // Get workspace data
  // -----------------------------------------

  useEffect(() => {
    const getWorkspaceData = async () => {
      try {
        setLoading(true);

        const response = await axios.get("/api/UserStats");

        if (response.data.success) {
          setStats(response.data.stats);
          setCourses(response.data.courses);
        }
      } catch (error) {
        console.error("Failed to load workspace:", error);
      } finally {
        setLoading(false);
      }
    };

    getWorkspaceData();
  }, []);

  // -----------------------------------------
  // Convert seconds to readable time
  // -----------------------------------------

  const formatStudyTime = (seconds) => {
    if (!seconds || seconds <= 0) {
      return "0 Hours";
    }

    const hours = Math.floor(seconds / 3600);

    const minutes = Math.floor((seconds % 3600) / 60);

    if (hours === 0) {
      return `${minutes} Min`;
    }

    if (minutes === 0) {
      return `${hours} Hours`;
    }

    return `${hours}h ${minutes}m`;
  };

  // -----------------------------------------
  // Find active course
  // -----------------------------------------

  const currentActiveCourse =
    activeCourse ||
    courses.find(
      (course) =>
        course.enrollment?.CourseStatus === "In Progress"
    );

  // -----------------------------------------
  // Animation
  // -----------------------------------------

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div>
      <WorkspaceNavbar />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen bg-slate-50/50 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-8"
      >
        {/* -------------------------------- */}
        {/* HEADER */}
        {/* -------------------------------- */}

        <div>
          <p className="text-sm font-semibold text-amber-600 mb-2">
            Welcome back{user?.firstName ? `, ${user.firstName}` : ""}
          </p>

          <h1 className="text-xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            My Learning Progress
          </h1>

          <p className="text-sm text-slate-500 mt-2">
            Keep learning, track your progress, and master your courses.
          </p>
        </div>

        {/* -------------------------------- */}
        {/* STATS */}
        {/* -------------------------------- */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">

          {/* STUDY TIME */}

          <div className="bg-white border border-amber-200/80 rounded-2xl p-4 shadow-sm flex items-center gap-3.5">
            <div className="p-3 bg-amber-100 rounded-xl shrink-0">
              <Clock className="w-5 h-5 text-amber-600" />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                Study Time
              </p>

              <p className="text-base sm:text-xl font-extrabold text-slate-900 truncate">
                {loading
                  ? "..."
                  : formatStudyTime(stats.totalStudyTime)}
              </p>
            </div>
          </div>

          {/* TOTAL COURSES */}

          <div className="bg-white border border-amber-200/80 rounded-2xl p-4 shadow-sm flex items-center gap-3.5">
            <div className="p-3 bg-amber-100 rounded-xl shrink-0">
              <BookMarked className="w-5 h-5 text-amber-600" />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                Total Courses
              </p>

              <p className="text-base sm:text-xl font-extrabold text-slate-900">
                {loading ? "..." : stats.totalCourses}
              </p>
            </div>
          </div>

          {/* IN PROGRESS */}

          <div className="bg-white border border-amber-200/80 rounded-2xl p-4 shadow-sm flex items-center gap-3.5">
            <div className="p-3 bg-amber-100 rounded-xl shrink-0">
              <Layers className="w-5 h-5 text-amber-600" />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                In Progress
              </p>

              <p className="text-base sm:text-xl font-extrabold text-slate-900">
                {loading
                  ? "..."
                  : stats.inProgressCourses}
              </p>
            </div>
          </div>

          {/* MASTERED */}

          <div className="bg-white border border-emerald-200/80 rounded-2xl p-4 shadow-sm flex items-center gap-3.5">
            <div className="p-3 bg-emerald-100 rounded-xl shrink-0">
              <Trophy className="w-5 h-5 text-emerald-600" />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                Mastered
              </p>

              <p className="text-base sm:text-xl font-extrabold text-slate-900">
                {loading
                  ? "..."
                  : stats.masteredCourses}
              </p>
            </div>
          </div>
        </div>




        {/* -------------------------------- */}
        {/* COURSE SHELF */}
        {/* -------------------------------- */}

        <div className="space-y-6">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">

            <div className="space-y-1">

              <div className="flex items-center gap-2">
                <BookMarked className="w-5 h-5 text-amber-600" />

                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  My Course Shelf
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-500">
                Access your enrolled courses and track your learning progress.
              </p>

            </div>

            {/* FILTER */}

            <div className="flex items-center gap-1 bg-slate-200/60 p-1 rounded-2xl shrink-0 self-start sm:self-auto">

              <button
                onClick={() => setSelectedShelf("active")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedShelf === "active"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                  }`}
              >
                In Progress
              </button>

              <button
                onClick={() => setSelectedShelf("completed")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedShelf === "completed"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                  }`}
              >
                Mastered
              </button>

              <button
                onClick={() => setSelectedShelf("all")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedShelf === "all"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                  }`}
              >
                All Courses
              </button>

            </div>
          </div>

          {/* COURSE LIST */}

          <div className="pt-2">

            <EnrollCourseList
              filter={selectedShelf}
              courses={courses || ''}
            />

          </div>

        </div>
      </motion.div>
      <Footer></Footer>
    </div>
  );
};

export default MyLearning;