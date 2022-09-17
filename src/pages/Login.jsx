import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: 
        linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), 
        url('./pexels-photo-6984650.png') center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "80%" })}
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
    font-size: 16px;
    font-weight: 500;
    color: #222;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding 15px 20px;
    background-color: white;
    border: 2px solid teal;
    color: teal;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background-color: teal;
        color: white;
    }
`;

const Link = styled.a`
    margin: 5px 0;
    margin-bottom: 10px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input type="email" placeholder="email" required/>
                <Input type="password" placeholder="password" required/>
                <Button type="submit" >LOGIN</Button>
                <Link >FORGET THE PASSWORD</Link>
                <Link >CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
};

export default Login;