import React from 'react';
import styled from 'styled-components';

const OutputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10.2em;
`;

const OutputLabel = styled.h5`
  display: inline-block;
  background-color: #4CAF79;
  border-radius: 10px;
  padding: 5px 15px;
  font-size: 14px;
  color: #fff;
  margin-bottom: 8px;
`;

const OutputValue = styled.p`
  font-size: 16px;
  background: #fff;
  padding: 10px 15px;
  border: 2px solid #4CAF79 !important;
  border-radius: 10px;
  min-width: 100px;
  text-align: center;
  font-weight: bold;
  margin-top: 5px;
`;

interface FinalOutputProps {
    result: number;
}

const FinalOutput: React.FC<FinalOutputProps> = ({ result }) => {
    return (
        <OutputContainer>
            <OutputLabel>Final Output</OutputLabel>
            <OutputValue>{result}</OutputValue>
        </OutputContainer>
    );
};

export default FinalOutput;