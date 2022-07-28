import styled from "styled-components";

export const CartProductStyled = styled.li`
    display: grid;
    gap: 10px;
    grid-template-columns: max-content 2fr 1fr;
    padding: 0px 10px;

    &:first-child {
        padding-top: 20px;
    }

    figure {
        width: 80px;
        height: 80px;
        background-color: var(--grey-20);
        padding: 5px;
        border-radius: 5px;

        img {
            width: 100%;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 10px 0px;
        overflow: hidden;

        h4 {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    button {
        padding: 10px 0px;
        border: none;
        background-color: var(--grey-0);
        color: #BDBDBD;
        justify-self: end;
        width: max-content;
        height: max-content;
        font-size: 12px;
        font-weight: 500;

        &:hover {
        color: var(--negative);
        } 
    }
`