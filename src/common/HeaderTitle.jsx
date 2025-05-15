import React from 'react'

const HeaderTitle = () => {
    return (
        <div className='flex justify-between items-center p-2'>
            <div className='flex items-center space-x-2'>
                {icon}
                <span className='text-xl font-semibold capitalize'>
                    {formatPagetitle()}
                </span>
            </div>
        </div>
    )
}

export default HeaderTitle