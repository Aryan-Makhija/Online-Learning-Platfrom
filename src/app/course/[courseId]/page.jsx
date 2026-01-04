'use client'

import ChapterContent from '@/components/Course/ChapterContent'
import ChapterListSidebar from '@/components/Course/ChapterListSidebar'
import AppHeader from '@/components/WorkspceComponents/AppHeader'

import axios from 'axios'
import { useParams } from 'next/navigation'

import React, { useEffect, useState } from 'react'

const CoursePage = () => {

    const { courseId } = useParams()
    const [courseInfo, setCourseInfo] = useState()




    const GetCourseDetails = async () => {


        const result = await axios.get('/api/enroll-course?courseId=' + courseId)
        setCourseInfo(result.data)
       
    }

    useEffect(() => {
        GetCourseDetails()
    }, [])
    return (
        <div >
       
                <ChapterContent ></ChapterContent >
           
        </div>
    )
}

export default CoursePage