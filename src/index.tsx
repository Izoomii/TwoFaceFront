import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// axios.defaults.timeout = 20000;

const theme = extendTheme({
  colors: {
    ariana: {
      100: "#E2F9A9",
      200: "#B2C484",
      300: "#95AD9F",
      400: "#BEC4B8",
      500: "#DBD3BC",
      600: "#B6B6B6",
    },
  },
});

//https://stackoverflow.com/a/72072443/19483118
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
