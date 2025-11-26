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
import { Loader2Icon, Sparkle, Star } from 'lucide-react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation'
const AddnewCourse = ({ children }) => {


    const [loading, setloading] = useState(false)
    const [formdata, setformdata] = useState({
        name: "",
        description: "",
        includeVideo: false,
        noOfChapters: 1,
        level: "",
        category: ""
    })


    const router = useRouter()


    const onHandleInputChange = (field, value) => {
        setformdata(prev => ({
            ...prev,
            [field]: value
        }))
  
    }


    const onGenerate = async () => {

        const courseId = uuidv4()

        setloading(true)
        try {
            const response = await axios.post("/api/generate-course-layout", {
                ...formdata,
                courseId: courseId
            })

           
            router.push('/workspace/edit-course',response.data?.courseId)
        } catch (err) {
            console.log(err.message)
        } finally {
            setloading(false)
        }


    }

    return (
        <Dialog>
            <DialogTrigger asChild >{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create New Course Using AI</DialogTitle>
                    <DialogDescription asChild>
                        <div className="flex flex-col gap-4 mt-3">
                            <div>
                                <label>Course Name</label>
                                <Input placeholder="Course Name" onChange={(event) => onHandleInputChange("name", event?.target.value)}></Input>
                            </div>

                            <div>
                                <label>Course Description (Optional) </label>
                                <Textarea placeholder="Course Description" onChange={(event) => onHandleInputChange("description", event?.target.value)}></Textarea>
                            </div>

                            <div>
                                <label>No.of Chapters</label>
                                <Input type={Number} placeholder="Enter Number of Chapters" onChange={(event) => onHandleInputChange("noOfChapters", event?.target.value)}></Input>
                            </div>

                            <div className="flex gap-2  items-center">
                                <label>Include Video</label>
                                <Switch
                                    onCheckedChange={() => onHandleInputChange("includeVideo", !formdata?.includeVideo)}

                                ></Switch>
                            </div>

                            <div>
                                <label >Difficulty level</label>
                                <Select onValueChange={(value) => onHandleInputChange("level", value)} className="mt-2">
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Difficulty level" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="beginner">Biginner</SelectItem>
                                        <SelectItem value="moderate">Moderate</SelectItem>
                                        <SelectItem value="advanced">Advanced</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <label>Category</label>
                                <Input onChange={(event) => onHandleInputChange("category", event?.target.value)} placeholder="Category (Seprated By Comma)"></Input>
                            </div>

                            <Button onClick={() => onGenerate()} className="w-full bg-purple-500 text-white" disabled={loading}>

                                {
                                    loading ? <Loader2Icon className='animate-spin'></Loader2Icon> : <Sparkle ></Sparkle>
                                }
                                Generate Course

                            </Button>

                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent >
        </Dialog >
    )
}

export default AddnewCourse