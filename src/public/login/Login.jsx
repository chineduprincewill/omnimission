import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../apis/authActions';
import ButtonLoader from '../../common/ButtonLoader';

const Login = () => {

    const navigate = useNavigate();
    const [error, setError] = useState();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loggingIn, setLoggingIn] = useState(false);
    const [success, setSuccess] = useState();

    const handleLogin = (e) => {
        e.preventDefault();

        const data = {
            email, password
        }

        loginUser(data, setSuccess, setError, setLoggingIn);
    }

    if(success){
        localStorage.setItem('token', JSON.stringify(success?.access_token));
        localStorage.setItem('user', JSON.stringify(success?.user));
        navigate('/dashboard')
        window.location.reload();
    }

    return (
        <div>
            <div className='w-full h-screen m-0 p-8 flex gap-8'>
                <div className='w-full md:w-[44%] hidden md:flex h-full justify-center items-center'>
                    <img src='/assets/logo-xl.png' alt='logo-big' />
                </div>
                <div className="w-full md:w-[50%] h-full flex justify-center items-center rounded-md bg-gray-100">
                    <div className='w-[95%] md:w-[80%] grid gap-6 px-2 md:p-0 z-10'>
                        <div className='w-full grid my-4 gap-4'>
                            <Link to='/' className='flex items-center gap-2'>
                                <img src='/assets/logo-sm.png' alt='logo-small' width='25px' />
                                <span className='text-primary uppercase font-urbanist font-bold'>omnimission</span>
                            </Link>
                            <div className='grid'>
                                <span className='text-primary text-2xl font-urbanist font-semibold'>Welcome Back!</span>
                                <span className='font-urbanist'>Sign in to stay connected with your community, Access your dashboard, connect with your fellow members, and be part of something greater.</span>
                            </div>
                            <form onSubmit={handleLogin} className='grid gap-3'>
                                {
                                    error && <span className='font-urbanist text-warning'>{error?.message}</span>
                                }
                                <div className='w-full grid gap-1'>
                                    <label className='text-sm text-success'>Email</label>
                                    <input 
                                        type='email'
                                        className='w-full px-3 py-2 bg-white border-b border-gray-400'
                                        placeholder='Enter your email account'
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className='w-full grid gap-1'>
                                    <label className='text-sm text-success'>Password</label>
                                    <input 
                                        type='password'
                                        className='w-full px-3 py-2 bg-white border-b border-gray-400'
                                        placeholder='Enter your password'
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-1'>
                                        <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                        <span className='text-primary text-sm'>Remember me</span>
                                    </div>
                                    <Link to='/forgot-password' className='text-warning text-sm'>Forgot Password?</Link>
                                </div>
                                <div className='w-full'>
                                    <button 
                                        className='w-full rounded-md p-3 bg-success hover:bg-[#228686] text-white text-sm'
                                    >
                                    {
                                        loggingIn ? 
                                            <ButtonLoader />
                                            : 'Login'
                                    }
                                    </button>
                                </div>
                            </form>
                            <div className='w-full border-t border-gray-300 my-6'></div>
                            <div className='flex items-center gap-1'>
                                <span className='text-xs text-primary'>No account yet?</span>
                                <Link to='/register' className='text-xs text-success'>Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full fixed top-0 h-screen m-0 bg-[url("/assets/bg-img.png")] bg-cover opacity-10'></div>
        </div>
    )
}

export default Login