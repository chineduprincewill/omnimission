import React, { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BsBriefcase } from 'react-icons/bs'
import { CiCreditCard1 } from 'react-icons/ci'
import { HiOutlineDocumentReport, HiOutlinePhotograph, HiUser, HiUsers } from 'react-icons/hi'
import PersonnelForms from './PersonnelForms'
import { HiOutlineIdentification } from 'react-icons/hi2'

const AddPersonnel = ({ title }) => {

    const [view, setView] = useState('personnel_information');

    return (
        <div className='w-full m-0'>
            <h1 className='text-lg capitalize'>{title}</h1>
            <div className='w-full my-6 grid grid-cols-8 md:grid-cols-4'>
                <div className='col-span-1 flex flex-col'>
                    <div className={`w-full flex items-center gap-4 cursor-pointer px-3 py-4 border-b border-gray-300 dark:border-gray-700 ${view === 'personnel_information' && 'dark:bg-gray-700 text-[#ffaa00]'}`} onClick={() => setView('personnel_information')}>
                        <AiOutlineUser size={20} />
                        <span className={`hidden md:block capitalize`}>personnel information</span>
                    </div>
                    <div className={`w-full flex items-center gap-4 cursor-pointer px-3 py-4 border-b border-gray-300 dark:border-gray-700 ${view === 'job_experience' && 'dark:bg-gray-700 text-[#ffaa00]'}`} onClick={() => setView('job_experience')}>
                        <BsBriefcase size={20} />
                        <span className={`hidden md:block capitalize`}>job experience</span>
                    </div>
                    <div className={`w-full flex items-center gap-4 cursor-pointer px-3 py-4 border-b border-gray-300 dark:border-gray-700 ${view === 'bank_detail' && 'dark:bg-gray-700 text-[#ffaa00]'}`} onClick={() => setView('bank_detail')}>
                        <CiCreditCard1 size={20} />
                        <span className={`hidden md:block capitalize`}>bank detail</span>
                    </div>
                    <div className={`w-full flex items-center gap-4 cursor-pointer px-3 py-4 border-b border-gray-300 dark:border-gray-700 ${view === 'next_of_kin' && 'dark:bg-gray-700 text-[#ffaa00]'}`} onClick={() => setView('next_of_kin')}>
                        <HiUser size={20} />
                        <span className={`hidden md:block capitalize`}>next of kin</span>
                    </div>
                    <div className={`w-full flex items-center gap-4 cursor-pointer px-3 py-4 border-b border-gray-300 dark:border-gray-700 ${view === 'referees' && 'dark:bg-gray-700 text-[#ffaa00]'}`} onClick={() => setView('referees')}>
                        <HiUsers size={20} />
                        <span className={`hidden md:block capitalize`}>referees</span>
                    </div>
                    <div className={`w-full flex items-center gap-4 cursor-pointer px-3 py-4 border-b border-gray-300 dark:border-gray-700 ${view === 'biometric_data' && 'dark:bg-gray-700 text-[#ffaa00]'}`} onClick={() => setView('biometric_data')}>
                        <HiOutlineIdentification size={20} />
                        <span className={`hidden md:block capitalize`}>biometric data</span>
                    </div>
                    <div className={`w-full flex items-center gap-4 cursor-pointer px-3 py-4 border-b border-gray-300 dark:border-gray-700 ${view === 'personnel_photos' && 'dark:bg-gray-700 text-[#ffaa00]'}`} onClick={() => setView('personnel_photos')}>
                        <HiOutlinePhotograph size={20} />
                        <span className={`hidden md:block capitalize`}>personnel photos</span>
                    </div>
                    <div className={`w-full flex items-center gap-4 cursor-pointer px-3 py-4 border-b border-gray-300 dark:border-gray-700 ${view === 'qualifications' && 'dark:bg-gray-700 text-[#ffaa00]'}`} onClick={() => setView('qualifications')}>
                        <HiOutlineDocumentReport size={20} />
                        <span className={`hidden md:block capitalize`}>qualifications</span>
                    </div>
                </div>
                <div className='col-span-7 md:col-span-3'>
                    <PersonnelForms view={view} setView={setView} />
                </div>
            </div>
        </div>
    )
}

export default AddPersonnel