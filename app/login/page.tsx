import { FacebookLogo, IconLogo } from '@/components'
import { NextPage } from 'next'
import Link from 'next/link'

const LoginPage: NextPage<any> = () => {
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
              <input autoFocus className="border rounded-sm p-2 w-full text-sm" id='email' placeholder='Nhập email của bạn' />
            </div>
            <div className="pb-3">
              <input className="border rounded-sm p-2 w-full text-sm" id='password' placeholder='Nhập password của bạn' />
            </div>
          </div>
          <button type='submit' className='text-white bg-blue-600 rounded-sm w-full py-2'>
            Tiếp tục
          </button>
          {/* login by other means  */}
          <div className="text-center">
            <p className="text-[#5E6C84] text-sm font-semibold py-3 ">Hoặc tiếp túc với:</p>
            <button className="flex justify-center items-center border w-full rounded-sm border-l-[#C1C7D0] hover:bg-[#ececef]">
            <FacebookLogo/> <span className="pl-1 text-[#42526E] font-semibold text-sm">Facebook</span>
            </button>
          </div>
        </form>
        <div className="flex justify-end pt-3 text-blue-800 text-sm">
         <ul>
          <li> <Link href="/register">
            Tạo tài khoản
          </Link></li>
         </ul>
        </div>
      </div>

    </div>
  )
}


export default LoginPage