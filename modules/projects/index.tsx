'use client'
import React, { MouseEventHandler, ReactNode } from 'react'
import { DelIcon, EditIcon, Pagination } from '@/components'
import { IProject } from '@/models'
import Link from 'next/link'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import Tabs from './tabs'

interface IProps {
  children?: ReactNode,
  dataTable: Array<IProject>
}

export default function TabsProject({ dataTable }: IProps) {
  const router = useRouter()
  const params = useSearchParams();
  const pathname = usePathname();

  const onChangeTab = (id: number) => {
    const newParams = new URLSearchParams(params.toString());
    if (id) {
      newParams.set('category', String(id));
    }
    router.push(`${pathname}?${newParams.toString()}`);
  }

  return (
    <div>
      <Tabs>
        <div className="grid p-4">
          <table className="table table-auto hover:table-fixed">
            <thead >
              <tr className="bg-[#e5e5e5]  table-row align-middle">
                <td className="table-col font-bold">STT</td>
                <td className="table-col font-bold">Tên dự án</td>
                <td className="table-col font-bold">Tên danh mục</td>
                <td className="table-col font-bold">Bí danh</td>
                <td className="table-col font-bold">Người tạo</td>
                <td className="table-col font-bold">Thành viên</td>
                <td className="table-col font-bold">Mô tả</td>
                <td className="table-col font-bold">Thao tác</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table-col">
                  1
                </td>
                <td className="table-col">
                  <Link href={`/project/123`} className='text-primary_700'>
                    Internal accounting
                  </Link>
                </td>
                <td className="table-col">Website</td>
                <td className="table-col">1233</td>
                <td className="table-col">Truong</td>
                <td className="table-col">
                  <ul>
                    <li>
                      truong
                    </li>
                    <li>
                      vy
                    </li>
                  </ul>
                </td>
                <td className="table-col">mo ta ....</td>
                <td className="table-col">
                  <div className="flex items-center">
                    <button className="border hover:bg-slate-300 font-bold py-2 px-4 rounded ">
                      <DelIcon className="w-4 text-white" />
                    </button>
                    <button className="border hover:bg-slate-300 font-bold py-2 px-4 rounded ml-2">
                      <EditIcon className="w-4 text-white" />
                    </button>
                  </div>
                </td>

              </tr>


            </tbody>
          </table>
          <Pagination className={"col-span-3"} />

        </div>
      </Tabs>

    </div>


  )
}
