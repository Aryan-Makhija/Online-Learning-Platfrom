"use client"

import React, {
    useEffect,
    useMemo,
    useState,
} from "react"

import axios from "axios"
import YouTube from "react-youtube"

import {
    BookOpen,
    ChevronDown,
    ChevronRight,
    Menu,
    X,
    Code,
    CheckCircle,
    Circle,
    Search,
    Copy,
    Check,
    Bookmark,
    Lightbulb,
    ArrowLeft,
    ArrowRight,
    FileText,
    Play,
    Loader2,
    ExternalLink,
} from "lucide-react"

import { useParams } from "next/navigation"

import {
    Prism as SyntaxHighlighter,
} from "react-syntax-highlighter"

import {
    vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism"

import { toast } from "sonner"


export default function CourseNotesPage() {

    const { courseId } = useParams()

    // =====================================================
    // STATE
    // =====================================================

    const [courseInfo, setCourseInfo] = useState(null)

    const [loading, setLoading] = useState(true)

    const [sidebarOpen, setSidebarOpen] =
        useState(true)

    const [expandedChapters, setExpandedChapters] =
        useState({})

    const [activeChapterIndex, setActiveChapterIndex] =
        useState(0)

    const [activeSectionIndex, setActiveSectionIndex] =
        useState(0)

    const [searchQuery, setSearchQuery] =
        useState("")

    const [copiedCode, setCopiedCode] =
        useState(false)

    const [showVideos, setShowVideos] =
        useState(false)

    const [completedChapters, setCompletedChapters] =
        useState([])


    // =====================================================
    // FETCH COURSE
    // =====================================================

    const getCourseDetails = async () => {

        try {

            setLoading(true)

            const result = await axios.get(
                "/api/enroll-course?courseId=" +
                courseId
            )

            setCourseInfo(result.data)

            const completed =
                result.data?.enrollCourse
                    ?.completedChapters ?? []

            setCompletedChapters(completed)

        } catch (error) {

            console.error(
                "Failed to fetch course:",
                error
            )

            toast.error(
                "Failed to load course"
            )

        } finally {

            setLoading(false)

        }
    }


    useEffect(() => {

        if (courseId) {
            getCourseDetails()
        }

    }, [courseId])


    // =====================================================
    // COURSE DATA
    // =====================================================

    const course =
        courseInfo?.courses?.courseContent ?? []


    const courseName =
        courseInfo?.courses?.name ||
        courseInfo?.courses?.courseJson
            ?.courseTitle ||
        "Course"


    const courseDescription =
        courseInfo?.courses?.description ||
        ""


    // =====================================================
    // CURRENT CHAPTER
    // =====================================================

    const currentChapter =
        course?.[activeChapterIndex]


    const sections =
        currentChapter?.sections ?? []


    const currentSection =
        sections?.[activeSectionIndex]


    const youtubeVideos =
        currentChapter?.youtubeVideos ?? []


    // =====================================================
    // PROGRESS
    // =====================================================

    const totalChapters =
        course.length

    const completedCount =
        completedChapters.length

    const progressPercent =
        totalChapters > 0
            ? Math.round(
                (completedCount /
                    totalChapters) *
                100
            )
            : 0


    // =====================================================
    // EXPAND CHAPTER
    // =====================================================

    const toggleChapter = (index) => {

        setExpandedChapters((prev) => ({
            ...prev,
            [index]: !prev[index],
        }))

    }


    // =====================================================
    // SELECT CHAPTER
    // =====================================================

    const selectChapter = (index) => {

        setActiveChapterIndex(index)

        setActiveSectionIndex(0)

        setShowVideos(false)

        setExpandedChapters((prev) => ({
            ...prev,
            [index]: true,
        }))

    }


    // =====================================================
    // SELECT SECTION
    // =====================================================

    const selectSection = (
        chapterIndex,
        sectionIndex
    ) => {

        setActiveChapterIndex(
            chapterIndex
        )

        setActiveSectionIndex(
            sectionIndex
        )

        setShowVideos(false)

        setExpandedChapters((prev) => ({
            ...prev,
            [chapterIndex]: true,
        }))

        // Close sidebar on mobile
        if (
            typeof window !== "undefined" &&
            window.innerWidth < 768
        ) {
            setSidebarOpen(false)
        }

    }


    // =====================================================
    // COPY CODE
    // =====================================================

    const handleCopyCode = async (
        codeText
    ) => {

        try {

            await navigator.clipboard.writeText(
                codeText
            )

            setCopiedCode(true)

            toast.success(
                "Code copied to clipboard"
            )

            setTimeout(() => {
                setCopiedCode(false)
            }, 2000)

        } catch (error) {

            console.error(error)

            toast.error(
                "Failed to copy code"
            )

        }

    }


    // =====================================================
    // COMPLETE CHAPTER
    // =====================================================

    const markChapterCompleted =
        async () => {

            if (
                completedChapters.includes(
                    activeChapterIndex
                )
            ) {
                return
            }

            try {

                const updatedChapters = [
                    ...completedChapters,
                    activeChapterIndex,
                ]

                await axios.put(
                    "/api/enroll-course",
                    {
                        courseId,
                        completedchapters:
                            updatedChapters,
                    }
                )

                setCompletedChapters(
                    updatedChapters
                )

                toast.success(
                    "Chapter completed"
                )

            } catch (error) {

                console.error(error)

                toast.error(
                    "Failed to mark chapter complete"
                )

            }

        }


    // =====================================================
    // UNCOMPLETE CHAPTER
    // =====================================================

    const markChapterIncomplete =
        async () => {

            try {

                const updatedChapters =
                    completedChapters.filter(
                        (item) =>
                            item !==
                            activeChapterIndex
                    )

                await axios.put(
                    "/api/enroll-course",
                    {
                        courseId,
                        completedchapters:
                            updatedChapters,
                    }
                )

                setCompletedChapters(
                    updatedChapters
                )

                toast.success(
                    "Chapter marked incomplete"
                )

            } catch (error) {

                console.error(error)

                toast.error(
                    "Failed to update chapter"
                )

            }

        }


    // =====================================================
    // SEARCH CHAPTERS / SECTIONS
    // =====================================================

    const filteredChapters =
        useMemo(() => {

            if (!searchQuery.trim()) {
                return course
            }

            const query =
                searchQuery
                    .toLowerCase()
                    .trim()

            return course.filter(
                (chapter) => {

                    const chapterMatch =
                        chapter?.chapterTitle
                            ?.toLowerCase()
                            .includes(query)

                    const sectionMatch =
                        chapter?.sections?.some(
                            (section) =>
                                section?.title
                                    ?.toLowerCase()
                                    .includes(
                                        query
                                    )
                        )

                    return (
                        chapterMatch ||
                        sectionMatch
                    )
                }
            )

        }, [course, searchQuery])


    // =====================================================
    // NEXT SECTION / CHAPTER
    // =====================================================

    const goNext = () => {

        if (
            activeSectionIndex <
            sections.length - 1
        ) {

            setActiveSectionIndex(
                activeSectionIndex + 1
            )

            return
        }


        if (
            activeChapterIndex <
            course.length - 1
        ) {

            const nextChapter =
                activeChapterIndex + 1

            setActiveChapterIndex(
                nextChapter
            )

            setActiveSectionIndex(0)

            setExpandedChapters(
                (prev) => ({
                    ...prev,
                    [nextChapter]: true,
                })
            )

            setShowVideos(false)
        }

    }


    // =====================================================
    // PREVIOUS SECTION / CHAPTER
    // =====================================================

    const goPrevious = () => {

        if (
            activeSectionIndex > 0
        ) {

            setActiveSectionIndex(
                activeSectionIndex - 1
            )

            return
        }


        if (
            activeChapterIndex > 0
        ) {

            const previousChapter =
                activeChapterIndex - 1

            const previousSections =
                course?.[
                    previousChapter
                ]?.sections ?? []

            setActiveChapterIndex(
                previousChapter
            )

            setActiveSectionIndex(
                Math.max(
                    previousSections.length - 1,
                    0
                )
            )

            setExpandedChapters(
                (prev) => ({
                    ...prev,
                    [previousChapter]: true,
                })
            )

            setShowVideos(false)
        }

    }


    // =====================================================
    // LOADING
    // =====================================================

    if (loading) {

        return (

            <div className="
                min-h-screen
                flex
                items-center
                justify-center
                bg-[#FBF9F5]
            ">

                <div className="
                    flex
                    flex-col
                    items-center
                    gap-3
                    text-slate-600
                ">

                    <Loader2
                        className="
                            w-7
                            h-7
                            animate-spin
                            text-amber-600
                        "
                    />

                    <p className="text-sm">
                        Loading course...
                    </p>

                </div>

            </div>

        )
    }


    // =====================================================
    // NO COURSE
    // =====================================================

    if (!currentChapter) {

        return (

            <div className="
                min-h-screen
                flex
                items-center
                justify-center
                bg-[#FBF9F5]
            ">

                <div className="text-center">

                    <BookOpen
                        className="
                            mx-auto
                            mb-3
                            w-10
                            h-10
                            text-slate-400
                        "
                    />

                    <h2 className="
                        text-lg
                        font-bold
                    ">
                        Course not found
                    </h2>

                    <p className="
                        text-sm
                        text-slate-500
                        mt-1
                    ">
                        Unable to load this course.
                    </p>

                </div>

            </div>

        )
    }


    return (

        <div className="
            min-h-screen
            bg-[#FBF9F5]
            text-slate-800
            flex
            flex-col
            font-sans
            selection:bg-amber-200
        ">


            {/* ================================================= */}
            {/* TOP HEADER */}
            {/* ================================================= */}

            <header className="
                h-16
                bg-white
                border-b
                border-amber-200/60
                px-4
                md:px-6
                flex
                items-center
                justify-between
                sticky
                top-0
                z-30
                shadow-sm
            ">

                <div className="
                    flex
                    items-center
                    gap-3
                    min-w-0
                ">

                    <button
                        onClick={() =>
                            setSidebarOpen(
                                !sidebarOpen
                            )
                        }
                        className="
                            p-2
                            rounded-lg
                            text-slate-600
                            hover:bg-amber-50
                            hover:text-amber-900
                            transition-colors
                            shrink-0
                        "
                        title="Toggle Sidebar"
                    >

                        {sidebarOpen ? (
                            <X size={20} />
                        ) : (
                            <Menu size={20} />
                        )}

                    </button>


                    <div className="
                        flex
                        items-center
                        gap-2
                        min-w-0
                    ">

                        <span className="
                            p-1.5
                            bg-amber-100
                            text-amber-800
                            rounded-md
                            shrink-0
                        ">
                            <BookOpen size={18} />
                        </span>


                        <div className="min-w-0">

                            <h1 className="
                                font-bold
                                text-slate-900
                                text-base
                                leading-tight
                                md:text-lg
                                truncate
                            ">
                                {courseName}
                            </h1>

                            <p className="
                                text-xs
                                text-slate-500
                                hidden
                                sm:block
                                truncate
                            ">
                                {courseDescription ||
                                    "Interactive Study Guide & Code Learning"}
                            </p>

                        </div>

                    </div>

                </div>


                {/* PROGRESS */}

                <div className="
                    flex
                    items-center
                    gap-4
                    shrink-0
                ">

                    <div className="
                        hidden
                        sm:flex
                        flex-col
                        items-end
                    ">

                        <span className="
                            text-xs
                            font-semibold
                            text-slate-600
                        ">
                            Course Completion:{" "}
                            {progressPercent}%
                        </span>

                        <div className="
                            w-32
                            bg-amber-100
                            rounded-full
                            h-2
                            mt-1
                            overflow-hidden
                        ">

                            <div
                                className="
                                    bg-amber-600
                                    h-full
                                    rounded-full
                                    transition-all
                                    duration-300
                                "
                                style={{
                                    width:
                                        `${progressPercent}%`,
                                }}
                            />

                        </div>

                    </div>


                    <button
                        className="
                            flex
                            items-center
                            gap-1.5
                            px-3
                            py-1.5
                            text-xs
                            font-medium
                            bg-amber-100
                            text-amber-900
                            rounded-md
                            hover:bg-amber-200
                            transition-colors
                        "
                    >

                        <Bookmark size={14} />

                        <span className="
                            hidden
                            xs:inline
                        ">
                            Bookmark
                        </span>

                    </button>

                </div>

            </header>


            {/* ================================================= */}
            {/* MAIN */}
            {/* ================================================= */}

            <div className="
                flex
                flex-1
                relative
                overflow-hidden
            ">


                {/* ================================================= */}
                {/* SIDEBAR */}
                {/* ================================================= */}

                <aside
                    className={`
                        fixed
                        md:static
                        inset-y-16
                        left-0
                        z-20
                        w-80
                        bg-[#FAF7F2]
                        border-r
                        border-amber-200/70
                        flex
                        flex-col
                        transition-transform
                        duration-300
                        ease-in-out

                        ${
                            sidebarOpen
                                ? "translate-x-0"
                                : "-translate-x-full md:translate-x-0 md:w-0 md:overflow-hidden md:border-none"
                        }
                    `}
                >


                    {/* SEARCH */}

                    <div className="
                        p-4
                        border-b
                        border-amber-200/50
                    ">

                        <div className="relative">

                            <Search
                                className="
                                    absolute
                                    left-3
                                    top-2.5
                                    text-slate-400
                                "
                                size={16}
                            />

                            <input
                                type="text"
                                placeholder="
                                    Search chapters or sections...
                                "
                                value={
                                    searchQuery
                                }
                                onChange={(e) =>
                                    setSearchQuery(
                                        e.target.value
                                    )
                                }
                                className="
                                    w-full
                                    pl-9
                                    pr-3
                                    py-2
                                    text-sm
                                    bg-white
                                    border
                                    border-amber-200
                                    rounded-lg
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-amber-500/50
                                    placeholder:text-slate-400
                                "
                            />

                        </div>

                    </div>


                    {/* CHAPTERS */}

                    <div className="
                        flex-1
                        overflow-y-auto
                        p-4
                        space-y-4
                        text-sm
                    ">

                        {filteredChapters.map(
                            (chapter) => {

                                const originalIndex =
                                    course.indexOf(
                                        chapter
                                    )

                                const isExpanded =
                                    expandedChapters[
                                        originalIndex
                                    ]

                                const isActiveChapter =
                                    activeChapterIndex ===
                                    originalIndex

                                const isCompleted =
                                    completedChapters.includes(
                                        originalIndex
                                    )

                                const chapterSections =
                                    chapter?.sections ??
                                    []


                                return (

                                    <div
                                        key={
                                            originalIndex
                                        }
                                        className="
                                            bg-white/80
                                            rounded-xl
                                            border
                                            border-amber-200/60
                                            overflow-hidden
                                            shadow-sm
                                        "
                                    >


                                        {/* CHAPTER HEADER */}

                                        <button
                                            onClick={() => {

                                                toggleChapter(
                                                    originalIndex
                                                )

                                                selectChapter(
                                                    originalIndex
                                                )

                                            }}
                                            className={`
                                                w-full
                                                px-3.5
                                                py-3
                                                flex
                                                items-center
                                                justify-between
                                                text-left
                                                font-semibold
                                                transition-colors

                                                ${
                                                    isActiveChapter
                                                        ? "bg-amber-100/70 text-amber-900"
                                                        : "text-slate-800 hover:bg-amber-50/60"
                                                }
                                            `}
                                        >

                                            <div className="
                                                flex
                                                items-start
                                                gap-2.5
                                                min-w-0
                                            ">

                                                {isCompleted ? (

                                                    <CheckCircle
                                                        size={17}
                                                        className="
                                                            text-emerald-600
                                                            shrink-0
                                                            mt-0.5
                                                        "
                                                    />

                                                ) : (

                                                    <span className="
                                                        w-[17px]
                                                        h-[17px]
                                                        rounded-full
                                                        border-2
                                                        border-slate-300
                                                        shrink-0
                                                        mt-0.5
                                                    " />

                                                )}


                                                <span className="
                                                    break-words
                                                    leading-5
                                                    pr-2
                                                ">

                                                    {chapter?.chapterNumber ??
                                                        originalIndex +
                                                        1}
                                                    .{" "}
                                                    {
                                                        chapter?.chapterTitle
                                                    }

                                                </span>

                                            </div>


                                            <span className="
                                                text-slate-400
                                                shrink-0
                                            ">

                                                {isExpanded ? (

                                                    <ChevronDown
                                                        size={16}
                                                    />

                                                ) : (

                                                    <ChevronRight
                                                        size={16}
                                                    />

                                                )}

                                            </span>

                                        </button>


                                        {/* SECTIONS */}

                                        {(isExpanded ||
                                            searchQuery) && (

                                            <div className="
                                                border-t
                                                border-amber-100
                                                bg-amber-50/20
                                                py-1
                                            ">

                                                {chapterSections.map(
                                                    (
                                                        section,
                                                        sectionIndex
                                                    ) => {

                                                        const isActive =
                                                            isActiveChapter &&
                                                            activeSectionIndex ===
                                                            sectionIndex

                                                        const sectionMatches =
                                                            !searchQuery ||
                                                            section?.title
                                                                ?.toLowerCase()
                                                                .includes(
                                                                    searchQuery.toLowerCase()
                                                                )

                                                        if (
                                                            !sectionMatches
                                                        ) {
                                                            return null
                                                        }


                                                        return (

                                                            <button
                                                                key={
                                                                    section?.sectionNumber ??
                                                                    sectionIndex
                                                                }
                                                                onClick={() =>
                                                                    selectSection(
                                                                        originalIndex,
                                                                        sectionIndex
                                                                    )
                                                                }
                                                                className={`
                                                                    w-full
                                                                    flex
                                                                    items-start
                                                                    gap-2
                                                                    px-4
                                                                    py-2.5
                                                                    text-left
                                                                    transition-colors

                                                                    ${
                                                                        isActive
                                                                            ? "bg-amber-100 text-amber-900 border-l-4 border-amber-600 pl-3"
                                                                            : "text-slate-600 hover:bg-amber-50 hover:text-slate-900"
                                                                    }
                                                                `}
                                                            >

                                                                <span className="
                                                                    text-[10px]
                                                                    font-mono
                                                                    text-slate-400
                                                                    mt-1
                                                                    shrink-0
                                                                ">
                                                                    {section?.sectionNumber ??
                                                                        sectionIndex +
                                                                        1}
                                                                </span>


                                                                <span className="
                                                                    text-xs
                                                                    md:text-sm
                                                                    leading-5
                                                                    break-words
                                                                ">

                                                                    {
                                                                        section?.title
                                                                    }

                                                                </span>

                                                            </button>

                                                        )

                                                    }
                                                )}

                                            </div>

                                        )}

                                    </div>

                                )

                            }
                        )}

                    </div>


                    {/* SIDEBAR FOOTER */}

                    <div className="
                        p-3
                        border-t
                        border-amber-200/60
                        bg-amber-100/40
                        text-center
                    ">

                        <p className="
                            text-[11px]
                            text-amber-900/70
                            font-medium
                        ">
                            💡 Follow the sections
                            step by step to complete
                            the course.
                        </p>

                    </div>

                </aside>


                {/* ================================================= */}
                {/* MAIN CONTENT */}
                {/* ================================================= */}

                <main className="
                    flex-1
                    overflow-y-auto
                    px-4
                    md:px-12
                    py-8
                ">

                    <div className="
                        max-w-4xl
                        mx-auto
                    ">


                        {/* ================================================= */}
                        {/* BREADCRUMB */}
                        {/* ================================================= */}

                        <div className="
                            mb-6
                            flex
                            flex-wrap
                            items-center
                            justify-between
                            gap-3
                            border-b
                            border-amber-200/60
                            pb-3
                        ">

                            <div className="
                                flex
                                items-center
                                gap-2
                                text-xs
                                font-semibold
                                text-amber-800
                                tracking-wide
                                uppercase
                            ">

                                <FileText
                                    size={14}
                                />

                                <span>
                                    Chapter{" "}
                                    {
                                        currentChapter?.chapterNumber ??
                                        activeChapterIndex +
                                        1
                                    }
                                </span>

                            </div>


                            <div className="
                                flex
                                items-center
                                gap-3
                                text-xs
                                text-slate-500
                            ">

                                <span className="
                                    bg-amber-100
                                    text-amber-900
                                    px-2
                                    py-0.5
                                    rounded
                                    font-medium
                                ">
                                    {sections.length}{" "}
                                    sections
                                </span>

                            </div>

                        </div>


                        {/* ================================================= */}
                        {/* PAPER CARD */}
                        {/* ================================================= */}

                        <article className="
                            bg-white
                            rounded-2xl
                            shadow-sm
                            border
                            border-amber-200/80
                            p-6
                            md:p-10
                            relative
                            overflow-hidden
                        ">


                            {/* NOTEBOOK RED LINE */}

                            <div className="
                                absolute
                                left-6
                                md:left-8
                                top-0
                                bottom-0
                                w-0.5
                                bg-red-200/60
                                pointer-events-none
                                hidden
                                sm:block
                            " />


                            <div className="
                                sm:pl-6
                            ">


                                {/* ================================================= */}
                                {/* CHAPTER TITLE */}
                                {/* ================================================= */}

                                <h1 className="
                                    text-2xl
                                    md:text-3xl
                                    font-extrabold
                                    text-slate-900
                                    mb-3
                                    tracking-tight
                                    font-serif
                                ">

                                    {
                                        currentChapter?.chapterTitle
                                    }

                                </h1>


                                {/* CHAPTER DESCRIPTION */}

                                {currentChapter
                                    ?.chapterDescription && (

                                    <p className="
                                        text-slate-600
                                        text-sm
                                        md:text-base
                                        mb-8
                                        italic
                                        bg-amber-50/50
                                        p-3
                                        rounded-lg
                                        border-l-2
                                        border-amber-400
                                    ">
                                        "
                                        {
                                            currentChapter.chapterDescription
                                        }
                                        "
                                    </p>

                                )}


                                {/* ================================================= */}
                                {/* YOUTUBE SECTION TOGGLE */}
                                {/* ================================================= */}

                                {youtubeVideos.length >
                                    0 && (

                                    <div className="
                                        mb-8
                                        rounded-xl
                                        border
                                        border-red-200
                                        overflow-hidden
                                        bg-red-50/40
                                    ">


                                        {/* VIDEO BUTTON */}

                                        <button
                                            onClick={() =>
                                                setShowVideos(
                                                    !showVideos
                                                )
                                            }
                                            className="
                                                w-full
                                                px-4
                                                py-3.5
                                                flex
                                                items-center
                                                justify-between
                                                hover:bg-red-50
                                                transition-colors
                                            "
                                        >

                                            <div className="
                                                flex
                                                items-center
                                                gap-3
                                            ">

                                                <div className="
                                                    p-2
                                                    rounded-lg
                                                    bg-red-100
                                                    text-red-600
                                                ">

                                                    <Play
                                                        size={17}
                                                        className="
                                                            fill-red-600
                                                        "
                                                    />

                                                </div>


                                                <div className="
                                                    text-left
                                                ">

                                                    <p className="
                                                        font-semibold
                                                        text-sm
                                                        text-slate-800
                                                    ">
                                                        Recommended
                                                        Tutorials
                                                    </p>

                                                    <p className="
                                                        text-xs
                                                        text-slate-500
                                                        mt-0.5
                                                    ">
                                                        {
                                                            youtubeVideos.length
                                                        }{" "}
                                                        long-form
                                                        videos
                                                    </p>

                                                </div>

                                            </div>


                                            {showVideos ? (

                                                <ChevronDown
                                                    size={18}
                                                    className="
                                                        text-slate-400
                                                    "
                                                />

                                            ) : (

                                                <ChevronRight
                                                    size={18}
                                                    className="
                                                        text-slate-400
                                                    "
                                                />

                                            )}

                                        </button>


                                        {/* VIDEO CONTENT */}

                                        {showVideos && (

                                            <div className="
                                                border-t
                                                border-red-200
                                                p-4
                                                bg-white
                                            ">

                                                <div className="
                                                    grid
                                                    grid-cols-1
                                                    md:grid-cols-2
                                                    gap-5
                                                ">

                                                    {youtubeVideos
                                                        .map(
                                                            (
                                                                video,
                                                                videoIndex
                                                            ) => (

                                                                <div
                                                                    key={
                                                                        video?.videoId ||
                                                                        videoIndex
                                                                    }
                                                                    className="
                                                                        rounded-xl
                                                                        overflow-hidden
                                                                        border
                                                                        border-slate-200
                                                                        bg-white
                                                                        shadow-sm
                                                                    "
                                                                >

                                                                    {video?.videoId ? (

                                                                        <div className="
                                                                            relative
                                                                            w-full
                                                                            aspect-video
                                                                            bg-black
                                                                        ">

                                                                            <YouTube
                                                                                videoId={
                                                                                    video.videoId
                                                                                }
                                                                                opts={{
                                                                                    width: "100%",
                                                                                    height: "100%",
                                                                                    playerVars: {
                                                                                        modestbranding: 1,
                                                                                        rel: 0,
                                                                                    },
                                                                                }}
                                                                                className="
                                                                                    absolute
                                                                                    inset-0
                                                                                    w-full
                                                                                    h-full
                                                                                "
                                                                                iframeClassName="
                                                                                    w-full
                                                                                    h-full
                                                                                "
                                                                            />

                                                                        </div>

                                                                    ) : (

                                                                        <div className="
                                                                            aspect-video
                                                                            flex
                                                                            items-center
                                                                            justify-center
                                                                            bg-slate-100
                                                                            text-sm
                                                                            text-slate-500
                                                                        ">
                                                                            Video
                                                                            unavailable
                                                                        </div>

                                                                    )}


                                                                    <div className="
                                                                        p-3
                                                                    ">

                                                                        <p className="
                                                                            text-sm
                                                                            font-semibold
                                                                            text-slate-800
                                                                            line-clamp-2
                                                                        ">
                                                                            {
                                                                                video?.title
                                                                            }
                                                                        </p>


                                                                        {video?.channelTitle && (

                                                                            <p className="
                                                                                text-xs
                                                                                text-slate-500
                                                                                mt-1
                                                                            ">
                                                                                {
                                                                                    video.channelTitle
                                                                                }
                                                                            </p>

                                                                        )}

                                                                    </div>

                                                                </div>

                                                            )
                                                        )}

                                                </div>

                                            </div>

                                        )}

                                    </div>

                                )}


                                {/* ================================================= */}
                                {/* CURRENT SECTION */}
                                {/* ================================================= */}

                                {currentSection && (

                                    <div className="
                                        space-y-6
                                    ">


                                        {/* SECTION TITLE */}

                                        <div>

                                            <div className="
                                                flex
                                                items-center
                                                gap-2
                                                mb-2
                                            ">

                                                <span className="
                                                    text-xs
                                                    font-semibold
                                                    uppercase
                                                    tracking-wider
                                                    text-amber-700
                                                    bg-amber-100
                                                    px-2
                                                    py-1
                                                    rounded
                                                ">
                                                    Section{" "}
                                                    {
                                                        currentSection?.sectionNumber ??
                                                        activeSectionIndex +
                                                        1
                                                    }
                                                </span>

                                            </div>


                                            <h2 className="
                                                text-2xl
                                                md:text-3xl
                                                font-extrabold
                                                text-slate-900
                                                tracking-tight
                                                font-serif
                                            ">
                                                {
                                                    currentSection?.title
                                                }
                                            </h2>


                                            {currentSection
                                                ?.subtitle && (

                                                <p className="
                                                    mt-2
                                                    text-sm
                                                    md:text-base
                                                    text-slate-500
                                                    italic
                                                ">
                                                    {
                                                        currentSection.subtitle
                                                    }
                                                </p>

                                            )}

                                        </div>


                                        {/* ================================================= */}
                                        {/* THEORY */}
                                        {/* ================================================= */}

                                        {currentSection
                                            ?.theory && (

                                            <div className="
                                                space-y-3
                                            ">

                                                <h3 className="
                                                    text-lg
                                                    font-bold
                                                    text-slate-800
                                                    flex
                                                    items-center
                                                    gap-2
                                                ">

                                                    <FileText
                                                        size={18}
                                                        className="
                                                            text-amber-600
                                                        "
                                                    />

                                                    Explanation

                                                </h3>


                                                <div className="
                                                    text-slate-700
                                                    leading-relaxed
                                                    text-sm
                                                    md:text-base
                                                    whitespace-pre-line
                                                ">
                                                    {
                                                        currentSection.theory
                                                    }
                                                </div>

                                            </div>

                                        )}


                                        {/* ================================================= */}
                                        {/* CODE */}
                                        {/* ================================================= */}

                                        {currentSection
                                            ?.codeExample && (

                                            <div className="
                                                my-8
                                                rounded-xl
                                                overflow-hidden
                                                border
                                                border-slate-800
                                                bg-slate-900
                                                shadow-md
                                            ">


                                                {/* CODE HEADER */}

                                                <div className="
                                                    bg-slate-800/90
                                                    px-4
                                                    py-2.5
                                                    flex
                                                    items-center
                                                    justify-between
                                                    gap-3
                                                    text-slate-300
                                                    text-xs
                                                    font-mono
                                                    border-b
                                                    border-slate-700
                                                ">

                                                    <div className="
                                                        flex
                                                        items-center
                                                        gap-2
                                                        min-w-0
                                                    ">

                                                        <Code
                                                            size={14}
                                                            className="
                                                                text-amber-400
                                                                shrink-0
                                                            "
                                                        />

                                                        <span className="
                                                            truncate
                                                        ">
                                                            {
                                                                currentSection
                                                                    .codeExample
                                                                    .title
                                                            }
                                                        </span>

                                                    </div>


                                                    <div className="
                                                        flex
                                                        items-center
                                                        gap-3
                                                        shrink-0
                                                    ">

                                                        <span className="
                                                            text-[10px]
                                                            uppercase
                                                            text-slate-400
                                                        ">
                                                            {
                                                                currentSection
                                                                    .codeExample
                                                                    .language
                                                            }
                                                        </span>


                                                        <button
                                                            onClick={() =>
                                                                handleCopyCode(
                                                                    currentSection
                                                                        .codeExample
                                                                        .code
                                                                )
                                                            }
                                                            className="
                                                                flex
                                                                items-center
                                                                gap-1
                                                                text-xs
                                                                text-slate-300
                                                                hover:text-white
                                                                transition-colors
                                                                bg-slate-700
                                                                px-2
                                                                py-1
                                                                rounded
                                                            "
                                                        >

                                                            {copiedCode ? (

                                                                <>

                                                                    <Check
                                                                        size={13}
                                                                        className="
                                                                            text-emerald-400
                                                                        "
                                                                    />

                                                                    Copied!

                                                                </>

                                                            ) : (

                                                                <>

                                                                    <Copy
                                                                        size={13}
                                                                    />

                                                                    Copy Code

                                                                </>

                                                            )}

                                                        </button>

                                                    </div>

                                                </div>


                                                {/* SYNTAX HIGHLIGHTER */}

                                                <div className="
                                                    overflow-x-auto
                                                ">

                                                    <SyntaxHighlighter
                                                        language={
                                                            currentSection
                                                                .codeExample
                                                                .language
                                                        }
                                                        style={
                                                            vscDarkPlus
                                                        }
                                                        customStyle={{
                                                            margin: 0,
                                                            padding:
                                                                "20px",
                                                            fontSize:
                                                                "13px",
                                                            lineHeight:
                                                                "1.7",
                                                            background:
                                                                "#0f172a",
                                                            minWidth:
                                                                "100%",
                                                        }}
                                                        wrapLongLines={
                                                            false
                                                        }
                                                    >

                                                        {
                                                            currentSection
                                                                .codeExample
                                                                .code
                                                        }

                                                    </SyntaxHighlighter>

                                                </div>


                                                {/* CODE EXPLANATION */}

                                                {currentSection
                                                    .codeExample
                                                    ?.explanation && (

                                                    <div className="
                                                        p-4
                                                        md:p-5
                                                        bg-slate-800
                                                        border-t
                                                        border-slate-700
                                                    ">

                                                        <div className="
                                                            flex
                                                            items-center
                                                            gap-2
                                                            mb-2
                                                        ">

                                                            <Lightbulb
                                                                size={15}
                                                                className="
                                                                    text-amber-400
                                                                "
                                                            />

                                                            <span className="
                                                                text-xs
                                                                font-bold
                                                                text-slate-200
                                                                uppercase
                                                                tracking-wide
                                                            ">
                                                                Code
                                                                Explanation
                                                            </span>

                                                        </div>


                                                        <p className="
                                                            text-sm
                                                            leading-6
                                                            text-slate-300
                                                        ">
                                                            {
                                                                currentSection
                                                                    .codeExample
                                                                    .explanation
                                                            }
                                                        </p>

                                                    </div>

                                                )}

                                            </div>

                                        )}


                                        {/* ================================================= */}
                                        {/* SECTION TAKEAWAY */}
                                        {/* ================================================= */}

                                        <div className="
                                            mt-8
                                            pt-6
                                            border-t
                                            border-slate-100
                                        ">

                                            <h3 className="
                                                text-base
                                                font-bold
                                                text-slate-900
                                                mb-3
                                                flex
                                                items-center
                                                gap-2
                                            ">

                                                <span className="
                                                    text-amber-600
                                                ">
                                                    📝
                                                </span>

                                                Key Concept

                                            </h3>


                                            <div className="
                                                flex
                                                items-start
                                                gap-2
                                                text-sm
                                                text-slate-700
                                            ">

                                                <span className="
                                                    text-emerald-500
                                                    font-bold
                                                ">
                                                    ✓
                                                </span>

                                                <span>
                                                    Focus on understanding{" "}
                                                    {
                                                        currentSection.title
                                                    }{" "}
                                                    before moving to the
                                                    next section.
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                )}

                            </div>

                        </article>


                        {/* ================================================= */}
                        {/* NAVIGATION */}
                        {/* ================================================= */}

                        <div className="
                            mt-8
                            flex
                            items-center
                            justify-between
                            gap-4
                        ">


                            {/* PREVIOUS */}

                            <button
                                onClick={
                                    goPrevious
                                }
                                disabled={
                                    activeChapterIndex ===
                                        0 &&
                                    activeSectionIndex ===
                                        0
                                }
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    px-4
                                    py-2
                                    text-xs
                                    md:text-sm
                                    font-semibold
                                    bg-white
                                    border
                                    border-amber-200
                                    text-slate-700
                                    rounded-xl
                                    hover:bg-amber-50
                                    transition-colors
                                    disabled:opacity-40
                                    disabled:cursor-not-allowed
                                "
                            >

                                <ArrowLeft
                                    size={16}
                                />

                                <span>
                                    Previous
                                </span>

                            </button>


                            {/* COMPLETE */}

                            <div>

                                {!completedChapters.includes(
                                    activeChapterIndex
                                ) ? (

                                    <button
                                        onClick={
                                            markChapterCompleted
                                        }
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            px-4
                                            py-2
                                            text-xs
                                            md:text-sm
                                            font-semibold
                                            bg-emerald-600
                                            text-white
                                            rounded-xl
                                            hover:bg-emerald-700
                                            transition-colors
                                            shadow-sm
                                        "
                                    >

                                        <CheckCircle
                                            size={16}
                                        />

                                        Complete Chapter

                                    </button>

                                ) : (

                                    <button
                                        onClick={
                                            markChapterIncomplete
                                        }
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            px-4
                                            py-2
                                            text-xs
                                            md:text-sm
                                            font-semibold
                                            bg-emerald-50
                                            text-emerald-700
                                            border
                                            border-emerald-200
                                            rounded-xl
                                        "
                                    >

                                        <CheckCircle
                                            size={16}
                                        />

                                        Completed

                                    </button>

                                )}

                            </div>


                            {/* NEXT */}

                            <button
                                onClick={
                                    goNext
                                }
                                disabled={
                                    activeChapterIndex ===
                                        course.length - 1 &&
                                    activeSectionIndex ===
                                        sections.length - 1
                                }
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    px-4
                                    py-2
                                    text-xs
                                    md:text-sm
                                    font-semibold
                                    bg-amber-600
                                    text-white
                                    rounded-xl
                                    hover:bg-amber-700
                                    transition-colors
                                    shadow-sm
                                    disabled:opacity-40
                                    disabled:cursor-not-allowed
                                "
                            >

                                <span>
                                    Next
                                </span>

                                <ArrowRight
                                    size={16}
                                />

                            </button>

                        </div>


                        {/* ================================================= */}
                        {/* CHAPTER COMPLETION MESSAGE */}
                        {/* ================================================= */}

                        {completedChapters.includes(
                            activeChapterIndex
                        ) && (

                            <div className="
                                mt-5
                                flex
                                items-center
                                justify-center
                                gap-2
                                text-sm
                                font-medium
                                text-emerald-700
                            ">

                                <CheckCircle
                                    size={17}
                                />

                                You have completed this
                                chapter.

                            </div>

                        )}

                    </div>

                </main>

            </div>

        </div>

    )
}