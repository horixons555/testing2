import { Bell, MenuIcon, SunIcon, User } from 'lucide-react';
import React from 'react'

export default function Navbar() {
    return (
        <div className='flex w-full flex-row items-center justify-between'>
            <MenuIcon className='hover:bg-white/20 duration-300 w-12 cursor-pointer  h-12 p-3 rounded-full' />
            <div className='flex flex-row items-center gap-x-5'>
                <SunIcon className='hover:bg-white/20 duration-300 w-12 cursor-pointer  h-12 p-3 rounded-full' />
                <Bell className='hover:bg-white/20 duration-300 w-12  cursor-pointer h-12 p-3 rounded-full' />
                <User className='hover:bg-white/20 duration-300 w-12 cursor-pointer  h-12 p-3 rounded-full' />
            </div>
        </div>
    );
}
