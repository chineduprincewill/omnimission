import React, { useState } from 'react'

const CreateBranch = () => {

    const [active, setActive] = useState('basic-branch-information');

    const tabarray = [
        'basic-branch-information',
        'branch-leadership-&-roles',
        'contact-information',
        'add-branch-members'
    ]

    return (
        <div className='w-full grid gap-4'>
            <div className='grid p-2 gap-2'>
                <span className='text-xl font-semibold capitalize'>Create Branch</span>
                <span className='text-sm'>Input the details of the branch you want to create.</span>
            </div>
            <div className='w-full flex gap-8 px-2 items-start'>
                <div className='w-full grid md:w-1/5 bg-white p-2 text-sm font-semibold border border-gray-200'>
                {
                    tabarray.map((tab, index) => (
                        <div 
                            key={index}
                            className={`w-full p-2 font-urbanist cursor-pointer hover:bg-gray-200 ${active === tab && 'bg-gray-200'} capitalize`}
                            onClick={() => setActive(tab)}
                        >
                        {
                            tab.replaceAll('-', ' ')
                        }
                        </div>
                    ))
                }
                </div>
                <div className='grid w-full md:w-3/5 bg-white'>
                    <h1 className='w-full font-urbanist font-extralight text-lg px-4 py-1 capitalize'>
                    {active.replaceAll('-', ' ')}
                    </h1>
                    <div className='grid gap-3 w-full p-4'>
                        <div className='flex items-start justify-between'>
                            <div className='grid w-full md:w-[48.5%] gap-2'>
                                <span className='text-sm'>Branch name</span>
                                <input 
                                    type='text'
                                    className='p-2 bg-gray-100 border-b border-gray-300'
                                />
                            </div>
                            <div className='grid w-full md:w-[48.5%] gap-2'>
                                <span className='text-sm'>Branch type</span>
                                <select 
                                    className='p-2 bg-gray-100 border-b border-gray-300'
                                >
                                    <option value='Branch'>Branch</option>
                                    <option value='Fellowship'>Fellowship</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex items-start justify-between'>
                            <div className='grid w-full md:w-[48.5%] gap-2'>
                                <span className='text-sm'>Address</span>
                                <textarea 
                                    type='text'
                                    rows='3'
                                    className='p-2 bg-gray-100 border-b border-gray-300'
                                    placeholder='Enter branch address...'
                                />
                            </div>
                            <div className='grid w-full md:w-[48.5%] gap-2'>
                                <span className='text-sm'>Location/City</span>
                                <input 
                                    type='text'
                                    className='p-2 bg-gray-100 border-b border-gray-300'
                                    placeholder='Enter branch location'
                                />
                            </div>
                        </div>
                        <div className='flex items-start justify-between'>
                            <div className='grid w-full md:w-[48.5%] gap-2'>
                                <span className='text-sm'>LGA</span>
                                <select 
                                    className='p-2 bg-gray-100 border-b border-gray-300'
                                >
                                    <option value=''>Select your LGA</option>
                                </select>
                            </div>
                            <div className='grid w-full md:w-[48.5%] gap-2'>
                                <span className='text-sm'>Country</span>
                                <select 
                                    className='p-2 bg-gray-100 border-b border-gray-300'
                                >
                                    <option value=''>Select your country</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex items-start justify-between'>
                            <div className='grid w-full md:w-[48.5%] gap-2'>
                                <span className='text-sm'>State</span>
                                <select 
                                    className='p-2 bg-gray-100 border-b border-gray-300'
                                >
                                    <option value=''>Select your state</option>
                                </select>
                            </div>
                            <div className='grid w-full md:w-[48.5%] gap-2'>
                                <span className='text-sm text-white'>...</span>
                                <div className='flex items-start gap-4 mt-2'>
                                    <span className='text-sm'>Status</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full bg-gray-100 flex justify-between pt-4'>
                        <button className='p-2.5 rounded-md text-sm bg-white border border-gray-300'>Cancel</button>
                        <button className='py-2.5 px-4 rounded-md text-sm bg-success text-white'>Save and Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateBranch