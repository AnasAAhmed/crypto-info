import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from "../index";
import { Container, HStack, Image, Text, VStack , RadioGroup,Radio, Box,Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Badge, Progress,Button} from '@chakra-ui/react';
import Loader from './Loader';
import Chart from './Chart';
import Error from './Error';
import {  useParams } from 'react-router-dom';


const Coindetails = () => {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [chartArray, setChartArray] = useState([]);
  const [days, setDays] = useState("24h");
  const currencysymbol = currency==="inr" ? "₹":currency==="eur" ? "€":"$";
  const btns =["24h","7d","14d","30d","60d","200d","365d","max"]
const switchchartstats = (key)=>{ 
switch (key) {
  case "24h":
    setDays("24h")
    setLoading(true)
    break;
    case "7d":
    setDays("7d")
    setLoading(true)
    break;
    case "14d":
    setDays("14d")
    setLoading(true)
    break;
    case "30d":
    setDays("30d")
    setLoading(true)
    break;
    case "60d":
    setDays("60d")
    setLoading(true)
    break;
    case "200d":
    setDays("200d")
    setLoading(true)
    break;
    case "365d":
    setDays("365d")
    setLoading(true)
    break;
    case "max":
    setDays("max")
    setLoading(true)
    break;


  default:
    setDays("24h")
    setLoading(true)
    break;
}
}

const params = useParams();

  useEffect(() => {
    const fetchcoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        const { data:chartData} = await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`);
        console.log(chartData.prices);
        setCoin(data);
        setChartArray(chartData.prices);
        setLoading(false);
      }
      catch (error) {
        setError(true);
        setLoading(true);
      }
    }
    fetchcoin();
  }, [params.id,currency,days]);
  if (error) return <Error mesge={"Error While Fetching Coins Details Data"} />;
  return (
    <Container maxW={"container.xl"}> 
     { 
     loading ? <Loader/>:( 
      <>  
      <Box  width={"full"}borderWidth={1}><Chart  arr={chartArray}currency={currencysymbol} days={days}/></Box>

     <HStack p={"4"} wrap={"wrap"}>     
        { 
        btns.map((i)=>( 
          <Button key={i} onClick={()=>switchchartstats(i)}>{i}</Button>
        ))
        } 
     </HStack>

      <RadioGroup value={currency}onChange={setCurrency} p={"4"}> 
          <HStack spacing={"4"}> 
            <Radio value={"inr"}>INR</Radio> 
            <Radio value={"usd"}>USD</Radio> 
            <Radio value={"eur"}>EUR</Radio> 
          </HStack>
        </RadioGroup>
        <VStack spacing={"4"} p="16" alignItems={"flex-start"}> 
        <Text  fontSize={"small"} alignSelf ={"centet"} opacity={0.7}>Last date update on {Date(coin.market_data.last_updated).split("G")[0]}</Text>
        <Image src={coin.image.large} w={"16"}  h={"16"} objectFit={"contian"}/>
        <Stat> 
          <StatLabel> 
            {coin.name}
          </StatLabel>
          <StatNumber>{currencysymbol}{coin.market_data.current_price[currency]}</StatNumber>
          <StatHelpText> 
            <StatArrow type={coin.market_data.price_change_percentage_24h > 0?"increase":"decrease"} />
            {coin.market_data.price_change_percentage_24h}%
          </StatHelpText>
        </Stat>
        <Badge fontSize={"2x1"} backgroundColor={"black"} color={"white"}> 
          {`#${coin.market_data.market_cap_rank}`}
        </Badge>
        <CustomBar  high={`${currencysymbol}${coin.market_data.high_24h[currency]}`} low={`${currencysymbol}${coin.market_data.low_24h[currency]}`}/>
         
         <Box  width={"full"}p={4}> 
         
         <Item title={"Max Supply"} value={`${coin.market_data.max_supply}`}/>
         <Item title={"Circulating Supply"} value={`${coin.market_data.circulating_supply}`}/>
         <Item title={"Market Cap"} value={`${currencysymbol}${coin.market_data.market_cap[currency]}`}/>
         <Item title={"All Time Low"} value={`${currencysymbol}${coin.market_data.atl[currency]}`}/>
         <Item title={"All Time high"} value={`${currencysymbol}${coin.market_data.ath[currency]}`}/>
        </Box>
        </VStack>
      </>
     )
     }
    </Container>
  )
}


const Item =({title,value})=>{ 
  return( 
  <HStack justifyContent={"space-between"}w={"full"} my={"4"}> 
<Text fontFamily={"bebas Neue"} letterSpacing={"widest"}>{title}</Text>
<Text>{value}</Text>
  </HStack>
  )
}



const CustomBar =({high,low})=>{ 
  return( 

    <VStack w={"full"}> 
   <Progress value={40} colorScheme={"teal"} w={"full"}/> 
   <HStack justifyContent={"space-between"}w={"full"}> 
     <Badge children={low} colorScheme={"red"}/> 
    <Text font={"sm"}> 24h Range</Text>
     <Badge children={high} colorScheme={"green"}/>
   </HStack>  
   </VStack>
)
}


export default Coindetails
