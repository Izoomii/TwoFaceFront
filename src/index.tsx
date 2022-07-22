import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { themes } from "./themes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// axios.defaults.timeout = 20000;

//https://stackoverflow.com/a/72072443/19483118
root.render(
  <React.StrictMode>
    <ChakraProvider theme={themes}>
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
