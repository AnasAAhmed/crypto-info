import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import btcsrc from "./btc.png"
import {motion} from "framer-motion"
 
const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}> 
     <motion.div style={{height:"80vh"}} animate={{translateY:"20px"}} transition={{duration:2,repeat:Infinity,repeatType:'reverse'}}> 


      <Image  w={"full"} h={"full"} objectFit={"contain"} src={btcsrc} filter={"grayscale(1)"}/>
     </motion.div>
       
      <Heading textAlign={"center"} fontWeight={"thin"} color={"whiteAlpha.700"} >Xcrypto </Heading>
         
     </Box>
  )
}

export default Home
