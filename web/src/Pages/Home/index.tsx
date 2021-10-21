import { MessageList } from '../../Components/MesageList'
import { LoginBox } from '../../Components/LoginBox'

import * as S from './styles'
import { useAuth } from '../../contexts/AuthContext'
import { SendMessageForm } from '../../Components/SendMessageForm'
import { useEffect } from 'react'

export const Home = ()=>{
    const { user } = useAuth()

    return(
        <S.Container>
            <MessageList/>
            {!user ? <LoginBox/> : <SendMessageForm/>}
        </S.Container>
    )
}