import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie';
import axios from 'axios'

export default function profile() {
    const userCookie = Cookies.get('token');
    if (!userCookie) {
        // redirect to register page.
    }
    const [ response, setResponse ] = useState();
    const fetchUserData = async () => {
        const config = {
            header: {
                "Content-Type":"application/json",
                Credentials: true
            },
            withCredentials: true
        }
        const data = await axios.get('http://localhost:5000/profile', config);
        setResponse(data.data);
    }
    useEffect(() => {
        fetchUserData();
    }, [])
    return (
        <div>
           {JSON.stringify(response)} 
        </div>
    )
}
