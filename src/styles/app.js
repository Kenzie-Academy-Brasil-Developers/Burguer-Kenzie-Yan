import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    width: 100%;
    padding-bottom: 30px;

    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        section {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            
            > h1 {
                width: max-content;
                padding-left: 16px;

                @media screen and (min-width: 1104px) {
                padding: 0px 0px 20px;
                }
            }

            @media screen and (min-width: 1104px) {
                gap: 10px;
            }
        }

        @media screen and (min-width: 1104px) {
            width: 85%;
            max-width: 1500px;
            align-items: start;
            justify-content: space-between;
            flex-direction: row;
            gap: 40px;
        }
    }

    @media screen and (min-width: 1104px) {
        gap: 30px;
    }
`