import { Flex, Heading, Box } from "@chakra-ui/react";
import { BsInfoCircleFill } from "react-icons/bs";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as LinkRoute,
} from "react-router-dom";
import { BtnToggleTheme } from "./components/BtnToggleTheme";
import Home from "./pages/Home";
import Info from "./pages/Info";
import SurahPage from "./pages/Surah";

function App() {
  return (
    <>
      <BtnToggleTheme />
      <Router>
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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/surah/:id" component={SurahPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
