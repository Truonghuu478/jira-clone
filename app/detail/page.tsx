import { JiraApp } from '@/templatess'
import { NextPage } from 'next'

interface IPage<props>{
isDesktop:boolean,
props:props
}
 const DetailPage:NextPage<any> = ()=> {
  return (
    <JiraApp>detaiD</JiraApp>
  )
}


export default DetailPage