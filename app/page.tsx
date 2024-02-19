"use client"

import { CLientLayout, DelIcon, EditIcon, Pagination } from "@/components"
import { LinkPage } from "@/constants"
import Link from "next/link"

export default function Home() {

  return (
    <CLientLayout>
      <div className="">
        <div className="bg-[#eeeeee] py-2 px-3">
          <ul className="flex">
            <li><Link className="text-primary_700" href={LinkPage.projects}>
              Trang chủ</Link> </li> <span className="px-2">/</span>
            <li className="text-gray-600">Danh sách dự án</li>
          </ul>
        </div>
        <div className="flex justify-between items-center">
          <h2>Danh sách dự án</h2>
          <div className="flex">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Thêm dự án</button>
          </div>
        </div>
        {/* search  */}
        <div className="">
          <form>
            <div>
              <input type="string" value="search project" />
            </div>
          </form>
        </div>
        {/* list  */}
        <div className="grid ">
          <table className="table-auto hover:table-fixed">
            <thead>
              <tr>
                <td>STT</td>
                <td>Tên dự án</td>
                <td>Tên danh mục</td>
                <td>Bí danh</td>
                <td>Người tạo</td>
                <td>Thành viên</td>
                <td>Mô tả</td>
                <td>Thao tác</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  1
                </td>
                <td>
                  <Link href={`/projects/123`}>
                    Internal accounting
                  </Link>
                </td>
                <td>Website</td>
                <td>1233</td>
                <td>Truong</td>
                <td>
                  <ul>
                    <li>
                      truong
                    </li>
                    <li>
                      vy
                    </li>
                  </ul>
                </td>
                <td>mo ta ....</td>
                <td>
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
          {/* empty */}
          <div>

          </div>
          <Pagination className={"col-span-3"} />
        </div>
      </div>
    </CLientLayout>

  )
}
