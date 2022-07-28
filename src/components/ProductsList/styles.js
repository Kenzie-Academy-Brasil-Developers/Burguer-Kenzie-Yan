import styled from "styled-components";

const ProductsList = styled.ul`
    display: grid;
    grid-auto-flow: column;
    gap: 20px;
    width: 100%;
    padding: 25px 16px 10px 16px;
    overflow-x: auto;

    @media screen and (min-width: 1104px) {
        grid-auto-flow: row;
        width: max-content;
        grid-template-columns: 1fr 1fr;
        overflow-x: unset;
        padding: 0px;
    }

    @media screen and (min-width: 1440px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`

export default ProductsList