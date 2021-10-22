import styled from "styled-components";

import { motion } from 'framer-motion'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    >img{
        height: 28px;
        margin: 32px 0;
    }

    @media(max-width: 960px){
        padding: 0 24px;
        >img{
            height: 24px;
            margin: 0;
            margin-bottom: 40px;
        }
    }
`

export const List = styled(motion.ul)`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 40px;
    flex: 1;
    justify-content: center;
`

export const Message = styled(motion.li)`
    max-width: 440px;

    p{
        font-size: 20px;
        line-height: 28px;
    }
`

export const MessageUser = styled.div`
    display: flex;
    align-items: center;
    margin-top: 16px;

    div{
        width: 34px;
        height: 34px;
        padding: 2px;
        background: linear-gradient(
            100deg, 
            ${({theme})=>theme.colors.pink} 0%,
            ${({theme})=>theme.colors.yellow} 100%
        );
        border-radius: 50%;
        line-height: 0;
        margin-right: 16px;

        img{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            
            border: 4px solid ${({theme})=>theme.colors.background};
        }
    }
`