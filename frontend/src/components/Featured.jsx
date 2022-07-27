import { Container, Row, Col } from "react-bootstrap";
import Product from "./Product";
import axios from 'axios';
import { useState, useEffect } from "react";


const Featured = () => {
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
        <Container className="py-5">
          <h2 className="py-2">Featured Albums</h2>
          <Row>
            {products.map(product => {
                if (product.rating >= 4.8) {
                    return <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>;
                }
                return <h2 key={product.id} style={{display: "none"}}>No featured products</h2>;
            })}
            </Row>
          
        </Container>
    </>
  )
}



export default Featured