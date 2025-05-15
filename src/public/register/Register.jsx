import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../../apis/authActions';
import ButtonLoader from '../../common/ButtonLoader';

const Register = () => {

    const navigate = useNavigate();
    const [error, setError] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [registering, setRegistering] = useState(false);
    const [password_confirmation, setPassword_confirmation] = useState();
    const [isDisabled, setIsDisabled] = useState(true);
    const [success, setSuccess] = useState();
    const passwordRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/i;

    const handleRegister = (e) => {
        e.preventDefault();

        if(!error){
            const data = {
                name, email, password, password_confirmation
            }

            registerUser(data, setSuccess, setError, setRegistering)
        }
    }

    if(success){
        localStorage.setItem('token', JSON.stringify(success?.access_token));
        localStorage.setItem('user', JSON.stringify(success?.user));
        navigate('/email-verification')
    }

    if(error){
        setTimeout(() => setError(), 5000)
    }

    useEffect(() => {
        password && !passwordRegex.test(password) ? 
            setError('It must be a combination of minimum 8 letters, numbers, and symbols.'):
            setError();
    }, [password])

    useEffect(() => {
        password_confirmation && password_confirmation !== password ?
            setError('Password does not match'):
            setError();
    }, [password_confirmation])

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
                                <span className='text-primary text-2xl font-urbanist font-semibold'>Join Our Community</span>
                                <span className='font-urbanist'>Create your account to access personalised updates, join group, volunteer, and stay engaged with everything happening in our community.</span>
                            </div>
                            <form onSubmit={handleRegister} className='grid gap-4'>
                                <div className='w-full flex items-center gap-2'>
                                    <div className='w-full grid gap-1'>
                                        <label className='w-[49%] text-sm text-success'>Name</label>
                                        <input 
                                            type='text'
                                            className='w-full px-3 py-2 bg-white border-b border-gray-400'
                                            placeholder='Enter your first name'
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className='w-full grid gap-1'>
                                        <label className='w-[49%] text-sm text-success'>Email</label>
                                        <input 
                                            type='email'
                                            className='w-full px-3 py-2 bg-white border-b border-gray-400'
                                            placeholder='Enter your email'
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='w-full grid gap-1'>
                                    <div className='w-full flex items-center gap-2'>
                                        <div className='w-full grid gap-1'>
                                            <label className='w-[49%] text-sm text-success'>Password</label>
                                            <input 
                                                type='password'
                                                className='w-full px-3 py-2 bg-white border-b border-gray-400'
                                                placeholder='Enter your password'
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className='w-full grid gap-1'>
                                            <label className='w-[49%] text-sm text-success'>Confirm Password</label>
                                            <input 
                                                type='password'
                                                className='w-full px-3 py-2 bg-white border-b border-gray-400'
                                                placeholder='Confirm your password'
                                                onChange={(e) => setPassword_confirmation(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                {
                                    error && <span className='text-xs font-urbanist text-warning'>{error}</span>
                                }
                                </div>
                                <div className='w-full'>
                                    <button 
                                        className={`w-full flex justify-center rounded-md p-3 bg-success hover:bg-[#228686] text-white text-sm ${registering && 'animate-pulse'}`}
                                        disabled={registering && isDisabled}
                                    >
                                    {
                                        registering ? 
                                        <ButtonLoader />
                                        : 'Sign Up'
                                    }
                                    </button>
                                </div>
                            </form>
                            <div className='w-full border-t border-gray-300 my-6'></div>
                            <div className='flex items-center gap-1'>
                                <span className='text-xs text-primary'>Already have an account?</span>
                                <Link to='/login' className='text-xs text-success'>Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full fixed top-0 h-screen m-0 bg-[url("/assets/bg-img.png")] bg-cover opacity-10'></div>
        </div>
    )
}

export default Register