import axios from "./baseUrl";

export const registerUser = async ( data, setSuccess, setError, setRegistering ) => {

    setRegistering(true);

    try{
        const response  = await axios.post(`register`,
            data,
            {
                headers: { 
                    'Accept' : 'application/json', 
                    'Content-Type' : 'application/json' 
                }
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

    setRegistering(false);
}

export const loginUser = async ( data, setSuccess, setError, setLoggingIn ) => {

    setLoggingIn(true);

    try{
        const response  = await axios.post(`login`,
            data,
            {
                headers: { 'Accept' : 'application/json' }
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

    setLoggingIn(false);
}

export const verifyOtp = async ( data, setSuccess, setError, setVerifying ) => {

    setVerifying(true);

    try{
        const response  = await axios.post(`verify-otp`,
            data,
            {
                headers: { 
                    'Accept' : 'application/json', 
                    'Content-Type' : 'application/json' 
                }
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

    setVerifying(false);
}

export const forgotPassword = async ( data, setSuccess, setError, setSubmitting ) => {

    setSubmitting(true);

    try{
        const response  = await axios.post(`forgot-password`,
            data,
            {
                headers: { 
                    'Accept' : 'application/json', 
                    'Content-Type' : 'application/json' 
                }
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

    setSubmitting(false);
}