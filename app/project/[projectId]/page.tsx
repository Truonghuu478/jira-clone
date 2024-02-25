import { CLientLayout } from '@/components';
import { ProjectDetail } from '@/modules';
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import React from 'react'

interface IProps{
    id? : any
}
  
export default function ProjectDetailPage(props:any) {
    // const check = generateStaticParams('123')
    const {params } = props
  return (
    <CLientLayout>
        <ProjectDetail projectId={params.projectId || null}/>
    </CLientLayout>
  )
}

ProjectDetailPage.getInitialProps = async (ctx:any)=>{
    const props:any = {}

    props.ctx = {...ctx}

    return props
}

// export async function generateStaticParams(id:string) {
//     const res = await fetch(`http://localhost:3000/project/${id}`).then((res) => res.json())
   
//     return res.json()
//   }