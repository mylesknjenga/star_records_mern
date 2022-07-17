import { useEffect } from "react";
import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from 'axios';
import Product from "../components/Product";

function ProductsScreen() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        const { data } = await axios.get("/api/products");
  
        setProducts(data)
      }
  
      fetchProducts();
    }, []);
    
    return (
      <>
        <Container className='py-5'>
          <h1>Shop</h1>
          <Row>
              {products.map(product => (
                  <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                      <Product product={product} />
                  </Col>
              ))}
          </Row>
          </Container>
      </>
    )
}

export default ProductsScreen