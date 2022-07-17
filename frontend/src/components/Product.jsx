import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <>
    <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product.id}`}>
                <Card.Img src={product.image} variant="top" />
            </Link>

            <Card.Title className="py-3">
                <Link to={`/product/${product.id}`}>
                    <strong>{product.name}</strong>
                </Link>
            </Card.Title>

            <Card.Text>
                {product.rating} stars from {product.numReviews} reviews
            </Card.Text>

            <Card.Text as="h3">
                ${product.price}
            </Card.Text>
        </Card>
    </>
  )
}

export default Product;