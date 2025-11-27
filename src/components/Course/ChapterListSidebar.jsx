
"use client"

import React, { useContext, useEffect, useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import axios from 'axios'
import { useParams } from 'next/navigation'
import { SelectedChapterContext } from '@/Context/SelectedChapterContext'



const ChapterListSidebar = () => {


    const { courseId } = useParams()
    const [courseInfo, setCourseInfo] = useState()

    const { refresh } = useContext(SelectedChapterContext)


    const { chapterindex, setchapterindex } = useContext(SelectedChapterContext)

    const GetCourseDetails = async () => {


        const result = await axios.get('/api/enroll-course?courseId=' + courseId)
        setCourseInfo(result.data)


    }

    const course = courseInfo?.courses?.courseContent
    const completedchapters = courseInfo?.enrollCourse?.completedChapters ?? []

    useEffect(() => {
        GetCourseDetails()
    }, [refresh])


    return (
        <div className='w-80 bg-secondary min-h-screen p-2  '>
            <h2 className='font-bold text-2xl'>Chapters</h2>
            <Accordion type="single" collapsible>


                {course?.map((chapter, index) => (

                    <AccordionItem value={chapter?.courseData?.chapterName} key={index} onClick={() => setchapterindex(index)} >
                        <AccordionTrigger className={`mt-4  font-medium ${completedchapters.includes(index)?'bg-green-200 text-green-800':"bg-white"}`} >{index + 1}. {chapter?.courseData?.chapterName}</AccordionTrigger>
                        <AccordionContent asChild>

                            <div className='p-4 rounded-lg  '>

                                {
                                    chapter?.courseData?.topics.map((topic, index_) => (
                                        <h2 className={`p-2 mt-2 rounded-lg ${completedchapters.includes(index) ? "bg-green-200 text-green-800" : "bg-white"}`} key={index_}>{completedchapters.includes(index)}{topic?.topic}</h2>
                                    ))
                                }

                            </div>

                        </AccordionContent>
                    </AccordionItem>
                ))
                }

         





            </Accordion>


        </div>
    )
}

export default ChapterListSidebar