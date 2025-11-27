import { Book, PlayCircle, Settings } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { Progress } from '../ui/progress'
import Link from 'next/link'

const EnrollCourseListCard = ({ course, enrollcourse }) => {

    const CalculateProgress = () => {
        return Math.round(
            (enrollcourse?.completedChapters?.length / course?.courseContent?.length) * 100)
    }




    const courseJson = course?.courseJson?.course
    return (
        <div className='shadow-lg  rounded-xl '>
            <div className='w-full h-[180px] rounded-t-xl border-purple-500 border-1'></div>
            <div className='p-3 flex flex-col gap-3'>
                <h2 className='font-bold text-lg'>{courseJson?.name}</h2>
                <p className='line-clamp-3 text-gray-400 '>{courseJson?.description}</p>
                <p className='flex justify-between item-center text-purple-600'>Progress<span>{CalculateProgress()}%</span></p>
                <Progress value={CalculateProgress()}></Progress>
                <div className='flex flex-col  gap-4  '>
                    <h2 className="flex gap-2"><Book></Book>{courseJson?.noOfChapters} Chapters </h2>


                    <Link href={'/workspace/view-course/' + course?.cid}>

                        <Button className="text-white bg-purple-600 w-full hover:scale-110"><PlayCircle></PlayCircle> Continue Learning</Button>
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default EnrollCourseListCard