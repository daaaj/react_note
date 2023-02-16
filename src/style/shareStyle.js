import styled, { createGlobalStyle } from 'styled-components';

// import * as S from '../components/styled/ShareStyle';
/*
    사용하고 싶은 파일에서 위에처럼 import 하고
    S.DivFlex 로 사용하면 된다
    여기에 여러개 작성 가능 !!
*/
export const GlobalStyle = createGlobalStyle`
    
    /* reset.css */
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        //font:inherit;
        vertical-align: baseline;
    } 
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    } 
   

    * {
        @font-face {
            font-family: 'UhBeeSeulvely';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_five@.2.0/UhBeeSeulvely.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }
        font-family: 'UhBeeSeulvely';
    }
    body {
        padding:0;
        margin: 0;
        user-select: none;

    }
`;

export const DivFlexCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
