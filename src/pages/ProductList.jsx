import { useState } from 'react';
import { useLocation } from 'react-router-dom';
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
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState(0) 
    const location = useLocation();
    const category = location.pathname.split("/")[2];

    const handleFilters = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        // if value is all, then delete the key from the filters object
        if (value === "all") {
            delete filters[name];
            setFilters(filters);
        } else {
            setFilters({
                ...filters,
                [name]: value,
            });
        }
    }

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>{category}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products: </FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option display value="all">Color</Option>
                        <Option value="white">White</Option>
                        <Option value="black">Black</Option>
                        <Option value="green">Green</Option>
                        <Option value="blue">Blue</Option>
                        <Option value="rose">Rose</Option>
                        <Option value="red">Red</Option>
                        <Option value="yellow">Yellow</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option display value="all">Size</Option>
                        <Option value="XXL">XXL</Option>
                        <Option value="XL">XL</Option>
                        <Option value="L">L</Option>
                        <Option value="M">M</Option>
                        <Option value="S">S</Option>
                        <Option value="XS">XS</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products: </FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value={0}>Newest</Option>
                        <Option value={1}>Price (asc)</Option>
                        <Option value={-1}>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products category={category} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    )
};

export default ProductList;