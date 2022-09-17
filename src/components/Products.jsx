import styled from 'styled-components';
import Product from './Product';
import { useEffect, useState } from 'react';
import { publicRequest } from '../requestMethods';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({category, filters, sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);


  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(`/products?category=${category?category:"all"}`);

        setProducts(res.data);
      } catch (err) {
        // TODO: handle error
        console.log(err);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category && setFilteredProducts(
      products.filter((product) => 
        Object.entries(filters).every(([key, value]) =>
          product[key].includes(value)
     )));
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === 0) {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt));
    } else if (sort === 1) {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <Container>
      {category ? filteredProducts.map(product => (
        <Product product={product} key={product._id} />
      )) :
      products.slice(0, 8).map(product => (
        <Product product={product} key={product._id} />
      ))}
    </Container>
  )
}

export default Products