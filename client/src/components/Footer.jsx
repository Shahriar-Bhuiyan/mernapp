import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter
} from "@material-ui/icons";
import styled from "styled-components";
import {mobile} from '../responsive'

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection:'column' })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display:'none'})}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  justify-content: center;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({backgroundColor:'#fff8f8'})}
`;

const ContactItem = styled.div`
display:flex;
align-items: center;
justify-content: flex-start;
margin-bottom: 10px;
`;
const Payment = styled.img`
width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          SHoB<sub>Shop</sub>
        </Logo>
        <Desc>
          Qui tempor quis ut in minim in sint sit do exercitation ipsum ipsum
          exercitation. Esse et et consequat tempor laboris nostrud. Nisi
          officia ullamco deserunt mollit adipisicing irure elit sit in dolor.
          Aliquip commodo incididunt sunt labore dolor.
        </Desc>
        <SocialContainer>
          <SocialIcon color="0269e3">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wihslist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          {" "}
          <Room style={{marginRight:'10px'}} /> 22 BanglShal Path, South Dhaka
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:'10px'}} /> + 1234567{" "}
        </ContactItem>
        <ContactItem>
          <MailOutline  style={{marginRight:'10px'}}/> contact@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  );
};

export default Footer;
