"use client"

import { ReactNode, createContext, useContext, useState } from "react";

export interface ILoadingContext {
    isLoading: boolean,
    setIsLoading: (status: boolean) => void
}

export const LoadingContext = createContext<ILoadingContext>({
    isLoading:true,
    setIsLoading : ()=>{}
})

interface IProps {
    children: ReactNode
}
const LoadingProvider = (props: IProps) => {
    const [isLoading, setIsLoading] = useState(true);

    const { children } = props

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoadingContext.Provider>
    )
}

export default LoadingProvider