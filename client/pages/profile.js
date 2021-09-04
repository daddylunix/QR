import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie';
import axios from 'axios'
import { useRouter } from 'next/router'

export default function profile() {
    const router = useRouter()
    const userCookie = Cookies.get('token');
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
        if (!userCookie) {
            // redirect to register page.
            router.push('/register')
        }
        fetchUserData();
    }, [])
    return (
        <div>
           {JSON.stringify(response)} 
        </div>
    )
}
