import { Book, PlayCircle, Settings } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Progress } from '../ui/progress'
import Link from 'next/link'
import { motion } from "framer-motion";

const EnrollCourseListCard = ({ course, enrollcourse }) => {


    const CalculateProgress = () => {
        return Math.round(
            (enrollcourse?.completedChapters?.length / course?.courseContent?.length) * 100)
    }




    const courseJson = course?.courseJson?.course

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="shadow-xl rounded-2xl w-full max-w-md md:max-w-md lg:max-w-lg mx-auto hover:shadow-2xl transition-shadow duration-300 flex flex-col bg-white overflow-hidden"
        >
            {/* Header */}
            <div className="
    h-48
    bg-gradient-to-br from-blue-700 via-blue-200 to-indigo-500 
    text-white
    flex items-center justify-center
    text-center
    text-xl md:text-2xl
    font-semibold
    px-6
  ">
                {course?.name}
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col gap-4 flex-1">
                {/* Title */}
                <h2
                    className="font-bold text-lg md:text-xl truncate"
                    title={courseJson?.name}
                >
                    {courseJson?.name}
                </h2>

                {/* Description */}
                <p className="text-gray-500 text-sm md:text-base line-clamp-3">
                    {courseJson?.description}
                </p>

                {/* Progress */}
                <div className="flex flex-col gap-2">
                    <p className="flex justify-between text-sm font-medium text-purple-600">
                        <span>Progress</span>
                        <span>{CalculateProgress()}%</span>
                    </p>
                    <Progress value={CalculateProgress()} />
                </div>

                {/* Footer */}
                <div className="mt-auto flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-blue-900 font-medium">
                        <Book className="text-indigo-600" />
                        {courseJson?.noOfChapters} Chapters
                    </div>

                    <Link href={`/workspace/view-course/${course?.cid}`}>
                        <Button
                            className="
            w-full py-3 rounded-xl
            bg-indigo-600 text-white
            flex items-center justify-center gap-2
            hover:scale-[1.03]
            transition-transform
          "
                        >
                            <PlayCircle />
                            Continue Learning
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.div>

    )
}

export default EnrollCourseListCard