import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import { mobile } from '../responsive';

const Container = styled.div``;
const Title = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
    ${mobile({ margin: "0 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0" })}
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "5px 0" })}
`;
const Option = styled.option``;

const ProductList = () => {    
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products: </FilterText>
                    <Select >
                        <Option display selected>Color</Option>
                        <Option value="">White</Option>
                        <Option value="">Black</Option>
                        <Option value="">Green</Option>
                        <Option value="">Blue</Option>
                        <Option value="">Rose</Option>
                        <Option value="">Red</Option>
                        <Option value="">Yellow</Option>
                    </Select>
                    <Select >
                        <Option display selected>Size</Option>
                        <Option value="">XXL</Option>
                        <Option value="">XL</Option>
                        <Option value="">L</Option>
                        <Option value="">M</Option>
                        <Option value="">S</Option>
                        <Option value="">XS</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products: </FilterText>
                    <Select >
                        <Option selected value="">Newest</Option>
                        <Option value="">Price (asc)</Option>
                        <Option value="">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
};

export default ProductList;