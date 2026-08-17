// import React, { useState } from 'react'

// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
// } from "@/components/ui/dialog"
// import { Input } from '../ui/input'
// import { Textarea } from '../ui/textarea'
// import { Switch } from '../ui/switch'
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select"
// import { Button } from '../ui/button'
// import { Loader2Icon, Sparkle, Star, StarIcon } from 'lucide-react'
// import axios from 'axios'
// import { v4 as uuidv4 } from 'uuid';
// import { useRouter } from 'next/navigation'
// const AddnewCourse = ({ children }) => {


//     const [loading, setloading] = useState(false)
//     const [formdata, setformdata] = useState({
//         name: "",
//         description: "",
//         includeVideo: false,
//         noOfChapters: 1,
//         level: "",
//         category: ""
//     })


//     const router = useRouter()


//     const onHandleInputChange = (field, value) => {
//         setformdata(prev => ({
//             ...prev,
//             [field]: value
//         }))

//     }


//     const onGenerate = async () => {

//         const courseId = uuidv4()

//         setloading(true)
//         try {
//             const response = await axios.post("/api/generate-course-layout", {
//                 ...formdata,
//                 courseId: courseId
//             })

//             console.log(response);
//             if (response.status === 200) {

//                 router.push(`/workspace/edit-course/${response.data?.courseId}`)
//             }

//         } catch (err) {
//             console.log(err.message)
//         } finally {
//             setloading(false)
//         }


//     }

//     return (
//         <Dialog>
//             <DialogTrigger asChild >{children}</DialogTrigger>
//             <DialogContent>
//                 <DialogHeader>
//                     <DialogTitle className="font-bold text-xl">Create New Course Using AI 🤖 </DialogTitle>
//                     <DialogDescription asChild>
//                         <div className="flex flex-col gap-4 mt-3">
//                             <div>
//                                 <label>Course Name</label>
//                                 <Input placeholder="Course Name" onChange={(event) => onHandleInputChange("name", event?.target.value)}></Input>
//                             </div>

//                             <div>
//                                 <label>Course Description (Optional) </label>
//                                 <Textarea placeholder="Course Description" onChange={(event) => onHandleInputChange("description", event?.target.value)}></Textarea>
//                             </div>

//                             <div>
//                                 <label>No.of Chapters</label>
//                                 <Input type={Number} placeholder="Enter Number of Chapters" onChange={(event) => onHandleInputChange("noOfChapters", event?.target.value)}></Input>
//                             </div>

//                             <div className="flex gap-2  items-center">
//                                 <label>Include Video</label>
//                                 <Switch
//                                     onCheckedChange={() => onHandleInputChange("includeVideo", !formdata?.includeVideo)}

//                                 ></Switch>
//                             </div>

//                             <div>
//                                 <label >Difficulty level</label>
//                                 <Select onValueChange={(value) => onHandleInputChange("level", value)} className="mt-2">
//                                     <SelectTrigger className="w-[180px]">
//                                         <SelectValue placeholder="Difficulty level" />
//                                     </SelectTrigger>
//                                     <SelectContent>
//                                         <SelectItem value="beginner">Biginner</SelectItem>
//                                         <SelectItem value="moderate">Moderate</SelectItem>
//                                         <SelectItem value="advanced">Advanced</SelectItem>
//                                     </SelectContent>
//                                 </Select>
//                             </div>

//                             <div>
//                                 <label>Category</label>
//                                 <Input onChange={(event) => onHandleInputChange("category", event?.target.value)} placeholder="Category (Seprated By Comma)"></Input>
//                             </div>

//                             <Button onClick={() => onGenerate()} className="w-full bg-purple-500 text-white" disabled={loading}>

//                                 {
//                                     loading ? <Loader2Icon className='animate-spin'></Loader2Icon> : <Sparkle ></Sparkle>
//                                 }
//                                 Generate Course

//                             </Button>

//                         </div>
//                     </DialogDescription>
//                 </DialogHeader>
//             </DialogContent >
//         </Dialog >
//     )
// }

// export default AddnewCourse




"use client"

import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Switch } from '../ui/switch'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from '../ui/button'
import {
  Loader2,
  Sparkles,
  BookOpen,
  Video,
  Layers,
  GraduationCap,
  Tag
} from 'lucide-react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const AddnewCourse = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    includeVideo: false,
    noOfChapters: 5,
    level: "beginner",
    category: ""
  })

  const router = useRouter()

  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  const isFormValid = formData.name.trim().length > 0 && Number(formData.noOfChapters) > 0

  const onGenerate = async () => {
    if (!isFormValid) return

    const courseId = uuidv4()
    setLoading(true)

    try {
      const response = await axios.post("/api/generate-course-layout", {
        ...formData,
        noOfChapters: Number(formData.noOfChapters),
        courseId: courseId
      })

      if (response.status === 200 || response.data?.courseId) {
        setOpen(false)
        router.push(`/workspace/edit-course/${response.data?.courseId || courseId}`)
      }
    } catch (err) {
      console.error("Error generating course layout:", err?.message || err)

      // Handle 400 Bad Request error from Axios inside catch block
      if (axios.isAxiosError(err) && err.response?.status === 400) {
        toast.error(err.response.data?.message || "Course Already Exists")

        setTimeout(() => {
          setOpen(false)
          router.push("/workspace/explore")
        }, 1500)
        return
      }

      toast.error("Failed to generate course layout. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      {/* Added responsive width (w-[92vw]), max-height, and overflow-y-auto for mobile */}
      <DialogContent className="w-[92vw] max-w-[540px] max-h-[90vh] overflow-y-auto p-4 sm:p-8 bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl">

        {/* Accent Glow Header Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500" />

        <DialogHeader className="space-y-2 text-left pt-2 sm:pt-0">
          <div className="flex items-start sm:items-center gap-2.5">
            <div className="p-2 sm:p-2.5 bg-amber-400/15 rounded-xl sm:rounded-2xl border border-amber-400/20 text-amber-600 shrink-0">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
            </div>
            <div>
              <DialogTitle className="font-extrabold text-lg sm:text-2xl text-slate-900 tracking-tight">
                Create Course with AI
              </DialogTitle>
              <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                Define your topic and preferences to auto-generate a structured syllabus.
              </p>
            </div>
          </div>
        </DialogHeader>

        <DialogDescription asChild>
          <div className="flex flex-col gap-4 sm:gap-5 mt-2 sm:mt-4 text-slate-800">

            {/* COURSE NAME */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                <span>Course Title <span className="text-amber-500">*</span></span>
              </label>
              <Input
                value={formData.name}
                placeholder="e.g. Master Next.js 15 & Full-Stack Web Development"
                onChange={(e) => onHandleInputChange("name", e.target.value)}
                className="rounded-xl border-slate-200 focus:border-amber-400 focus:ring-amber-400/20 h-10 sm:h-11 text-xs sm:text-sm font-medium"
              />
            </div>

            {/* DESCRIPTION */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Course Description <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <Textarea
                value={formData.description}
                rows={3}
                placeholder="Briefly explain what students will learn, key concepts, or specific goals..."
                onChange={(e) => onHandleInputChange("description", e.target.value)}
                className="rounded-xl border-slate-200 focus:border-amber-400 focus:ring-amber-400/20 text-xs sm:text-sm font-medium resize-none"
              />
            </div>

            {/* GRID 2 COLUMNS: CHAPTERS & LEVEL */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

              {/* NO OF CHAPTERS */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-amber-500" />
                  <span>Chapters <span className="text-amber-500">*</span></span>
                </label>
                <Input
                  type="number"
                  min={1}
                  max={20}
                  value={formData.noOfChapters}
                  placeholder="Number of chapters"
                  onChange={(e) => onHandleInputChange("noOfChapters", e.target.value)}
                  className="rounded-xl border-slate-200 focus:border-amber-400 focus:ring-amber-400/20 h-10 sm:h-11 text-xs sm:text-sm font-medium"
                />
              </div>

              {/* DIFFICULTY LEVEL */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
                  <span>Difficulty Level</span>
                </label>
                <Select
                  value={formData.level}
                  onValueChange={(value) => onHandleInputChange("level", value)}
                >
                  <SelectTrigger className="w-full rounded-xl border-slate-200 focus:border-amber-400 focus:ring-amber-400/20 h-10 sm:h-11 text-xs sm:text-sm font-medium">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="moderate">Intermediate / Moderate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>

            </div>

            {/* CATEGORY & VIDEO TOGGLE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 items-center">

              {/* CATEGORY */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-amber-500" />
                  <span>Category</span>
                </label>
                <Input
                  value={formData.category}
                  placeholder="Web Dev, AI, Design..."
                  onChange={(e) => onHandleInputChange("category", e.target.value)}
                  className="rounded-xl border-slate-200 focus:border-amber-400 focus:ring-amber-400/20 h-10 sm:h-11 text-xs sm:text-sm font-medium"
                />
              </div>

              {/* INCLUDE VIDEO TOGGLE */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200/80 sm:mt-5">
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Include Video</span>
                </div>
                <Switch
                  checked={formData.includeVideo}
                  onCheckedChange={(checked) => onHandleInputChange("includeVideo", checked)}
                />
              </div>

            </div>

            {/* ACTION BUTTON */}
            <div className="pt-2">
              <Button
                onClick={onGenerate}
                disabled={loading || !isFormValid}
                className="w-full h-11 sm:h-12 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md shadow-slate-900/10 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:hover:scale-100"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin text-amber-400" />
                    <span>Generating Course Syllabus...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-current" />
                    <span>Generate Course Layout</span>
                  </>
                )}
              </Button>
            </div>

          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

export default AddnewCourse