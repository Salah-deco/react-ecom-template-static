import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { login } from '../redux/apiCalls';
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
    &:disabled {
        color: green;
        cursor: not-allowed;
    }
`;

const Link = styled.a`
    margin: 5px 0;
    margin-bottom: 10px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Error = styled.span`
    color: red;
    font-size: 14px;
    margin-top: 10px;
`;

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector(state => state.user);

    const handleSubmit = (e) => {
        e.preventDefault();
        login(dispatch, {username, password});
    };

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    {error && <Error>Something went wrong...</Error>}
                    <Input type="text" name="username" placeholder="username" onChange={(e) => setUsername(e.target.value)} required/>
                    <Input type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} required/>
                    <Button type="submit" onClick={handleSubmit} disabled={isFetching}>LOGIN</Button>
                    <Link >FORGET THE PASSWORD</Link>
                    <Link >CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
};

export default Login;