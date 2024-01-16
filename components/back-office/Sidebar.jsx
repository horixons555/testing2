import Link from 'next/link';
import React from 'react'


export default function Sidebar() {
    return (
        <div>
            <Link href="#" className="block text-lg font-bold text-yellow-500 ml-2 my-5">HORIXONS</Link>
            <div className='flex flex-col gap-y-3'>
                <Link
                    href="#"
                    className='bg-white/15 px-2 py-2 rounded-lg hover:bg-white hover:text-black duration-500 hover:font-medium'>Dashboard</Link>
                <Link
                    href="#"
                    className='bg-white/15 px-2 py-2 rounded-lg hover:bg-white hover:text-black duration-500 hover:font-medium'>Catalogue</Link>
                <Link
                    href="#"
                    className='bg-white/15 px-2 py-2 rounded-lg hover:bg-white hover:text-black duration-500 hover:font-medium'>Customers</Link>
                <Link
                    href="#"
                    className='bg-white/15 px-2 py-2 rounded-lg hover:bg-white hover:text-black duration-500 hover:font-medium'>Markets</Link>
                <Link
                    href="#"
                    className='bg-white/15 px-2 py-2 rounded-lg hover:bg-white hover:text-black duration-500 hover:font-medium'>Farmers</Link>
                <Link
                    href="#"
                    className='bg-white/15 px-2 py-2 rounded-lg hover:bg-white hover:text-black duration-500 hover:font-medium'>Orders</Link>
                <Link
                    href="#"
                    className='bg-white/15 px-2 py-2 rounded-lg hover:bg-white hover:text-black duration-500 hover:font-medium'>Staff</Link>
                <Link
                    href="#"
                    className='bg-white/15 px-2 py-2 rounded-lg hover:bg-white hover:text-black duration-500 hover:font-medium'>Settings</Link>
                <Link
                    href="#"
                    className='bg-white/15 px-2 py-2 rounded-lg hover:bg-white hover:text-black duration-500 hover:font-medium'>Online Store</Link>
            </div>
        </div>
    );
}
