import { FacebookLogo, IconLogo } from '@/components'
import { NextPage } from 'next'
import Link from 'next/link'

const RegisterPage: NextPage<any> = () => {
  return (
    <div className="container h-screen w-full flex justify-center items-center ">
      <div style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 10px' }} className="w-[400px] bg-white rounded-sm text-[#5E6C84] px-10 py-10">
        <form  className="">
          <div className='flex justify-center items-center p-2'>
            <IconLogo />
          </div>
          <div className="pt-6 ">
            <h5 className='text-[#172B4D] text-center font-semibold pb-3'>Đăng nhập để tiếp tục</h5>
            <div className="pb-3">
              <input autoFocus className="border rounded-sm p-2 w-full text-sm" id='name' placeholder='Nhập tên của bạn' />
            </div>
            <div className="pb-3">
              <input  className="border rounded-sm p-2 w-full text-sm" id='email' placeholder='Nhập email của bạn' />
            </div>
            <div className="pb-3">
              <input className="border rounded-sm p-2 w-full text-sm" id='password' placeholder='Nhập password của bạn' />
            </div>
           
            <div className="pb-3">
              <input className="border rounded-sm p-2 w-full text-sm" id='phoneNumber' placeholder='Nhập số điện thoại của bạn' />
            </div>
          </div>
          <button type='submit' className='text-white bg-blue-600 rounded-sm w-full py-2'>
            Đăng ký
          </button>
        </form>
        <div className="flex justify-end pt-3 text-blue-800 text-sm">
         <ul>
          <li> <Link href="/login">
            Đăng nhập
          </Link></li>
         </ul>
        </div>
      </div>

    </div>
  )
}


export default RegisterPage