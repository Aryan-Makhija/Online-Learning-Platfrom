"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { BookOpen, Search, X, Compass, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import CourseCard from '@/components/WorkspceComponents/CourseCard'
import WorkspaceNavbar from '@/components/WorkspceComponents/Navbar'
import Footer from '@/components/HomePage/Footer'


// Skeleton Loader matching the yellow/orange warm theme structure
const CourseCardSkeleton = () => {
  return (
    <div className="bg-white border border-orange-100/80 rounded-3xl overflow-hidden flex flex-col justify-between h-[440px] animate-pulse shadow-sm">
      {/* Header Poster Skeleton */}
      <div className="h-44 bg-gradient-to-br from-amber-100 to-orange-100 p-5 flex items-center justify-center">
        <div className="h-6 w-3/4 bg-amber-200/60 rounded-lg" />
      </div>

      {/* Body Skeleton */}
      <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="h-5 w-4/5 bg-slate-200 rounded" />
          <div className="h-4 w-full bg-slate-100 rounded" />
          <div className="h-4 w-2/3 bg-slate-100 rounded" />
        </div>

        <div className="space-y-3 mt-auto">
          <div className="h-4 w-28 bg-amber-100/80 rounded" />
          <div className="h-12 w-full bg-amber-200/50 rounded-2xl" />
        </div>
      </div>
    </div>
  )
}

const ExploreCourses = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  // Search States
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')

  // Debounce logic for search query (400ms delay)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm)
    }, 400)

    return () => clearTimeout(handler)
  }, [searchTerm])

  // Fetch All Courses
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
  const filteredCourses = courses.filter((course) => {
    const title = (course?.name || course?.courseJson?.course?.name || '').toLowerCase()
    const description = (course?.courseJson?.course?.description || '').toLowerCase()
    const query = debouncedSearch.toLowerCase().trim()

    return title.includes(query) || description.includes(query)
  })

  return (
    <div>
      <WorkspaceNavbar></WorkspaceNavbar>
      <div className="mt-4 space-y-8 max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER & SEARCH SECTION */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-orange-100 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200/60 mb-2">
              <Compass className="w-3.5 h-3.5 text-orange-500" />
              <span>Discover Knowledge</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Explore All Courses
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Browse our AI-generated learning paths and start mastering new skills today.
            </p>
          </div>

          {/* SEARCH BAR */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-amber-500/70 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search courses or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 bg-white border border-amber-200/80 rounded-2xl text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all shadow-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-amber-600 p-1 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* SEARCH INDICATOR */}
        {debouncedSearch && (
          <div className="flex items-center justify-between text-xs text-slate-600 bg-amber-50/60 border border-amber-200/60 px-4 py-2.5 rounded-xl">
            <span>
              Showing results for <strong className="text-orange-600">"{debouncedSearch}"</strong>
            </span>
            <span className="font-semibold text-amber-700">{filteredCourses.length} course(s) found</span>
          </div>
        )}

        {/* CONTENT GRID */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <CourseCardSkeleton key={item} />
            ))}
          </div>
        ) : filteredCourses.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredCourses.map((course, index) => (
              <CourseCard key={course?.cid || course?.id || index} course={course} />
            ))}
          </motion.div>
        ) : (
          /* EMPTY STATE DISPLAY */
          <div className="bg-gradient-to-b from-amber-50/40 to-white border border-amber-200/60 rounded-3xl p-12 text-center space-y-4 shadow-sm">
            <div className="w-14 h-14 bg-amber-100 text-orange-600 rounded-2xl mx-auto flex items-center justify-center shadow-inner">
              <BookOpen className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {debouncedSearch ? "No matching courses found" : "No courses available"}
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              {debouncedSearch
                ? `We couldn't find any courses matching "${debouncedSearch}". Try searching for another topic.`
                : "Check back later or generate a new AI course to get started!"}
            </p>
            {debouncedSearch && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-xs font-bold text-amber-600 hover:text-orange-600 underline pt-2 transition-colors"
              >
                Clear Search Query
              </button>
            )}
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  )
}

export default ExploreCourses