import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
import "../index.css";

export default function Verse(props) {
  return (
    <Box py={4}>
      <Flex justifyContent="space-between">
        <Box pr={4}>
          <Flex
            w={{ base: 8, md: 10 }}
            h={{ base: 8, md: 10 }}
            borderRadius="50%"
            bgColor="yellow.200"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize={{ base: 16, md: 20 }} textAlign="center">
              {props.verse.number.inSurah}
            </Text>
          </Flex>
        </Box>
        <Text className="arabic" textAlign="right" fontSize={32}>
          {props.verse.text.arab}
        </Text>
      </Flex>
      <Box py={2} pl={{ base: 0, md: 12 }}>
        <Text textAlign="left">{props.verse.translation.id}</Text>
      </Box>
    </Box>
  );
}
