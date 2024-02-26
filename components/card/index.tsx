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
        <div className='shadow-default'>
          
        {children}
    </div>
    </div>
    
  )
}

