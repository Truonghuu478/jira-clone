import React from 'react'

export default function Loading() {
  return (

    <div className="fixed z-[999999] top-0 left-0 w-full h-full bg-loading">
      <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-t-4 border-blue-500 rounded-full animate-spin" />
      </div>
    </div>


  )
}
