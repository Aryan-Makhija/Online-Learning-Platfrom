"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import CourseCard from '@/components/WorkspceComponents/CourseCard'
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ExploreCourse = () => {



    const [courselist, setcourselist] = useState([])

    const { user } = useUser()

    const GetCoursesList = async () => {
        const response = await axios.get("/api/courses?courseId=0")
        setcourselist(response.data)
    }

    useEffect(() => {
        user && GetCoursesList()
    }, [user])

    
    return (
        <div>

            <h2 className='font-bold text-3xl mb-6'>Explore More</h2>

            <div className='flex gap-5 w-1/2'>
                <Input placeholder="Search"></Input>
                <Button variant="outline" className="bg-blue-500 text-white hover:bg-white hover:text-blue-500 hover:outline-1">Search</Button>
            </div>

            <div className="mt-6 
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-2 
                lg:grid-cols-3 
                xl:grid-cols-4 
                gap-6
                ">
                {
                    courselist.map((course, index) => (
                        <CourseCard course={course} key={index}></CourseCard>
                    ))
                }

            </div>
        </div>
    )
}

export default ExploreCourse