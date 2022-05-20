import React, { useState, useEffect } from 'react';
import '../index.css';
import { Box, Text, useColorModeValue, Flex } from '@chakra-ui/react';
import Verse from '../components/Verse';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { Link as LinkRoute, useParams } from 'react-router-dom';

import axios from 'axios';

const BgHeading = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  return bgColor;
};

const Surah = () => {
  const { id: surahId } = useParams();

  const [surahData, setSurahData] = useState({});

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://api.quran.sutanlab.id/surah/${surahId}`);
      console.log(res.data.data);
      setSurahData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [surahId]);

  return (
    <Box border={{ base: '0px', md: '1px' }} borderColor={{ base: null, md: 'brand.900' }}>
      <Flex
        textAlign="center"
        py={2}
        position="sticky"
        top={20}
        bgColor={BgHeading}
        justifyContent="space-around"
        alignItems="center"
      >
        <Box>
          {surahId === '1' ? null : (
            <LinkRoute to={`/surah/${parseInt(surahId) - 1}`}>
              <BsArrowLeftCircleFill size={24} color="#aaaaaa" />
            </LinkRoute>
          )}
        </Box>
        <Box>
          <Text fontSize={20}>{surahData?.name?.transliteration.id}</Text>
          <Text fontSize={16}>
            {surahData?.name?.translation.id} - {surahData?.numberOfVerses} ayat
          </Text>
        </Box>
        <Box>
          {surahId === '114' ? null : (
            <LinkRoute to={`/surah/${parseInt(surahId) + 1}`}>
              <BsArrowRightCircleFill size={24} color="#aaaaaa" />
            </LinkRoute>
          )}
        </Box>
      </Flex>
      <Box px={4}>
        <Box py={4}>
          <Text className="arabic" fontSize={32} textAlign="right">
            {surahData?.preBismillah?.text.arab}
          </Text>
        </Box>
        <Box>
          {surahData?.verses.map((verse) => {
            return <Verse key={verse.number.inSurah} verse={verse} />;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Surah;
// export default class Surah extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       surahName: "",
//       surahTranslation: "",
//       bismillah: "",
//       numSurah: this.props.match.params.id,
//       versesNum: "",
//       verses: [],
//     };
//   }

//   async componentDidMount() {
//     try {
//       const res = await axios.get(
//         `https://api.quran.sutanlab.id/surah/${this.state.numSurah}`
//       );
//       res.data.data.number !== 1 && res.data.data.number !== 9
//         ? this.setState({
//             surahName: res.data.data.name.transliteration.id,
//             surahTranslation: res.data.data.name.translation.id,
//             bismillah: res.data.data.preBismillah.text.arab,
//             versesNum: res.data.data.numberOfVerses,
//             verses: res.data.data.verses,
//           })
//         : this.setState({
//             surahName: res.data.data.name.transliteration.id,
//             surahTranslation: res.data.data.name.translation.id,
//             versesNum: res.data.data.numberOfVerses,
//             verses: res.data.data.verses,
//           });
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   render() {
//     return (
//       <Box
//         border={{ base: "0px", md: "1px" }}
//         borderColor={{ base: null, md: "brand.900" }}
//       >
//         <Flex
//           textAlign="center"
//           py={2}
//           position="sticky"
//           top={20}
//           bgColor={BgHeading}
//           justifyContent="space-around"
//           alignItems="center"
//         >
//           <Box>
//             {this.state.numSurah === "1" ? null : (
//               <LinkRoute to={`/surah/${parseInt(this.state.numSurah) - 1}`}>
//                 <BsArrowLeftCircleFill size={24} color="#aaaaaa" />
//               </LinkRoute>
//             )}
//           </Box>

//           <Box>
//             <Text fontSize={20}>{this.state.surahName}</Text>
//             <Text fontSize={16}>
//               {this.state.surahTranslation} - {this.state.versesNum} ayat
//             </Text>
//           </Box>
//           <Box>
//             {this.state.numSurah === "114" ? null : (
//               <LinkRoute to={`/surah/${parseInt(this.state.numSurah) + 1}`}>
//                 <BsArrowRightCircleFill size={24} color="#aaaaaa" />
//               </LinkRoute>
//             )}
//           </Box>
//         </Flex>
//         <Box px={4}>
//           <Box py={4}>
//             <Text className="arabic" fontSize={32} textAlign="right">
//               {this.state.bismillah}
//             </Text>
//           </Box>
//           <Box>
//             {this.state.verses.map((verse) => {
//               return <Verse key={verse.number.inSurah} verse={verse} />;
//             })}
//           </Box>
//         </Box>
//       </Box>
//     );
//   }
// }
