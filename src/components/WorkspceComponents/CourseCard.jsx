"use client"

import { Book, PlayCircle, Settings } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import axios from 'axios'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'


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
        <div className='shadow-lg  rounded-xl'>
         <div className='w-full h-[180px] rounded-t-xl bg-gradient-to-br from-blue-700 via-blue-200 to-purple-500 text-white border-purple-500 border-1   text-shadow-blue-500 text-2xl  flex justify-center items-center '>{course?.name}</div>
            <div className='p-3 flex flex-col gap-3'>
                <h2 className='font-bold text-lg'>{courseJson?.name}</h2>
                <p className='line-clamp-3 text-gray-400 '>{courseJson?.description}</p>

                <div className='flex flex-col gap-4   '>
                    <h2 className="flex gap-2"><Book></Book>{courseJson?.noOfChapters} Chapters </h2>


                    {course?.courseContent?.length ? <Button onClick={() => onEnrollCourse()} className="text-white bg-purple-600 hover:scale-110 w-full"><PlayCircle></PlayCircle> Start Learning</Button> : <Button onClick={() => onEnrollCourse()}><Settings></Settings>Generate Course</Button>}

                </div>

            </div>
        </div>
    )
}

export default CourseCard