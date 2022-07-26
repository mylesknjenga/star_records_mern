import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from 'axios';
import Product from "../components/Product";
import { motion } from "framer-motion";

const ProductsScreen = () => {
    const [products, setProducts] = useState([]);
    const [filteredCategory, setFilteredCategory] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        const { data } = await axios.get("/api/products");
  
        setProducts(data)
        setFilteredCategory(data)
      }
  
      fetchProducts();
    }, []);

    const filterCategory = (val) => {
          if ( val === "all") {
            setFilteredCategory(products)
            return
          } else {
            const result = products.filter((product) => {
              return product.category === val
            })
            setFilteredCategory(result)
            return
          }
    }

    const filterPrice = (val) => {
      if ( val === "reset") {
        setFilteredCategory(products)
        return
      } else if (val === 25){
        const result = products.filter((product) => {
          console.log(Number(product.price) < val)
          return Number(product.price) < val
        })
        setFilteredCategory(result)
        return
      } else if (val === 30) {
        const result = products.filter((product) => {
          return Number(product.price) >= 25 && Number(product.price) <= 70
        })
        setFilteredCategory(result)
        return
      } else {
        const result = products.filter((product) => {
          return Number(product.price) > val
        })
        setFilteredCategory(result)
        return
      }
    }

    
    return (
      <motion.div
        initial={{opacity: 0 }} 
        animate={{opacity: 1, transition: {duration: 0.8}}} 
        exit={{ opacity: 0}}
      >
        <Container className='py-5' fluid>
          <Row>
            <Col sm={12} md={2} >
              
                <button
                onClick={() => filterCategory("all")}
              >All</button>
            <button
                onClick={() => filterCategory("Hip hop")}
              >Hip hop</button>
              <button
                onClick={() => filterCategory("R&B")}
              >R&B</button>
                <button
                onClick={() => filterPrice("reset")}
              >Reset</button>
            <button
                onClick={() => filterPrice(25)}
              >Below $25</button>
              <button
                onClick={() => filterPrice(30)}
              >Between $25-$70</button>
              <button
                onClick={() => filterPrice(70)}
              >Above $70</button>
              
            
            </Col>
            <Col className="mx-5">
              <h1>Shop</h1>
              <Row>
                  {filteredCategory.map(product => (
                      <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                          <Product product={product} />
                      </Col>
                  ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </motion.div>
    )
}

export default ProductsScreen