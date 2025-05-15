import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { fetchStateLgas } from '../apis/utilityActions';

const LgaComponents = ({ state_id, setLga, placeholder }) => {

    const { token } = useContext(AppContext);

    const [stateLgas, setStateLgas] = useState();
    const [error, setError] = useState();
    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        state_id && fetchStateLgas(token, state_id, setStateLgas, setError, setFetching)
    }, [state_id])

    return (
        <select
            className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
            onChange={(e) => setLga(e.target.value)}
            required
        >
            <option value="">
            { 
                fetching ? 'fetching lgas' : placeholder
            }
            </option>
        {
            (stateLgas && stateLgas?.data.length > 0) &&
                stateLgas?.data.map(lga => (
                    <option key={lga?.id} className='dark:bg-gray-800 dark:text-white' value={lga?.id}>{lga?.name}</option>
                ))
        }
        </select>
    )
}

export default LgaComponents