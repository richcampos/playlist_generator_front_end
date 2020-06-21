import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  .warning {
    font-size: 0.9em;
    color: #94244a;
    font-style: italic;
  }

  html {
    box-sizing: border-box;
    font-family: 'Work Sans'
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button { 
    margin: 0; padding: 0; 
  }

  ul { 
    list-style: none; 
  }

  input {
    padding: 1%;
    border-radius: 5px;
    font-size: 1.2em;
    width: 100%;

    ::placeholder {
      color: rgba(32, 20, 58, 0.4);
      font-style: italic;
    }
  }

  button { 
    background: transparent;
    border: 0; 
    outline: 0;
    padding: 10px 15px;
    background-color: #fbb03b;
    border-radius: 5px;
    font-size: 1.2em;
    color: white;
    margin-top: 3%;
    margin-bottom: 3%;
    cursor: pointer;
    box-shadow: 0 5px #999;

    &:hover {
      background-color: #ff584f;
    }

    &:active {
      box-shadow: 0 2px #666;
      transform: translateY(4px);
    }
  }

  body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
  }
`
