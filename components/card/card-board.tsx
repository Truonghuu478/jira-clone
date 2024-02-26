import React, { useState } from 'react'
import { HandRaisedIcon,EllipsisHorizontalIcon } from '@heroicons/react/20/solid'

interface IProps {
    className?:string | null,
    headerCard:string,

}
export default function CardBoard(props:any) {

    const [isEditCardHeader, isSetEditCardHeader] = useState(false)

    return (
        <div className='max-w-sm'>
            {/* header  */}
            <div className="flex">
                <HandRaisedIcon className='w-3' />
                {isEditCardHeader ? <input / > : (
                    <button>
                        <p>Todo</p>
                    </button>
                )}
                <EllipsisHorizontalIcon className='w-3'/>
            </div>
            {/* body  */}
            <div className="">
                demo
            </div>
            {/* button create  */}



        </div>
    )
}
