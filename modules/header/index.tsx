import React from 'react'
import { LANGUAGES, LinkPage } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { Select } from '@/components'

export default function Header() {
  
  return (
    <div className="grid grid-cols-6 gap-4 bg-primary_700 text-white px-7 py-4">
      <div className='col-start-1' >
        <h2 className='text-3xl'>Jira</h2>
      </div>
      <nav className='col-start-2 col-span-4 '>
        <ul className='h-full flex justify-center items-center'>
          <li className='px-5'>

            <Link href={LinkPage.projects} className='hover:text-gray-200 '>
              Projects</Link>
          </li>
          <li className='px-5'>

            <Link href={"/demo1"} className='hover:text-gray-200 '>
              demo1</Link>
          </li>
          <li className='px-5'>

            <Link href={"/demo2"} className='hover:text-gray-200 '>
              demo2</Link>
          </li>
          <li className='px-5'>

            <Link href={"/demo3"} className='hover:text-gray-200'>
              demo3</Link>
          </li>
        </ul>
      </nav>

      <div className='flex items-center justify-end'>
      <Select></Select>
        
      </div>
    </div>
  )
}
