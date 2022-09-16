import styled from 'styled-components';
import { Facebook, Instagram, Twitter, Pinterest, MailOutline, Phone, Room } from '@material-ui/icons';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Logo = styled.h1``;
const Description = styled.p`
    margin: 20px 0px;

`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`;
const Title = styled.h3`
    margin-bottom: 20px;
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
    margin-button: 10px;
`;
const Right = styled.div`
    flex: 1;
    padding: 20px;
`;
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;
const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Logo.</Logo>
            <Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae dolor maiores ipsam excepturi recusandae laudantium aspernatur ex voluptatem, dicta sint quod eum sunt. Beatae accusamus sequi perspiciatis enim! Aliquid, earum.
            </Description>
            <SocialContainer>
                <SocialIcon color="#3B5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="#E4405F">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="#55ACEE">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="#E60023">
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight: "10px"}} />
                1600 Pennsylvania Avenue NW, Washington, USA
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight: "10px"}}  />
                +1 234 567 890
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight: "10px"}}  />
                salah.deco1@gmail.com
            </ContactItem>
            <Payment src="./payment.png" alt="Payment Card" />
        </Right>
    </Container>
  )
};

export default Footer;