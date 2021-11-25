import React from "react";

import HeaterDisplay from "../.././Components/HeaterDisplay"

import {Spacer, Button, Box, HStack, VStack, Center } from "@chakra-ui/react";

const getHeaters = () => { //API oder so
  return [
    {room: "Wohnzimmer", temperature: (18 + Math.random()*6).toFixed(1)},
    {room: "Esszimmer", temperature: (18 + Math.random()*6).toFixed(1)},
    {room: "Schlafzimmer", temperature: (18 + Math.random()*6).toFixed(1)},
    {room: "Küche", temperature: (18 + Math.random()*6).toFixed(1)},
    {room: "Arbeitszimmer", temperature: (18 + Math.random()*6).toFixed(1)},
  ]
}

const Heaters = (props) => {

  const heaterList = getHeaters();

  const heaters = heaterList.map((heater) => {
     console.log(heater)
    return <HeaterDisplay key={heater.room} room={heater.room} temperature={heater.temperature}/>
  })

  return(
    <Box overflow="scroll" gridArea="content" w="100%" h="85vh" p={5}>
    <VStack>
      {heaters}
    </VStack>
    <HStack m={5} spacing={3} >
        <Button h="50px" flex="1" color="teal.300" bg="gray.50" width="20%">🧊️</Button>
        <Button h="50px" flex="1" color="teal.300" bg="gray.50" width="20%">+</Button>
        <Button h="50px" flex="1" color="teal.300" bg="gray.50" width="20%">🔥</Button>
    </HStack>
 </Box>
  )
}

export default Heaters;
