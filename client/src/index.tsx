import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import { colors, createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const GlobalStyles = createGlobalStyle`
  ::-webkit-scrollbar-track
{
	background-color: #F5F5F5;
}

::-webkit-scrollbar
{
	width: 12px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
	background-color: ${colors.blueGrey[100]};
}
  html {
   font-size: 62.5%; 
   -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;  

  }
  *, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
  
  padding: 0;
  margin: 0;

  }
  body {
    font-family: 'Roboto', sans-serif;
    overflow: hidden;
  }
`;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#70c1b3",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
