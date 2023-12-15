import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
      <Box bgColor={"blackAlpha.900"}  color={"whiteAlpha.700"} minH={"48"} px={"16"} py={["16","8"]}> 
      <hr/>
    
     <Stack  direction={["column","row"]} h={"full"} alignItems={"center"}> 
      <VStack w={"full"} alignItems={["center","flex-start"]}> 
    <Text color={"whiteAlpha.700"}fontWeight={"bold"}>About Us</Text>
    <Text color={"whiteAlpha.700"} fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>MASTER REACT JS IN ONE VIDEO WITH 5 PROJECTS</Text>
      </VStack>
      <VStack> 
         <Avatar boxSize={"28"} mt={["4","4"]} src={"https://proxy.builtbybit.com/638af3218dc5d18ae428a72ecf6e06cb15512ab0?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FC9pVnt7WsAAJUgl.jpg"}/>
        <Text color={"whiteAlpha.700"}>Our Founder</Text>
      </VStack>
  
     </Stack>
      
       
        </Box>
  )
}

export default Footer
