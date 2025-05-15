import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { verifyOtp } from '../../apis/authActions';
import ButtonLoader from '../../common/ButtonLoader';

const EmailVerification = () => {

    const navigate = useNavigate();
    const [otp, setOtp] = useState();
    const [success, setSuccess] = useState();
    const [error, setError] = useState();
    const [verifying, setVerifying] = useState(false);
    const email = JSON.parse(localStorage.getItem('user'))?.email;

    const handleVerify = (e) => {
        e.preventDefault();

        const data = {
            email, otp
        }
        verifyOtp(data, setSuccess, setError, setVerifying)
    }

    if(success){
        localStorage.setItem('token', JSON.stringify(success?.access_token));
        localStorage.setItem('user', JSON.stringify(success?.user));
        navigate('/signup-success')
    }

    if(error){
        setTimeout(() => setError(), 5000)
    }

    return (
        <div>
            <div className='w-full h-screen m-0 p-8 flex gap-8'>
                <div className="w-full h-full flex justify-center items-center rounded-md ">
                    <div className='w-full md:w-[35%] grid z-10 bg-gray-100 p-6 md:p-12 gap-4'>
                        <div className='w-full flex justify-center'>
                            <Link to='/' className='flex items-center gap-2'>
                                <img src='/assets/logo-sm.png' alt='logo-small' width='20px' />
                                <span className='text-primary uppercase font-urbanist font-bold text-sm'>omnimission</span>
                            </Link>
                        </div>
                        <div className='w-full grid justify-center'>
                            <span className='mx-auto text-primary text-xl font-urbanist font-semibold'>Email Verification</span>
                            <span className='text-xs text-gray-600 text-center'>We’ve sent an One Time Passcode (OTP) to your email account. Check your inbox (and spam folder) and enter the OTP here to activate your account.</span>
                        </div>
                        {
                            error && <span className='text-xs font-urbanist text-warning'>{error?.message}</span>
                        }
                        <form onSubmit={handleVerify} className='grid gap-3'>
                            <div className='w-full grid gap-1'>
                                <label className='text-sm text-success'>One Time Passcode</label>
                                <input 
                                    type='number'
                                    className='w-full px-3 py-2 bg-white border-b border-gray-400'
                                    placeholder='Enter OTP'
                                    onChange={(e) => setOtp(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='w-full'>
                                <button className='w-full rounded-md p-2 bg-success hover:bg-[#228686] text-white text-sm'>
                                {
                                    verifying ? 
                                    <ButtonLoader />
                                    : 'Verify email'
                                }  
                                </button>
                            </div>
                            <div className='w-full'>
                                <div 
                                    className='w-full flex justify-center rounded-md p-2 bg-white hover:bg-gray-200 text-primary text-sm border border-gray-400 cursor-pointer'
                                    onClick={() => navigate('/signup-success')}
                                >
                                    Skip for now
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='w-full fixed top-0 h-screen m-0 bg-[url("/assets/bg-img.png")] bg-cover opacity-10'></div>
        </div>
    )
}

export default EmailVerification