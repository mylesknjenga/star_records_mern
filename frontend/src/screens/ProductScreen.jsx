import React from 'react';
import { Link, useParams } from "react-router-dom";
import { Row, Col, Button, Image } from "react-bootstrap";
import products from '../products';

function ProductScreen({ match }) {
    const { id } = useParams();
    const product = products.find((p) => p._id === (id));
  return (
    <>
        <Row>
            <Col md={6}>
                <Image src={product.image} fluid/>
            </Col>
            <Col md={3}>
                <h2>{product.name}</h2>
                <h2>{product.rating} from {product.numReviews} reviews</h2>
                <h2>${product.price}</h2>
                <p>{product.description}</p>
            </Col>
            <Col md={3}>
                <h2>price: {product.price}</h2>
                <h2>{product.countInStock > 0 ? "In stock" : "Out of Stock"}</h2>
                <Button 
                    className='btn btn-block'
                    type="button"
                    disabled={product.countInStock === 0}>
                        Add to Cart
                </Button>
            </Col>
        </Row>
    </>
  )
}

export default ProductScreen;