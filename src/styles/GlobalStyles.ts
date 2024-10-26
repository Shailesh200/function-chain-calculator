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
    margin-top: 4em;

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
  }

  .function-chain {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
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
