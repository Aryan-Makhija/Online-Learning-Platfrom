"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EnrollCourseListCard from './EnrollCourseListCard'
import { Loader } from 'lucide-react'

const EnrollCourseList = () => {

    const [enrollcourse, setenrollcourse] = useState([])

    const getEnrollCourse = async () => {
        try {
            const response = await axios.get("/api/enroll-course")


            setenrollcourse(response.data)

        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        getEnrollCourse()
    }, [])


    return (






        <div className='mt-3'>

            <h2 className='font-bold text-3xl'>Continue Learning the Courses</h2>

            {
                enrollcourse.length === 0 ? <div className="w-full flex items-center mt-20 h-20 justify-center"><Loader className='w-15 h-15 animate-spin'></Loader></div> : <div className="mt-6 
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-2 
                lg:grid-cols-3 
                xl:grid-cols-4 
                gap-6
                ">
                    {
                        enrollcourse.map((course, index) => (
                            <EnrollCourseListCard course={course?.courses} enrollcourse={course?.enrollCourse} key={index}></EnrollCourseListCard>
                        ))
                    }

                </div>
            }


        </div>
    )
}

export default EnrollCourseList