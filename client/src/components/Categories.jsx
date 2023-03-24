import React from 'react'
import styled from 'styled-components'
import { categories} from '../Data'
import CatergoryItem from './CatergoryItem'
import {mobile} from '../responsive'

const Container = styled.div`
display:flex;
padding:20px;
justify-content:space-between;
${mobile({ padding:"0px",flexDirection:'column'})}

`
const Categories = () => {
  return (
    <Container>
      {categories.map(item=>(
        <CatergoryItem item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Categories
