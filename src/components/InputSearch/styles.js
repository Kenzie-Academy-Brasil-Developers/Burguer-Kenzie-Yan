import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 5px;
    background-color: white;
    border: 2px solid var(--grey-20);
    border-radius: 8px;
    padding: 5px 5px 5px 10px;

    &:focus-within {
        border: 2px solid var(--grey-100);
    }

    button {
        font-weight: 500;
    }
`

export const StyledInput = styled.input`
    border: none;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: var(--grey-20);
        font-size: 16px;
        font-weight: 400;
    }

    &:focus::placeholder {
        color: var(--grey-50);
    }
`