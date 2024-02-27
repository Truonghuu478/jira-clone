"use client"
import { useContext, useEffect } from "react"
import { ILayout } from "@/models"
import { useRouter } from "next/navigation"
import { Header } from "@/modules"
import { LoadingContext } from "@/contexts/loading"


const CLientLayout = ({ children }: ILayout) => {
    const router = useRouter()
    const data = useContext(LoadingContext);

    useEffect(() => {
        console.log('data', data);
        // router.push("/login",{scroll:true})
    }, [])

    return (
        <div>
            <Header />
            {children}
        </div>
    )
}
export default CLientLayout