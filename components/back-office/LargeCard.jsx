import React from 'react';
import { TbAdjustmentsDollar } from "react-icons/tb";
import { FaArrowDown } from "react-icons/fa6";
import Image from 'next/image';

export default function LargeCard({ data }) {
    return (
        <div className={`${data.className} ${data.textColor} ${data.bgColor} myborder rounded-xl p-5 flex flex-col items-center justify-center`}>
            {/* <TbAdjustmentsDollar size={30} /> */}
            <Image src="/money.svg" className='text-white' width={30} height={30} />
            <h1 className='text-lg mt-2 font-bold'>{data.title}</h1>
            <FaArrowDown className='my-2 text-white' color='white' size={15} />
            <h1 className='text-2xl font-bold'>PKR. {data.sales}</h1>
        </div>
    )
}
