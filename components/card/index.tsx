import classNames from 'classnames'
import React, { ReactNode } from 'react'
interface ICard {
    children:ReactNode,
    className?:string
}

export const CardHeader = ()=>{
    return (
        <div className="">
            CardHeader
        </div>
    )
}
export function Card({children,className}:ICard) {
  return (
    <div className= {classNames("p-4 overflow-hidden",className)}>
        <div style={{ boxShadow: ' 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)' }}>
          
        {children}
    </div>
    </div>
    
  )
}

