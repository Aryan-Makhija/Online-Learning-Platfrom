import React from 'react'
import WorkSpaceProvider from './Provider'
import { Toaster } from '@/components/ui/sonner'

const WorkSpacelayout = ({ children }) => {
    return (

        <WorkSpaceProvider>
            <Toaster></Toaster>
            <div>{children}</div>

        </WorkSpaceProvider>
    )
}

export default WorkSpacelayout