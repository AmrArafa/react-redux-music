import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GlobalStyle from './components/global_style';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

ReactDOM.render(
  <Container>
    <GlobalStyle />
    <App />
  </Container>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
