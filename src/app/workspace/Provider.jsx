import React from 'react'
import { Sidebar, SidebarProvider, SidebarTrigger } from '../../../@/components/ui/sidebar'

const WorkSpaceProvider = ({ children }) => {
    return (


        <SidebarProvider>
            <SidebarTrigger>

                <div>{children}</div>
            </SidebarTrigger>
        </SidebarProvider>

    )
}

export default WorkSpaceProvider