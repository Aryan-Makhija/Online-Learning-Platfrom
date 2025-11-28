"use client"

import { Book, Clock, Loader2Icon, PlayCircle, Settings2, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import Link from 'next/link'

const CourseInfo = ({ course, viewCourse }) => {


    const courselayout = course?.courseJson?.course

    const [loading, setloading] = useState(false)

    const router = useRouter();

    const GenerateCourseContent = async () => {
        //Get Course from Ai 
        setloading(true)
        try {
            const result = await axios.post('/api/generate-course-content', {
                courseJson: courselayout,
                courseTitle: course?.name,
                courseId: course?.cid
            })

            toast.success("Course Genereated Successfully")
            router.replace("/workspace")

        } catch (err) {
            console.log(err.message)
            toast.error("Somthing Went Wrong Please try again !")
        } finally {
            setloading(false)
        }

    }


    return (
        <div className='md:flex  gap-5 justify-between  shadow-lg rounded-2xl p-2'>

            <div className='flex flex-col gap-3'>
                <h2 className='font-bold text-3xl'>{courselayout?.name}</h2>
                <p className='line-clamp-2 text-gray-500'>{courselayout?.description}</p>

                <div className='grid grid-cols-1 md:grid-cols-3  gap-4 w-full '>
                    <div className=' flex gap-5  items-center p-3 rouned-lg  shadow-lg'>
                        <Clock className='text-blue-500'></Clock>
                        <section>
                            <h2 className="font-semibold">Duration</h2>
                            <h2>{courselayout?.chapters[0]?.duration}</h2>
                        </section>
                    </div>
                    <div className=' flex gap-5  items-center p-3 rouned-lg  shadow-lg'>
                        <Book className='text-green-500'></Book>
                        <section>
                            <h2 className="font-semibold">Chapters</h2>
                            <h2>{courselayout?.chapters.length}</h2>
                        </section>
                    </div>
                    <div className=' flex gap-5  items-center p-3 rouned-lg  shadow-lg'>
                        <TrendingUp className='text-red-500'></TrendingUp>
                        <section>
                            <h2 className="font-semibold">Difficulty Level</h2>
                            <h2>{courselayout?.level}</h2>
                        </section>
                    </div>

                </div>




                {
                    !viewCourse ? <Button onClick={() => GenerateCourseContent()} className=" w-full bg-purple-600 text-white " disabled={loading}>
                        {
                            loading ? <Loader2Icon className="animate-spin"></Loader2Icon> : <Settings2></Settings2>
                        }
                        Generate Course</Button> : <Link href={'/course/' + course?.cid}> <Button className=" w-full bg-purple-600 text-white "><PlayCircle></PlayCircle>  Continue Learning</Button></Link>

                }



            </div>
            <div className='w-full h-[240px] rounded-xl bg-gradient-to-br from-blue-700 via-blue-200 to-purple-500 text-white border-purple-500 border-1   text-shadow-blue-500 text-2xl  flex justify-center items-center '>{course?.name}</div>



        </div>
    )
}

export default CourseInfo