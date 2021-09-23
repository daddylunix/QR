import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie';
import axios from 'axios';
import Router from 'next/router'

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
        if (data.data == "Successfully Signed In!") {
            Router.push('http://localhost:3000/profile')
            setResponse('')
        } else {
            setResponse(data.data);
        }
    }
    return (
        <div>
        <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 class="title-font font-medium text-3xl text-gray-900">Combining <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"> Next-level Technology</span> with business cards.</h1>
        <p class="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
        </div>
        <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 shadow-2xl">
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
        <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button class="shadow-lg text-white bg-gradient-to-r from-green-400 to-blue-500 border-0 py-2 px-8 focus:outline-none rounded text-lg" onClick={loginUser}>Login</button>
        <center>
        <p class="text-xs text-gray-500 mt-3">New here? <a class="text-xs text-blue-500 mt-3" href="http://localhost:3000/register">Register</a></p>
        </center>
        </div>
        </div>
        </section>
        {response}
        </div>
    )
}
