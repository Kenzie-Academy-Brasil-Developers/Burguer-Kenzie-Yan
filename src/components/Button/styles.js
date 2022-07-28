import styled from "styled-components";

export const Button = styled.button`
    ${
        ({ color }) => color === 'grey' ?
            `
            background-color: var(--grey-20);
            color: var(--grey-50);
            `
        :
            `
            background-color: var(--color-primary);
            color: white;
            `
    }

    ${
        ({ size }) => size === 'big' ?
            `
            padding: 20.5px 20px;    
            `
        :
            `
            padding: 10.5px 16px;
            `
    }

    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;

    &:hover {
        ${
        ({ color }) => color === 'grey' ?
            `
            background-color: var(--grey-50);
            color: var(--grey-20);
            `
        :
            `
            background-color: var(--color-primary-50);
            `
        }
    }
`