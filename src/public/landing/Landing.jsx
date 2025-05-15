import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div>
            <div className='w-full h-screen m-0 p-8 flex justify-between'>
                <div className="w-full md:w-[54%] h-full flex justify-center items-center rounded-md bg-gray-100">
                    <div className='w-[95%] md:w-[80%] grid gap-6 px-2 md:p-0 z-10'>
                        <img src='/assets/logo-sm.png' alt='logo-small' width='80px' />
                        <span className='text-2xl md:text-4xl text-[#007676] font-roboto'>Welcome to the Family!</span>
                        <div className='grid'>
                            <span className='text-5xl md:text-7xl text-[#1E3A8A] uppercase font-urbanist font-bold'>omnimission</span>
                            <span className='text-sm md:text-lg text-[#1E3A8A] font-urbanist italic leading-tight md:font-semibold'>A vibrant community where every member matters. <br />Let’s get you connected, equipped, and engaged.</span>
                        </div>
                        <div className='w-full bg-[#152962] p-6 mt-2'>
                            <span className='text-white font-semibold leading-tight md:text-xl'>Already a member? <Link to='/login' className='italic text-blue-100 font-normal underline'>Log in to continue</Link> <br />New here? <Link to='/register' className='italic text-blue-100 font-normal underline'>Create your account and let’s begin!</Link></span>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-[44%] hidden md:flex h-full justify-center items-center'>
                    <img src='/assets/logo-xl.png' alt='logo-big' />
                </div>
            </div>
            <div className='w-full fixed top-0 h-screen m-0 bg-[url("/assets/bg-img.png")] bg-cover opacity-10'></div>
        </div>
    )
}

export default Landing