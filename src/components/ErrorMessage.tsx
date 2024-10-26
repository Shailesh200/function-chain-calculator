import React from 'react';
import styled from 'styled-components';

interface ErrorMessageProps {
  children: React.ReactNode;
}

const ErrorMessageContainer = styled.div`
  margin: 0px auto 20px auto;
  background-color: #ffebeb;
  padding: 16px;
  border-radius: 8px;
  color: black;
  font-size: 16px;
  width: 80%;
`;

const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => {
  return <ErrorMessageContainer>{children}</ErrorMessageContainer>;
};

export default ErrorMessage;
