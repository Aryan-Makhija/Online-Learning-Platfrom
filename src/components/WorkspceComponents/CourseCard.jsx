// "use client"

// import { Book, PlayCircle, Settings } from 'lucide-react'
// import React, { useState } from 'react'
// import { Button } from '../ui/button'
// import Link from 'next/link'
// import axios from 'axios'
// import { toast } from 'sonner'
// import { useRouter } from 'next/navigation'
// import { motion } from "framer-motion";

// const CourseCard = ({ course }) => {

//     const courseJson = course?.courseJson?.course
//     const [loading, setloading] = useState(false)
//     const router = useRouter()
//     const onEnrollCourse = async () => {
//         setloading(true)
//         try {
//             const response = await axios.post("/api/enroll-course", {
//                 courseId: course?.cid
//             })


//             if (response.data.resp) {
//                 toast.warning("Already Enrolled To Course")
//                 return;
//             }
//             toast.success("Enrolled To Course")
//             router.push("/workspace/edit-course/" + course?.cid)

//         } catch (err) {
//             console.log(err.message)
//         } finally {
//             setloading(false)
//         }
//     }


//     return (

//         <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.1 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="shadow-xl rounded-2xl w-full max-w-md md:max-w-md lg:max-w-lg mx-auto hover:shadow-2xl transition-shadow duration-300 flex flex-col bg-white overflow-hidden"
//         >
//             {/* Course Header */}
//             <div className="h-48 rounded-t-2xl bg-gradient-to-br from-blue-700 via-blue-200 to-indigo-500 text-white flex items-center justify-center px-4 text-center text-xl md:text-2xl font-bold drop-shadow-md">
//                 {course?.name}
//             </div>

//             {/* Course Body */}
//             <div className="p-5 flex flex-col gap-4 flex-1">
//                 {/* Course Title */}
//                 <h2
//                     className="font-semibold text-lg md:text-xl truncate"
//                     title={courseJson?.name}
//                 >
//                     {courseJson?.name}
//                 </h2>

//                 {/* Course Description */}
//                 <p className="text-gray-600 text-sm md:text-base line-clamp-3">
//                     {courseJson?.description}
//                 </p>

//                 {/* Course Info & Button */}
//                 <div className="flex flex-col gap-3 mt-auto">
//                     {/* Chapters */}
//                     <div className="flex items-center gap-2 text-blue-900 font-medium text-sm md:text-base">
//                         <Book className="text-blue-700" />
//                         {courseJson?.noOfChapters} Chapters
//                     </div>

//                     {/* Action Button */}
//                     {course?.courseContent?.length ? (
//                         <Button
//                             onClick={() => onEnrollCourse()}
//                             className="bg-indigo-600 text-white w-full py-3 rounded-xl hover:scale-105 transform transition-all duration-200 flex items-center justify-center gap-2 text-sm md:text-base"
//                         >
//                             <PlayCircle />
//                             Start Learning
//                         </Button>
//                     ) : (
//                         <Button
//                             onClick={() => onEnrollCourse()}
//                             className="bg-gray-300 text-gray-700 w-full py-3 rounded-xl hover:scale-105 transform transition-all duration-200 flex items-center justify-center gap-2 text-sm md:text-base"
//                         >
//                             <Settings />
//                             Generate Course
//                         </Button>
//                     )}
//                 </div>
//             </div>
//         </motion.div>


//     )
// }

// export default CourseCard
"use client"

import React, { useState } from 'react'
import { Code2, PlayCircle, Settings, Loader2 } from 'lucide-react'
import axios from 'axios'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

const CourseCard = ({ course }) => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  // Safely extract dynamic values with fallbacks
  const courseJson = course?.courseJson?.course || course?.courseJson || course || {}
  const targetId = course?.cid || course?.id

  const courseName = course?.name || courseJson?.name || courseJson?.title || "Untitled Course"
  const description = courseJson?.description || course?.description || "Explore complete integration patterns with modern LLMs and real-time backend systems."
  const level = courseJson?.level || course?.level || "Featured Course"
  const duration = courseJson?.duration || course?.duration || "Self-Paced"

  // Calculate total chapters/modules dynamically
  const chaptersList = course?.courseContent || courseJson?.chapters || courseJson?.topics || []
  const totalChapters = Array.isArray(chaptersList) ? chaptersList.length : (course?.noOfChapters || 0)
  const hasContent = totalChapters > 0 || Boolean(course?.courseContent)

  const onEnrollCourse = async () => {
    if (!targetId) {
      toast.error("Course ID not found.")
      return
    }

    setLoading(true)
    try {
      const response = await axios.post("/api/enroll-course", {
        courseId: targetId
      })


      if (response.data.resp) {
        toast.warning("Already Enrolled To Course")
        return;
      }
      toast.success("Enrolled To Course")
      router.push("/workspace/edit-course/" + course?.cid)



    } catch (err) {
      console.error(err?.message || err)
      toast.error("Failed to enroll. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group h-full"
    >
      <div>
        {/* Top Dark Slate Icon Poster with Dynamic Course Name */}
        <div className="h-40 bg-slate-900 rounded-xl mb-4 flex flex-col items-center justify-center text-amber-400 font-bold relative overflow-hidden p-4 text-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent opacity-60" />
          <Code2 className="w-8 h-8 group-hover:scale-110 transition-transform text-amber-400 z-10 mb-2" />
          <h4 className="text-xl font-extrabold text-white line-clamp-2 z-10 px-2 leading-snug drop-shadow-sm">
            {courseName}
          </h4>
        </div>

        {/* Level / Feature Tag */}
        <span className="text-[11px] font-bold tracking-wide uppercase text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md inline-block">
          {level}
        </span>

        {/* Course Title Below Poster */}
        <h3 className="text-base font-bold text-slate-900 mt-2 line-clamp-1">
          {courseName}
        </h3>

        {/* Dynamic Description */}
        <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Footer Area with Duration/Modules & Action Button */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
        <span className="text-xs font-medium text-slate-500 truncate">
          {duration} • {totalChapters} {totalChapters === 1 ? 'Module' : 'Modules'}
        </span>

        <button
          onClick={onEnrollCourse}
          disabled={loading}
          className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors shrink-0 flex items-center gap-1.5 disabled:opacity-75"
        >
          {loading ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-400" />
              <span>Loading...</span>
            </>
          ) : hasContent ? (
            <>
              <PlayCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Start</span>
            </>
          ) : (
            <>
              <Settings className="w-3.5 h-3.5 text-amber-400" />
              <span>Enroll</span>
            </>
          )}
        </button>
      </div>
    </motion.div>
  )
}

export default CourseCard