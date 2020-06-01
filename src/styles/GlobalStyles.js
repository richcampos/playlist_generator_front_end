import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
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
    outline: 0 
  }

  body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
  }
`
