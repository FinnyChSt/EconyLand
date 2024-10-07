import styled from "styled-components";

export const ButtonElement = styled.button<{ buttonType: 'primary' | 'secondary' }>`
  border-radius: 8px;
    padding: 8px 16px;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    background-color: ${props => props.buttonType === 'primary' ? props.theme.color.container.primary : props.theme.color.container.secondary};
    display: flex;
    justify-content: center;
    width: 100%;

`;