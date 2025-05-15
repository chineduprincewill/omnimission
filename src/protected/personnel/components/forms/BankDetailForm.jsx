import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { AppContext } from '../../../../context/AppContext';
import { countIntegerDigits } from '../../../../apis/functions';

const BankDetailForm = ({ view }) => {

    const { token } = useContext(AppContext);
    const [saving, setSaving] = useState(false);
    const [bvn, setBvn] = useState();
    const [bank_name, setBank_name] = useState();
    const [bank_branch, setBank_branch] = useState();
    const [account_number, setAccount_number] = useState();
    const [account_type, setAccount_type] = useState();
    const [account_name, setAccount_name] = useState();

        
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        if(countIntegerDigits(bvn) > 11){
            alert('You cannot enter more than eleven figures!');
            setBvn(Math.floor(bvn / 10));
        }

        if(countIntegerDigits(account_number) > 10){
            alert('You cannot enter more than 10 figures!');
            setAccount_number(Math.floor(account_number / 10));
        }
    }, [bvn, account_number])

    return (
        <div className='w-full'>
            <h1 className='text-2xl font-extralight capitalize py-2 border-b border-gray-300 dark:border-gray-700 mb-4'>
            {view.replace("_", " ")}
            </h1>
            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4'>
                <div className='w-full grid md:flex md:flex-wrap md:gap-4 space-y-4 md:space-y-0 items-center'>
                    <input 
                        type='number'
                        value={bvn}
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='BVN'
                        onChange={(e) => setBvn(e.target.value)}
                        required
                    />
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Bank name'
                        onChange={(e) => setBank_name(e.target.value)}
                        required
                    />
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Bank branch'
                        onChange={(e) => setBank_branch(e.target.value)}
                        required
                    />
                    <input 
                        type='number'
                        value={account_number}
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Account number'
                        onChange={(e) => setAccount_number(e.target.value)}
                        required
                    />
                    <select 
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        onChange={(e) => setAccount_type(e.target.value)}
                        required
                    >
                        <option className='dark:bg-gray-800 dark:text-white' value="">Account type</option>
                        <option className='dark:bg-gray-800 dark:text-white' value="savings">savings</option>
                        <option className='dark:bg-gray-800 dark:text-white' value="current">current</option>
                        <option className='dark:bg-gray-800 dark:text-white' value="domiciliary">domiciliary</option>
                    </select>
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Account name'
                        onChange={(e) => setAccount_name(e.target.value)}
                        required
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

export default BankDetailForm