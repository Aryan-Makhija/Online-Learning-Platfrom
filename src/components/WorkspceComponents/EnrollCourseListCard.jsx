// import { Book, PlayCircle, Settings } from 'lucide-react'
// import React, { useState } from 'react'
// import { Button } from '../ui/button'
// import { Progress } from '../ui/progress'
// import Link from 'next/link'
// import { motion } from "framer-motion";

// const EnrollCourseListCard = ({ course, enrollcourse }) => {


//     const CalculateProgress = () => {
//         return Math.round(
//             (enrollcourse?.completedChapters?.length / course?.courseContent?.length) * 100)
//     }




//     const courseJson = course?.courseJson?.course

//     return (


//         <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.1 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="shadow-xl rounded-2xl w-full max-w-md md:max-w-md lg:max-w-lg mx-auto hover:shadow-2xl transition-shadow duration-300 flex flex-col bg-white overflow-hidden"
//         >
//             {/* Header */}
//             <div className="
//     h-48
//     bg-gradient-to-br from-blue-700 via-blue-200 to-indigo-500 
//     text-white
//     flex items-center justify-center
//     text-center
//     text-xl md:text-2xl
//     font-semibold
//     px-6
//   ">
//                 {course?.name}
//             </div>

//             {/* Body */}
//             <div className="p-6 flex flex-col gap-4 flex-1">
//                 {/* Title */}
//                 <h2
//                     className="font-bold text-lg md:text-xl truncate"
//                     title={courseJson?.name}
//                 >
//                     {courseJson?.name}
//                 </h2>

//                 {/* Description */}
//                 <p className="text-gray-500 text-sm md:text-base line-clamp-3">
//                     {courseJson?.description}
//                 </p>

//                 {/* Progress */}
//                 <div className="flex flex-col gap-2">
//                     <p className="flex justify-between text-sm font-medium text-purple-600">
//                         <span>Progress</span>
//                         <span>{CalculateProgress()}%</span>
//                     </p>
//                     <Progress value={CalculateProgress()} />
//                 </div>

//                 {/* Footer */}
//                 <div className="mt-auto flex flex-col gap-4">
//                     <div className="flex items-center gap-2 text-blue-900 font-medium">
//                         <Book className="text-indigo-600" />
//                         {courseJson?.noOfChapters} Chapters
//                     </div>

//                     <Link href={`/workspace/view-course/${course?.cid}`}>
//                         <Button
//                             className="
//             w-full py-3 rounded-xl
//             bg-indigo-600 text-white
//             flex items-center justify-center gap-2
//             hover:scale-[1.03]
//             transition-transform
//           "
//                         >
//                             <PlayCircle />
//                             Continue Learning
//                         </Button>
//                     </Link>
//                 </div>
//             </div>
//         </motion.div>

//     )
// }

// export default EnrollCourseListCard







// "use client"

// import React from 'react'
// import Link from 'next/link'
// import { motion } from 'framer-motion'
// import { BookOpen, PlayCircle, Trophy, Sparkles, Clock, CheckCircle2 } from 'lucide-react'
// import { Button } from '../ui/button'
// import { Progress } from '../ui/progress'

// const EnrollCourseListCard = ({ course, enrollcourse }) => {
//   // Safe calculation for course progress percentage
//   const completedCount = enrollcourse?.completedChapters?.length || 0
//   const totalChapters = course?.courseContent?.length || course?.courseJson?.course?.chapters?.length || 1

//   const calculateProgress = () => {
//     if (!totalChapters || totalChapters === 0) return 0
//     const rawProgress = Math.round((completedCount / totalChapters) * 100)
//     return Math.min(Math.max(rawProgress, 0), 100)
//   }

//   const progressPercent = calculateProgress()
//   const courseJson = course?.courseJson?.course || course
//   const isCompleted = progressPercent === 100

//   return (
//     <motion.div
//       whileHover={{ y: -6 }}
//       transition={{ duration: 0.25, ease: "easeOut" }}
//       className="group bg-white border border-slate-200/80 hover:border-amber-300 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-amber-500/10 transition-all flex flex-col overflow-hidden relative min-w-0"
//     >
//       {/* CARD HEADER / POSTER */}
//       <div className="h-44 sm:h-48 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-800 p-5 flex flex-col justify-between text-white relative overflow-hidden shrink-0">
//         {/* Subtle Ambient Background Patterns */}
//         <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
//         <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-amber-300/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />

//         {/* TOP HEADER BADGES */}
//         <div className="relative z-10 flex items-center justify-between gap-2">
//           <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide bg-white/20 backdrop-blur-md text-amber-50 border border-white/20">
//             <Sparkles className="w-3 h-3 text-amber-200" />
//             <span>{courseJson?.level || "Interactive"}</span>
//           </span>

//           {isCompleted ? (
//             <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/90 backdrop-blur-md text-white">
//               <CheckCircle2 className="w-3.5 h-3.5" />
//               <span>Completed</span>
//             </span>
//           ) : (
//             <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-950/40 backdrop-blur-md text-amber-100 border border-amber-400/30">
//               <Clock className="w-3.5 h-3.5 text-amber-300" />
//               <span>{courseJson?.duration || "Self-Paced"}</span>
//             </span>
//           )}
//         </div>

//         {/* POSTER TITLE OVERLAY */}
//         <div className="relative z-10 space-y-1">
//           <p className="text-[10px] uppercase font-bold text-amber-200 tracking-widest">Enrolled Course</p>
//           <h3 className="text-lg sm:text-xl font-extrabold line-clamp-2 leading-snug drop-shadow-sm text-white">
//             {course?.name || courseJson?.name}
//           </h3>
//         </div>
//       </div>

//       {/* CARD BODY */}
//       <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-5">

//         {/* DESCRIPTION */}
//         <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
//           {courseJson?.description || "Continue mastering your modules with step-by-step interactive guidance."}
//         </p>

//         {/* PROGRESS METRIC BAR */}
//         <div className="space-y-2 bg-amber-50/50 p-3.5 rounded-2xl border border-amber-100/80">
//           <div className="flex justify-between items-center text-xs font-bold">
//             <span className="text-slate-700 flex items-center gap-1.5">
//               <Trophy className="w-3.5 h-3.5 text-amber-600" />
//               Course Progress
//             </span>
//             <span className="text-amber-800 font-extrabold">{progressPercent}%</span>
//           </div>

//           <Progress 
//             value={progressPercent} 
//             className="h-2 bg-amber-100/80 [&>div]:bg-gradient-to-r [&>div]:from-amber-500 [&>div]:to-amber-600 rounded-full" 
//           />

//           <div className="flex justify-between text-[11px] text-slate-500 font-medium pt-0.5">
//             <span>{completedCount} of {totalChapters} chapters complete</span>
//           </div>
//         </div>

//         {/* METRICS & ACTION BUTTON */}
//         <div className="pt-1 flex flex-col gap-4">
//           <div className="flex items-center justify-between text-xs text-slate-600 font-medium px-1">
//             <div className="flex items-center gap-1.5">
//               <BookOpen className="w-4 h-4 text-amber-600" />
//               <span>{totalChapters} Chapters</span>
//             </div>
//             <span className="text-slate-400">•</span>
//             <span className="text-amber-800 font-semibold">AI Assistant Enabled</span>
//           </div>

//           <Link href={`/workspace/view-course/${course?.cid || course?.id}`} className="w-full">
//             <Button
//               className="w-full py-5 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-amber-600/20 group-hover:shadow-lg transition-all active:scale-[0.99]"
//             >
//               <PlayCircle className="w-4 h-4" />
//               <span>{isCompleted ? "Review Course" : "Continue Learning"}</span>
//             </Button>
//           </Link>
//         </div>

//       </div>
//     </motion.div>
//   )
// }

// export default EnrollCourseListCard




"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookOpen, PlayCircle, Trophy, Sparkles, Clock, CheckCircle2 } from 'lucide-react'
import { Button } from '../ui/button'
import { Progress } from '../ui/progress'

const EnrollCourseListCard = ({ course, enrollcourse }) => {
  // Safe calculation for course progress percentage


  const completedCount = enrollcourse?.completedChapters?.length || 0
  const totalChapters = course?.courseContent?.length || course?.courseJson?.course?.chapters?.length || 1

  const calculateProgress = () => {
    if (!totalChapters || totalChapters === 0) return 0
    const rawProgress = Math.round((completedCount / totalChapters) * 100)
    return Math.min(Math.max(rawProgress, 0), 100)
  }

  const progressPercent = calculateProgress()
  const courseJson = course?.courseJson?.course || course
  const isCompleted = progressPercent === 100

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group bg-white border border-slate-200/80 hover:border-amber-400/60 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-slate-900/10 transition-all flex flex-col overflow-hidden relative min-w-0"
    >
      {/* CARD HEADER / POSTER - DEEP SLATE WITH ELECTRIC AMBER & ORANGE ACCENTS */}
      <div className="h-44 sm:h-48 bg-slate-900 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-5 flex flex-col justify-between text-white relative overflow-hidden shrink-0 border-b border-slate-800">
        {/* Subtle Pattern & Electric Amber Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tr from-amber-500/25 to-orange-500/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-amber-400/10 rounded-full blur-xl" />

        {/* TOP HEADER BADGES */}
        <div className="relative z-10 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide bg-amber-400/10 backdrop-blur-md text-amber-300 border border-amber-400/25">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>{courseJson?.level || "Interactive"}</span>
          </span>

          {isCompleted ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Completed</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-slate-800/90 backdrop-blur-md text-amber-300 border border-slate-700">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{courseJson?.duration || "Self-Paced"}</span>
            </span>
          )}
        </div>

        {/* POSTER TITLE OVERLAY */}
        <div className="relative z-10 space-y-1">
          <p className="text-[10px] uppercase font-bold text-amber-400 tracking-widest">Enrolled Course</p>
          <h3 className="text-lg sm:text-xl font-extrabold line-clamp-2 leading-snug drop-shadow-sm text-white">
            {course?.name || courseJson?.name}
          </h3>
        </div>
      </div>

      {/* CARD BODY */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-5">

        {/* DESCRIPTION */}
        <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
          {courseJson?.description || "Continue mastering your modules with step-by-step interactive guidance."}
        </p>

        {/* PROGRESS METRIC BAR */}
        <div className="space-y-2.5 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
          <div className="flex justify-between items-center text-xs font-bold">
            <span className="text-slate-800 flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              Course Progress
            </span>
            <span className="text-amber-600 font-extrabold">{progressPercent}%</span>
          </div>

          <Progress
            value={progressPercent}
            className="h-2 bg-slate-200/80 [&>div]:bg-gradient-to-r [&>div]:from-amber-400 [&>div]:via-amber-500 [&>div]:to-orange-500 rounded-full"
          />

          <div className="flex justify-between text-[11px] text-slate-500 font-medium pt-0.5">
            <span>{completedCount} of {totalChapters} chapters complete</span>
          </div>
        </div>

        {/* METRICS & ACTION BUTTON */}
        <div className="pt-1 flex flex-col gap-4 mt-auto">
          <div className="flex items-center justify-between text-xs text-slate-600 font-medium px-1">
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-amber-500" />
              <span>{totalChapters} Chapters</span>
            </div>
            <span className="text-slate-300">•</span>
            <span className="text-amber-600 font-semibold">AI Assistant Enabled</span>
          </div>

          {
            course?.courseContent == null ? <Link href={`/workspace/edit-course/${course?.cid || course?.id}`} className="w-full">
              <Button
                className="w-full py-5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-slate-900/10 group-hover:shadow-lg transition-all active:scale-[0.99]"
              >
                <PlayCircle className="w-4 h-4 text-amber-400" />
                <span>{isCompleted ? "Review Course" : "Continue Learning"}</span>
              </Button>
            </Link> : <Link href={`/workspace/view-course/${course?.cid || course?.id}`} className="w-full">
              <Button
                className="w-full py-5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-slate-900/10 group-hover:shadow-lg transition-all active:scale-[0.99]"
              >
                <PlayCircle className="w-4 h-4 text-amber-400" />
                <span>{isCompleted ? "Review Course" : "Continue Learning"}</span>
              </Button>
            </Link>

          }




        </div>

      </div>
    </motion.div>
  )
}

export default EnrollCourseListCard