import React, { Fragment, useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { AppContext } from '../../context/AppContext'
import { useLocation, useNavigate } from 'react-router-dom'
import Navlinks2 from './Navlinks2'
import { PiUserCircleLight } from 'react-icons/pi'
import { FiLogOut, FiPower } from 'react-icons/fi'

const Sidebar = ({ toggleSidebar, navOpen }) => {

    const { user, logout } = useContext(AppContext);
    const locatn = useLocation();
    const navigate = useNavigate();

    return (
        <Fragment>
            <div 
                className={navOpen ? 'fixed inset-0 z-50 mt-0 bg-black bg-opacity-50 transition-opacity md:hidden' : ''}
                onClick={toggleSidebar}
            ></div>
            <div className={`absolute left-0 top-0 z-50 ${navOpen ? 'block w-[230px]' : 'hidden'} md:flex flex-col md:w-[230px] h-screen overflow-y-hidden duration-300 ease-linear bg-darkprimary`}>
                <div className='flex justify-end mt-4 md:hidden px-6'>
                    <AiOutlineClose size={22} className='text-success cursor-pointer' onClick={toggleSidebar} />
                </div>
                <div className='w-full py-2.5 px-4 mb-2'>
                    <div className='w-full flex items-center gap-2'>
                        <img src='/assets/logo-white.png' alt='logo' width='25px' />
                        <span className='font-urbanist uppercase text-white'>omnimission</span>
                    </div>
                </div>
                <div className='w-full flex flex-col px-3 grow'>
                    <div className='w-full flex md:hidden justify-center items-center gap-1 my-2 text-white'>
                        <PiUserCircleLight size={50} />
                        <div className='grid text-xs space-y-1'>
                            <span>{user && user?.username}</span>
                        </div>
                    </div>
                    <div className='grow mt-0 md:mt-6'>
                        <Navlinks2 />
                    </div>
                </div>
                <div className="p-4">
                    <div 
                        className='w-full rounded-md flex items-center gap-3 p-2 bg-white cursor-pointer'
                        onClick={() => logout()}
                    >
                        <FiPower size={17} />
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Sidebar