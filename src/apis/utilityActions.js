import axios from "./baseUrl";

export const fetchAllStates = async ( token, setAllStates, setError, setFetching ) => {

    setFetching(true);

    try{
        const response  = await axios.get(`states`,
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );    

        console.log(response.data);
        setAllStates(response.data);
    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data);
            setError(err.response.data);
        }
    }

    setFetching(false);
}


export const fetchStateLgas = async ( token, state_id, setStateLgas, setError, setFetching ) => {

    setFetching(true);

    try{
        const response  = await axios.get(`lgas/by-state/${state_id}`,
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );    

        console.log(response.data);
        setStateLgas(response.data);
    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data);
            setError(err.response.data);
        }
    }

    setFetching(false);
}


export const fetchLgaTowns = async ( token, lga_id, setLgaTowns, setError, setFetching ) => {

    setFetching(true);

    try{
        const response  = await axios.get(`towns/by-lga/${lga_id}`,
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );    

        console.log(response.data);
        setLgaTowns(response.data);
    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data);
            setError(err.response.data);
        }
    }

    setFetching(false);
}