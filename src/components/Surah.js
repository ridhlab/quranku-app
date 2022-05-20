import React from 'react';
import '../index.css';
import { Text, Flex, Box } from '@chakra-ui/react';
import NumSurahIcon from '../asset/ayah-num.png';
import { useHistory } from 'react-router-dom';

const Surah = React.memo(({ surah }) => {
  const history = useHistory();
  const { name, number, numberOfVerses } = surah;

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      border="1px"
      borderColor="brand.900"
      p={4}
      borderRadius={8}
      mb={4}
      onClick={() => history.push(`/surah/${number}`)}
      cursor="pointer"
    >
      <Flex alignItems="center">
        <Box>
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
              {number}
            </Text>
          </Flex>
        </Box>
        <Box ml={2}>
          <Text
            fontSize={{ base: 20, md: 24 }}
            onClick={() => history.push(`/surah/${number}`)}
            cursor="pointer"
            _hover={{ color: { md: 'brand.900' } }}
          >
            Surah {name.transliteration.id}
          </Text>
          <Text fontSize={{ base: 14, md: 20 }}>
            {name.translation.id} - {numberOfVerses} ayat
          </Text>
        </Box>
      </Flex>
      <Box>
        <Text className="arabic" fontSize={{ base: 20, md: 28 }} textAlign="right">
          {name.long}
        </Text>
      </Box>
    </Flex>
  );
});

export default Surah;
