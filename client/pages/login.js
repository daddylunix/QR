import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie';
import axios from 'axios';
import Router from 'next/router'
import Head from 'next/head'

export default function login() {
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState('');
    const [ response, setResponse ] = useState('');
    const [ success, setSuccess ] = useState('');
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
            setSuccess('Successfully Logged In..')
            window.setTimeout(function() {
                window.location.href = 'http://localhost:3000/profile';
            }, 3000);
        } else {
            setResponse(data.data)
        }
    }
    return (
        <div>
        <Head>
        <title>Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 class="title-font font-medium text-3xl text-gray-900">Combining <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 font-bold"> Next-level Technology</span> with business cards.</h1>
        <p class="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
        </div>
        <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 shadow-xl">
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
        {response &&
        <div> 
        <div class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div class="flex items-center justify-center w-12 bg-red-500">
        <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"/>
        </svg>
        </div>
        <div class="px-4 py-2 -mx-3">
        <div class="mx-3">
        <span class="font-semibold text-red-500 dark:text-red-400">Oopsie..</span>
        <p class="text-sm text-gray-600 dark:text-gray-200">{response}</p>
        </div>
        </div>
        </div>
        </div>
        }
        <br/>
        {success && 
        <div class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div class="flex items-center justify-center w-12 bg-green-500">
            <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"/>
            </svg>
        </div>
        
        <div class="px-4 py-2 -mx-3">
            <div class="mx-3">
                <span class="font-semibold text-green-500 dark:text-green-400">Success!</span>
                <p class="text-sm text-gray-600 dark:text-gray-200">{success}</p>
            </div>
        </div>
    </div>
        
        }
        
        </div>
    )
}
