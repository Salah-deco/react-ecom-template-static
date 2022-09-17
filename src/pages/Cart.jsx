import { Add, Remove } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';
import StripeCheckout from 'react-stripe-checkout';
import { useState } from 'react';
import { userRequest } from '../requestMethods';
import { useHistory } from 'react-router-dom';

const STRIPE_KEY = process.env.REACT_APP_STRIPE_PUBLIC_KEY

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
${mobile({ display: "none" })}
`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
    flex: 3;
`;
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;
const Image = styled.img`
    width: 200px;

`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductId = styled.span``;
const ProductName = styled.span``;
const ProductSize = styled.span``;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    border: 2px solid rgba(200, 200, 200, 0.5);
`;
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
`;
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin:'5px 15px'})}
`;
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: '10px', fontSize: '24x' })}
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

//  SUMMARY PARTY
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;
const SummaryTitle = styled.h1`
    font-weight: 200;
    ${mobile({ fontSize: "26px" })}
`;
const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
    ${mobile({ margin: "15px 0"})}
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const [stripeToken, setStripeToken] = useState(null)
    const history = useHistory()

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(()=> {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post('/payments', {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100
                })
                history.push('/success', { data: res.data })
                console.log(res)
            } catch (err) {
                console.log(err)
            }
        }
        stripeToken && makeRequest()
    }, [stripeToken, cart.total, history])

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map(item => (
                            <>
                                <Product key={item.id}>
                                    <ProductDetail>
                                        <Image src={'/images/products/' + item.image} />
                                        <Details>
                                            <ProductId ><b>ID: </b>{item.id}</ProductId>
                                            <ProductName ><b>Product: </b>{item.title}</ProductName>
                                            <ProductSize ><b>Size: </b>{item.size}</ProductSize>
                                            <ProductColor color={item.color}/>
                                        </Details>
                                    </ProductDetail>
                                    <PriceDetail>
                                        <ProductAmountContainer>
                                            <Remove />
                                            <ProductAmount >{item.quantity}</ProductAmount>
                                            <Add />
                                        </ProductAmountContainer>
                                        <ProductPrice>$ {item.price}</ProductPrice>
                                    </PriceDetail>
                                </Product>
                                <Hr />
                            </>
                        ))}
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        {/* <Button>CHECKOUT NOW</Button> */}
                        <StripeCheckout 
                            name="deco shop"
                            billingAddress
                            shippingAddress
                            description={`Your total is $${cart.total}`}
                            amount={cart.total * 100}
                            currency="USD"
                            panelLabel="Pay Now"
                            token={onToken}
                            stripeKey={STRIPE_KEY}
                        >
                            <Button>CHECKOUT NOW</Button>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart