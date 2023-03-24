import { SendSharp } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fcf5f5;
  height: 60vh;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" ,fontSize:'60px'})}

`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center",fontWeight:100,fontSize:'25px' })}
`;

const Input = styled.input`
  flex: 8;
  border: none;
  padding-left: 10px;
  outline: none;
  &:focus {
    border: 1px solid black;
  }
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: wheat;
  display: flex;
  border: 1px solid lightgray;
  ${mobile({ width:"80%" })}


`;
const Button = styled.button`
  flex: 1;
  background: black;
  border: none;
  color: yellow;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>News Letter</Title>
      <Desc>Get Timely udates from your favorite products</Desc>
      <InputContainer>
        <Input className="TextBackGround" />
        <Button>
          <SendSharp />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
