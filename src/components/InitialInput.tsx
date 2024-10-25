import React, { useState } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 7em;
`;

const InitialLabel = styled.h5`
  display: inline-block;
  background-color: #E29A2D;
  border-radius: 10px;
  padding: 5px 15px;
  font-size: 14px;
  color: #fff;
  margin-bottom: 8px;
`;

const InitalInput = styled.input`
  font-size: 24px;
  padding: 10px 15px;
  border: 2px solid #E29A2D !important;
  border-radius: 10px !important;
  width: 100px;
  text-align: center;
  font-weight: bold;
  margin-top: 5px;
`;

interface InitialInputProps {
    onInputChange: (value: number) => void;
}

const InitialInput: React.FC<InitialInputProps> = ({ onInputChange }) => {
    const [input, setInput] = useState(0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(e.target.value) || 0;
        setInput(newValue);
        onInputChange(newValue);
    };

    return (
        <InputContainer>
            <InitialLabel>Initial Value</InitialLabel>
            <InitalInput type="number" value={input} onChange={handleInputChange} />
        </InputContainer>
    );
};

export default InitialInput;