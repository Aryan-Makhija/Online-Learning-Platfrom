import CourseList from '@/components/WorkspceComponents/CourseList'
import WelcomeBanner from '@/components/WorkspceComponents/WelcomeBanner'
import React from 'react'

const WorkSpace = () => {
    return (
        <div>
            <WelcomeBanner></WelcomeBanner>
            <CourseList></CourseList>
        </div>
    )
}

export default WorkSpace
