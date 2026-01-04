"use client"

import { Book, PlayCircle, Settings } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import axios from 'axios'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { motion } from "framer-motion";

const CourseCard = ({ course }) => {

    const courseJson = course?.courseJson?.course
    const [loading, setloading] = useState(false)
    const router = useRouter()
    const onEnrollCourse = async () => {
        setloading(true)
        try {
            const response = await axios.post("/api/enroll-course", {
                courseId: course?.cid
            })


            if (response.data.resp) {
                toast.warning("Already Enrolled To Course")
                return;
            }
            toast.success("Enrolled To Course")
            router.push("/workspace/edit-course/" + course?.cid)

        } catch (err) {
            console.log(err.message)
        } finally {
            setloading(false)
        }
    }


    return (

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="shadow-xl rounded-2xl w-full max-w-md md:max-w-md lg:max-w-lg mx-auto hover:shadow-2xl transition-shadow duration-300 flex flex-col bg-white overflow-hidden"
        >
            {/* Course Header */}
            <div className="h-48 rounded-t-2xl bg-gradient-to-br from-blue-700 via-blue-200 to-purple-500 text-white flex items-center justify-center px-4 text-center text-xl md:text-2xl font-bold drop-shadow-md">
                {course?.name}
            </div>

            {/* Course Body */}
            <div className="p-5 flex flex-col gap-4 flex-1">
                {/* Course Title */}
                <h2
                    className="font-semibold text-lg md:text-xl truncate"
                    title={courseJson?.name}
                >
                    {courseJson?.name}
                </h2>

                {/* Course Description */}
                <p className="text-gray-600 text-sm md:text-base line-clamp-3">
                    {courseJson?.description}
                </p>

                {/* Course Info & Button */}
                <div className="flex flex-col gap-3 mt-auto">
                    {/* Chapters */}
                    <div className="flex items-center gap-2 text-blue-900 font-medium text-sm md:text-base">
                        <Book className="text-blue-700" />
                        {courseJson?.noOfChapters} Chapters
                    </div>

                    {/* Action Button */}
                    {course?.courseContent?.length ? (
                        <Button
                            onClick={() => onEnrollCourse()}
                            className="bg-purple-600 text-white w-full py-3 rounded-xl hover:scale-105 transform transition-all duration-200 flex items-center justify-center gap-2 text-sm md:text-base"
                        >
                            <PlayCircle />
                            Start Learning
                        </Button>
                    ) : (
                        <Button
                            onClick={() => onEnrollCourse()}
                            className="bg-gray-300 text-gray-700 w-full py-3 rounded-xl hover:scale-105 transform transition-all duration-200 flex items-center justify-center gap-2 text-sm md:text-base"
                        >
                            <Settings />
                            Generate Course
                        </Button>
                    )}
                </div>
            </div>
        </motion.div>


    )
}

export default CourseCard