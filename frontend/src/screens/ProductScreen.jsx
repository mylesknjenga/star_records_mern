import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Button, Image } from "react-bootstrap";
import axios from 'axios';
import { motion } from "framer-motion"


const ProductScreen = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);

      setProduct(data)
    }

    fetchProduct();
  });

  return (
    <motion.div
      initial={{opacity: 0 }} 
      animate={{opacity: 1, transition: {duration: 0.8}}} 
      exit={{ opacity: 0}}
    >
        <Row>
            <Col md={6}>
                <Image src={product.image} fluid/>
            </Col>
            <Col md={3}>
                <h2>{product.title}</h2>
                <h2>By: {product.artist}</h2>
                <h2>{product.rating} from {product.numReviews} reviews</h2>
                <h2>${product.price}</h2>
                <p>{product.description}</p>
            </Col>
            <Col md={3}>
                <h2>price: {product.price}</h2>
                <Button 
                    className='btn btn-block'
                    type="button"
                    >
                        Add to Cart
                </Button>
            </Col>
        </Row>

    </motion.div>
  )
}

export default ProductScreen;