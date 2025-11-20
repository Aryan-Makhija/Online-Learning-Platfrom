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
import { Star } from 'lucide-react'

const AddnewCourse = ({ children }) => {


    
    const [formdata, setformdata] = useState({
        courseName: "",
        courseDescription: "",
        includeVideo: false,
        noOfChapters: 1,
        level: "",
        category: ""
    })



    const onHandleInputChange = (field, value) => {
        setformdata(prev => ({
            ...prev,
            [field]: value
        }))
        console.log(formdata)
    }


    const onGenerate = () => {
       return console.log(formdata)
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
                                <Input placeholder="Course Name" onChange={(event) => onHandleInputChange("courseName", event?.target.value)}></Input>
                            </div>

                            <div>
                                <label>Course Description (Optional) </label>
                                <Textarea placeholder="Course Description" onChange={(event) => onHandleInputChange("courseDescription", event?.target.value)}></Textarea>
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

                            <Button onClick={onGenerate()} className="w-full bg-purple-500 text-white">
                                <Star></Star> Generate Course
                            </Button>

                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent >
        </Dialog >
    )
}

export default AddnewCourse