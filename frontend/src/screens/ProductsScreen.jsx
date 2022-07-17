import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from 'axios';
import Product from "../components/Product";
import { motion } from "framer-motion"

const ProductsScreen = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        const { data } = await axios.get("/api/products");
  
        setProducts(data)
      }
  
      fetchProducts();
    }, []);
    
    return (
      <motion.div
        initial={{opacity: 0 }} 
        animate={{opacity: 1, transition: {duration: 0.8}}} 
        exit={{ opacity: 0}}
      >
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
      </motion.div>
    )
}

export default ProductsScreen