import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import GlobalStyle from "./components/GlobalStyle";
import styled from "styled-components";
import store from "./redux/store";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

ReactDOM.render(
  <Provider store={store}>
    <Container>
      <GlobalStyle />
      <App />
    </Container>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
