import React from "react";
import { GlobalStyle } from "./utils/global";
import { theme } from "./utils/theme";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Masthead from "./components/Masthead";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Masthead />
      <Features />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
