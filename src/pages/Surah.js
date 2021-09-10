import React, { Component } from "react";
import axios from "axios";
import { Box, Text } from "@chakra-ui/react";
import Verse from "../components/Verse";
import "../index.css";

export default class Surah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surahName: "",
      surahTranslation: "",
      bismillah: "",
      numSurah: this.props.match.params.id,
      versesNum: "",
      verses: [],
    };
  }
  render() {
    axios
      .get(`https://api.quran.sutanlab.id/surah/${this.state.numSurah}`)
      .then((res) => {
        console.log(res);
        console.log(res.data.data.number);
        res.data.data.number !== 1 && res.data.data.number !== 9
          ? this.setState({
              surahName: res.data.data.name.transliteration.id,
              surahTranslation: res.data.data.name.translation.id,
              bismillah: res.data.data.preBismillah.text.arab,
              versesNum: res.data.data.numberOfVerses,
              verses: res.data.data.verses,
            })
          : this.setState({
              surahName: res.data.data.name.transliteration.id,
              surahTranslation: res.data.data.name.translation.id,
              versesNum: res.data.data.numberOfVerses,
              verses: res.data.data.verses,
            });
      })
      .catch((err) => console.log(err));
    return (
      <Box
        border={{ base: "0px", md: "1px" }}
        borderColor={{ base: null, md: "brand.900" }}
      >
        <Box
          textAlign="center"
          py={2}
          position="sticky"
          top={20}
          bgColor="white"
        >
          <Text fontSize={24}>{this.state.surahName}</Text>
          <Text fontSize={20}>
            {this.state.surahTranslation} - {this.state.versesNum} ayat
          </Text>
        </Box>
        <Box px={4}>
          <Box py={4}>
            <Text className="arabic" fontSize={32} textAlign="right">
              {this.state.bismillah}
            </Text>
          </Box>
          <Box>
            {this.state.verses.map((verse) => {
              return <Verse verse={verse} />;
            })}
          </Box>
        </Box>
      </Box>
    );
  }
}
