import React, { useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';

import FunctionCard from './FunctionCard';
import InitialInput from './InitialInput';
import FinalOutput from './FinalOutput';
import ErrorMessage from './ErrorMessage';

import { applyFunction } from '../utils/functionUtils';
import { FUNCTION_ORDER } from '../constants/functionConstant';
import { SVGEndOfChain, SVGFn1ToFn2, SVGFn2ToFn4, SVGFn4ToFn5, SVGFn5ToFn3, SVGInitialToFn } from '../constants/svgConstants';

const ChainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
  width: 80%;
`;

interface SVGProps {
    left: string;
    top: string;
}

const SvgWrapper = styled.div<SVGProps>`
    position: absolute;
    left: ${props => props.left}px;
    top:${props => props.top}px;
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
                    {/* Using SVG instead of CSS lines as the overlay for lines is linked to the cards */}
                    <SvgWrapper left="-30" top="225">
                        <SVGInitialToFn />
                    </SvgWrapper>

                    <SvgWrapper left="255" top="230">
                        <SVGFn1ToFn2 />
                    </SvgWrapper>

                    <SvgWrapper left="260" top="230">
                        <SVGFn2ToFn4 />
                    </SvgWrapper>

                    <SvgWrapper left="425" top="530">
                        <SVGFn4ToFn5 />
                    </SvgWrapper>

                    <SvgWrapper left="775" top="230">
                        <SVGFn5ToFn3 />
                    </SvgWrapper>

                    <SvgWrapper left="960" top="225">
                        <SVGEndOfChain />
                    </SvgWrapper>
                </ChainContainer>
                <FinalOutput result={result} />
            </div>
            {inValidEquation && <ErrorMessage>{inValidEquation}</ErrorMessage>}
        </div>
    );
};

export default FunctionChain;