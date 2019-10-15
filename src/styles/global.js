import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }
  html, body, #root {
    min-height:100%;
  }
  body {
    background: rgb(51,51,51);
    background: radial-gradient(circle, rgba(51,51,51,1) 0%, rgba(45,45,45,1) 100%);
  }
  body, input, button {
    @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
    color: #FFF;
    font-size: 16px;
    font-family: Merriweather, Arial, Helvetica, sans-serif;
    text-shadow: 1px 2px #000000;
  }
  button{
    cursor: pointer;
  }
`;
