"use client"

import { FacebookIcon, LogoIcon } from '@/components'
import { loginUserSchema, saveSessionToCookie } from '@/utils';
import React, { useContext } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { ILoginUser, LoginUserInput, UserLoginResp } from '@/models/user';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter, useSearchParams } from 'next/navigation';
import { LoadingContext } from '@/contexts/loading';
import toast from 'react-hot-toast';
import { signInAPI } from '@/services';
import classNames from 'classnames';
import { TOKEN } from '@/constants';

const defaultValues: ILoginUser = {
  email: 'demo@gmail.com',
  password: 'string'
}
export default function (props: any) {

  const router = useRouter()

  const { setIsLoading } = useContext(LoadingContext)

  const { register, handleSubmit, formState: { errors }, reset, setError } = useForm<LoginUserInput>({
    defaultValues,
    resolver: yupResolver(loginUserSchema),
  })

  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/profile'

  const onSubmit: SubmitHandler<LoginUserInput> = async (credentials: ILoginUser) => {
    try {
      setIsLoading(true)
      const respData = await signInAPI(credentials);

      if (respData) {
        toast.success("ĐĂng nhập thành công")
        saveSessionToCookie(TOKEN.SESSION_TOKEN,respData.accessToken)
        saveSessionToCookie("email",respData.email)

      } 
      router.replace(callbackUrl)

    } catch ({ message }: any) {
      setError("email", { message: '' })
      setError("password", { message: '' })
      toast.error(message, {
        position: 'top-right'
      })
      setIsLoading(false)
    }finally{
      setIsLoading(false)
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
            className={classNames("border rounded-sm p-2 w-full text-s", { 'border-red-600': errors?.email })} id='email'
            placeholder='Nhập email của bạn' />
          {errors?.email && <span className='text-sm text-red-500 '>{errors.email.message}</span>}
        </div>
        <div className="pb-3">

          <input
            {...register("password")}
            type="password"
            className={classNames("border rounded-sm p-2 w-full text-s", { 'border-red-600': errors?.password })}
            placeholder='Nhập mật khẩu...' />
          {errors?.password && <span className='text-sm text-red-500 '>{errors.password.message}</span>}
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
          <span className="pl-1 text-[#42526E] font-semibold text-sm">Google</span>
        </button>
      </div>
      <div className="text-center">
        <p className="text-[#5E6C84] text-sm font-semibold py-3 ">Hoặc tiếp túc với:</p>
        <button className="flex justify-center items-center border w-full rounded-sm border-l-[#C1C7D0] hover:bg-[#ececef] py-1">
          <FacebookIcon />
          <span className="pl-1 text-[#42526E] font-semibold text-sm">Github</span>
        </button>
      </div>
    </form>
  )
}
