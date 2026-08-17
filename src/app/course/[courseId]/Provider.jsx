import Chapterheader from '@/components/Course/ChapterHeader'
import ChapterListSidebar from '@/components/Course/ChapterListSidebar'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import AppHeader from '@/components/WorkspceComponents/AppHeader'
import React from 'react'




const CourseProvider = ({ children }) => {
    return (


        // <SidebarProvider>

        //     <ChapterListSidebar></ChapterListSidebar>
        //     {/* <SidebarTrigger>
        //     </SidebarTrigger> */}

        //     <div className='w-full'>
        //         <Chapterheader></Chapterheader>


        //         <div className=''>


        //             {children}
        //         </div>

        //     </div>
        // </SidebarProvider>



        <SidebarProvider>
            {/* 1. Chapter Sidebar */}
            <ChapterListSidebar />

            {/* 2. SidebarInset handles responsive layout & offsets automatically */}
            <SidebarInset className="flex flex-col min-w-0 w-full overflow-x-hidden">

                {/* Sticky Header with Sidebar Toggle */}
                <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-3 sm:px-4 min-w-0">
                    {/* Mobile/Desktop Toggle Button */}
                    <SidebarTrigger className="-ml-1 shrink-0" />

                    {/* Header Content Container */}
                    <div className="flex-1 min-w-0 overflow-hidden">
                        <Chapterheader />
                    </div>
                </header>

                {/* 3. Main Content Container */}
                <main className="flex-1 min-w-0 w-full overflow-x-hidden">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>

    )
}

export default CourseProvider