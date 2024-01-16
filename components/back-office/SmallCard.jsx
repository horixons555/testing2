import React from 'react'
import { TbBasket } from 'react-icons/tb'

export default function SmallCard({ data }) {
    const { title, numbers, iconColor, bgColor, icons } = data;
    return (
        <div className='myborder rounded-lg flex px-3 py-1.5 items-center'>
            <div className={`mr-3 w-16 h-16 flex rounded-full items-center justify-center ${bgColor}`}>
                <data.icons size={25} className={`${data.iconColor}`} />
            </div>
            <div>
                <h1 className="text-lg font-medium">{title}</h1>
                <h1 className="text-xl font-semibold">{numbers}</h1>
            </div>
        </div>
    )
}
