"use client"
import { Loading } from '@/components';
import { ILoadingContext, LoadingContext } from '@/contexts/loading';
import { LoginForm } from '@/modules';

import { NextPage } from 'next'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useContext } from 'react';

const LoginPage: NextPage<any> = () => {
  const { isLoading } = useContext<ILoadingContext>(LoadingContext)
  
  return (
    <>
      {isLoading ? <Loading /> : <div className="h-screen w-full flex justify-center items-center ">
        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 10px' }} className="w-[400px] bg-white rounded-sm text-[#5E6C84] px-10 py-10">
          <LoginForm />
          <div className="flex justify-end pt-3 text-blue-800 text-sm">
            <ul>
              <li> <Link href="/register">
                Tạo tài khoản
              </Link></li>
            </ul>

          </div>
        </div>

      </div>}
    </>


  )
}


export default LoginPage