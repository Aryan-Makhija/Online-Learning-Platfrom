import React from 'react'
import { Toaster } from '@/components/ui/sonner'



export const metadata = {
    title: "EduAI/Workspace",
    description: "Online Learning Platform",
};


const WorkSpacelayout = ({ children }) => {
    return (

        <div>

            <Toaster></Toaster>
            <div>{children}</div>
        </div>


    )
}

export default WorkSpacelayout