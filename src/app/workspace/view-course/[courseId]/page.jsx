
"use client "

import React from 'react'
import EditCoursePage from '../../edit-course/[courseId]/page'

const ViewCourse = () => {

    // const { courseId } = useParams()

    return (
        <div>
            <EditCoursePage viewCourse = {true}></EditCoursePage>
        </div>
    )
}

export default ViewCourse