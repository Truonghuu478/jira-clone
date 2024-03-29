import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="">
                <h2>Not Found</h2>
                <p>Could not find requested resource</p>
                <Link href="/">Return Home</Link>
            </div>
        </div>
    )
}
