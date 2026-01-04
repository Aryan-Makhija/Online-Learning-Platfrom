
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

import { Sidebar, SidebarContent, SidebarHeader } from "@/components/ui/sidebar";
import { ScrollArea } from '../ui/scroll-area'
import Image from 'next/image'
import Link from 'next/link'

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
        // <div className='w-80 bg-secondary min-h-screen p-2  '>
        //     <h2 className='font-bold text-2xl'>Chapters</h2>
        //     <Accordion type="single" collapsible>


        //         {course?.map((chapter, index) => (

        //             <AccordionItem value={chapter?.courseData?.chapterName} key={index} onClick={() => setchapterindex(index)} >
        //                 <AccordionTrigger className={`mt-4  font-medium ${completedchapters.includes(index)?'bg-green-200 text-green-800':"bg-white"}`} >{index + 1}. {chapter?.courseData?.chapterName}</AccordionTrigger>
        //                 <AccordionContent asChild>

        //                     <div className='p-4 rounded-lg  '>

        //                         {
        //                             chapter?.courseData?.topics.map((topic, index_) => (
        //                                 <h2 className={`p-2 mt-2 rounded-lg ${completedchapters.includes(index) ? "bg-green-200 text-green-800" : "bg-white"}`} key={index_}>{completedchapters.includes(index)}{topic?.topic}</h2>
        //                             ))
        //                         }

        //                     </div>

        //                 </AccordionContent>
        //             </AccordionItem>
        //         ))
        //         }







        //     </Accordion>


        // </div>
        <Sidebar className=" bg-secondary min-h-screen">
            {/* Sidebar Header */}
            <SidebarHeader >
                <Link href="/workspace"><div className='flex gap-2 font-bold items-center text-2xl'><Image src={"/logoimg.jpg"} width={40} height={40} alt="logo"></Image>EduAI</div></Link>

            </SidebarHeader>

            <SidebarHeader className="p-4  border-gray-200">
                <h2 className="text-xl font-bold text-primary">Chapters</h2>
            </SidebarHeader>

            {/* Sidebar Content with only one ScrollArea */}
            <ScrollArea className="h-[calc(100vh-64px)]">
                <SidebarContent className="p-2 ">
                    {/* ScrollArea handles all scrolling */}
                    {/* subtract header height */}
                    <Accordion type="single" collapsible className="space-y-2">
                        {course?.map((chapter, idx) => (
                            <AccordionItem
                                value={chapter?.courseData?.chapterName}
                                key={idx}
                                onClick={() => {
                                    setchapterindex(idx);
                                    setActiveChapter(idx);
                                }}
                            >
                                <AccordionTrigger className={`mt-4 p-3 font-medium ${completedchapters.includes(idx) ? 'bg-green-200 text-green-800' : "bg-white"}`} >{idx + 1}. {chapter?.courseData?.chapterName}</AccordionTrigger>

                                <AccordionContent asChild>
                                    <div className="p-2 rounded-lg space-y-1">
                                        {chapter?.courseData?.topics.map((topic, tIdx) => (
                                            <div
                                                key={tIdx}
                                                className={`p-2 rounded-md text-sm transition-colors duration-200
                          ${completedchapters.includes(idx)
                                                        ? "bg-green-100 text-green-800"
                                                        : "bg-gray-200 hover:bg-gray-100"
                                                    }
                        `}
                                            >
                                                {topic?.topic}
                                            </div>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </SidebarContent>
            </ScrollArea>
        </Sidebar >
    )
}

export default ChapterListSidebar