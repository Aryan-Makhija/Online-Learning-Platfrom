
"use client"

import React, { useState, useTransition } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { toast } from 'sonner'
import { motion } from 'framer-motion'
import {
  Clock,
  BookOpen,
  Sparkles,
  PlayCircle,
  Loader2,
  Zap,
  Layers,
  GraduationCap,
  Trash2
} from 'lucide-react'
import { Button } from '../ui/button'
import { deleteCourse } from '@/app/api/courses/DeleteCourse/route'
import { Router } from 'next/router'

// Helper function to calculate cumulative total duration across all chapters
const calculateTotalDuration = (chapters) => {
  if (!chapters || !Array.isArray(chapters) || chapters.length === 0) return "Self-Paced"

  let totalMinutes = 0
  let hasValidDuration = false

  chapters.forEach((ch) => {
    const durStr = (ch?.duration || "").toLowerCase().trim()
    if (!durStr) return

    let chapterMins = 0
    const hoursMatch = durStr.match(/(\d+(?:\.\d+)?)\s*(?:hours?|hrs?|h)/i)
    const minsMatch = durStr.match(/(\d+(?:\.\d+)?)\s*(?:minutes?|mins?|m)/i)

    if (hoursMatch) {
      chapterMins += parseFloat(hoursMatch[1]) * 60
      hasValidDuration = true
    }
    if (minsMatch) {
      chapterMins += parseFloat(minsMatch[1])
      hasValidDuration = true
    }

    // Fallback: If just a raw number, treat as minutes
    if (!hoursMatch && !minsMatch) {
      const numMatch = durStr.match(/(\d+(?:\.\d+)?)/)
      if (numMatch) {
        chapterMins += parseFloat(numMatch[1])
        hasValidDuration = true
      }
    }

    totalMinutes += chapterMins
  })

  if (!hasValidDuration || totalMinutes === 0) return "Self-Paced"

  const hrs = Math.floor(totalMinutes / 60)
  const mins = Math.round(totalMinutes % 60)

  if (hrs > 0 && mins > 0) return `${hrs} hr ${mins} min`
  if (hrs > 0) return `${hrs} ${hrs === 1 ? 'hr' : 'hrs'}`
  return `${mins} mins`
}

// SKELETON LOADING PLACEHOLDER
const CourseInfoSkeleton = () => (
  <div className="bg-white border border-slate-200 rounded-3xl p-5 md:p-8 shadow-sm animate-pulse">
    <div className="flex flex-col-reverse lg:flex-row gap-8 items-stretch justify-between">
      <div className="flex-1 space-y-6">
        <div className="space-y-3">
          <div className="flex gap-2">
            <div className="h-6 w-28 bg-slate-200 rounded-full" />
            <div className="h-6 w-24 bg-slate-200 rounded-full" />
          </div>
          <div className="h-9 w-3/4 bg-slate-200 rounded-xl" />
          <div className="h-16 w-full bg-slate-100 rounded-xl" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="h-16 bg-slate-100 rounded-2xl" />
          <div className="h-16 bg-slate-100 rounded-2xl" />
          <div className="h-16 bg-slate-100 rounded-2xl" />
        </div>
        <div className="h-12 w-full sm:w-48 bg-slate-200 rounded-2xl" />
      </div>
      <div className="w-full lg:w-80 h-52 lg:h-auto min-h-[200px] bg-slate-200 rounded-2xl" />
    </div>
  </div>
)

const CourseInfo = ({ course, viewCourse }) => {
  const courselayout = course?.courseJson?.course
  const [loading, setLoading] = useState(false)
  const router = useRouter()
const [isDeleting, setIsDeleting] = useState(false);
  // Render Skeleton if course dynamic data is loading
  if (!course || !courselayout) {
    return <CourseInfoSkeleton />
  }

  const GenerateCourseContent = async () => {
    setLoading(true)
    try {
      await axios.post('/api/generate-course-content', {
        courseJson: courselayout,
        courseTitle: course?.name,
        courseId: course?.cid
      })

      toast.success("Course generated successfully!")
      router.replace("/workspace")
    } catch (err) {
      console.error(err.message)
      toast.error("Something went wrong. Please try again!")
    } finally {
      setLoading(false)
    }
  }

  // Calculate total topics across all chapters
  const totalTopics = courselayout?.chapters?.reduce(
    (acc, ch) => acc + (ch?.topics?.length || 0), 0
  ) || 0

  const totalDuration = calculateTotalDuration(courselayout?.chapters)


  const handleDelete = async (id) => {
    if (!id) return;

    try {
      setIsDeleting(true);
      const result = await deleteCourse(id);

      if (result?.success) {
        toast.success("Course deleted successfully");
        router.push("/workspace");
      } else {
        toast.error(result?.message || "Failed to delete course");
      }
    } catch (err) {
      console.error("Delete course error:", err);
      toast.error( "Something went wrong while deleting");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white border border-slate-200/80 hover:border-amber-400/60 rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all overflow-hidden"
    >
      <div className="flex flex-col-reverse lg:flex-row gap-6 sm:gap-8 items-stretch justify-between">

        {/* LEFT COLUMN: COURSE DETAILS */}
        <div className="flex-1 flex flex-col justify-between space-y-6 min-w-0">
          <div className="space-y-3">

            {/* BADGES */}
            <div className="flex flex-wrap items-center gap-2">
              <motion.span
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide bg-amber-400/10 text-amber-600 border border-amber-400/25"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>AI Generated Course</span>
              </motion.span>

              {courselayout?.level && (
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 capitalize border border-slate-200"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span className="truncate">{courselayout?.level} Level</span>
                </motion.span>
              )}
            </div>

            {/* COURSE TITLE & DESCRIPTION */}
            <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight break-words">
              {courselayout?.name || course?.name}
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-3">
              {courselayout?.description || "Master this course step-by-step with interactive modules, curated topics, and AI-driven insights."}
            </p>
          </div>

          {/* METRICS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 w-full">

            {/* STAT 1: CUMULATIVE DURATION */}
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 min-w-0 w-full">
              <div className="p-2.5 bg-amber-400/15 text-amber-600 rounded-xl shrink-0 border border-amber-400/20">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider truncate">
                  Total Duration
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                  {totalDuration}
                </p>
              </div>
            </div>

            {/* STAT 2: CHAPTERS */}
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 min-w-0 w-full">
              <div className="p-2.5 bg-amber-400/15 text-amber-600 rounded-xl shrink-0 border border-amber-400/20">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider truncate">
                  Chapters
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                  {courselayout?.chapters?.length || 0} Modules
                </p>
              </div>
            </div>

            {/* STAT 3: TOTAL TOPICS */}
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 min-w-0 w-full">
              <div className="p-2.5 bg-amber-400/15 text-amber-600 rounded-xl shrink-0 border border-amber-400/20">
                <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider truncate">
                  Total Topics
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                  {totalTopics} Lessons
                </p>
              </div>
            </div>

          </div>

          {/* ACTION BUTTON */}
          {/* <div className="pt-2 w-full">
            {!viewCourse ? (
              <Button
                onClick={GenerateCourseContent}
                disabled={loading}
                className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-bold bg-slate-900 hover:bg-slate-800 text-white rounded-2xl shadow-md shadow-slate-900/10 transition-all hover:scale-[1.01] active:scale-[0.99] gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin text-amber-400" />
                    <span>Building Course Materials...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5 text-amber-400 fill-current" />
                    <span>Generate Full Course</span>
                  </>
                )}
              </Button>
            ) : (
              <Link href={`/course/${course?.cid}`} className="block w-full sm:w-auto">
                <Button className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-bold bg-slate-900 hover:bg-slate-800 text-white rounded-2xl shadow-md shadow-slate-900/10 transition-all hover:scale-[1.01] active:scale-[0.99] gap-2">
                  <PlayCircle className="w-5 h-5 text-amber-400" />
                  <span>Start Learning Now</span>
                </Button>
              </Link>
            )}
          </div>
        </div> */}

          <div className="pt-2 w-full flex flex-col sm:flex-row items-center gap-3">
            {!viewCourse ? (
              <>
                <Button
                  onClick={GenerateCourseContent}
                  disabled={loading || isDeleting}
                  className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-bold bg-slate-900 hover:bg-slate-800 text-white rounded-2xl shadow-md shadow-slate-900/10 transition-all hover:scale-[1.01] active:scale-[0.99] gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-amber-400" />
                      <span>Building Course Materials...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5 text-amber-400 fill-current" />
                      <span>Generate Full Course</span>
                    </>
                  )}
                </Button>

                <Button
                  onClick={() => handleDelete(course?.cid || course?.id)}
                  disabled={loading || isDeleting}
                  variant="outline"
                  className="w-full sm:w-auto px-5 py-5 sm:py-6 text-sm sm:text-base font-medium border-rose-200 text-rose-600 hover:bg-rose-50 hover:text-rose-700 hover:border-rose-300 rounded-2xl transition-all gap-2"
                >
                  {isDeleting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-rose-500" />
                      <span>Deleting...</span>
                    </>
                  ) : (
                    <>
                      <Trash2 className="w-5 h-5 text-rose-500" />
                      <span>Delete Course</span>
                    </>
                  )}
                </Button>
              </>
            ) : (
              <Link href={`/course/${course?.cid}`} className="block w-full sm:w-auto">
                <Button className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-bold bg-slate-900 hover:bg-slate-800 text-white rounded-2xl shadow-md shadow-slate-900/10 transition-all hover:scale-[1.01] active:scale-[0.99] gap-2">
                  <PlayCircle className="w-5 h-5 text-amber-400" />
                  <span>Start Learning Now</span>
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: POSTER CARD */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="w-full lg:w-80 h-48 sm:h-56 lg:h-auto min-h-[200px] rounded-2xl bg-slate-900 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-5 sm:p-6 flex flex-col justify-between text-white relative overflow-hidden shadow-inner shrink-0 border border-slate-800"
        >
          {/* Subtle Background Pattern & Electric Amber Ambient Lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tr from-amber-500/25 to-orange-500/20 rounded-full blur-2xl" />
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-amber-400/10 rounded-full blur-xl" />

          <div className="relative z-10 flex items-center justify-between">
            <span className="px-3 py-1 bg-amber-400/10 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide border border-amber-400/25 text-amber-300 truncate">
              Interactive Guide
            </span>
            <BookOpen className="w-5 h-5 text-amber-400 opacity-90 shrink-0" />
          </div>

          <div className="relative z-10 space-y-1">
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-amber-400 font-bold">Course Syllabus</p>
            <h2 className="text-lg sm:text-xl font-extrabold line-clamp-2 leading-snug drop-shadow-sm text-white">
              {courselayout?.name || course?.name}
            </h2>
          </div>
        </motion.div>

      </div>

    </motion.div >
  )
}

export default CourseInfo