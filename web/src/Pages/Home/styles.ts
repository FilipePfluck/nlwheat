import styled, { css } from "styled-components"

import Background from '../../assets/background.svg'

export const Container = styled.main`
    padding: 0 80px;
    min-height: 100vh;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 453px;
    column-gap: 120px;
    position: relative;

    @media(max-width: 1100px){
        padding: 0 40px;
    }

    @media(max-width: 960px){
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px 24px;
    }
`