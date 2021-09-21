import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie';
import axios from 'axios';

export default function login() {
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState('');
    const [ response, setResponse ] = useState('');
    const loginUser = async (e) => {
        e.preventDefault();
        const config = {
            header: {
                "Content-Type":"application/json",
                Credentials: true
            },
            withCredentials: true
        }
        const data = await axios.post('http://localhost:5000/login',{email, password}, config)
        setResponse(data.data);
    }
    return (
        <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit" onClick={loginUser}>Login</button>
            <br/>
            <h1>{response}</h1>
        </div>
    )
}
