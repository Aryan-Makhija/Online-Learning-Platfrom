
"use client"

import ChapterTopicList from '@/components/EditCourse/ChapterTopicList'
import CourseInfo from '@/components/EditCourse/CourseInfo'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const EditCoursePage = ({viewCourse = false}) => {
    const { courseId } = useParams()

    const [loading, setloading] = useState(false)

    const [course, setcourse] = useState()
    const getCourseInfo = async () => {

        setloading(true)
        try {
            const result = await axios.get("/api/courses?courseId=" + courseId)
            setcourse(result.data)
     


        } catch (err) {
            console.log(err.message)
        } finally {
            setloading(false)
        }
    }

    useEffect(() => {
        getCourseInfo()
    }, [])


    return (
        <div>

            <CourseInfo course={course} viewCourse={viewCourse}></CourseInfo>
            <ChapterTopicList course={course}></ChapterTopicList>
        </div>
    )
}

export default EditCoursePage