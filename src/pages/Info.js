import { Box, Text, Image, Link, Flex } from "@chakra-ui/react";
import React from "react";
import LogoImg from "../asset/logo.png";

export default function Info() {
  const heightViewport = window.innerHeight - 81;

  return (
    <Flex
      h={heightViewport}
      pt={4}
      border={{ base: "0px", md: "1px" }}
      borderColor={{ base: null, md: "brand.900" }}
      alignItems="center"
      justifyContent="center"
    >
      <Box>
        <Box textAlign="center" pb={4}>
          <Image src={LogoImg} alt="" m="auto" />
        </Box>
        <Box textAlign="center">
          <Text fontSize={24} fontWeight={625}>
            Sumber Data API
          </Text>
          <Text fontSize={16}>
            Quran API from{" "}
            <Link
              color="yellow.400"
              _hover={{ color: "yellow.200" }}
              href="https://github.com/sutanlab/quran-api"
              isExternal
            >
              {" "}
              Sutanlab
            </Link>
          </Text>
        </Box>
        <Box textAlign="center" mt={8} py={4}>
          <Box>
            <Text>
              Contents licensed under{" "}
              <Link
                color="yellow.400"
                _hover={{ color: "yellow.200" }}
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.id"
                isExternal
              >
                CC BY-NC-SA 4.0.
              </Link>
            </Text>
          </Box>
          <Box>
            <Text>
              Made by{" "}
              <Link
                color="yellow.400"
                _hover={{ color: "yellow.200" }}
                href="https://reactjs.org/"
                isExternal
              >
                React JS
              </Link>
              , Styling with{" "}
              <Link
                color="yellow.400"
                _hover={{ color: "yellow.200" }}
                href="https://chakra-ui.com/"
                isExternal
              >
                Chakra UI
              </Link>
            </Text>
          </Box>
          <Box>
            <Text>
              MIT License © 2021 - present |{" "}
              <Link
                color="yellow.400"
                _hover={{ color: "yellow.200" }}
                href="https://github.com/ridlwan17"
                isExternal
              >
                Muhammad Ridwan
              </Link>
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
