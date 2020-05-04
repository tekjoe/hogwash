import React from "react";
import { GlobalStyle } from "./utils/global";
import { Provider } from "react-redux";
import { theme } from "./utils/theme";
import { ThemeProvider } from "styled-components";
import configureStore from "./store/configureStore";
import Header from "./components/Header";
import Masthead from "./components/Masthead";
import Features from "./components/Features";
import Footer from "./components/Footer";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header />
        <Masthead />
        <Features />
        <Footer />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
