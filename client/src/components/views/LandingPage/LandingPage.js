import React, { useEffect } from 'react'
import axios from 'axios';

function LandingPage() {

    useEffect(() => {
        axios.get('/api/hello')
        .then(reponse => console.log(reponse.data))
    }, [])

  return (
    <div>LandingPage</div>
  )
}

export default LandingPage