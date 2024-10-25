import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import FunctionChain from './components/FunctionChain';

const App: React.FC = () => {
  return (
    <div className='app-wrapper'>
      <h4 className='assignment-heading'>Function chain calculator app - Atlys frontend task</h4>
      <div className="app-container">
        <GlobalStyles />
        <div className="chain-container">
          <FunctionChain />
        </div>
      </div>
    </div>
  );
};

export default App;
