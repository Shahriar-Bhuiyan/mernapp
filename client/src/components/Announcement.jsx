import React from 'react'
import styled from 'styled-components'

const Contaienr = styled.div`
height:30px;
font-weight:500;
background-color:teal;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:15px;
`


const Announcement = () => {
  return (
    <Contaienr>
      Super Sale 50% discount
    </Contaienr>
  )
}

export default Announcement
