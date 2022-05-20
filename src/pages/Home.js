import React, { useState, useEffect } from 'react';
import { Container } from '@chakra-ui/layout';
import { Box, Input, useColorModeValue } from '@chakra-ui/react';

// Components
import Surah from '../components/Surah';

// Library
import axios from 'axios';

const BgSearch = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  return bgColor;
};

const Home = () => {
  const [surah, setSurah] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [filteredSurah, setFilteredSurah] = useState([]);
  const [searchingVal, setSearchingVal] = useState('');

  const fetchData = async () => {
    try {
      const res = await axios.get('https://api.quran.sutanlab.id/surah/');
      setSurah(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const filterSurah = (surah, keyword) => {
    return surah.filter((surah) => {
      const surahName = surah.name.transliteration.id.toLowerCase();
      return surahName.includes(keyword);
    });
  };

  const handleChange = (value) => {
    setSearchingVal(value);
    if (value !== '') {
      setIsSearching(true);
      const filtered = filterSurah(surah, value);
      setFilteredSurah(filtered);
    } else {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Box py={4} position="sticky" top={20} bgColor={BgSearch} px={{ base: 4, md: 0 }}>
        <Input
          placeholder="Cari surah..."
          border="1px"
          borderColor="brand.900"
          value={searchingVal}
          onChange={(e) => handleChange(e.target.value)}
        />
      </Box>
      <Container maxW="container.md" py={2} px={{ base: 4, md: 0 }}>
        {isSearching
          ? filteredSurah.map((surah, idx) => {
              return <Surah key={surah.number} surah={surah} />;
            })
          : surah.map((surah, idx) => {
              return <Surah key={surah.number} surah={surah} />;
            })}
      </Container>
    </>
  );
};

export default Home;
