import React from 'react'
import { useLocation } from 'react-router-dom'

function Sucess() {
    const location = useLocation()
    console.log(location)
  return (
    <div>Sucess</div>
  )
}

export default Sucess