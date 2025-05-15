import React, { useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const BiometricDataForm = ({ view, setView }) => {

    const [saving, setSaving] = useState(false);
            
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
                        onClick={() => setView('personnel_photos')}
                    >
                        Next
                    </div>
                </div>
            </form>
        </div>
    )
}

export default BiometricDataForm