import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: ${({theme})=>theme.colors.details};
    padding: 24px;
    align-self: center;
    position: relative;

    @media(max-width: 960px){
        width: 100%;
        margin-top: 40px;
    }
`

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    strong{
        font-size: 24px;
        line-height: 30px;
        margin-top: 16px;
    }

    span{
        display: flex;
        align-items: center;
        margin-top: 8px;
        color: ${({theme})=>theme.colors.unimportant};

        svg{
            margin-right: 8px;
        }
    }
`

export const UserImage = styled.div`
    width: 100px;
    height: 100px;
    padding: 3px;
    background: linear-gradient(
        100deg, 
        ${({theme})=>theme.colors.pink} 0%,
        ${({theme})=>theme.colors.yellow} 100%
    );
    border-radius: 50%;
    line-height: 0;
    margin-right: 16px;

    img{
        width: 94px;
        height: 94px;
        border-radius: 50%;
            
        border: 6px solid ${({theme})=>theme.colors.background};
    }
`

export const SignOutButton = styled.button`
    background: transparent;
    border: 0;
    color: ${({theme})=>theme.colors.unimportant};
    position: absolute;
    left: 24px;
    top: 24px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        filter: brightness(0.8);
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-self: stretch;
    background: ${({theme})=>theme.colors.form};
    margin-top: 48px;

    label {
        padding: 18px 24px;
        font-size: 20px;
        background: ${({theme})=>theme.colors.label};
        font-weight: bold;
        text-align: left;
    }

    textarea{
        background: transparent;
        border: 0;
        padding: 24px;
        resize: none;
        height: 160px;
        color: ${({theme})=>theme.colors.font};
        font-size: 16px;
        line-height: 24px;
        
        &:focus {
            outline: 0;
        }

        &::placeholder{
            color: ${({theme})=>theme.colors.placeholder};
        }
    }

    button {
        align-self: center;
        background-color: ${({theme}) => theme.colors.pink};
        margin: 24px;
        padding: 0 32px;
        height: 40px;
        color: ${({theme}) => theme.colors.title};
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.2s;
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        cursor: pointer;
        border: 0;

        &:hover{
            filter: brightness(0.8);
        }
    }
`