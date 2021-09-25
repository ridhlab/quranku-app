import { Container } from "@chakra-ui/layout";
import axios from "axios";
import React, { Component } from "react";
import Surah from "../components/Surah";
import { withRouter } from "react-router";

class Home extends Component {
  state = {
    surah: [],
  };

  handleDetail = (id) => {
    this.props.history.push(`/surah/${id}`);
  };

  async componentDidMount() {
    try {
      const res = await axios.get("https://api.quran.sutanlab.id/surah/");
      this.setState({ surah: res.data.data });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Container maxW="container.md" py={4} px={{ base: 4, md: 0 }}>
        {this.state.surah.map((surah) => {
          return (
            <Surah
              key={surah.number}
              surah={surah}
              goDetail={this.handleDetail}
            />
          );
        })}
      </Container>
    );
  }
}

export default withRouter(Home);
