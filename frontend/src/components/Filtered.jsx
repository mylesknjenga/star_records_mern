import Accordion from 'react-bootstrap/Accordion';
import { useEffect, useState } from "react";
import axios from 'axios';
import Product from "../components/Product";


function Filtered() {

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
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>By Category</Accordion.Header>
        <Accordion.Body>
        <button
                onClick={() => filterCategory("all")}
              >All</button>
            <button
                onClick={() => filterCategory("Hip hop")}
              >Hip hop</button>
              <button
                onClick={() => filterCategory("R&B")}
              >R&B</button>
              
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>By Price</Accordion.Header>
        <Accordion.Body>
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
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default Filtered