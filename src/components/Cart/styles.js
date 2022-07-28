import styled from "styled-components";

export const Aside = styled.aside`
    display: flex;
    padding: 0px 16px;
    width: 100%;
    
    > div {
        width: 100%;
        border-radius: 5px;
        overflow: hidden;

        > h3 {
        width: 100%;
        padding: 22px 21px;
        background-color: var(--color-primary);
        }
    }

    @media screen and (min-width: 1104px) {
        max-width: 365px;
        padding: 0px;
    }
`

export const CartStyled = styled.ul`
    display: flex;
    flex-direction: column;

    ${
        ({ list }) => list && list.length > 0 ?
            null   
        :
            `
            align-items: center;
            justify-content: center;
            `
    }

    min-height: 158px;
    gap: 16px;
    background-color: var(--grey-0);
`