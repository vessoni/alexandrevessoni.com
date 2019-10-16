import { createGlobalStyle } from 'styled-components';
import 'typeface-open-sans';

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

    color: #FFF;
    font-size: 16px;
    font-family: OpenSans, Arial, Helvetica, sans-serif;
    text-shadow: 1px 2px #000000;
  }
  button{
    cursor: pointer;
  }

  a:visited { text-decoration: none; color:#FFF; }
  a:hover { text-decoration: none; color:#FFF; }
  a:focus { text-decoration: none; color:#FFF; }
  a:hover, a:active { text-decoration: none; color:#FFF }

`;
