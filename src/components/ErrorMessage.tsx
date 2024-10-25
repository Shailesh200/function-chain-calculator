import React from 'react';
import styled from 'styled-components';

interface ErrorMessageProps {
  children: React.ReactNode;
}

const ErrorMessageContainer = styled.div`
  margin-top: 20px;
  background-color: #ffebeb;
  padding: 16px;
  border-radius: 8px;
  color: black;
  font-size: 16px;
`;

const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => {
  return <ErrorMessageContainer>{children}</ErrorMessageContainer>;
};

export default ErrorMessage;
