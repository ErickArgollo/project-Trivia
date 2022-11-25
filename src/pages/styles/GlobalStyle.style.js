import { createGlobalStyle } from 'styled-components';
import background from '../../assets/images/background.svg';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    box-sizing: border-box;
    background: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`;

export default GlobalStyle;
