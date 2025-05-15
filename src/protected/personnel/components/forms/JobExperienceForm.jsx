import React, { useContext, useState } from 'react'
import { AppContext } from '../../../../context/AppContext';

const JobExperienceForm = ({ view, setView }) => {

    const { token } = useContext(AppContext);
    const [saving, setSaving] = useState(false);
    const [organization_name, setOrganization_name] = useState();
    const [position, setPosition] = useState();
    const [start_date, setStart_date] = useState();
    const [end_date, setEnd_date] = useState();
    const [is_current, setIs_current] = useState();
    const [responsibilities, setResponsibilities] = useState();
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='w-full'>
            <h1 className='text-2xl font-extralight capitalize py-2 border-b border-gray-300 dark:border-gray-700 mb-4'>
            {view.replace("_", " ")}
            </h1>
            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4'>
                <div className='w-full grid md:flex md:flex-wrap md:gap-4 space-y-4 md:space-y-0 items-center'>
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Organization'
                        onChange={(e) => setOrganization_name(e.target.value)}
                    />
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Position'
                        onChange={(e) => setPosition(e.target.value)}
                    />
                    <div className='grid w-full md:w-[48%]'>
                        <span className={`${start_date ? 'hidden' : 'block'} w-1/2 bg-gray-100 dark:bg-gray-800 p-2 z-10 border-t border-l dark:border-gray-700 rounded-l-md text-gray-400`}>Start date</span>
                        <input 
                            type='date'
                            className={`${!start_date && 'mt-[-40px]'} w-full p-2 rounded-md border dark:border-gray-700 bg-transparent`}
                            onChange={(e) => setStart_date(e.target.value)}
                            required
                        />
                    </div>
                    <div className='grid w-full md:w-[48%]'>
                        <span className={`${end_date ? 'hidden' : 'block'} w-1/2 bg-gray-100 dark:bg-gray-800 p-2 z-10 border-t border-l dark:border-gray-700 rounded-l-md text-gray-400`}>End date</span>
                        <input 
                            type='date'
                            className={`${!end_date && 'mt-[-40px]'} w-full p-2 rounded-md border dark:border-gray-700 bg-transparent`}
                            onChange={(e) => setEnd_date(e.target.value)}
                            required
                        />
                    </div>
                    <select 
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        onChange={(e) => setIs_current(e.target.value)}
                    >
                        <option className='dark:bg-gray-800 dark:text-white' value="">Currently an employee?</option>
                        <option className='dark:bg-gray-800 dark:text-white' value="yes">yes</option>
                        <option className='dark:bg-gray-800 dark:text-white' value="no">no</option>
                    </select>
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Responsibilities'
                        onChange={(e) => setResponsibilities(e.target.value)}
                    />
                </div>
                <div className='pt-4 flex items-center gap-4'>
                    <button
                        className={`flex justify-center px-12 py-2 rounded-md bg-[#ffaa00] hover:bg-[#7a5b1e] text-black`}
                    >
                        {
                            saving ? 
                                <AiOutlineLoading3Quarters size={24} className='animate-spin' /> : 'Save'
                        }
                    </button>
                    <div 
                        className="flex justify-center items-center px-4 py-2 rounded-md border border-[#ffaa00] hover:bg-gray-300 dark:hover:bg-gray-700 text-black dark:text-[#ffaa00] cursor-pointer"
                        onClick={() => setView('bank_detail')}
                    >
                        Next
                    </div>
                </div>
            </form>
        </div>
    )
}

export default JobExperienceForm