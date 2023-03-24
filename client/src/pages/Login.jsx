import React from "react";
import styled from 'styled-components'
import {mobile} from '../responsive'
import { useState } from "react";
import { login } from "../redux/apiCall";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Container = styled.div`
width: 100vw;
height: 100vh; 
background:linear-gradient(rgba(255,255,255,0.5),
rgba(255,255,255,0.5)), url('https://t3.ftcdn.net/jpg/01/17/33/22/360_F_117332203_ekwDZkViF6M3itApEFRIH4844XjJ7zEb.jpg');
background-repeat: no-repeat;
background-size:cover;
display: flex;
align-items: center;
justify-content: center;
`;
const Wrapper = styled.div`
padding: 20px;
width: 25%;
background-color: white;
${mobile({width:"75%"})}
`;
const Title = styled.h1`
font-size:24px;
font-weight:300;`;

const Form = styled.form`
display: flex;
flex-direction: column;

`;


const Input = styled.input`
flex:1;
min-width: 40%;
margin:10px  0px;
padding: 10px;
`;

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
cursor: pointer;
color: white;
&:disabled{
  color: green;
  cursor: not-allowed;
}
`;
const Linked = styled.a`
margin:10px 0px;
font-size:12px;
text-decoration: underline;
cursor:pointer;
`
const Error = styled.span`
color: red;
`
const Login = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('')
  const dispatch = useDispatch();
  const {isFetching,error} = useSelector((state)=> state.user)

  const handleClick =(e) =>{
    e.preventDefault();
    login(dispatch,{username,password})
  }
  return (
    <Container>
      <Wrapper>
        <Title>SING IN</Title>
        <Form>
          <Input placeholder="Username"  onChange={(e)=>setUsername(e.target.value)}/>
          <Input placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)} />
         
          <Button onClick={handleClick} disabled={isFetching}>LOG IN</Button>
          {error && <Error>Something is Wrong....</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link to="/register">CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
