import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 23px 0px 14px 0px;
    background-color: var(--grey-0);

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        img {
            width: 150px;
            height: 25px;
        }
    }

    @media screen and (min-width: 1104px) {
        > div {
            width: 85%;
            max-width: 1500px;
            flex-direction: row;
            justify-content: space-between;
        }
    }
`