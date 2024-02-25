import { CLientLayout } from '@/components'
import {ProfilePage} from '@/modules'
import React from 'react'

// "userId": 6460,
// "name": "testdemo",
// "avatar": "https://ui-avatars.com/api/?name=testdemo",
// "email": "testdemo@gmail.com",
// "phoneNumber": "092827122"


export default function Profile() {
  return (
    <CLientLayout>
<div className='py-2 px-3  h-screen flex justify-center items-center'>
      <ProfilePage/>
    </div>
    </CLientLayout>
    
  )
}
