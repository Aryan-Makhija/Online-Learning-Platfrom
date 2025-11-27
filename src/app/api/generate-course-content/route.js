import db from "@/lib/config/db"
import { courseTable } from "@/lib/config/schema"
import { GoogleGenAI } from "@google/genai"
import axios from "axios"
import { eq } from "drizzle-orm"
import { NextResponse } from "next/server"



export async function POST(req) {
    const { courseJson, courseTitle, courseId } = await req.json()
  

    const PROMPT = `Depends on Chapter name Toopic Generate content fro each topic in HTML  and give response in JSON format.
     Schema:{
     chapterName:<>,
     {
     topic<>,
     content:<>
     }
     }:User Input: `


    const promises = courseJson?.chapters?.map(async (chapter) => {


        const ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY
        })
        const config = {
            responseMimeType: `text/plain`
        }


        const model = "gemini-2.5-flash"
        const contents = [
            {
                role: "user",
                parts: [
                    { text: PROMPT },
                    { text: JSON.stringify(chapter) }
                ]
            }
        ];

        const response = await ai.models.generateContent({
            model,
            config,
            contents,
        })

        // console.log(response?.candidates[0]?.content?.parts[0]?.text)
        const RawResponse = response?.candidates[0]?.content?.parts[0]?.text;
        const RawJson = RawResponse.replace('```json', '').replace('```', '').trim();
        const JSONResp = JSON.parse(RawJson);


        //Get Youtube video

        const youtubeData = await GetYoutubeVideo(chapter?.chapterName)

        return {
            youtubeVideo: youtubeData,
            courseData: JSONResp
        };
    })


    const CourseContent = await Promise.all(promises)


    //Save To Db


    const dbresp = await db.update(courseTable).set({

        courseContent: CourseContent

    }).where(eq(courseTable.cid, courseId))



    return NextResponse.json({
        courseName: courseTitle,
        coursecontent: CourseContent
    })
}




const YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search'
const GetYoutubeVideo = async (topic) => {
    const params = {
        part: 'snippet',
        q: topic,
        maxResult: 4,
        type: 'video',
        key: process.env.YOUTUBE_API_KEY

    }

    const resp = await axios.get(YOUTUBE_BASE_URL, { params })

    const youtubeVideoListResp = resp.data.items
    const youtubeVideoList = []
    youtubeVideoListResp.forEach(item => {
        const data = {
            videoId: item.id?.videoId,
            title: item?.snippet?.title
        }
        youtubeVideoList.push(data)
    })

    return youtubeVideoList
}