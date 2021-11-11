import { Text, Flex, Box } from "@chakra-ui/react";
import React, { Component } from "react";
import "../index.css";
import NumSurahIcon from "../asset/ayah-num.png";

export default class Surah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surahNum: "",
      surahName: "",
      verses: "",
      translation: "",
      surahNameId: "",
    };
  }

  componentDidMount() {
    try {
      const surahName = this.props.surah.name.long;
      this.setState({ surahName: surahName });
      const surahNum = this.props.surah.number;
      this.setState({ surahNum: surahNum });
      const surahNameId = this.props.surah.name.transliteration.id;
      this.setState({ surahNameId: surahNameId });
      const surahVerses = this.props.surah.numberOfVerses;
      this.setState({ verses: surahVerses });
      const translation = this.props.surah.name.translation.id;
      this.setState({ translation: translation });
    } catch (err) {}
  }

  render() {
    return (
      <Flex
        justifyContent="space-between"
        alignItems="center"
        border="1px"
        borderColor="brand.900"
        p={4}
        borderRadius={8}
        mb={4}
        onClick={() => this.props.goDetail(this.state.surahNum)}
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
            >
              <Text fontSize={{ base: 12, md: 16 }} textAlign="center">
                {this.state.surahNum}
              </Text>
            </Flex>
          </Box>
          <Box ml={2}>
            <Text
              fontSize={{ base: 20, md: 24 }}
              onClick={() => this.props.goDetail(this.state.surahNum)}
              cursor="pointer"
              _hover={{ color: { md: "brand.900" } }}
            >
              Surah {this.state.surahNameId}
            </Text>
            <Text fontSize={{ base: 14, md: 20 }}>
              {this.state.translation} - {this.state.verses} ayat
            </Text>
          </Box>
        </Flex>

        <Box>
          <Text
            className="arabic"
            fontSize={{ base: 20, md: 28 }}
            textAlign="right"
          >
            {this.state.surahName}
          </Text>
        </Box>
      </Flex>
    );
  }
}
