import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Button, Image } from "react-bootstrap";
import axios from 'axios';

function ProductScreen() {
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