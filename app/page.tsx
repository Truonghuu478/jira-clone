"use client"
export default function Home() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2>Danh sách dự án</h2>
        <div className="flex">
          <button>Thêm dự án</button>
        </div>
      </div>
      {/* search  */}
      <div className="">
          <input type="string"/>
      </div>
      {/* list  */}
      <div>
        <table>
          <thead>
              <tr>
                <td>STT</td>
                <td>projectName</td>
                <td>categoryName</td>
                <td>alias</td>
                <td>creator</td>
                <td>members</td>
                <td>members</td>
                <td>description</td>
                <td></td>


                

              </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    </div>
  )
}
