import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const SignupSuccess = () => {
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
                            <span className='mx-auto text-successalert text-xl font-urbanist font-semibold capitalize'>welcome aboard!</span>
                            <span className='text-xs text-gray-600 text-center font-urbanist'>Your account has been created successfully. You’re now part of a growing community where connection, purpose, and service come together.</span>
                        </div>
                        <span className='text-xs text-warning text-center font-urbanist'>Your profile is live</span>
                        <div className='w-full flex justify-center'>
                            <button className='max-w-max rounded-md px-8 py-2 bg-white hover:bg-gray-50 text-primary text-sm border border-gray-400 mx-auto'>Go to Dashboard</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full fixed top-0 h-screen m-0 bg-[url("/assets/bg-img.png")] bg-cover opacity-10'></div>
        </div>
    )
}

export default SignupSuccess