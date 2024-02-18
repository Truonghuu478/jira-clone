"use client"

import { Pagination } from "@/components"
import Link from "next/link"

export default function Home() {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h2>Danh sách dự án</h2>
        <div className="flex">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Thêm dự án</button>
        </div>
      </div>
      {/* search  */}
      <div className="">
        <input type="string" value="search project"/>
      </div>
      {/* list  */}
      <div className="grid">
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
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Xoá
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
                    Sửa
                  </button>
                </div>
              </td>

            </tr>


          </tbody>
        </table>
        {/* empty */}
        <div>
          
        </div>
        <Pagination className={"col-span-3"}/>
      </div>
    </div>
  )
}
