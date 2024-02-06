import { NextPage } from 'next'

interface IPage<props>{
  isDesktop:boolean,
  props:props
}
 const DetailPage:NextPage<any> = ()=> {
  return (
    <div>detaiD</div>
  )
}


export default DetailPage