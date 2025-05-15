import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { fetchLgaTowns } from '../apis/utilityActions';

const TownComponent = ({ lga_id, setTown, placeholder }) => {

    const { token } = useContext(AppContext);
    
    const [lgaTowns, setLgaTowns] = useState();
    const [error, setError] = useState();
    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        lga_id && fetchLgaTowns(token, lga_id, setLgaTowns, setError, setFetching)
    }, [lga_id])

    return (
        <select
            className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
            onChange={(e) => setTown(e.target.value)}
        >
            <option value="">
            { 
                fetching ? 'fetching towns' : placeholder
            }
            </option>
        {
            (lgaTowns && lgaTowns?.data.length > 0) &&
                lgaTowns?.data.map(town => (
                    <option key={town?.id} className='dark:bg-gray-800 dark:text-white' value={town?.id}>{town?.name}</option>
                ))
        }
        </select>
    )
}

export default TownComponent