import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ButtonLoader from '../../common/ButtonLoader';
import { forgotPassword } from '../../apis/authActions';

const ForgetPassword = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [success, setSuccess] = useState();
    const [error, setError] = useState();
    const [submitting, setSubmitting] = useState();

    const submitHandler = (e) => {
        e.preventDefault();

        const data = { email }

        forgotPassword(data, setSuccess, setError, setSubmitting);
    }

    if(success){
        navigate('/reset-link')
    }

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
                        <div className='w-full grid justify-center'>
                            <span className='mx-auto text-primary text-xl font-urbanist font-semibold'>Forgotten Your Password?</span>
                            <span className='text-xs text-gray-600 text-center'>There is nothing to worry about, we'll send you a message to help you reset your password.</span>
                        </div>
                        <form onSubmit={submitHandler} className='grid gap-3'>
                            <div className='w-full grid gap-1'>
                                <label className='text-sm text-success'>Email</label>
                                <input 
                                    type='email'
                                    className='w-full px-3 py-2 bg-white border-b border-gray-400'
                                    placeholder='Enter your email address'
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='w-full'>
                                <button className='w-full rounded-md p-3 bg-success hover:bg-[#228686] text-white text-sm'>
                                {
                                    submitting ?
                                        <ButtonLoader />:
                                        'Submit'
                                }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='w-full fixed top-0 h-screen m-0 bg-[url("/assets/bg-img.png")] bg-cover opacity-10'></div>
        </div>
    )
}

export default ForgetPassword