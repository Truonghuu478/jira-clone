"use client"
import { useContext, useEffect } from "react"
import { ILayout } from "@/models"
import { useRouter } from "next/navigation"
import { Header } from "@/modules"
import { LoadingContext } from "@/contexts/loading"
import { decodeAndVerifyToken, getCookieValue } from "@/utils"
import { Loading } from ".."


const CLientLayout = ({ children }: ILayout) => {

    const router = useRouter()

    useEffect(() => {
        const sessionToken = getCookieValue("session_token")
        const decodedToken = decodeAndVerifyToken(String(sessionToken))

        if(!decodedToken){
            router.push("/login")
        }
    }, [])

    return (
        <main>
            <Header/>
            {children}
        </main>
    )
}
export default CLientLayout