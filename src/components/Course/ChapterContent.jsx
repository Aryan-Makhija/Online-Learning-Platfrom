"use client"

import { SelectedChapterContext } from "@/Context/SelectedChapterContext"
import axios from "axios"
import { CheckCircle, Cross, Loader2Icon, X } from "lucide-react"
import { useParams } from "next/navigation"
import { useContext, useEffect, useState } from "react"
import YouTube from "react-youtube"
import { Button } from "../ui/button"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const ChapterContent = () => {

  const { courseId } = useParams()
  const [courseInfo, setCourseInfo] = useState()
  const { chapterindex, refresh, setrefresh } = useContext(SelectedChapterContext)

  const [loader, setloader] = useState(false)

  const course = courseInfo?.courses?.courseContent

  const videodata = course?.[chapterindex]?.youtubeVideo

  const topics = course?.[chapterindex]?.courseData?.topics

  const completedchapters = courseInfo?.enrollCourse?.completedChapters ?? []

  const router = useRouter()





  const GetCourseDetails = async () => {
    const result = await axios.get('/api/enroll-course?courseId=' + courseId)
    setCourseInfo(result.data)

  }


  const markChapterCompleted = async () => {
    setrefresh(true)
    setloader(true)
    try {
      completedchapters.push(chapterindex);

      const result = await axios.put("/api/enroll-course", {
        courseId: courseId,
        completedchapters: completedchapters
      })

      toast.success("Chapter Marked as Completed")
      router.refresh()
    } catch (err) {
      console.log(err.message)
    } finally {
      setrefresh(false)
      setloader(false)
    }
  }


  const markChapterInCompleted = async () => {
    setrefresh(true)
    setloader(true)
    try {
      const completedchapter = completedchapters.filter(item => item !== chapterindex)

      const result = await axios.put("/api/enroll-course", {
        courseId: courseId,
        completedchapters: completedchapter
      })

      toast.success("Chapter Marked as InCompleted")
      router.refresh()
    } catch (err) {
      console.log(err.message)
    } finally {
      setrefresh(false)
      setloader(false)
    }

  }



  useEffect(() => {
    GetCourseDetails()
  }, [refresh])


  return (
    <div className='p-10 flex flex-col max-h-screen overflow-auto'>

      <div className="flex items-center justify-between">
        <h2 className="font-bold text-3xl">{chapterindex + 1}. {course?.[chapterindex]?.courseData?.chapterName}</h2>

        {!completedchapters?.includes(chapterindex) ?

          <Button disabled={loader} onClick={() => markChapterCompleted()} className="bg-purple-600 text-white cursor-pointer">

            {loader ? <Loader2Icon className="animate-spin"></Loader2Icon> : <CheckCircle></CheckCircle>}

            Mark As Complete</Button> :

          <Button disabled={loader} onClick={markChapterInCompleted} variant="outline">

            {loader ? <Loader2Icon className="animate-spin"></Loader2Icon> : <X></X>}
            Mark as Incomplete</Button>}


      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-7">
        {videodata?.map((video, index) => index < 2 && (

          <div key={index}>
            <YouTube videoId={video?.videoId} opts={{
              height: '250',
              width: '400',
              borderRadius: 15
            }}>

            </YouTube>

          </div>
        ))}

      </div>
      <div className='mt-7 w-200'>
        {topics?.map((topic, index) => (
          <div key={index} className="mt-10 p-5 bg-secondary rounded-2xl">



            <h2 className="font-bold text-xl text-purple-600">{index + 1}. {topic?.topic}</h2>
            <div dangerouslySetInnerHTML={{ __html: topic?.content }}
              style={{
                lineHeight: '2.5'
              }}
            >

            </div>


          </div>
        ))}

      </div>

    </div>
  )
}

export default ChapterContent