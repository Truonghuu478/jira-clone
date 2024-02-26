
"use client"
import { Tab } from '@headlessui/react'
import { WindowIcon } from '@heroicons/react/20/solid'
import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import ProjectDetailFilter from './Filter'
import CardBoard from '@/components/card/card-board'
interface IProps {
  projectId: string | null
}

export default function ProjectDetail({ projectId }: IProps) {

  return (
    <div className='px-3 py-4 bg-primary_200 h-screen'>
      <div className="flex items-center">
        <div className="rounded-md overflow-hidden w-[40px] h-[40px]">
          <Image loader={({ src }) => src} width={40} height={21} src={"https://movie-tisket.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10404?size=xlarge"} alt="123" />
        </div>
        <h2 className='pl-2 pr-4 font-bold text-3xl'>
          Demo
        </h2>
        <WindowIcon className={'w-5 h-5'} />
      </div>

      {/* Nav  */}

      <Tab.Group>
        <Tab.List className={" my-4 border-b-2 border-b-slate-300"}>
          <Tab className={classNames('px-2 border-b-2 transition-all ', { ' text-primary_700 ': true })}>
            Board
          </Tab>

        </Tab.List>
        <Tab.Panels>
          {/* filter  */}

          <ProjectDetailFilter/>

        </Tab.Panels>
      </Tab.Group>

        <div className="flex">

          <CardBoard />
        </div>
    </div>
  )
}
