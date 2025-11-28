import React from 'react'
import WorkSpaceProvider from './Provider'
import { Toaster } from '@/components/ui/sonner'



export const metadata = {
  title: "EduAI/Workspace",
  description: "Online Learning Platform",
};


const WorkSpacelayout = ({ children }) => {
    return (

        <WorkSpaceProvider>
            <Toaster></Toaster>
            <div>{children}</div>

        </WorkSpaceProvider>
    )
}

export default WorkSpacelayout