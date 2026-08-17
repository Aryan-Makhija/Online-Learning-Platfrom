import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Toaster } from '@/components/ui/sonner'
import AppHeader from '@/components/WorkspceComponents/AppHeader'
import AppSideBar from '@/components/WorkspceComponents/AppSideBar'
import WelcomeBanner from '@/components/WorkspceComponents/WelcomeBanner'
import React from 'react'




const WorkSpaceProvider = ({ children }) => {
    return (


        // <SidebarProvider>

        //     <AppSideBar></AppSideBar>
        //     {/* <SidebarTrigger>
        //     </SidebarTrigger> */}

        //     <div className='w-full'>
        //         <AppHeader></AppHeader>


        <div className=''>
            <Toaster></Toaster>

            {children}
        </div>

        //     </div>
        // </SidebarProvider>

    )
}

export default WorkSpaceProvider