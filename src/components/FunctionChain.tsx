import React, { useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';

import FunctionCard from './FunctionCard';
import InitialInput from './InitialInput';
import FinalOutput from './FinalOutput';
import ErrorMessage from './ErrorMessage';

import { applyFunction } from '../utils/functionUtils';
import { FUNCTION_ORDER } from '../constants/functionConstant';
import { PathFn1ToFn2, PathFn2ToFn4, PathFn4ToFn5, PathFn5ToFn3 } from '../constants/svgConstants';

const ChainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 250px);
  grid-template-rows: repeat(2, 250px);
  grid-gap: 40px;
  position: relative;
  justify-content: center;
  width: 72%;
`;

const SvgContainer = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const FunctionChain: React.FC = () => {
    const [initialValue, setInitialValue] = useState<number>(0);
    const [inValidEquation, setInvalidEquationMessage] = useState('');
    const [functions, setFunctions] = useState<string[]>(['', '', '', '', '']);

    const handleFunctionChange = (index: number, newFunction: string) => {
        const updatedFunctions = [...functions];
        updatedFunctions[index] = newFunction;
        setFunctions(updatedFunctions);
    };

    const calculateResult = useCallback(() => {
        setInvalidEquationMessage('');
        let x = initialValue;

        for (const i of FUNCTION_ORDER) {
            const { value, isValid, errorMessage } = applyFunction(functions[i], x);
            if (!isValid) {
                setInvalidEquationMessage(errorMessage)
                return x;
            }
            x = value;
        }
        return x;
    }, [initialValue, functions]);


    const result = useMemo(() => calculateResult(), [calculateResult]);

    return (
        <div>
            <div className="function-chain">
                <InitialInput onInputChange={setInitialValue} />
                <ChainContainer>
                    {/* Row 1 */}
                    <FunctionCard
                        label="Function: 1"
                        nextFunctionLabel="Function 2"
                        onInputChange={(input) => handleFunctionChange(0, input)}
                    />
                    <FunctionCard
                        label="Function: 2"
                        nextFunctionLabel="Function 4"
                        onInputChange={(input) => handleFunctionChange(1, input)}
                    />
                    <FunctionCard
                        label="Function: 3"
                        nextFunctionLabel="End of Chain"
                        onInputChange={(input) => handleFunctionChange(2, input)}
                    />
                    {/* Row 2 */}
                    <FunctionCard
                        label="Function: 4"
                        nextFunctionLabel="Function 5"
                        onInputChange={(input) => handleFunctionChange(3, input)}
                    />
                    <FunctionCard
                        label="Function: 5"
                        nextFunctionLabel="Function 3"
                        onInputChange={(input) => handleFunctionChange(4, input)}
                    />
                    {/* SVG paths connecting the function cards */}
                    <SvgContainer xmlns="http://www.w3.org/2000/svg">

                        {/* Path from Function 1 to Function 2 */}
                        <PathFn1ToFn2 />

                        {/* Path from Function 2 to Function 4 */}
                        <PathFn2ToFn4 />

                        {/* Path from Function 4 to Function 5 */}
                        <PathFn4ToFn5 />

                        {/* Path from Function 5 to Function 3 */}
                        <PathFn5ToFn3 />
                    </SvgContainer>
                </ChainContainer>
                <FinalOutput result={result} />
            </div>
            {inValidEquation && <ErrorMessage>{inValidEquation}</ErrorMessage>}
        </div>
    );
};

export default FunctionChain;