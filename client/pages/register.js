import React, { useState } from 'react'

export default function register () {
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState(''); 
    return (
        <div>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
           <h2>Register Page</h2> 
           {username}
           {email}
           {password}
        </div>
    )
}
