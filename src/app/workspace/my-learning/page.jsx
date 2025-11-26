import EnrollCourseList from '@/components/WorkspceComponents/EnrollCourseList'
import WelcomeBanner from '@/components/WorkspceComponents/WelcomeBanner'
import React from 'react'

const MyLearning = () => {
    return (
        <div>
            <WelcomeBanner></WelcomeBanner>
            <h2 className='text-2xl font-bold mt-5 mb-5'>My Learning</h2>


            <EnrollCourseList></EnrollCourseList>


        </div>
    )
}

export default MyLearning