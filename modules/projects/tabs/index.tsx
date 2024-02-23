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

    const router = useRouter()
    const params = useSearchParams();
    const pathname = usePathname();


    const onChangeTab = (id: number) => {
        const newParams = new URLSearchParams(params.toString());
        if (id) {
            newParams.set('category', String(id));
        }else{
            newParams.delete('category')
        }
        tabActive !== id && setTabActive(id)
        router.push(`${pathname}?${newParams.toString()}`);
    }

    return (
        <div>
            <Tab.Group >
                <Tab.List >
                    {CONTENT.map((tab: IProjectCategory) => (
                        <Tab className={classNames('px-2 border-b-2 border-b-transparent',{' border-b-primary_700 transition-all': tabActive === tab.id})} onClick={() => onChangeTab(tab.id)} key={tab.id} value={tab.id}>
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
