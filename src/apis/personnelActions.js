import axios from "./baseUrl";

export const addPersonnel = async ( token, data, setSuccess, setError, setSaving ) => {

    setSaving(true);

    try{
        const response  = await axios.post(`personnel`,
            data,
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );    

        console.log(response.data);
        setSuccess(response.data);
    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data);
            setError(err.response.data);
        }
    }

    setSaving(false);
}