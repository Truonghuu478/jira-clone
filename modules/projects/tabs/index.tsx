import React, { ReactNode, useState } from 'react'
import { CONTENT } from '@/constants';
import { IProjectCategory } from '@/models';
import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
interface IProps{
    children:ReactNode
}
export default function Tabs({ children }:IProps) {
    const [tabActive,setTabActive] = useState<number>(0)
    const pathname = usePathname()

    const router = useRouter()
    const params = useSearchParams();
    const newParams = new URLSearchParams(params.toString());

    const onChangeTab = (id: number) => {
        if (id) {
            newParams.set('category', String(id));
        }else{
            newParams.delete('category')
        }

        router.push(`/projects?${newParams.toString()}`)
        tabActive !== id && setTabActive(id)
    }

    return (
        <div>
            <Tab.Group >
                <Tab.List >
                    {CONTENT.map((tab: IProjectCategory) => (
                        <Tab className={classNames('px-2 border-b-2 transition-all',{' border-b-primary_700 ': tabActive === tab.id,'border-b-transparent':tabActive !== tab.id})} onClick={() => onChangeTab(tab.id)} key={tab.id} value={tab.id}>
                            <span className={"px-2 py-1 inline-block"}>
                                {tab.projectCategoryName}
                            </span>
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels>
                    {children}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
