// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #F8F8F8;
  }

  .app-wrapper {
    display: flex;
    flex-direction: column;

    .assignment-heading {
      margin: 20px auto 30px auto;
      font-size: 20px;
    }
  }

  .app-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .chain-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 80%;
  }

  .function-chain {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    gap: 10px;
    flex-wrap: wrap;
  }

  input[type="number"], input[type="text"] {
    padding: 8px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ddd;
    width: 100%;
  }

  input[type="number"] {
    width: 80px;
    margin: 0 auto;
  }
`;

export default GlobalStyles;
