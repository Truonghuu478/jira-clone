
import { CLientLayout } from '@/components'
import { ProfilePage } from '@/modules'
import { getUsersAPI, http } from '@/services'
import React, { use, useEffect } from 'react'
import toast from 'react-hot-toast'

// "userId": 6460,
// "name": "testdemo",
// "avatar": "https://ui-avatars.com/api/?name=testdemo",
// "email": "testdemo@gmail.com",
// "phoneNumber": "092827122"

// async function getData(){
//   const data = await getUsersAPI('')

//   return data
// }

export default async function Profile(props: any) {

  
  return (
    <CLientLayout>
      <div className='py-2 px-3  h-screen flex justify-center items-center'>
        <ProfilePage />
      </div>
    </CLientLayout>

  )
}

