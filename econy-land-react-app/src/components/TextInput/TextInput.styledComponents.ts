import styled from "styled-components";

export const TextInputElement = styled.input`
    border-radius: 8px;
    padding: 8px 16px;
    border: 1px solid #ced4da;
    font-size: 16px;
    `;
export const TextInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    color: black;

    input {
        width: 100%;
        box-sizing: border-box
        }
    `;