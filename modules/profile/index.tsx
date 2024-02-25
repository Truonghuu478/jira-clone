'use client'
import { AvatarIcon } from '@/components'
import { Tab } from '@headlessui/react'
import React from 'react'
import { PhotoIcon, UserCircleIcon, CameraIcon, CircleStackIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export default function ProfilePage() {
  return (

    <div className=" h-auto shadow-default flex">
      <div className="shadow-0 w-1/6">
        <div className="px-4 py-3 bg-primary_700 border">
          <button className='flex justify-center items-center'>
            <UserCircleIcon className='w-10 text-white' />
          </button>

        </div>
        <div className="px-4 py-3  border ">
          <button className='flex justify-center items-center'>
            <CircleStackIcon className='w-10 ' />
          </button>
        </div>


      </div>

      <div className="px-4 py-3 ">
        <h2 className='text-lg font-bold'>Profile</h2>
        <div className=" pb-12 flex">
          <form className="mt-10">
            <div className="flex ">
              {/* name  */}
              <div className="">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder='Nhập tên'
                  />
                </div>
              </div>
              {/* email  */}
              <div className="ml-2">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder='Nhập email'
                  />
                </div>
              </div>
            </div>

            {/* password  */}
            <div className="">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder='Nhập  mật khẩu'

                />
              </div>
            </div>

            {/* phone  */}
            <div className="">
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                phone
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="phone-number"
                  id="phone"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder='Nhập  số đi'

                />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-primary_700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary_700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>

          <div className="flex justify-center pl-10">
            <div className="relative  w-28 h-28 border shadow-11 rounded-full " >
              <Image className='absolute top-0 left-0 w-full h-full rounded-full' src='' alt='avatar' onError={(e) => e.target.src = 'https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=170667a&w=0&h=zP3l7WJinOFaGb2i1F4g8IS2ylw0FlIaa6x3tP9sebU='} />
              <div className="absolute top-[70%] right-[10%]  ">
                <label htmlFor="avatar-upload" className="shadow-11 w-8 h-8 rounded-full p-1  flex justify-center items-center border bg-[#9b9698] cursor-pointer">
                  <CameraIcon className="w-10" />
                  <input
                    type="file"
                    id="avatar-upload"
                    className="opacity-0 w-0"
                  />
                </label>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
