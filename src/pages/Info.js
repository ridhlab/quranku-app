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
          <Image src={BrandLogo} alt="quranku-logo" m="auto" width={100} />
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
              <Text>Powered by</Text>
            </Box>
            <Flex justifyContent="center">
              <Box px={2}>
                <Link href="https://www.reactjs.org" isExternal>
                  <Image src={ReactLogo} alt="react-logo" width={28} />
                </Link>
              </Box>
              <Box px={2}>
                <Link href="https://www.chakra-ui.com" isExternal>
                  <Image src={ChakraLogo} alt="chakraui-logo" width={28} />
                </Link>
              </Box>
              <Box px={2}>
                <Link href="https://www.vercel.com" isExternal>
                  <Image src={VercelLogo} alt="vercel-logo" width={28} />
                </Link>
              </Box>
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
