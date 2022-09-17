import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: 
        linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), 
        url('./pexels-photo-6984661.jpeg') center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 40%;
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
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
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

const Register = () => {

  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input type="text" name="firstname" required placeholder="first name" />
                <Input type="text" name="lastname" required placeholder="last name" />
                <Input type="text" name="username" required placeholder="username" />
                <Input type="email" name="email" required placeholder="email" />
                <Input type="password" name="password" required placeholder="password" />
                <Input type="password" name="password_confirm" required placeholder="confirm password" />
                <Agreement>
                    By creating an account, I consent to the procesing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button type="submit">CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register;