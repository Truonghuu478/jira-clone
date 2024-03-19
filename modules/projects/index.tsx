'use client'
import React, { MouseEventHandler, ReactNode, useContext, useEffect, useState } from 'react'
import { Card, DelIcon, EditIcon, Loading, Pagination } from '@/components'
import { IProject } from '@/models'
import Link from 'next/link'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import Tabs from './tabs'
import { createContext } from 'vm'
import { LoadingContext } from '@/contexts/loading'
import ProjectsFilter from './filter'
import { LinkPage } from '@/constants'
import { LIMIT } from '@/components/pagination'

interface IProps {
  children?: ReactNode,
  dataTable: Array<IProject> | null
}

export default function ProjectsPage({ dataTable }: IProps) {
  const [data, setData] = useState<Array<IProject>>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const router = useRouter()
  const path = usePathname()
  const params = useSearchParams();
  const newParams = new URLSearchParams(params.toString())

  const search = (key: string, value: any) => {
    newParams.set(key, value);

    router.push(`/projects?${newParams.toString()}`);
  }

  const pageParam = newParams.get("page")
  const page = pageParam ? Number(pageParam) : 1

  useEffect(() => {
    if (dataTable && Array.isArray(dataTable)) {
      const newData = dataTable.slice((page - 1) * LIMIT, LIMIT * page)
      setIsLoading(false)
      setData([...newData])
    }
  }, [dataTable])

  return (
    <div className="">
      <div className="bg-[#eeeeee] py-2 px-3">
        <ul className="flex">
          <li><Link className="text-primary_700" href={LinkPage.projects}>
            Trang chủ</Link> </li> <span className="px-2">/</span>
          <li className="text-gray-600">Danh sách dự án</li>
        </ul>
      </div>
      {/* card  */}
      <Card>
        {/* Header Card  */}
        <div className="flex justify-between items-center bg-secondary_700 text-white p-4 rounded-t-lg overflow-hidden">
          <h2 className="text-2xl">Danh sách dự án</h2>
          <div className="flex">
            <button className="bg-blue-500 hover:bg-blue-700 py-[6px] px-[16px] rounded min-w-[64px]">Thêm dự án</button>
          </div>
        </div>
        {/* filter  */}
        <ProjectsFilter />

      </Card>
      <div className="py-2 px-3">
        <Tabs>
          <div className="grid p-4">
            <table className="table table-auto hover:table-fixed">
              <thead >
                <tr className="bg-[#e5e5e5]  table-row align-middle">
                  <td className="table-col font-bold">STT</td>
                  <td className="table-col font-bold">ID</td>
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
                {Array.isArray(data) && data.length ?data?.map((col: IProject, index) => (
                  <tr>
                    <td className="table-col">
                      #{index + 1}
                    </td>
                    <td className="table-col">
                      <Link href={`/project/123`} className='text-primary_700'>
                        {col.id}
                      </Link>
                    </td>
                    <td className="table-col">{col.projectName}</td>
                    <td className="table-col">{col.categoryName}</td>
                    <td className="table-col">{col.alias}</td>
                    <td className="table-col">{col.creator.name}</td>
                    <td className="table-col">
                      <ul>
                        {col.members?.map((member) => (
                          <li>{member.name}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="table-col">{col.description}</td>
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
                )): <tr>
                <td colSpan={9} className="text-center  py-4">
                  <div className="text-gray-500 text-lg">Không có dữ liệu</div>
                </td>
              </tr>
                  }
              </tbody>
            </table>
            {dataTable?.length ? <Pagination
              total={dataTable?.length || 0}
              currentPage={page} handleChangePage={(page: number) => search('page', page)}
              productTitle="Dự án"
              limit={10}
            /> : null}
          </div>
        </Tabs>
      </div>
      {isLoading && <Loading />}
    </div>
  )
}
