import CourseList from '@/components/WorkspceComponents/CourseList'
import EnrollCourseList from '@/components/WorkspceComponents/EnrollCourseList'
import WelcomeBanner from '@/components/WorkspceComponents/WelcomeBanner'
import React from 'react'

const WorkSpace = () => {
    return (
        <div className='flex flex-col gap-10'>

         

            <WelcomeBanner></WelcomeBanner>
          
            <EnrollCourseList></EnrollCourseList>
            <div className='w-full'>
            <CourseList></CourseList>

            </div>
        </div>
    )
}

export default WorkSpace
