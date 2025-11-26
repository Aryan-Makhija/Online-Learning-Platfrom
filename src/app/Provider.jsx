"use client"

import { SelectedChapterContext } from "@/Context/SelectedChapterContext"
import { UserDetailsContext } from "../Context/UserDetailsContext"
import { useUser } from "@clerk/nextjs"
import axios from "axios"
import { useEffect, useState } from "react"
import { Toaster } from "@/components/ui/sonner"

const Provider = ({ children }) => {

    const { user } = useUser()
    const [userdetails, setuserdetails] = useState()

    const [chapterindex, setchapterindex] = useState(0)


    const [refresh, setrefresh] = useState(false)

    const loginuser = async () => {

        try {
            const result = await axios.post("/api/user", {
                name: user?.fullName,
                email: user?.primaryEmailAddress?.emailAddress
            })
            // console.log(result.data)
            setuserdetails(result.data)
        } catch (err) {
            console.log(err.message)
        }

    }

    useEffect(() => {
        user && loginuser()
    }, [user])




    return (


        <UserDetailsContext.Provider value={{ userdetails, setuserdetails }}>
            <SelectedChapterContext value={{ chapterindex, setchapterindex, refresh, setrefresh }}>

                <Toaster></Toaster>
                <div>{children}</div>

            </SelectedChapterContext>

        </UserDetailsContext.Provider>
    )
}

export default Provider