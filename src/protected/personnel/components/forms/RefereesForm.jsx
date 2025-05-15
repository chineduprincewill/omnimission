import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../../context/AppContext';
import { countIntegerDigits } from '../../../../apis/functions';

const RefereesForm = ({ view, setView }) => {
    
    const { token } = useContext(AppContext);
    const [saving, setSaving] = useState(false);
    const [title, setTitle] = useState();
    const [surname, setSurname] = useState();
    const [first_name, setFirst_name] = useState();
    const [middle_name, setMiddle_name] = useState();
    const [email, setEmail] = useState();
    const [phone_number, setPhone_number] = useState();
    const [relationship, setRelationship] = useState();
    const [occupation, setOccupation] = useState();
    const [years_known, setYears_known] = useState();
        
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        if(countIntegerDigits(years_known) > 2){
            alert('Years out of range!');
            setYears_known(Math.floor(years_known / 10));
        }
    }, [years_known])

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
                        placeholder='Title'
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Surname'
                        onChange={(e) => setSurname(e.target.value)}
                        required
                    />
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='First name'
                        onChange={(e) => setFirst_name(e.target.value)}
                        required
                    />
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Middle name'
                        onChange={(e) => setMiddle_name(e.target.value)}
                    />
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Phone number'
                        onChange={(e) => setPhone_number(e.target.value)}
                        required
                    />
                    <input 
                        type='email'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Relationship'
                        onChange={(e) => setRelationship(e.target.value)}
                        required
                    />
                    <input 
                        type='number'
                        value={years_known}
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Years known'
                        onChange={(e) => setYears_known(e.target.value)}
                        required
                    />
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Occupation'
                        onChange={(e) => setOccupation(e.target.value)}
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
                        onClick={() => setView('biometric_data')}
                    >
                        Next
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RefereesForm