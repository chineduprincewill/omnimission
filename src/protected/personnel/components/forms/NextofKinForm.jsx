import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { AppContext } from '../../../../context/AppContext';
import { countIntegerDigits } from '../../../../apis/functions';

const NextofKinForm = ({ view }) => {

    const { token } = useContext(AppContext);
    const [saving, setSaving] = useState(false);
    const [title, setTitle] = useState();
    const [surname, setSurname] = useState();
    const [first_name, setFirst_name] = useState();
    const [middle_name, setMiddle_name] = useState();
    const [phone_number, setPhone_number] = useState();
    const [residential_address, setResidential_address] = useState();
    const [occupation, setOccupation] = useState();
    const [nin, setNin] = useState();
            
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        if(countIntegerDigits(nin) > 11){
            alert('You cannot enter more than eleven figures!');
            setNin(Math.floor(nin / 10));
        }
    }, [nin])

    return (
        <div className='w-full'>
            <h1 className='text-2xl font-extralight capitalize py-2 border-b border-gray-300 dark:border-gray-700 mb-4'>
            {view.replaceAll("_", " ")}
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
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Residential address'
                        onChange={(e) => setResidential_address(e.target.value)}
                        required
                    />
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Occupation'
                        onChange={(e) => setOccupation(e.target.value)}
                        required
                    />
                    <input 
                        type='number'
                        value={nin}
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='NIN'
                        onChange={(e) => setNin(e.target.value)}
                    />
                </div>
                <div className='pt-4 flex items-center gap-4'>
                    <button
                        className={`flex justify-center px-4 py-2 rounded-md bg-[#ffaa00] hover:bg-[#7a5b1e] text-black`}
                    >
                        {
                            saving ? 
                                <AiOutlineLoading3Quarters size={24} className='animate-spin' /> : 'Save and next'
                        }
                    </button>
                </div>
            </form>
        </div>
    )
}

export default NextofKinForm