import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,body {
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.colors.primaryBg};
    color: ${theme.colors.textFont};
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  a {
    text-decoration: none
  }

  ul {
    list-style: none;
  }

  h1 {
    font-size: calc((100vw - 375px) / (1512 - 375) * (64 - 39) + 39px);
    font-weight: 500;
    font-family: Spectral, sans-serif;
    line-height: 1.2;
  }

  h2 {
    font-size: calc((100vw - 375px) / (1512 - 375) * (48 - 31) + 31px);
    font-weight: 500;
    font-family: Spectral, sans-serif;
    line-height: 1.2;

    @media ${theme.media.bigMobile} {
      text-align: center;
    }
  }

  h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
  }

  button {
    background-color: unset;
    border: none;
  }

  input {
    background: transparent;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    border: none;
    outline: none;
  }

`;
