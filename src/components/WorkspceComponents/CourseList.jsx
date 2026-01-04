
"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import AddnewCourse from './AddnewCourse'
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import CourseCard from './CourseCard'


const CourseList = () => {


    const [courselist, setcourselist] = useState([])

    const { user } = useUser()

    const GetCoursesList = async () => {
        const response = await axios.get("/api/courses")

        setcourselist(response.data)
    }

    useEffect(() => {
        user && GetCoursesList()
    }, [user])


    return (

        <section  id="course" className="scroll-mt-24" >
            <div className='mt-10'>


                <h2 className='font-bold text-3xl'>Course List</h2>


                {
                    courselist.length === 0 ?

                        <div className='w-full mt-5 p-10 bg-secondary rounded-xl  flex justify-center flex-col  gap-3 items-center '>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCkcBAxdZSJipsWclnHvnKBALDx_M2im_9vA&s" alt="education" width={120} height={120} />
                            <h2 className='font-bold text-xl '>Look like you have not created any courses yet</h2>

                            <AddnewCourse>
                                <Button className="bg-purple-500 text-white">
                                    + Create your first course
                                </Button>
                            </AddnewCourse>
                        </div> :
                        <div className="mt-6 
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-2 
                lg:grid-cols-3 
                xl:grid-cols-4 
                gap-6     ">
                            {
                                courselist.map((course, index) => (
                                    <CourseCard course={course} key={index}></CourseCard>
                                ))
                            }

                        </div>


                }
            </div>

        </section>
    )
}

export default CourseList