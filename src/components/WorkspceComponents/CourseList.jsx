
"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import AddnewCourse from './AddnewCourse'


const CourseList = () => {


    const [courselist, setcourselist] = useState([])


    return (
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
                    <div>


                    </div>


            }
        </div>
    )
}

export default CourseList