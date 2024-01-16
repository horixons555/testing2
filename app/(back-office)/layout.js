import React from 'react'
import "../../styles/globals.css"
import Sidebar from '../../components/back-office/Sidebar';
import Navbar from './../../components/back-office/Navbar';
import Image from 'next/image';

export default function Layout({ children }) {
    return (
        <div className="flex gap-5 p-2 w-full relative min-h-screen">

            <div className='width myborder bg-black backdrop-blur-xl bg-opacity-50 rounded-lg px-3'>
                <Sidebar />
            </div>

            <div className='w-full'>

                <div className='myborder bg-black backdrop-blur-xl bg-opacity-50 rounded-lg px-10 flex items-center justify-center h-20'>
                    <Navbar />
                </div>

                <main className='mt-5 myborder bg-black rounded-lg p-5 backdrop-blur-lg bg-opacity-50 pr-5 overflow-y-scroll myheight'>{children}</main>

            </div>


            <div className='absolute left-0 top-0 w-full  h-screen bg-red-200 -z-10'>
                <Image src={"/bg.jpg"} fill />
            </div>
        </div>
    )
}
