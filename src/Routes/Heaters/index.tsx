import React from "react";

import HeaterDisplay from "../.././Components/HeaterDisplay"

import { Spacer, Button, Box, HStack, VStack, Center } from "@chakra-ui/react";

const getHeaters = () => { //API oder so
  return [
    { room: "Wohnzimmer", temperature: (18 + Math.random() * 6).toFixed(1) },
    { room: "Esszimmer", temperature: (18 + Math.random() * 6).toFixed(1) },
    { room: "Schlafzimmer", temperature: (18 + Math.random() * 6).toFixed(1) },
    { room: "Küche", temperature: (18 + Math.random() * 6).toFixed(1) },
    { room: "Arbeitszimmer", temperature: (18 + Math.random() * 6).toFixed(1) },
  ]
}

const Heaters = () => {

  const heaterList = getHeaters();


  return (
    <VStack gridArea="content" w="100%" p={8}>
      <VStack>
        {heaterList.map((heater) => {
          console.log(heater)
          return <HeaterDisplay room={heater.room} temperature={heater.temperature} />
        })}
      </VStack>
      <HStack p={8} spacing={4} w="100%">
        <Button variant="thomas" flex="1">🧊️</Button>
        <Button variant="thomas" flex="1">+</Button>
        <Button variant="thomas" flex="1">🔥</Button>
      </HStack>
    </VStack>
  )
}

export default Heaters;
