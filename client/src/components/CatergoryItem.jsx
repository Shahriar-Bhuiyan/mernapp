import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  position: relative;
  margin: 3px;
  height: 70vh;
`;

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.2);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;
const Title = styled.h1`
  color: white;
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Button = styled.button`
  color: white;
  background: black;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 1.5rem;
  font-weight: bold;
`;

const CatergoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`./products/${item.cat}`}> 
        <Image src={item.img} alt="" />
        <Info>
          <Title>{item.title}</Title>
          <Button>Shop Now</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CatergoryItem;
