import { Box, Text, Image, Link, Flex } from "@chakra-ui/react";
import React from "react";
import BrandLogo from "../asset/logo.png";
import ReactLogo from "../asset/react-logo.png";
import ChakraLogo from "../asset/chakra-logo.png";
import VercelLogo from "../asset/vercel-logo.png";

export default function Info() {
  const heightViewport = window.innerHeight - 81;

  return (
    <Flex
      h={heightViewport}
      border={{ base: "0px", md: "1px" }}
      borderColor={{ base: null, md: "brand.900" }}
      alignItems="center"
      justifyContent="center"
    >
      <Box>
        <Box textAlign="center" pb={4}>
          <Image src={BrandLogo} alt="quranku-logo" m="auto" />
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
            <Box>
              <Text>
                Made with{" "}
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
                MIT License © 2021 - present
                <Text>
                  By{" "}
                  <Link
                    color="yellow.400"
                    _hover={{ color: "yellow.200" }}
                    href="https://github.com/ridlwan17"
                    isExternal
                  >
                    Muhammad Ridwan
                  </Link>
                </Text>
              </Text>
            </Box>
          </Box>
          <Box py={4}>
            <Box py={2}>
              <Text>Sponsored by</Text>
            </Box>
            <Flex justifyContent="center">
              <Image src={ReactLogo} px={2} />
              <Image src={ChakraLogo} px={2} />
              <Image src={VercelLogo} px={2} />
            </Flex>
          </Box>
        </Box>
        <Box>
          <Text textAlign="center">
            Visit{" "}
            <Link
              color="yellow.400"
              _hover={{ color: "yellow.200" }}
              href="https://github.com/ridlwan17/quranku-app"
              isExternal
            >
              sourcecode
            </Link>
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}
