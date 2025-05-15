import React, { useState } from 'react'
import ListPersonnel from './components/ListPersonnel';
import AddPersonnel from './components/AddPersonnel';
import PageTitle from '../../common/PageTitle';

const Personnel = () => {

    const [active, setActive] = useState('list');

    return (
        <div className='w-full m-0 p-4'>
            <div className='w-full flex items-center justify-between'>
                <PageTitle />
                <button 
                    className='px-4 py-2 rounded-md shadow-xl bg-[#ffaa00] hover:bg-[#c99731]'
                    onClick={() => active === 'list' ? setActive('add') : setActive('list')}
                >
                    {active === 'list' ? 'New Personnel' : 'Personnels'}
                </button>
            </div>
            <div className='w-full my-4'>
            {
                active === 'list' ?
                    <ListPersonnel title='personnel list' />:
                    <AddPersonnel title='new personnel' />
            }
            </div>
        </div>
    )
}

export default Personnel