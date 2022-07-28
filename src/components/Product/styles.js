import styled from "styled-components";

export const ProductStyled = styled.li`
    display: flex;
    flex-direction: column;
    width: 300px;
    max-width: 300px;
    border: 2px solid var(--grey-20);
    border-radius: 5px;
    gap: 18px;
    overflow: hidden;
    transition: 0.2s ease-in-out;

    @media screen and (min-width: 1104px) {
        &:hover {
            transform: scale(1.1);
            border: 2px solid var(--grey-100);
        }   
    }

    div{
        display: flex;
        flex-direction: column;
        padding: 14px 20px 23px 20px;
        gap: 18px;
    }

    button {
        width: max-content;
    }

    figure {
        background-color: var(--grey-0);

        img {
            width: 100%;
            max-height: 150px;
            object-fit: contain;
        }
    }
`