import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-top: 2px solid var(--grey-20);
    padding: 15px 10px 20px 10px;

    > div {
        display: flex;
        justify-content: space-between;
    }
`