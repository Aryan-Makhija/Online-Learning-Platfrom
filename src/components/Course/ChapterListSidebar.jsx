

"use client"

import React, {
    useContext,
    useEffect,
    useState,
} from "react"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import axios from "axios"
import { useParams } from "next/navigation"

import {
    CheckCircle2,
    BookOpen,
    ChevronRight,
    Loader2,
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
} from "@/components/ui/sidebar"

import { SelectedChapterContext } from "@/Context/SelectedChapterContext"
import Image from "next/image"
import Link from "next/link"

const ChapterListSidebar = () => {

    const { courseId } = useParams()

    const [courseInfo, setCourseInfo] = useState()
    const [loading, setLoading] = useState(true)

    const {
        refresh,
        chapterindex,
        setchapterindex,
    } = useContext(SelectedChapterContext)

    // --------------------------------------------------
    // FETCH COURSE
    // --------------------------------------------------

    const GetCourseDetails = async () => {

        try {

            setLoading(true)

            const result = await axios.get(
                "/api/enroll-course?courseId=" + courseId
            )

            setCourseInfo(result.data)

        } catch (error) {

            console.error(
                "Failed to fetch course:",
                error
            )

        } finally {

            setLoading(false)

        }
    }

    useEffect(() => {

        if (courseId) {
            GetCourseDetails()
        }

    }, [courseId, refresh])


    // --------------------------------------------------
    // NEW COURSE STRUCTURE
    // --------------------------------------------------

    const course =
        courseInfo?.courses?.courseContent ?? []

    const completedchapters =
        courseInfo?.enrollCourse?.completedChapters ?? []


    const courseName =
        courseInfo?.courses?.name ||
        courseInfo?.courses?.courseJson?.courseTitle ||
        "Course"


    // --------------------------------------------------
    // SELECT CHAPTER
    // --------------------------------------------------

    const handleChapterClick = (index) => {

        setchapterindex(index)

    }


    return (

        <Sidebar className="border-r bg-background">

            {/* ================================================= */}
            {/* LOGO / HEADER */}
            {/* ================================================= */}

            <SidebarHeader className="border-b px-4 py-4">

                <Link
                    href="/workspace"
                    className="flex items-center gap-2"
                >

                    <Image
                        src="/newlogo.png"
                        width={42}
                        height={42}
                        alt="EduAI logo"
                        className="object-contain"
                    />

                    <div className="text-xl font-bold">
                        Edu
                        <span className="text-indigo-600">
                            AI
                        </span>
                    </div>

                </Link>

            </SidebarHeader>


            {/* ================================================= */}
            {/* COURSE INFORMATION */}
            {/* ================================================= */}

            <div className="border-b px-4 py-4">

                <div className="flex items-center gap-2 mb-2">

                    <BookOpen
                        className="w-4 h-4 text-indigo-600"
                    />

                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Course
                    </span>

                </div>

                <h2 className="font-semibold text-sm leading-5 line-clamp-2">
                    {courseName}
                </h2>

                <p className="text-xs text-muted-foreground mt-1">
                    {course.length}{" "}
                    {course.length === 1
                        ? "chapter"
                        : "chapters"}
                </p>

            </div>


            {/* ================================================= */}
            {/* CHAPTER HEADING */}
            {/* ================================================= */}

            <div className="px-4 pt-5 pb-2">

                <h3 className="text-sm font-semibold">
                    Course Content
                </h3>

                <p className="text-xs text-muted-foreground mt-1">
                    Select a chapter to continue learning
                </p>

            </div>


            {/* ================================================= */}
            {/* SIDEBAR CONTENT */}
            {/* ================================================= */}

            <SidebarContent className="px-3 pb-5">

                {loading ? (

                    <div className="flex items-center justify-center py-10">

                        <Loader2 className="w-5 h-5 animate-spin text-indigo-600" />

                    </div>

                ) : course.length === 0 ? (

                    <div className="text-center py-10 px-4">

                        <BookOpen className="w-8 h-8 mx-auto text-muted-foreground mb-3" />

                        <p className="text-sm font-medium">
                            No chapters available
                        </p>

                    </div>

                ) : (

                    <Accordion
                        type="single"
                        collapsible
                        value={
                            chapterindex !== undefined &&
                            chapterindex !== null
                                ? `chapter-${chapterindex}`
                                : undefined
                        }
                        className="space-y-2"
                    >

                        {course.map(
                            (chapter, idx) => {

                                const isActive =
                                    chapterindex === idx

                                const isCompleted =
                                    completedchapters.includes(
                                        idx
                                    )

                                const sections =
                                    chapter?.sections ?? []


                                return (

                                    <AccordionItem
                                        key={idx}
                                        value={`chapter-${idx}`}
                                        className="border-none"
                                    >

                                        {/* ================================= */}
                                        {/* CHAPTER */}
                                        {/* ================================= */}

                                        <AccordionTrigger
                                            onClick={() =>
                                                handleChapterClick(
                                                    idx
                                                )
                                            }
                                            className={`
                                                w-full
                                                rounded-xl
                                                px-3
                                                py-3
                                                hover:no-underline
                                                hover:bg-muted/70
                                                transition-all
                                                [&>svg]:shrink-0

                                                ${isActive
                                                    ? "bg-indigo-50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300"
                                                    : "bg-muted/40"
                                                }
                                            `}
                                        >

                                            <div className="flex items-start gap-3 text-left w-full min-w-0">

                                                {/* Chapter Number */}

                                                <div
                                                    className={`
                                                        shrink-0
                                                        w-7
                                                        h-7
                                                        rounded-lg
                                                        flex
                                                        items-center
                                                        justify-center
                                                        text-xs
                                                        font-semibold
                                                        mt-0.5

                                                        ${isCompleted
                                                            ? "bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-400"
                                                            : isActive
                                                                ? "bg-indigo-600 text-white"
                                                                : "bg-background border text-muted-foreground"
                                                        }
                                                    `}
                                                >

                                                    {isCompleted ? (

                                                        <CheckCircle2 className="w-4 h-4" />

                                                    ) : (

                                                        idx + 1

                                                    )}

                                                </div>


                                                {/* Chapter Info */}

                                                <div className="flex-1 min-w-0">

                                                    <p
                                                        className={`
                                                            text-sm
                                                            font-semibold
                                                            leading-5
                                                            break-words
                                                            whitespace-normal
                                                            pr-1

                                                            ${isActive
                                                                ? "text-indigo-700 dark:text-indigo-300"
                                                                : ""
                                                            }
                                                        `}
                                                    >
                                                        {chapter?.chapterTitle ||
                                                            `Chapter ${idx + 1}`}
                                                    </p>

                                                    <p className="text-[11px] text-muted-foreground mt-1">
                                                        {sections.length}{" "}
                                                        {sections.length ===
                                                        1
                                                            ? "section"
                                                            : "sections"}
                                                    </p>

                                                </div>

                                            </div>

                                        </AccordionTrigger>


                                        {/* ================================= */}
                                        {/* SECTIONS */}
                                        {/* ================================= */}

                                        <AccordionContent className="pb-1 pt-1">

                                            <div className="ml-4 pl-5 border-l-2 border-muted space-y-1">

                                                {sections.length >
                                                0 ? (

                                                    sections.map(
                                                        (
                                                            section,
                                                            sectionIndex
                                                        ) => (

                                                            <button
                                                                key={
                                                                    section?.sectionNumber ??
                                                                    sectionIndex
                                                                }
                                                                type="button"
                                                                onClick={() =>
                                                                    handleChapterClick(
                                                                        idx
                                                                    )
                                                                }
                                                                className="
                                                                    group
                                                                    w-full
                                                                    flex
                                                                    items-start
                                                                    gap-2
                                                                    rounded-lg
                                                                    px-3
                                                                    py-2
                                                                    text-left
                                                                    hover:bg-muted
                                                                    transition-colors
                                                                "
                                                            >

                                                                {/* Section Number */}

                                                                <span className="
                                                                    shrink-0
                                                                    text-[11px]
                                                                    font-medium
                                                                    text-muted-foreground
                                                                    pt-0.5
                                                                    w-5
                                                                ">
                                                                    {section?.sectionNumber ??
                                                                        sectionIndex +
                                                                            1}
                                                                </span>


                                                                {/* Section Title */}

                                                                <span className="
                                                                    flex-1
                                                                    min-w-0
                                                                    text-xs
                                                                    leading-5
                                                                    text-muted-foreground
                                                                    group-hover:text-foreground
                                                                    break-words
                                                                    whitespace-normal
                                                                ">

                                                                    {section?.title ||
                                                                        `Section ${sectionIndex + 1}`}

                                                                </span>


                                                                <ChevronRight
                                                                    className="
                                                                        shrink-0
                                                                        w-3.5
                                                                        h-3.5
                                                                        text-muted-foreground
                                                                        opacity-0
                                                                        group-hover:opacity-100
                                                                        transition-opacity
                                                                        mt-1
                                                                    "
                                                                />

                                                            </button>

                                                        )
                                                    )

                                                ) : (

                                                    <p className="text-xs text-muted-foreground px-3 py-2">
                                                        No sections available
                                                    </p>

                                                )}

                                            </div>

                                        </AccordionContent>

                                    </AccordionItem>

                                )
                            }
                        )}

                    </Accordion>

                )}

            </SidebarContent>

        </Sidebar>
    )
}

export default ChapterListSidebar