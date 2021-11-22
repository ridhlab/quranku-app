import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
import "../index.css";
import NumSurahIcon from "../asset/ayah-num.png";

export default function Verse(props) {
  return (
    <Box py={4}>
      <Flex justifyContent="space-between">
        <Box pr={4}>
          <Flex
            w={{ base: 12, md: 16 }}
            h={{ base: 12, md: 16 }}
            borderRadius="50%"
            alignItems="center"
            justifyContent="center"
            bgImage={NumSurahIcon}
            bgRepeat="no-repeat"
            bgPosition="center"
            bgSize={40}
          >
            <Text fontSize={{ base: 12, md: 16 }} textAlign="center">
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
