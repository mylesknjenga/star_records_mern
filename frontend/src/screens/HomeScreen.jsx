import Jumbotron from "../components/Jumbotron";
import Mission from "../components/Mission";
import Featured from "../components/Featured"
import { motion } from "framer-motion"

const HomeScreen = () => {
  
  return (
    <motion.div 
      initial={{opacity: 0 }} 
      animate={{opacity: 1, transition: {duration: 0.8}}} 
      exit={{ opacity: 0}}
    >
      <Jumbotron />
      <Mission />
      <Featured />
    </motion.div>
  )
}

export default HomeScreen;