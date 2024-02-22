"use client"
import { useEffect } from "react"
import { ILayout } from "@/models"
import { useRouter } from "next/navigation"
import dynamic from "next/dynamic"
import { Header } from "@/modules"
// const Header = dynamic(() => import('@/modules/header'), { ssr: false })


const CLientLayout = ({ children }: ILayout) => {
    const router = useRouter()

    // useEffect(()=>{
    //     router.push("/login",{scroll:true})
    // },[])

    return (
        <div>
            <Header />
            {children}
        </div>
    )
}
export default CLientLayout