import { Text, Flex, Box } from "@chakra-ui/react";
import React, { Component } from "react";
import "../index.css";

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
        <Box>
          <Flex alignItems="center">
            <Box>
              <Flex
                w={{ base: 8, md: 10 }}
                h={{ base: 8, md: 10 }}
                borderRadius="50%"
                bgColor="yellow.200"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  fontSize={{ base: 16, md: 20 }}
                  textAlign="center"
                  color="gray.800"
                >
                  {this.state.surahNum}
                </Text>
              </Flex>
            </Box>
            <Box ml={4}>
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
        </Box>
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
