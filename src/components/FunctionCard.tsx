import React, { useState } from 'react';
import styled from 'styled-components';
import { DragIcon } from '../constants/svgConstants';

const Card = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardLabel = styled.h4`
    color: #A5A5A5;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 16px;
    line-height: 16.94px;
`;

const CardSubHeading = styled.h5`
    font-weight: bold;
    margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 16px;
`;

const Dropdown = styled.select`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
  cursor: not-allowed;  /* Disable interactivity */
`;

interface FunctionCardProps {
    label: string;
    nextFunctionLabel: string;
    onInputChange: (input: string) => void;
}

const FunctionCard: React.FC<FunctionCardProps> = ({ label, nextFunctionLabel, onInputChange }) => {
    const [input, setInput] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInput(newValue);
        onInputChange(newValue);
    };

    return (
        <Card>
            <CardLabel>
                <DragIcon />

                <span> {label}</span>
            </CardLabel>
            <CardSubHeading>Enter equation</CardSubHeading>
            <Input
                type="text"
                value={input}
                onChange={handleInputChange}
            />
            <CardSubHeading>Next function</CardSubHeading>
            <Dropdown disabled>
                <option>{nextFunctionLabel}</option>
            </Dropdown>
        </Card>
    );
};

export default FunctionCard;
