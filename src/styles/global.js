import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: auto;
    scrollbar-color: #FF859B #1C1B1E;
  }

  *::-webkit-scrollbar{
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: #1C1B1E;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #FF859B;
    border-radius: 10px;
    border: 3px solid #1C1B1E;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    font-family: ${({ theme }) => theme.FONT.BODY};

    -webkit-font-smoothing: antialiased;
    overflow-y: hidden;
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 15px;
    outline: none;
  }

  button, a {
    cursor: pointer;
    text-decoration: none;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`
