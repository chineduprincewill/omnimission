import React, { useContext, useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { CiSearch } from 'react-icons/ci';
import { BiComment } from 'react-icons/bi';
import { GoBell } from 'react-icons/go';

const Header = ({ toggleSidebar }) => {

    const { user } = useContext(AppContext);

    return (
        <header className='sticky w-full top-0 z-40 py-1 pr-4 border-b border-black'>
            <div className='w-full flex flex-grow items-center justify-between p-2 md:px-3 2xl:px-11'>
                <div className='flex md:hidden items-center space-x-3'>   
                    <RxHamburgerMenu size={25} className='text-success cursor-pointer' onClick={toggleSidebar} />
                    <div className='text-xl font-bold hidden md:block md:pl-[180px] capitalize'>{}</div>
                </div>
                <div className='w-full flex items-center justify-between'>
                    <div className='hidden md:grid gap-1 px-4 font-urbanist ml-0 md:ml-[230px]'>
                        <h1 className='text-3xl'>Branch Management.</h1>
                        <span className='text-xs'>We have personalised your experience</span>
                    </div>
                    <div className='flex items-center gap-2 md:gap-4 text-sm'>
                        <div className='flex items-center ml-4 md:ml-0'>
                            <div className='rounded-l-full bg-gray-300 p-2'>
                                <CiSearch size={20} className='text-gray-700' />
                            </div>
                            <input 
                                type='text' 
                                className='p-2 rounded-r-full bg-gray-300 text-gray-500'
                                placeholder='Search for anything'
                            />
                        </div>
                        <div className='border border-gray-200 p-2 rounded-full'><BiComment size={17} /></div>
                        <div className='border border-gray-200 p-2 rounded-full'><GoBell size={17} /></div>
                        <div className='h-6 border-x border-gray-400 hidden md:block'></div>
                        <img src='/assets/userimg.png' alt='user image' width='40px' className='hidden md:block' />
                        <div className='hidden md:grid'>
                            <span className='text-sm'>{user && user?.name}</span>
                            <span className='text-xs'>{user && user?.role ? user?.role : 'User'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header