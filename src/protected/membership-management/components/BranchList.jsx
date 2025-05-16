import React from 'react'
import PageTitle from '../../../common/PageTitle'
import { HiMiniPlusSmall } from 'react-icons/hi2'
import { CgSoftwareUpload } from 'react-icons/cg'

const BranchList = ({ setActionstate }) => {

    return (
        <div className='w-full grid'>
            <PageTitle />
            <span className='text-sm ml-2'>View the list of branches</span>
            <div className='w-full flex justify-center items-center'>
                <div className='grid max-w-max gap-2'>
                    <img src='/assets/illustration.png' alt='illustration' width='60%' className='mx-auto' />
                    <span className='font-urbanist font-semibold mx-auto'>Looks like you don't have any branches added to the system</span>
                    <span className='text-sm font-urbanist text-success mx-auto'>You can create branches or bulk upload branches to add them here</span>
                    <div className='flex gap-2 items-center mx-auto mt-2'>
                        <button 
                            className='p-2 rounded-md text-white bg-success hover:bg-[#207b7b]'
                            onClick={() => setActionstate('create-branch')}
                        >
                            <div className='flex items-center'>
                                <HiMiniPlusSmall size={20} />
                                <span className='text-xs'>Create New Branch</span>
                            </div>
                        </button>
                        <button 
                            className='p-2 rounded-md bg-white hover:bg-gray-200 border border-gray-400'
                        >
                            <div className='flex items-center'>
                                <CgSoftwareUpload size={17} />
                                <span className='text-xs'>Bulk Upload Branches</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BranchList