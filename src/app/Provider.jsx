"use client"

import { UserDetailsContext } from "../Context/UserDetailsContext"
import { useUser } from "@clerk/nextjs"
import axios from "axios"
import { useEffect, useState } from "react"

const Provider = ({ children }) => {

    const { user } = useUser()
    const [userdetails, setuserdetails] = useState()
    const loginuser = async () => {

        try {
            const result = await axios.post("/api/user", {
                name: user?.fullName,
                email: user?.primaryEmailAddress?.emailAddress
            })
            console.log(result.data)
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
            <div>{children}</div>

        </UserDetailsContext.Provider>
    )
}

export default Provider