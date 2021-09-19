import React, { useState, useEffect } from 'react'
import { useRouter  } from 'next/router'
import axios from 'axios';

export default function id () {
    const [ response, setResponse ] = useState("");
    const router = useRouter();
    const id = router.query["@id"];
    return (
      <div>
    <p>params: {id}</p>
    </div>
  ) 
}
