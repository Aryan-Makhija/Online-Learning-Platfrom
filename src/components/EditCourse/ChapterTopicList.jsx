"use client"

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Gift, CheckCircle2, Clock, BookOpen, ChevronRight, Award } from 'lucide-react'

// SKELETON LOADING PLACEHOLDER
const ChapterTopicListSkeleton = () => (
  <div className="mt-12 mb-16 flex flex-col items-center w-full max-w-4xl mx-auto px-4 animate-pulse space-y-8">
    <div className="space-y-3 text-center w-full flex flex-col items-center">
      <div className="h-6 w-32 bg-slate-200 rounded-full" />
      <div className="h-8 w-64 bg-slate-200 rounded-xl" />
    </div>

    <div className="w-full space-y-8">
      {[1, 2].map((i) => (
        <div key={i} className="space-y-4">
          <div className="h-20 bg-slate-200 rounded-2xl w-full" />
          <div className="pl-8 space-y-3">
            <div className="h-12 bg-slate-100 rounded-xl w-full" />
            <div className="h-12 bg-slate-100 rounded-xl w-full" />
          </div>
        </div>
      ))}
    </div>
  </div>
)

const ChapterTopicList = ({ course }) => {
  const courselayout = course?.courseJson?.course

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [])

  if (!course || !courselayout) {
    return <ChapterTopicListSkeleton />
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  }

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-10 sm:mt-12 mb-16 flex flex-col items-center w-full max-w-4xl mx-auto px-3 sm:px-4"
    >
      
      {/* SECTION HEADER */}
      <motion.div variants={itemVariants} className="text-center space-y-2 mb-8 sm:mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
          Learning Path
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Curriculum Roadmap
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto">
          Follow this step-by-step roadmap designed to guide you from foundational concepts to practical mastery.
        </p>
      </motion.div>

      {/* ROADMAP TIMELINE CONTAINER */}
      <div className="w-full space-y-10 sm:space-y-12">
        {courselayout?.chapters?.map((chapter, chapIndex) => (
          <motion.div key={chapIndex} variants={itemVariants} className="relative">
            
            {/* CHAPTER HEADER CARD */}
            <div className="relative z-10 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-2xl p-4 sm:p-6 shadow-md border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <div className="space-y-1 min-w-0">
                <div className="flex items-center gap-2 text-amber-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                  <span>Chapter {chapIndex + 1}</span>
                  <span>•</span>
                  <span>{chapter?.topics?.length || 0} Lessons</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white break-words">
                  {chapter?.chapterName}
                </h3>
              </div>

              {chapter?.duration && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md text-amber-100 text-xs font-semibold border border-white/15 shrink-0 self-start sm:self-auto">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{chapter?.duration}</span>
                </div>
              )}
            </div>

            {/* TOPICS VERTICAL CONNECTING ROADMAP */}
            <div className="relative pl-5 sm:pl-10 mt-5 sm:mt-6 space-y-3 sm:space-y-4">
              
              {/* Vertical Progress Line Thread */}
              <div className="absolute left-[23px] sm:left-[43px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-amber-200 to-slate-200" />

              {chapter?.topics?.map((topic, topicIndex) => (
                <motion.div 
                  key={topicIndex} 
                  whileHover={{ x: 4 }}
                  className="relative flex items-center gap-3 sm:gap-4 group"
                >
                  {/* STEP NUMBER BULLET */}
                  <div className="relative z-10 flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white border-2 border-amber-500 text-amber-900 font-bold text-xs shadow-sm group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all shrink-0">
                    {topicIndex + 1}
                  </div>

                  {/* TOPIC CARD */}
                  <div className="flex-1 bg-white hover:bg-amber-50/50 border border-slate-200/80 hover:border-amber-200/80 rounded-xl p-3 sm:p-4 shadow-sm transition-all flex items-center justify-between gap-3 min-w-0">
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                      <BookOpen className="w-4 h-4 text-amber-600 shrink-0 hidden sm:block" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug break-words">
                        {topic}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-colors shrink-0" />
                  </div>
                </motion.div>
              ))}

              {/* END OF CHAPTER REWARD MILESTONE */}
              <div className="relative flex items-center gap-3 sm:gap-4 pt-2">
                <div className="relative z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-100 border-2 border-amber-300 text-amber-700 shadow-sm shrink-0">
                  <Gift className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="bg-amber-50 border border-amber-200/80 rounded-xl px-3.5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-semibold text-amber-900 flex items-center gap-2 min-w-0">
                  <Award className="w-4 h-4 text-amber-600 shrink-0 hidden sm:block" />
                  <span className="truncate">Chapter {chapIndex + 1} Milestone Reward Unlocked on Completion</span>
                </div>
              </div>

            </div>

          </motion.div>
        ))}

        {/* ROADMAP FINISH BADGE */}
        <motion.div variants={itemVariants} className="relative flex flex-col items-center justify-center pt-8 text-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/20 mb-3 border-2 border-emerald-400">
            <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900">Course Completion</h3>
          <p className="text-xs text-slate-500 mt-0.5">Finish all chapters to earn your badge of completion.</p>
        </motion.div>

      </div>

    </motion.div>
  )
}

export default ChapterTopicList