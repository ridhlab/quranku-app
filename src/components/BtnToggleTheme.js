import React from 'react';
import { Flex, Box, useColorMode, useColorModeValue } from '@chakra-ui/react';

// React Icons
import { IoCloudyNightOutline } from 'react-icons/io5';
import { WiDaySunny } from 'react-icons/wi';

const BtnToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('white', 'gray.700');
  return (
    <Box position="sticky" top={{ base: 560, md: 600 }} px={4}>
      <Box position="absolute" right={4} onClick={toggleColorMode}>
        <Flex>
          <Flex
            w={12}
            h={12}
            borderRadius="50%"
            bgColor={bgColor}
            boxShadow="lg"
            borderColor="blackAlpha.500"
            alignItems="center"
            justifyContent="center"
            marginLeft="auto"
          >
            {colorMode === 'light' ? <IoCloudyNightOutline size={28} /> : <WiDaySunny size={40} />}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default BtnToggleTheme;
