"use client"
import { CLientLayout, Loading } from '@/components';
import { ILoadingContext, LoadingContext } from '@/contexts/loading';
import { LoginForm } from '@/modules';

import { NextPage } from 'next'
import Link from 'next/link';
import { useContext } from 'react';

const LoginPage: NextPage<any> = (props:any) => {
  const { isLoading } = useContext<ILoadingContext>(LoadingContext)
    
  return (
    <>
       <div className="h-screen w-full flex justify-center items-center ">
        <div className="w-[400px] bg-white rounded-sm text-[#5E6C84] px-10 py-10">
          <LoginForm />
          <div className="flex justify-end pt-3 text-blue-800 text-sm">
            <ul>
              <li> <Link href="/register">
                Tạo tài khoản
              </Link></li>
            </ul>

          </div>
        </div>

      </div>
      {isLoading && <Loading />}
    </>


  )
}


export default LoginPage