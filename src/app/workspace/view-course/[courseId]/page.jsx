
"use client "

import React from 'react'
import EditCoursePage from '../../edit-course/[courseId]/page'
import Footer from '@/components/HomePage/Footer'



const ViewCourse = () => {

    // const { courseId } = useParams()

    return (
        <div>

            <EditCoursePage viewCourse={true}></EditCoursePage>
            <Footer></Footer>
        </div>
    )
}

export default ViewCourse