import React from 'react'
import WorkSpaceProvider from './Provider'
import { Toaster } from '@/components/ui/sonner'
import CourseProvider from './Provider';



export const metadata = {
    title: "EduAI/Course",
    description: "Online Learning Platform",
};


const WorkSpacelayout = ({ children }) => {
    return (
        <CourseProvider>

            <Toaster></Toaster>
            <div>{children}</div>
        </CourseProvider>

    )
}

export default WorkSpacelayout