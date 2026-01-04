import Chapterheader from '@/components/Course/ChapterHeader'
import ChapterListSidebar from '@/components/Course/ChapterListSidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import AppHeader from '@/components/WorkspceComponents/AppHeader'
import React from 'react'




const CourseProvider = ({ children }) => {
    return (


        <SidebarProvider>

            <ChapterListSidebar></ChapterListSidebar>
            {/* <SidebarTrigger>
            </SidebarTrigger> */}

            <div className='w-full'>
                <Chapterheader></Chapterheader>


                <div className=''>


                    {children}
                </div>

            </div>
        </SidebarProvider>

    )
}

export default CourseProvider