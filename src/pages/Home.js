import { Container } from "@chakra-ui/layout";
import { Box, Input, useColorModeValue } from "@chakra-ui/react";
import axios from "axios";
import React, { Component } from "react";
import Surah from "../components/Surah";
import { withRouter } from "react-router";

const BgSearch = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  return bgColor;
};
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surah: [],
      filteredSurah: [],
      searchField: "",
    };
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
    const filteredSurah = this.filterSurah(
      this.state.surah,
      this.state.searchField
    );
    this.setState({ filteredSurah: filteredSurah });
  };

  handleDetail = (id) => {
    this.props.history.push(`/surah/${id}`);
  };

  filterSurah(surah, query) {
    if (!query) {
      return surah;
    }

    return surah.filter((surah) => {
      const surahName = surah.name.transliteration.id.toLowerCase();
      return surahName.includes(query);
    });
  }

  async componentDidMount() {
    try {
      const res = await axios.get("https://api.quran.sutanlab.id/surah/");
      this.setState({ surah: res.data.data, filteredSurah: res.data.data });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <>
        <Box
          py={4}
          position="sticky"
          top={20}
          bgColor={BgSearch}
          px={{ base: 4, md: 0 }}
        >
          <Input
            placeholder="Cari surah..."
            border="1px"
            borderColor="brand.900"
            onChange={this.handleChange}
          />
        </Box>
        <Container maxW="container.md" py={2} px={{ base: 4, md: 0 }}>
          {this.state.filteredSurah.map((surah) => {
            return (
              <Surah
                key={surah.number}
                surah={surah}
                goDetail={this.handleDetail}
              />
            );
          })}
        </Container>
      </>
    );
  }
}

export default withRouter(Home);
