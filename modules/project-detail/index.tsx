
"use client"
import { WindowIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'



interface IProps {
  projectId : string | null
}

export default function ProjectDetail({projectId}:IProps) {
    
  return (
    <div className='px-3 py-4 bg-primary_200 h-screen'>
        <div className="flex items-center">
          <div className="rounded-md overflow-hidden w-[40px] h-[40px]">
          <Image loader={({ src }) => src} width={40} height={21} src={"https://movie-tisket.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10404?size=xlarge"} alt="123"/>
          </div>
         
          <h2 className='pl-2 pr-4 font-bold text-3xl'>
            Demo
          </h2>
          <WindowIcon className={'w-5 h-5'}/>
        </div>

        {/* Nav  */}

        
    </div>
  )
}
