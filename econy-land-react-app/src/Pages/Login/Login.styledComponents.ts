import styled from 'styled-components';

export const LoginBox = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 400px;
  gap: 20px;
`;

export const Title = styled.h2`
  color: ${props => props.theme.color.primary};
  text-align: center;
  margin-bottom: 30px;
  font-size: 36px; /* Adjust size as needed */
  font-family: 'Arial', sans-serif; /* Add a font family that matches your style */
`;