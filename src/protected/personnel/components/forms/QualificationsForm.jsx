import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { AppContext } from '../../../../context/AppContext';
import { countIntegerDigits } from '../../../../apis/functions';

const QualificationsForm = ({ view, setView }) => {

    const { token } = useContext(AppContext);
    const [saving, setSaving] = useState(false);
    const [qualification_type, setQualification_type] = useState();
    const [institution_attended, setInstitution_attended] = useState();
    const [grade, setGrade] = useState();
    const [year_obtained, setYear_obtained] = useState();
            
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        if(countIntegerDigits(year_obtained) > 4){
            alert('Year out of range!');
            setYear_obtained(Math.floor(year_obtained / 10));
        }
    }, [year_obtained])

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
                        placeholder='Qualification type'
                        onChange={(e) => setQualification_type(e.target.value)}
                        required
                    />
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Institution attended'
                        onChange={(e) => setInstitution_attended(e.target.value)}
                        required

                    />
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Grade'
                        onChange={(e) => setGrade(e.target.value)}
                        required
                    />
                    <input 
                        type='number'
                        value={year_obtained}
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Year obtained'
                        onChange={(e) => setYear_obtained(e.target.value)}
                        required
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
                    >
                        Finish
                    </div>
                </div>
            </form>
        </div>
    )
}

export default QualificationsForm