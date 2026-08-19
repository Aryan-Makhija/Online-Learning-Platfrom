
"use client"

import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import AddnewCourse from './AddnewCourse'
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import CourseCard from './CourseCard'
import { motion } from 'framer-motion'
import { Sparkles, PlusCircle, BookOpen, Loader2 } from 'lucide-react'

// Skeleton Loader Component matching the CourseCard layout
const CourseCardSkeleton = () => (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-5 shadow-sm animate-pulse flex flex-col justify-between h-[380px]">
        <div className="space-y-4">
            <div className="h-44 bg-slate-200 rounded-2xl w-full" />
            <div className="h-4 bg-slate-200 rounded-md w-1/3" />
            <div className="h-6 bg-slate-200 rounded-lg w-3/4" />
            <div className="h-10 bg-slate-100 rounded-lg w-full" />
        </div>
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="h-4 bg-slate-200 rounded w-1/2" />
            <div className="h-9 bg-slate-200 rounded-xl w-24" />
        </div>
    </div>
)

const CourseList = () => {
    const [courselist, setcourselist] = useState([])
    const [loading, setLoading] = useState(true)

    const { user } = useUser()

    const GetCoursesList = async () => {
        setLoading(true)
        try {
            const response = await axios.get("/api/courses")
            setcourselist(response.data || [])
        } catch (error) {
            console.error("Failed to fetch courses:", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (user) {
            GetCoursesList()
        }
    }, [user])

    return (
        <section id="course" className="scroll-mt-24">
            <div className="mt-10">

                {/* Section Title & Add Course Header Button */}
                <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-2.5">
                        <div className="p-2 bg-amber-400/15 rounded-xl border border-amber-400/20 text-amber-600">
                            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
                        </div>
                        <h2 className="font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                            Course List
                        </h2>
                    </div>

                    {!loading && courselist.length > 0 && (
                        <AddnewCourse>
                            <Button className="px-5 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-slate-900/10 transition-all active:scale-[0.99]">
                                <PlusCircle className="w-4 h-4 text-amber-400" />
                                <span>New Course</span>
                            </Button>
                        </AddnewCourse>
                    )}
                </div>

                {/* LOADING SKELETON STATE (Prevents flash of empty state) */}
                {loading ? (
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((item) => (
                            <CourseCardSkeleton key={item} />
                        ))}
                    </div>
                ) : courselist.length === 0 ? (
                    /* ENHANCED EMPTY STATE CARD */
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="w-full mt-6 p-8 sm:p-12 bg-white border border-slate-200/80 hover:border-amber-400/50 rounded-3xl shadow-sm flex flex-col justify-center gap-5 items-center text-center relative overflow-hidden"
                    >
                        {/* Ambient Background Accents */}
                        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
                        <div className="absolute -top-16 -right-16 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

                        {/* Glowing Icon Container */}
                        <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-slate-900 flex items-center justify-center shadow-lg shadow-slate-900/10 border border-slate-800">
                            <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400" />
                        </div>

                        <div className="relative z-10 max-w-md space-y-2">
                            <h3 className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
                                No Courses Created Yet
                            </h3>
                            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                                Generate your first AI-powered course step-by-step with interactive modules, topics, and tailored guidance.
                            </p>
                        </div>

                        <div className="relative z-10 pt-2">
                            <AddnewCourse>
                                <Button className="px-7 py-6 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md shadow-slate-900/10 transition-all hover:scale-[1.01] active:scale-[0.99]">
                                    <PlusCircle className="w-5 h-5 text-amber-400" />
                                    <span>Create Your First Course</span>
                                </Button>
                            </AddnewCourse>
                        </div>
                    </motion.div>
                ) : (
                    /* COURSE LIST GRID */
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {courselist.map((course, index) => (
                            <CourseCard course={course} key={course?.cid || index} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default CourseList