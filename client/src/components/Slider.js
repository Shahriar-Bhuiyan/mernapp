import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../Data";
import {mobile} from '../responsive'

// style
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none"})}

`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.8;
  z-index:3
`;
const Wrapper = styled.div`
  display: flex;
  width:300vw;
  height: 100%;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition:transform 2.3s ;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: ${(props) => props.bg};
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  overflow: hidden;
`;
const Image = styled.img`
  max-width: 100%;
  height:100vh;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
  color: red;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 1.2rem;
  font-weight: light;
  color: black;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background: black;
  color: white;
  border-radius: 3px;
  outline: none;
  border: none;
`;
// styled
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if(direction ==="left"){
        setSlideIndex(slideIndex > 0? slideIndex-1:2)
    }else{
        setSlideIndex(slideIndex < 2 ? slideIndex+1:0)

    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex} key={slideIndex.id}>
       {sliderItems.map((items)=>{
        const {img,desc,bg,title} = items
        return <Slide bg={bg} >
          <ImageContainer>
            <Image src={img} />
          </ImageContainer>
          <InfoContainer>
            <Title>{title}</Title>
            <Desc>{desc}</Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
       })
       }
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
