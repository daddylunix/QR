import React, { useState } from 'react'
import axios from 'axios'

export default function register () {
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState(''); 
    const [ response, setResponse ] = useState('');
    const registerUser = async (e) => {
        const config = {
            header: {
                "Content-Type":"application/json",
                Credentials: true
            },
            withCredentials: true
        }
        e.preventDefault();
        const data = await axios.post('http://localhost:5000/register', {username, email, password}, config);
        setResponse(data.data);
    }
    return (
        <div>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit" onClick={registerUser}>Register</button>
           <h2>Register Page</h2> 
           {username}
           {email}
           {password}
           <h1>{response}</h1>
        </div>
    )
}
