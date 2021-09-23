import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ColorModeScript, ChakraProvider, Container } from "@chakra-ui/react";
import theme from "./theme";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Container maxW="container.md" px={{ base: 0, md: 2 }}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </Container>
  </ChakraProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
