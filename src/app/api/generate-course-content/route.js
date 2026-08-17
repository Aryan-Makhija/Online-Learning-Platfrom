// import db from "@/lib/config/db"
// import { courseTable } from "@/lib/config/schema"
// import { GoogleGenAI } from "@google/genai"
// import axios from "axios"
// import { eq } from "drizzle-orm"
// import { NextResponse } from "next/server"

// // const PROMPT = `Based on the chapter name and topics provided, generate detailed educational HTML content for each topic.

// // Respond ONLY in valid JSON using this exact schema:
// // {
// //   "chapterName": "string",
// //   "topics": [
// //     {
// //       "topic": "string",
// //       "content": "string (HTML content for this topic)"
// //     }
// //   ]
// // }

// // User Input: `


// const PROMPT = `
// You are an expert technical course content generator.

// Generate detailed, structured educational content for the provided course chapter and topics.

// The course can be about any technical subject, including:
// - Programming languages
// - Web development
// - Frameworks
// - Backend development
// - Databases
// - APIs
// - DevOps
// - Software engineering
// - Computer science concepts

// IMPORTANT:
// - Do NOT generate HTML.
// - Do NOT generate CSS.
// - Do NOT generate Markdown.
// - Do NOT generate UI components.
// - Do NOT use HTML tags.
// - Generate ONLY structured JSON.
// - The frontend application will handle all UI rendering.
// - Each section should focus on one specific concept.
// - Keep the content educational, clear, detailed, and technically accurate.

// Return ONLY valid JSON using exactly this structure:

// {
//   "chapterNumber": 1,
//   "chapterTitle": "string",
//   "chapterDescription": "string",
//   "sections": [
//     {
//       "sectionNumber": 1,
//       "title": "string",
//       "subtitle": "string",
//       "theory": "string",
//       "codeExample": {
//         "language": "string",
//         "title": "string",
//         "code": "string",
//         "explanation": "string"
//       }
//     }
//   ]
// }

// IMPORTANT CODE GENERATION RULE:

// The "codeExample" field is OPTIONAL.

// Generate a codeExample ONLY when code genuinely helps explain or demonstrate the topic.

// If the topic does NOT require code or is better explained through theory, concepts, definitions, comparisons, or real-world examples, set:

// "codeExample": null

// DO NOT generate unnecessary or artificial code just to fill the field.

// Examples:

// For a programming concept such as:

// "Encapsulation"

// Generate an appropriate codeExample.

// For a conceptual topic such as:

// "What is Object-Oriented Programming?"

// Code is optional. If code does not significantly improve the explanation, use:

// "codeExample": null

// For a topic such as:

// "Advantages of OOP"

// Use:

// "codeExample": null

// For a topic such as:

// "Creating a JavaScript Function"

// Generate a codeExample.

// CODE RULES:

// 1. When codeExample is not required, ALWAYS use:
//    "codeExample": null

// 2. When codeExample is generated, it must contain:
//    - language
//    - title
//    - code
//    - explanation

// 3. The code must demonstrate ONLY the current topic.

// 4. Do not create unnecessarily large code examples.

// 5. Do not introduce unrelated concepts in the code.

// 6. The "language" field must contain the appropriate programming language, such as:
//    javascript
//    python
//    typescript
//    java
//    cpp
//    html
//    css
//    sql
//    etc.

// 7. The "code" field must contain ONLY source code.

// 8. Do NOT include Markdown code fences such as:
//    \`\`\`javascript
//    \`\`\`

// 9. The "explanation" should explain the important parts of the generated code.

// 10. Use newline characters inside the code when necessary.

// CONTENT RULES:

// 1. Create one section object for each provided topic.

// 2. Each section must focus ONLY on its specific topic.

// 3. "title" must contain the main topic name.

// 4. "subtitle" must provide a short and meaningful description of what the section teaches.

// 5. "theory" must provide a detailed explanation of the topic using plain text.

// 6. Use practical examples and real-world explanations when they improve understanding.

// 7. Do not combine multiple unrelated concepts into one section.

// 8. Avoid unnecessary repetition.

// 9. The content should be suitable for the specified course level.

// 10. Do not generate HTML or Markdown anywhere in the response.

// JSON RULES:

// 1. Return ONLY valid JSON.

// 2. Do not add any text before the JSON.

// 3. Do not add any text after the JSON.

// 4. The response must be directly parseable using JSON.parse().

// 5. Properly escape quotes and special characters.

// 6. Do not wrap the JSON inside Markdown code fences.

// Chapter:
// {{CHAPTER_NAME}}

// Topics:
// {{TOPICS}}

// Course Level:
// {{LEVEL}}
// `;




// // function parseAiJson(rawText) {
// //     if (!rawText) {
// //         throw new Error("AI returned an empty response")
// //     }

// //     const cleaned = rawText
// //         .replace(/```json/gi, "")
// //         .replace(/```/g, "")
// //         .trim()

// //     return JSON.parse(cleaned)
// // }


// function parseAiJson(rawText) {
//     if (!rawText) {
//         throw new Error("AI returned an empty response")
//     }

//     try {
//         return JSON.parse(rawText.trim())
//     } catch (error) {
//         console.error("Raw Gemini response:")
//         console.error(rawText)

//         throw new Error(
//             `Invalid JSON returned by Gemini: ${error.message}`
//         )
//     }
// }

// export async function POST(req) {
//     try {
//         const { courseJson, courseTitle, courseId } = await req.json()

//         if (!courseId) {
//             return NextResponse.json({ error: "courseId is required" }, { status: 400 })
//         }

//         const chapters = courseJson?.chapters

//         if (!chapters?.length) {
//             return NextResponse.json(
//                 { error: "No chapters found in courseJson. Expected courseJson.chapters array." },
//                 { status: 400 }
//             )
//         }

//         const ai = new GoogleGenAI({
//             apiKey: process.env.GEMINI_API_KEY,
//         })

//         const promises = chapters.map(async (chapter) => {
//             const response = await ai.models.generateContent({
//                 model: "gemini-3.5-flash",
//                 config: {
//                     responseMimeType: "application/json",
//                 },
//                 contents: [
//                     {
//                         role: "user",
//                         parts: [
//                             { text: PROMPT },
//                             { text: JSON.stringify(chapter) },
//                         ],
//                     },
//                 ],
//             })

//             const rawResponse = response.text
//             const jsonResp = parseAiJson(rawResponse)

//             const youtubeData = await GetYoutubeVideo(chapter?.chapterTitle)

//             return {
//                 youtubeVideo: youtubeData,
//                 courseData: jsonResp,
//             }
//         })

//         const courseContent = await Promise.all(promises)

//         await db
//             .update(courseTable)
//             .set({
//                 courseContent,
//             })
//             .where(eq(courseTable.cid, courseId))

//         return NextResponse.json({
//             courseName: courseTitle,
//             coursecontent: courseContent,
//         })
//     } catch (error) {
//         console.error("generate-course-content error:", error)
//         return NextResponse.json(
//             { error: error?.message || "Failed to generate course content" },
//             { status: 500 }
//         )
//     }
// }



// const GetYoutubeVideo = async (topic) => {
//     try {
//         const params = {
//             part: "snippet",
//             q: `${topic} tutorial`,
//             maxResults: 4,
//             type: "video",
//             videoDuration: "long",
//             order: "relevance",
//             key: process.env.YOUTUBE_API_KEY,
//         }

//         const resp = await axios.get(process.env.YOUTUBE_BASE_URL, { params })
//         const youtubeVideoListResp = resp.data?.items ?? []

//         return youtubeVideoListResp.map((item) => ({
//             videoId: item.id?.videoId,
//             title: item?.snippet?.title,
//         }))
//     } catch (error) {
//         console.error("YouTube API error:", error?.response?.data || error.message)
//         return []
//     }
// }












// ---------------------------------- New Api ---------------

import db from "@/lib/config/db"
import { courseTable } from "@/lib/config/schema"
import { GoogleGenAI } from "@google/genai"
import axios from "axios"
import { eq } from "drizzle-orm"
import { NextResponse } from "next/server"

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
})

const PROMPT = `
You are an expert technical course content generator.

Generate detailed, structured educational content for the provided course chapter and topics.

The course can be about any technical subject, including:

- Programming languages
- Web development
- Frameworks
- Backend development
- Databases
- APIs
- DevOps
- Software engineering
- Computer science concepts

IMPORTANT:

- Do NOT generate HTML.
- Do NOT generate CSS.
- Do NOT generate Markdown.
- Do NOT generate UI components.
- Do NOT use HTML tags.
- Generate ONLY structured JSON.
- The frontend application will handle all UI rendering.
- Each section should focus on one specific concept.
- Keep the content educational, clear, detailed, and technically accurate.
- Output MUST be a valid JSON only

RETURN JSON ONLY USING THIS EXACT SCHEMA:

{
  "chapterNumber": 1,
  "chapterTitle": "string",
  "chapterDescription": "string",
  "sections": [
    {
      "sectionNumber": 1,
      "title": "string",
      "subtitle": "string",
      "theory": "string",
      "codeExample": {
        "language": "string",
        "title": "string",
        "code": "string",
        "explanation": "string"
      }
    }
  ]
}

CODE GENERATION RULE:

The "codeExample" field is optional.

Generate code ONLY when code genuinely helps explain or demonstrate the specific topic.

Do NOT generate code just to fill the field.

If code is not required, return:

"codeExample": null

Examples:

"Encapsulation"
→ Generate a relevant code example.

"Creating a JavaScript Function"
→ Generate a relevant code example.

"Advantages of Object-Oriented Programming"
→ "codeExample": null

"What is JavaScript?"
→ "codeExample": null if code does not significantly improve the explanation.

CODE RULES:

1. When code is not required, ALWAYS use:
   "codeExample": null

2. When code is required, provide:
   - language
   - title
   - code
   - explanation

3. The code must demonstrate ONLY the current topic.

4. Do not create unnecessarily large code examples.

5. Do not introduce unrelated concepts into the code.

6. The language field must contain the appropriate programming language.

7. The code field must contain ONLY source code.

8. Do NOT include Markdown code fences.

9. The explanation should explain the important parts of the code.

10. Use newline characters inside code when necessary.

CONTENT RULES:

1. Create exactly one section object for each provided topic.

2. Each section must focus ONLY on its specific topic.

3. "title" must contain the main topic name.

4. "subtitle" must provide a short description of what the section teaches.

5. "theory" must contain a detailed educational explanation.

6. Use practical examples when they improve understanding.

7. Do not combine unrelated concepts into one section.

8. Avoid unnecessary repetition.

9. Content should be suitable for the specified course level.

10. Use plain text for theory, subtitle, and explanation.

Your responsibility is ONLY to generate the educational course content.




Chapter:
{{CHAPTER_NAME}}

Topics:
{{TOPICS}}

Course Level:
{{LEVEL}}
`

export async function POST(req) {
    try {
        const { courseJson, courseTitle, courseId } = await req.json()

        if (!courseId) {
            return NextResponse.json(
                { error: "courseId is required" },
                { status: 400 }
            )
        }

        const chapters = courseJson?.chapters

        if (!chapters?.length) {
            return NextResponse.json(
                {
                    error:
                        "No chapters found in courseJson. Expected courseJson.chapters array.",
                },
                { status: 400 }
            )
        }

        const promises = chapters.map(async (chapter) => {

            // 1. Gemini call
            const response = await ai.models.generateContent({
                model: "gemini-3.5-flash-lite",

                config: {
                    responseMimeType: "application/json",
                },

                contents: [
                    {
                        role: "user",
                        parts: [
                            {
                                text: PROMPT,
                            },
                            {
                                text: JSON.stringify(chapter),
                            },
                        ],
                    },
                ],
            })

            // 2. Get Gemini response
            const text =
                response.candidates[0].content.parts[0].text

            // 3. Convert JSON string → JavaScript object
            const courseData = JSON.parse(text)

            // 4. Get YouTube videos
            const youtubeVideos = await GetYoutubeVideo(
                chapter?.chapterTitle ||
                chapter?.chapterName
            )

            // 5. Merge both
            return {
                ...courseData,
                youtubeVideos,
            }
        })

        // Wait for all chapters
        const courseContent = await Promise.all(promises)

        // Store in database
        await db
            .update(courseTable)
            .set({
                courseContent,
            })
            .where(eq(courseTable.cid, courseId))

        return NextResponse.json({
            courseName: courseTitle,
            courseContent,
        })

    } catch (error) {
        console.error(
            "generate-course-content error:",
            error
        )

        return NextResponse.json(
            {
                error:
                    error?.message ||
                    "Failed to generate course content",
            },
            { status: 500 }
        )
    }
}

const YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search'
const GetYoutubeVideo = async (topic) => {
    try {
        const params = {
            part: "snippet",
            q: `${topic} tutorial`,
            maxResults: 4,
            type: "video",
            videoDuration: "long",
            order: "relevance",
            key: process.env.YOUTUBE_API_KEY,
        }

        const resp = await axios.get(
        YOUTUBE_BASE_URL,
            { params }
        )

        const youtubeVideoListResp =
            resp.data?.items ?? []

        return youtubeVideoListResp.map((item) => ({
            videoId: item.id?.videoId,
            title: item.snippet?.title,
            channelTitle: item.snippet?.channelTitle,
            // thumbnail:
            //     item.snippet?.thumbnails?.high?.url,
            // url: `https://www.youtube.com/watch?v=${item.id?.videoId}`,
        }))

    } catch (error) {
        console.error(
            "YouTube API error:",
            error?.response?.data || error.message
        )

        return []
    }
}



