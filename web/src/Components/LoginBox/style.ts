import styled from "styled-components";

import BannerGirl from '../../assets/banner-girl.png'

export const Container = styled.div`
    min-height: 100vh;
    width: 453px;
    background: 
        ${({theme}) => theme.colors.details} 
        url(${BannerGirl}) 
        no-repeat 
        center -20%;
    padding: 480px 80px 0;
    padding-bottom: 40px;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    strong{
        font-size: 24px;
        line-height: 26px;
    }

    a{
        background-color: ${({theme}) => theme.colors.yellow};
        margin-top: 32px;
        padding: 0 40px;
        height: 56px;
        color: ${({theme}) => theme.colors.fontContrast};
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.2s;
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;

        &:hover{
            filter: brightness(0.8);
        }
    }

    @media(max-width: 960px){
        width: 100%;
        padding: 480px 24px 24px;
        margin-top: 40px;
    }
`