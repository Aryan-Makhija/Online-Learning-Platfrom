"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import CourseCard from '@/components/WorkspceComponents/CourseCard'
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import { Loader } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const ExploreCourse = () => {



    const [courselist, setcourselist] = useState([])

    const [search, setsearch] = useState({ name: "" })
    const [error, seterror] = useState("")
    const { user } = useUser()

    const GetCoursesList = async () => {
        const response = await axios.get("/api/courses?courseId=0")
        setcourselist(response.data)
    }
    useEffect(() => {
        user && GetCoursesList()
    }, [user])


    useEffect(() => {
        if (search.name === "") {
            seterror("");
            return;
        }

        // Set a timer to trigger search after 300ms of inactivity
        const timeout = setTimeout(() => {
            explore();
        }, 200);

        // Clear timeout if user types again before 300ms
        return () => clearTimeout(timeout);

    }, [search.name]); // run effect whenever search.name changes

    // API call
    const explore = async () => {
        try {
            const response = await axios.post("/api/courses/searchcourse", search);
            setcourselist(response.data);
            seterror(response.data.length === 0 ? "No courses found" : "");

        } catch (err) {
            console.log(err.message);
            seterror("Something went wrong while searching!");
        }
    };



    return (
        <div>

            <h2 className='font-bold text-3xl mb-6'>Explore More</h2>

            {/* <div className='flex gap-5 w-1/2'>

                <div className='flex flex-col gap-2 w-full'>
                    <Input
                        placeholder="Search Course"
                        value={search.name}
                        onChange={(e) => setsearch({ ...search, name: e.target.value })}
                    />
                    <p className='text-m text-red-500'>{error}</p>

                </div>
                <Button variant="outline" className="bg-blue-500 text-white hover:bg-white hover:text-blue-500 hover:outline-1" onClick={explore}>Search</Button>
            </div> */}

            <div className='flex gap-5 w-1/2'>
                <div className='flex flex-col gap-2 w-full'>
                    <Input
                        placeholder="Search Course"
                        value={search.name}
                        onChange={(e) => setsearch({ ...search, name: e.target.value })}
                    />
                    <p className='text-m text-red-500'>{error}</p>
                </div>
                <Button
                    variant="outline"
                    className="bg-blue-500 text-white hover:bg-white hover:text-blue-500 hover:outline-1"
                    onClick={explore} // optional: allow manual search
                >
                    Search
                </Button>
            </div>


            {
                courselist.length === 0 ? <div className="w-full flex items-center mt-20 h-20 justify-center"><Loader className='w-15 h-15 animate-spin'></Loader></div> : 
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
            }

        </div>
    )
}

export default ExploreCourse