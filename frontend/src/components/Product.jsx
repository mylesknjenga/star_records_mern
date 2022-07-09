import React from "react";
import { Card } from "react-bootstrap";

function Product({ product }) {
  return (
    <>
        <Card className="my-3 p-3 rounded">
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} variant="top" />
            </a>

            <Card.Title className="py-3">
                <a href={`/product/${product._id}`}>
                    <strong>{product.name}</strong>
                </a>
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