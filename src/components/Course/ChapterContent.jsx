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
import { ScrollArea } from "../ui/scroll-area"

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

    <ScrollArea>
      <div className="p-5 md:p-10 flex flex-col w-full ">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
          <h2 className="font-bold text-2xl md:text-3xl">
            {chapterindex + 1}. {course?.[chapterindex]?.courseData?.chapterName}
          </h2>

          <div className="flex gap-3">
            {!completedchapters?.includes(chapterindex) ? (
              <Button
                disabled={loader}
                onClick={() => markChapterCompleted()}
                className="bg-indigo-600 text-white cursor-pointer flex items-center gap-2"
              >
                {loader ? <Loader2Icon className="animate-spin" /> : <CheckCircle />}
                Mark As Complete
              </Button>
            ) : (
              <Button
                disabled={loader}
                onClick={markChapterInCompleted}
                variant="outline"
                className="flex items-center gap-2"
              >
                {loader ? <Loader2Icon className="animate-spin" /> : <X />}
                Mark as Incomplete
              </Button>
            )}
          </div>
        </div>

        {/* Videos */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 mt-7">
          {videodata?.map(
            (video, index) =>
              index < 2 && (
                <div key={index} className="w-full">
                  <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                    <YouTube
                      videoId={video?.videoId}
                      opts={{
                        width: '420',
                        height: '230',
                        playerVars: { modestbranding: 1 },
                      }}
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                    />
                  </div>
                </div>
              )
          )}
        </div>

        {/* Topics */}
        {/* <div className="mt-7 w-full flex flex-col gap-8">
          {topics?.map((topic, index) => (
            <div key={index} className="p-5 bg-secondary rounded-2xl w-full break-words">
              <h2 className="font-bold text-xl text-purple-600 mb-3">
                {index + 1}. {topic?.topic}
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: topic?.content }}
                className="text-base md:text-lg leading-relaxed break-words whitespace-normal "
              />
            </div>
          ))}
        </div> */}

        <div className="mt-7 w-full flex flex-col gap-8">
          {topics?.map((topic, index) => (
            <div
              key={index}
              className="p-5 bg-secondary rounded-2xl w-full break-words"
            >
              <h2 className="font-bold text-xl text-indigo-600 mb-3">
                {index + 1}. {topic?.topic}
              </h2>

              <div
                className="prose prose-sm md:prose lg:prose-lg max-w-full break-words whitespace-normal overflow-visible"
                dangerouslySetInnerHTML={{ __html: topic?.content }}
              />
            </div>
          ))}
        </div>

      </div>
    </ScrollArea>




  )
}

export default ChapterContent