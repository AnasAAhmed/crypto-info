import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { SiBitcoin } from "react-icons/si";
const Header = () => {
  return (
    <HStack  p={"4"} shadow ={"base"} bgColor ={"blackAlpha.800"} > 
      <Button ml={"4"} mb={"1"} variant={"unstyled"} color={"white"}> 
        <Link to ="/" ><SiBitcoin size="3rem" color="yellow"/></Link>
      </Button>
      <Button ml={"4"} variant={"unstyled"} color={"white"} > 
        <Link to ="/crypto-info">Home</Link>
      </Button>
      <Button ml={"4"} variant={"unstyled"} color={"white"} > 
        <Link to ="/exchange">Exchange</Link>
      </Button>
      <Button ml={"4"} variant={"unstyled"} color={"white"}> 
        <Link to ="/coin">Coins</Link>
      </Button>
      
    
    
    </HStack>
  )
}

export default Header
