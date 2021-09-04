import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie';
import axios from 'axios'
import { useRouter } from 'next/router'

export default function profile() {
    const router = useRouter()
    const userCookie = Cookies.get('token');
    const [ response, setResponse ] = useState();
    const [ qrcode, setQrcode ] = useState();
    const fetchUserData = async () => {
        const config = {
            header: {
                "Content-Type":"application/json",
                Credentials: true
            },
            withCredentials: true
        }
        const data = await axios.get('http://localhost:5000/profile', config);
        console.log(data.data.qrcode)
        setResponse(JSON.stringify(data.data));
        setQrcode(data.data.qrcode)
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
           {response} 
           <img src={qrcode}/>
        </div>
    )
}
