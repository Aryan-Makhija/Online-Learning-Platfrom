
// "use client"

// import { SelectedChapterContext } from "@/Context/SelectedChapterContext"
// import axios from "axios"
// import {
//     CheckCircle,
//     Copy,
//     Check,
//     Loader2Icon,
//     X,
//     Play,
//     BookOpen,
//     Code2,
//     Lightbulb,
//     ExternalLink,
// } from "lucide-react"
// import { useParams, useRouter } from "next/navigation"
// import { useContext, useEffect, useState } from "react"
// import YouTube from "react-youtube"
// import { Button } from "../ui/button"
// import { toast } from "sonner"
// import { ScrollArea } from "../ui/scroll-area"
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
// import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

// const ChapterContent = () => {
//     const { courseId } = useParams()

//     const {
//         chapterindex,
//         refresh,
//         setrefresh,
//     } = useContext(SelectedChapterContext)

//     const [courseInfo, setCourseInfo] = useState()
//     const [loader, setLoader] = useState(false)
//     const [copiedIndex, setCopiedIndex] = useState(null)

//     const router = useRouter()

//     const course =
//         courseInfo?.courses?.courseContent

//     const currentChapter =
//         course?.[chapterindex]

//     const sections =
//         currentChapter?.sections ?? []

//     const youtubeVideos =
//         currentChapter?.youtubeVideos ?? []

//     const completedchapters =
//         courseInfo?.enrollCourse?.completedChapters ?? []

//     // --------------------------------------------------
//     // GET COURSE DETAILS
//     // --------------------------------------------------

//     const GetCourseDetails = async () => {
//         try {
//             const result = await axios.get(
//                 "/api/enroll-course?courseId=" + courseId
//             )

//             setCourseInfo(result.data)
//         } catch (error) {
//             console.error(
//                 "Failed to fetch course details:",
//                 error
//             )
//         }
//     }

//     // --------------------------------------------------
//     // MARK CHAPTER COMPLETE
//     // --------------------------------------------------

//     const markChapterCompleted = async () => {
//         setrefresh(true)
//         setLoader(true)

//         try {
//             const updatedChapters = [
//                 ...completedchapters,
//                 chapterindex,
//             ]

//             await axios.put("/api/enroll-course", {
//                 courseId: courseId,
//                 completedchapters: updatedChapters,
//             })

//             toast.success(
//                 "Chapter Marked as Completed"
//             )

//             router.refresh()
//         } catch (error) {
//             console.error(error)

//             toast.error(
//                 "Failed to mark chapter as completed"
//             )
//         } finally {
//             setrefresh(false)
//             setLoader(false)
//         }
//     }

//     // --------------------------------------------------
//     // MARK CHAPTER INCOMPLETE
//     // --------------------------------------------------

//     const markChapterInCompleted = async () => {
//         setrefresh(true)
//         setLoader(true)

//         try {
//             const updatedChapters =
//                 completedchapters.filter(
//                     (item) => item !== chapterindex
//                 )

//             await axios.put("/api/enroll-course", {
//                 courseId: courseId,
//                 completedchapters: updatedChapters,
//             })

//             toast.success(
//                 "Chapter Marked as Incomplete"
//             )

//             router.refresh()
//         } catch (error) {
//             console.error(error)

//             toast.error(
//                 "Failed to update chapter"
//             )
//         } finally {
//             setrefresh(false)
//             setLoader(false)
//         }
//     }

//     // --------------------------------------------------
//     // COPY CODE
//     // --------------------------------------------------

//     const copyCode = async (code, index) => {
//         try {
//             await navigator.clipboard.writeText(code)

//             setCopiedIndex(index)

//             toast.success("Code copied")

//             setTimeout(() => {
//                 setCopiedIndex(null)
//             }, 2000)
//         } catch (error) {
//             console.error(error)
//             toast.error("Failed to copy code")
//         }
//     }

//     // --------------------------------------------------
//     // FETCH COURSE
//     // --------------------------------------------------

//     useEffect(() => {
//         GetCourseDetails()
//     }, [refresh, courseId])

//     // --------------------------------------------------
//     // LOADING
//     // --------------------------------------------------

//     if (!courseInfo || !currentChapter) {
//         return (
//             <div className="w-full h-full flex items-center justify-center">
//                 <Loader2Icon className="animate-spin w-7 h-7" />
//             </div>
//         )
//     }

//     // --------------------------------------------------
//     // PAGE
//     // --------------------------------------------------

//     return (
//         <ScrollArea className="h-full">

//             <div className="w-full max-w-6xl mx-auto px-4 py-6 md:px-8 md:py-10">

//                 {/* ========================================= */}
//                 {/* CHAPTER HEADER */}
//                 {/* ========================================= */}

//                 <div className="flex flex-col gap-6">

//                     <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">

//                         <div className="space-y-3">

//                             <div className="flex items-center gap-2 text-sm text-indigo-600 font-medium">
//                                 <BookOpen className="w-4 h-4" />

//                                 Chapter{" "}
//                                 {currentChapter?.chapterNumber ??
//                                     chapterindex + 1}
//                             </div>

//                             <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
//                                 {currentChapter?.chapterTitle}
//                             </h1>

//                             <p className="text-muted-foreground text-sm md:text-base leading-7 max-w-3xl">
//                                 {
//                                     currentChapter?.chapterDescription
//                                 }
//                             </p>

//                         </div>

//                         {/* COMPLETE BUTTON */}

//                         <div className="shrink-0">

//                             {!completedchapters?.includes(
//                                 chapterindex
//                             ) ? (

//                                 <Button
//                                     disabled={loader}
//                                     onClick={
//                                         markChapterCompleted
//                                     }
//                                     className="flex items-center gap-2"
//                                 >
//                                     {loader ? (
//                                         <Loader2Icon className="animate-spin" />
//                                     ) : (
//                                         <CheckCircle />
//                                     )}

//                                     Mark As Complete
//                                 </Button>

//                             ) : (

//                                 <Button
//                                     disabled={loader}
//                                     onClick={
//                                         markChapterInCompleted
//                                     }
//                                     variant="outline"
//                                     className="flex items-center gap-2"
//                                 >
//                                     {loader ? (
//                                         <Loader2Icon className="animate-spin" />
//                                     ) : (
//                                         <X />
//                                     )}

//                                     Mark as Incomplete
//                                 </Button>

//                             )}

//                         </div>

//                     </div>

//                 </div>


//                 {/* ========================================= */}
//                 {/* YOUTUBE VIDEOS */}
//                 {/* ========================================= */}

//                 {youtubeVideos?.length > 0 && (

//                     <section className="mt-10">

//                         <div className="flex items-center gap-2 mb-5">

//                             <div className="p-2 rounded-lg bg-red-500/10">
//                                 <Play className="w-5 h-5 text-red-500 fill-red-500" />
//                             </div>

//                             <div>
//                                 <h2 className="text-xl md:text-2xl font-bold">
//                                     Recommended Tutorials
//                                 </h2>

//                                 <p className="text-sm text-muted-foreground">
//                                     Long-form videos to help you understand this chapter
//                                 </p>
//                             </div>

//                         </div>


//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

//                             {youtubeVideos
//                                 .slice(0, 2)
//                                 .map((video, index) => (

//                                     <div
//                                         key={
//                                             video?.videoId ||
//                                             index
//                                         }
//                                         className="w-full overflow-hidden rounded-xl border bg-card"
//                                     >

//                                         <div
//                                             className="relative w-full"
//                                             style={{
//                                                 paddingTop:
//                                                     "56.25%",
//                                             }}
//                                         >

//                                             {video?.videoId ? (

//                                                 <YouTube
//                                                     videoId={
//                                                         video.videoId
//                                                     }
//                                                     opts={{
//                                                         width: "100%",
//                                                         height: "100%",
//                                                         playerVars: {
//                                                             modestbranding: 1,
//                                                             rel: 0,
//                                                         },
//                                                     }}
//                                                     className="absolute top-0 left-0 w-full h-full"
//                                                     iframeClassName="w-full h-full"
//                                                 />

//                                             ) : (

//                                                 <div className="absolute inset-0 flex items-center justify-center bg-muted">
//                                                     <p className="text-sm text-muted-foreground">
//                                                         Video unavailable
//                                                     </p>
//                                                 </div>

//                                             )}

//                                         </div>


//                                         <div className="p-4">

//                                             <h3 className="font-semibold line-clamp-2">
//                                                 {video?.title}
//                                             </h3>

//                                             {video?.channelTitle && (
//                                                 <p className="text-sm text-muted-foreground mt-1">
//                                                     {video.channelTitle}
//                                                 </p>
//                                             )}

//                                         </div>

//                                     </div>

//                                 ))}

//                         </div>

//                     </section>

//                 )}


//                 {/* ========================================= */}
//                 {/* COURSE CONTENT */}
//                 {/* ========================================= */}

//                 <section className="mt-12">

//                     <div className="flex items-center gap-2 mb-8">

//                         <div className="p-2 rounded-lg bg-indigo-500/10">
//                             <BookOpen className="w-5 h-5 text-indigo-500" />
//                         </div>

//                         <div>
//                             <h2 className="text-xl md:text-2xl font-bold">
//                                 Chapter Content
//                             </h2>

//                             <p className="text-sm text-muted-foreground">
//                                 Learn the concepts step by step
//                             </p>
//                         </div>

//                     </div>


//                     {/* ===================================== */}
//                     {/* SECTIONS */}
//                     {/* ===================================== */}

//                     <div className="flex flex-col gap-10">

//                         {sections?.map(
//                             (section, index) => (

//                                 <article
//                                     key={
//                                         section?.sectionNumber ??
//                                         index
//                                     }
//                                     className="w-full"
//                                 >

//                                     {/* SECTION HEADING */}

//                                     <div className="mb-5">

//                                         <div className="flex items-start gap-3">

//                                             <div className="shrink-0 w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-600 flex items-center justify-center font-semibold text-sm">
//                                                 {section?.sectionNumber ??
//                                                     index + 1}
//                                             </div>

//                                             <div>

//                                                 <h2 className="text-xl md:text-2xl font-bold">
//                                                     {
//                                                         section?.title
//                                                     }
//                                                 </h2>

//                                                 {section?.subtitle && (
//                                                     <p className="mt-1 text-sm md:text-base text-muted-foreground">
//                                                         {
//                                                             section.subtitle
//                                                         }
//                                                     </p>
//                                                 )}

//                                             </div>

//                                         </div>

//                                     </div>


//                                     {/* THEORY */}

//                                     {section?.theory && (

//                                         <div className="rounded-xl border bg-card p-5 md:p-7">

//                                             <div className="flex items-center gap-2 mb-4">

//                                                 <Lightbulb className="w-5 h-5 text-yellow-500" />

//                                                 <h3 className="font-semibold">
//                                                     Explanation
//                                                 </h3>

//                                             </div>

//                                             <div className="text-sm md:text-base leading-7 text-foreground whitespace-pre-line">
//                                                 {
//                                                     section.theory
//                                                 }
//                                             </div>

//                                         </div>

//                                     )}


//                                     {/* CODE EXAMPLE */}

//                                     {section?.codeExample && (

//                                         <div className="mt-6 rounded-xl overflow-hidden border">

//                                             {/* CODE HEADER */}

//                                             <div className="flex items-center justify-between px-4 py-3 bg-[#1e1e1e] border-b border-white/10">

//                                                 <div className="flex items-center gap-2">

//                                                     <Code2 className="w-4 h-4 text-white/70" />

//                                                     <span className="text-sm text-white/80">
//                                                         {
//                                                             section
//                                                                 .codeExample
//                                                                 .title
//                                                         }
//                                                     </span>

//                                                 </div>


//                                                 <div className="flex items-center gap-3">

//                                                     <span className="text-xs text-white/50 uppercase">
//                                                         {
//                                                             section
//                                                                 .codeExample
//                                                                 .language
//                                                         }
//                                                     </span>

//                                                     <button
//                                                         onClick={() =>
//                                                             copyCode(
//                                                                 section
//                                                                     .codeExample
//                                                                     .code,
//                                                                 index
//                                                             )
//                                                         }
//                                                         className="flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition"
//                                                     >

//                                                         {copiedIndex ===
//                                                         index ? (
//                                                             <>
//                                                                 <Check className="w-4 h-4" />
//                                                                 Copied
//                                                             </>
//                                                         ) : (
//                                                             <>
//                                                                 <Copy className="w-4 h-4" />
//                                                                 Copy
//                                                             </>
//                                                         )}

//                                                     </button>

//                                                 </div>

//                                             </div>


//                                             {/* CODE */}

//                                             <div className="overflow-x-auto">

//                                                 <SyntaxHighlighter
//                                                     language={
//                                                         section
//                                                             .codeExample
//                                                             .language
//                                                     }
//                                                     style={
//                                                         vscDarkPlus
//                                                     }
//                                                     customStyle={{
//                                                         margin: 0,
//                                                         borderRadius: 0,
//                                                         padding:
//                                                             "20px",
//                                                         fontSize:
//                                                             "14px",
//                                                         lineHeight:
//                                                             "1.7",
//                                                         minWidth:
//                                                             "100%",
//                                                     }}
//                                                     wrapLongLines={
//                                                         false
//                                                     }
//                                                 >
//                                                     {
//                                                         section
//                                                             .codeExample
//                                                             .code
//                                                     }
//                                                 </SyntaxHighlighter>

//                                             </div>


//                                             {/* CODE EXPLANATION */}

//                                             {section?.codeExample
//                                                 ?.explanation && (

//                                                 <div className="bg-muted/50 border-t p-5">

//                                                     <div className="flex items-center gap-2 mb-2">

//                                                         <Lightbulb className="w-4 h-4 text-yellow-500" />

//                                                         <span className="font-semibold text-sm">
//                                                             Code Explanation
//                                                         </span>

//                                                     </div>

//                                                     <p className="text-sm leading-6 text-muted-foreground">
//                                                         {
//                                                             section
//                                                                 .codeExample
//                                                                 .explanation
//                                                         }
//                                                     </p>

//                                                 </div>

//                                             )}

//                                         </div>

//                                     )}

//                                 </article>

//                             )
//                         )}

//                     </div>

//                 </section>


//                 {/* ========================================= */}
//                 {/* BOTTOM COMPLETE */}
//                 {/* ========================================= */}

//                 <div className="mt-12 pt-8 border-t flex justify-center">

//                     {!completedchapters?.includes(
//                         chapterindex
//                     ) ? (

//                         <Button
//                             disabled={loader}
//                             onClick={
//                                 markChapterCompleted
//                             }
//                             size="lg"
//                             className="px-8 flex items-center gap-2"
//                         >

//                             {loader ? (
//                                 <Loader2Icon className="animate-spin" />
//                             ) : (
//                                 <CheckCircle />
//                             )}

//                             Complete Chapter

//                         </Button>

//                     ) : (

//                         <div className="flex items-center gap-2 text-green-600 font-medium">

//                             <CheckCircle className="w-5 h-5" />

//                             Chapter Completed

//                         </div>

//                     )}

//                 </div>

//             </div>

//         </ScrollArea>
//     )
// }

// export default ChapterContent




"use client"

import { SelectedChapterContext } from "@/Context/SelectedChapterContext"
import axios from "axios"
import {
  CheckCircle,
  Copy,
  Check,
  Loader2Icon,
  X,
  Play,
  BookOpen,
  Code2,
  Lightbulb,
} from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { useContext, useEffect, useState } from "react"
import YouTube from "react-youtube"
import { Button } from "../ui/button"
import { toast } from "sonner"
import { ScrollArea } from "../ui/scroll-area"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

const ChapterContent = () => {
  const { courseId } = useParams()

  const { chapterindex, refresh, setrefresh } = useContext(
    SelectedChapterContext
  )

  const [courseInfo, setCourseInfo] = useState()
  const [loader, setLoader] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState(null)

  const router = useRouter()

  const course = courseInfo?.courses?.courseContent
  const currentChapter = course?.[chapterindex]
  const sections = currentChapter?.sections ?? []
  const youtubeVideos = currentChapter?.youtubeVideos ?? []
  const completedchapters = courseInfo?.enrollCourse?.completedChapters ?? []

  // --------------------------------------------------
  // GET COURSE DETAILS
  // --------------------------------------------------
  const GetCourseDetails = async () => {
    try {
      const result = await axios.get("/api/enroll-course?courseId=" + courseId)
      setCourseInfo(result.data)
    } catch (error) {
      console.error("Failed to fetch course details:", error)
    }
  }

  // --------------------------------------------------
  // MARK CHAPTER COMPLETE
  // --------------------------------------------------
  const markChapterCompleted = async () => {
    setrefresh(true)
    setLoader(true)

    try {
      const updatedChapters = [...completedchapters, chapterindex]

      await axios.put("/api/enroll-course", {
        courseId: courseId,
        completedchapters: updatedChapters,
      })

      toast.success("Chapter Marked as Completed")
      router.refresh()
    } catch (error) {
      console.error(error)
      toast.error("Failed to mark chapter as completed")
    } finally {
      setrefresh(false)
      setLoader(false)
    }
  }

  // --------------------------------------------------
  // MARK CHAPTER INCOMPLETE
  // --------------------------------------------------
  const markChapterInCompleted = async () => {
    setrefresh(true)
    setLoader(true)

    try {
      const updatedChapters = completedchapters.filter(
        (item) => item !== chapterindex
      )

      await axios.put("/api/enroll-course", {
        courseId: courseId,
        completedchapters: updatedChapters,
      })

      toast.success("Chapter Marked as Incomplete")
      router.refresh()
    } catch (error) {
      console.error(error)
      toast.error("Failed to update chapter")
    } finally {
      setrefresh(false)
      setLoader(false)
    }
  }

  // --------------------------------------------------
  // COPY CODE
  // --------------------------------------------------
  const copyCode = async (code, index ) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedIndex(index)
      toast.success("Code copied")

      setTimeout(() => {
        setCopiedIndex(null)
      }, 2000)
    } catch (error) {
      console.error(error)
      toast.error("Failed to copy code")
    }
  }

  useEffect(() => {
    GetCourseDetails()
  }, [refresh, courseId])

  // --------------------------------------------------
  // LOADING STATE
  // --------------------------------------------------
  if (!courseInfo || !currentChapter) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center p-4">
        <Loader2Icon className="animate-spin w-8 h-8 text-indigo-600" />
      </div>
    )
  }

  // --------------------------------------------------
  // MAIN VIEW
  // --------------------------------------------------
  return (
    <ScrollArea className="h-full w-full">
      <div className="w-full max-w-6xl mx-auto px-3 sm:px-6 md:px-8 py-4 sm:py-6 md:py-10">
        
        {/* ========================================= */}
        {/* CHAPTER HEADER */}
        {/* ========================================= */}
        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6">
            
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-indigo-600 font-semibold uppercase tracking-wider">
                <BookOpen className="w-4 h-4 shrink-0" />
                <span>
                  Chapter{" "}
                  {currentChapter?.chapterNumber ?? chapterindex + 1}
                </span>
              </div>

              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-snug">
                {currentChapter?.chapterTitle}
              </h1>

              <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl">
                {currentChapter?.chapterDescription}
              </p>
            </div>

            {/* COMPLETE BUTTON */}
            <div className="w-full sm:w-auto shrink-0 pt-1 md:pt-0">
              {!completedchapters?.includes(chapterindex) ? (
                <Button
                  disabled={loader}
                  onClick={markChapterCompleted}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 h-10 px-5 text-sm"
                >
                  {loader ? (
                    <Loader2Icon className="animate-spin w-4 h-4" />
                  ) : (
                    <CheckCircle className="w-4 h-4" />
                  )}
                  <span>Mark As Complete</span>
                </Button>
              ) : (
                <Button
                  disabled={loader}
                  onClick={markChapterInCompleted}
                  variant="outline"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 h-10 px-5 text-sm"
                >
                  {loader ? (
                    <Loader2Icon className="animate-spin w-4 h-4" />
                  ) : (
                    <X className="w-4 h-4" />
                  )}
                  <span>Mark as Incomplete</span>
                </Button>
              )}
            </div>

          </div>
        </div>

        {/* ========================================= */}
        {/* YOUTUBE VIDEOS */}
        {/* ========================================= */}
        {youtubeVideos?.length > 0 && (
          <section className="mt-8 sm:mt-10">
            <div className="flex items-center gap-2.5 mb-4 sm:mb-6">
              <div className="p-2 rounded-lg bg-red-500/10 shrink-0">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 fill-red-500" />
              </div>

              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
                  Recommended Tutorials
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Long-form videos to help you understand this chapter
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {youtubeVideos.slice(0, 2).map((video, index) => (
                <div
                  key={video?.videoId || index}
                  className="w-full overflow-hidden rounded-xl border bg-card shadow-sm"
                >
                  <div className="relative w-full aspect-video bg-black/5">
                    {video?.videoId ? (
                      <YouTube
                        videoId={video.videoId}
                        opts={{
                          width: "100%",
                          height: "100%",
                          playerVars: {
                            modestbranding: 1,
                            rel: 0,
                          },
                        }}
                        className="absolute top-0 left-0 w-full h-full"
                        iframeClassName="w-full h-full"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-muted">
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Video unavailable
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="p-3 sm:p-4">
                    <h3 className="font-semibold text-sm sm:text-base line-clamp-2 leading-snug">
                      {video?.title}
                    </h3>
                    {video?.channelTitle && (
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                        {video.channelTitle}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================= */}
        {/* COURSE CONTENT */}
        {/* ========================================= */}
        <section className="mt-8 sm:mt-12">
          <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
            <div className="p-2 rounded-lg bg-indigo-500/10 shrink-0">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" />
            </div>

            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
                Chapter Content
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Learn the concepts step by step
              </p>
            </div>
          </div>

          {/* SECTIONS */}
          <div className="flex flex-col gap-6 sm:gap-10">
            {sections?.map((section, index) => (
              <article
                key={section?.sectionNumber ?? index}
                className="w-full"
              >
                {/* SECTION HEADING */}
                <div className="mb-4 sm:mb-5">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-indigo-500/10 text-indigo-600 flex items-center justify-center font-semibold text-xs sm:text-sm">
                      {section?.sectionNumber ?? index + 1}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-xl md:text-2xl font-bold leading-snug break-words">
                        {section?.title}
                      </h3>

                      {section?.subtitle && (
                        <p className="mt-1 text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                          {section.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* THEORY */}
                {section?.theory && (
                  <div className="rounded-xl border bg-card p-4 sm:p-6 md:p-7 shadow-xs">
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                      <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 shrink-0" />
                      <h4 className="font-semibold text-xs sm:text-sm md:text-base">
                        Explanation
                      </h4>
                    </div>

                    <div className="text-xs sm:text-sm md:text-base leading-relaxed text-foreground whitespace-pre-line break-words">
                      {section.theory}
                    </div>
                  </div>
                )}

                {/* CODE EXAMPLE */}
                {section?.codeExample && (
                  <div className="mt-4 sm:mt-6 rounded-xl overflow-hidden border bg-[#1e1e1e] shadow-xs">
                    {/* CODE HEADER */}
                    <div className="flex flex-col xs:flex-row sm:items-center justify-between gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-[#1e1e1e] border-b border-white/10">
                      <div className="flex items-center gap-2 min-w-0">
                        <Code2 className="w-4 h-4 text-white/70 shrink-0" />
                        <span className="text-xs sm:text-sm text-white/80 font-medium truncate">
                          {section.codeExample.title}
                        </span>
                      </div>

                      <div className="flex items-center justify-between xs:justify-end gap-3 shrink-0">
                        <span className="text-[10px] sm:text-xs text-white/50 uppercase font-mono tracking-wider">
                          {section.codeExample.language}
                        </span>

                        <button
                          onClick={() =>
                            copyCode(section.codeExample.code, index)
                          }
                          className="flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors py-1 px-2 rounded bg-white/5 hover:bg-white/10"
                        >
                          {copiedIndex === index ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* CODE HIGHLIGHTER */}
                    <div className="overflow-x-auto">
                      <SyntaxHighlighter
                        language={section.codeExample.language || "javascript"}
                        style={vscDarkPlus}
                        customStyle={{
                          margin: 0,
                          borderRadius: 0,
                          padding: "16px",
                          fontSize: "13px",
                          lineHeight: "1.6",
                          minWidth: "100%",
                        }}
                        wrapLongLines={false}
                      >
                        {section.codeExample.code}
                      </SyntaxHighlighter>
                    </div>

                    {/* CODE EXPLANATION */}
                    {section?.codeExample?.explanation && (
                      <div className="bg-[#252526] border-t border-white/10 p-3 sm:p-5 text-xs sm:text-sm text-white/80 leading-relaxed">
                        {section.codeExample.explanation}
                      </div>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

      </div>
    </ScrollArea>
  )
}

export default ChapterContent