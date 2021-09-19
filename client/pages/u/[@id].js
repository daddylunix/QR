import React, { useState, useEffect } from 'react'
import { useRouter  } from 'next/router'
import axios from 'axios';

export default function id () {
    const [ response, setResponse ] = useState();
    const router = useRouter();
    // const id = router.query["@id"];
    const id = router.query["@id"];
    const testFunction = async (id) => {
      const config = {
        header: {
            "Content-Type":"application/json",
            Credentials: true
        },
        withCredentials: true
    }
      if (id === undefined) return; 
      const response = await axios.get(`http://localhost:5000/${id}`, config);
      setResponse(response.data);
      console.log(response.data);
      console.log(id);
    }
    useEffect(() => {
      testFunction(id)
    }, [id])
    return (
      <div>
    <h2>{JSON.stringify(response)}</h2>
    </div>
  ) 
}