import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'

const ResetSuccess = () => {

    const navigate = useNavigate()

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
                            <span className='mx-auto text-successalert text-xl font-urbanist font-semibold capitalize'>password updated successfully</span>
                            <span className='text-xs text-gray-600 text-center font-urbanist'>Your password has been updated successfully. You can now log in using your new credentials.</span>
                        </div>
                        <div className='w-full'>
                            <button 
                                className='w-full rounded-md p-3 bg-success hover:bg-[#228686] text-white text-sm'
                                onClick={() => navigate('/login')}
                            >
                                Login to your account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full fixed top-0 h-screen m-0 bg-[url("/assets/bg-img.png")] bg-cover opacity-10'></div>
        </div>
    )
}

export default ResetSuccess