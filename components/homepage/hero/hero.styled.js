import styled from "styled-components";
import {
    rem ,
    fluid,
    breakpoint } from "@/styled/functions";

export const App = styled.div`
    align items: center;
    border-bottom: 1px solid ${ ({theme}) => theme.colors.darkBlue};
    display: flex;
    justify-context: space-between;
    min-height: ${ rem(369)};
    position: relative;
`
export const HeroImg = styled.img`
    height: ${ fluid(368, 416, 495)};
    width: ${ fluid(381, 768, 1550)};
    
`

export const HeroText = styled.p`
    color: ${ ({theme}) => theme.colors.greyOne};
    min-height: ${fluid(96, 70, 149 )};
    font-family: 'Source Serif Pro', serif;
    font-size: ${ fluid(52, 10 , 70)};
    letter-spacing: -1px;
    line-height: 1.2;
    padding: ${ rem(16)};
    position: absolute;
    top: ${ fluid(96, 141, 100)};

    span {
        display: block;
    }

    ${  breakpoint("desktop", `
    margin-left: ${ rem(96) };
    `) }
`