"use client"

import { FacebookIcon, LogoIcon } from '@/components'
import { loginUserSchema } from '@/utils';
import Link from 'next/link'
import React, { useContext } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { ILoginUser, LoginUserInput } from '@/models/user';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { LoadingContext } from '@/contexts/loading';
import toast  from 'react-hot-toast';

const defaultValues: ILoginUser = {
  email: '',
  password: ''
}
export default function LoginForm() {
  const router = useRouter()

  const {setIsLoading } = useContext(LoadingContext)

  const { register, handleSubmit, formState: { errors } ,reset,setError} = useForm<LoginUserInput>({
    defaultValues,
    resolver: yupResolver(loginUserSchema),
  })

  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/profile'

  const onSubmit:SubmitHandler<LoginUserInput> = async (values:ILoginUser) => {
      try {
        setIsLoading?.(true)
        const resp = await signIn('credentials', {
          redirect: false,
          email: values.email,
          password: values.password,
          redirectTo: callbackUrl,
        })
        console.log('resp',resp);
        
        // if (!resp?.error) {
        //   toast.success('Đăng nhập thành công');
        //   router.push(callbackUrl);
        // } else {
        //   reset({ password: '' });
        //   const message = 'email hoặc mật khẩu không đúng';
        //   toast.error(message);
        //   // setError(message);
        // }
        // setIsLoading?.(false)

      } catch (error:any) {
        toast.error(error.message);
      // setError(error.message);
      }finally {
        setIsLoading(false);
    }
  }

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <div className='flex justify-center items-center p-2'>
        <LogoIcon />
      </div>
      <div className="pt-6 ">
        <h5 className='text-[#172B4D] text-center font-semibold pb-3'>Đăng nhập để tiếp tục</h5>
        <div className="pb-3">
          <input
            {...register("email")}

            autoFocus
            className="border rounded-sm p-2 w-full text-sm" id='email'
            placeholder='Nhập email của bạn' />
            {errors?.email && <p className='text-sm text-red-500 pt-1'>{errors.email.message}</p>}
        </div>
        <div className="pb-3">

          <input
            {...register("password")}
            type="password"
            className="border rounded-sm p-2 w-full text-sm"
            placeholder='Nhập mật khẩu...' />
            {errors?.password && <p className='text-sm text-red-500 pt-1'>{errors.password.message}</p>}
        </div>
      </div>
      <button type='submit' className='text-white bg-blue-600 rounded-sm w-full py-2'>
        Đăng nhập
      </button>
      {/* login by other means  */}
      <div className="text-center">
        <p className="text-[#5E6C84] text-sm font-semibold py-3 ">Hoặc tiếp túc với:</p>
        <button className="flex justify-center items-center border w-full rounded-sm border-l-[#C1C7D0] hover:bg-[#ececef] py-1">
          <FacebookIcon />
          <span className="pl-1 text-[#42526E] font-semibold text-sm">Facebook</span>
        </button>
      </div>
      <div className="text-center">
        <p className="text-[#5E6C84] text-sm font-semibold py-3 ">Hoặc tiếp túc với:</p>
        <button className="flex justify-center items-center border w-full rounded-sm border-l-[#C1C7D0] hover:bg-[#ececef] py-1">
          <FacebookIcon />
          <span className="pl-1 text-[#42526E] font-semibold text-sm">Facebook</span>
        </button>
      </div>
      <div className="text-center">
        <p className="text-[#5E6C84] text-sm font-semibold py-3 ">Hoặc tiếp túc với:</p>
        <button className="flex justify-center items-center border w-full rounded-sm border-l-[#C1C7D0] hover:bg-[#ececef] py-1">
          <FacebookIcon />
          <span className="pl-1 text-[#42526E] font-semibold text-sm">Facebook</span>
        </button>
      </div>
    </form>
  )
}
