import styled from "styled-components";

const colorPicker = ({ color }) => color === 'green' ? 'var(--color-primary)' : color === 'grey' ? 'var(--grey-50)' : color === 'white' ? 'white' : 'var(--grey-100)'

export const Heading1 = styled.h1`
    font-size: 26px;
    font-weight: 700;
    color: ${colorPicker};
`

export const Heading2 = styled.h2`
    font-size: 22px;
    font-weight: 700;
    color: ${colorPicker};
`

export const Heading3 = styled.h3`
    font-size: 18px;
    font-weight: 700;
    color: ${colorPicker};
`

export const Heading4 = styled.h4`
    font-size: 14px;
    font-weight: 700;
    color: ${colorPicker};
`

export const Headline = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: ${colorPicker};
`

export const Body = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: ${colorPicker};
`

export const Body600 = styled.p`
    font-size: 14px;
    font-weight: 600;
    color: ${colorPicker};
`

export const Caption = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: ${colorPicker};
`