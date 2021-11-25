import React from "react";
import { IconButton, Button, Center, Box, HStack, Spacer, useColorModeValue } from "@chakra-ui/react";

interface HeaderDisplayProps {
  room: string;
  temperature: string;
}

const HeaterDisplay: React.FC<HeaderDisplayProps> = ({ room, temperature }) => {
  const bg = useColorModeValue("main.5", "main.1");

  return (
    <Center>
      <Box p={3} bg="gray.50" borderRadius={5} width="90vw" _hover={{ background: "gray.100", color: "gray.500" }}>
        <HStack>
          <Box m="2" fontWeight="bold" width="50%" font >{room}</Box>
          <HStack>
            <Button flex={2} bg="teal.100" >-</Button>
            <Box flex={1}>{temperature}°C</Box>
            <Button flex={1} bg="teal.100">+</Button>
          </HStack>
          <Button color="teal.300" bg="gray.100" width="20%">🌡️</Button>
        </HStack>
      </Box>
    </Center>
  );
};

export default HeaterDisplay;
