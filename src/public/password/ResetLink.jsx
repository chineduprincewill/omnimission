import React, { useState } from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const ResetLink = () => {

    const [error, setError] = useState('If you don’t receive the email within a few minutes, try resending or contact support.');
    
    return (
        <div>
            <div className='w-full h-screen m-0 p-8 flex gap-8'>
                <div className="w-full h-full flex justify-center items-center rounded-md ">
                    <div className='w-[95%] md:w-[35%] grid z-10 bg-gray-100 p-12 gap-4'>
                        <div className='w-full flex justify-center'>
                            <Link to='/' className='flex items-center gap-2'>
                                <img src='/assets/logo-sm.png' alt='logo-small' width='20px' />
                                <span className='text-primary uppercase font-urbanist font-bold text-sm'>omnimission</span>
                            </Link>
                        </div>
                        <FiCheckCircle size={25} className='text-successalert mx-auto' />
                        <div className='w-full grid justify-center'>
                            <span className='mx-auto text-successalert text-xl font-urbanist font-semibold capitalize'>password reset link sent</span>
                            <span className='text-xs text-gray-600 text-center font-urbanist'>We've emailed you a link to reset your password. Please check your inbox (and spam folder) for the email and follow the instructions to set a new password.</span>
                        </div>
                        {error && <span className='text-[9px] text-warning text-center italic'>{error}</span>}
                        <div className='w-full flex justify-end items-center gap-4'>
                            <span className='cursor-pointer text-primary text-xs'>Resend Link</span>
                            <span className='cursor-pointer text-warning text-xs'>Contact Support</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full fixed top-0 h-screen m-0 bg-[url("/assets/bg-img.png")] bg-cover opacity-10'></div>
        </div>
    )
}

export default ResetLink