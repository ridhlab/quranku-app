import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

// React Router
import { Link as LinkRoute } from 'react-router-dom';

// React Icons
import { BsInfoCircleFill } from 'react-icons/bs';

const Navbar = React.memo(() => {
  return (
    <Box position="sticky" top={0}>
      <Flex
        bgColor="brand.900"
        color="white"
        p={6}
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading as="h4" fontSize={28}>
          <LinkRoute to="/">QuranKu</LinkRoute>
        </Heading>
        <Box>
          <LinkRoute to="/info">
            <BsInfoCircleFill size={24} />
          </LinkRoute>
        </Box>
      </Flex>
    </Box>
  );
});

export default Navbar;
