import { useEffect } from 'react'
import { VscGithubInverted } from 'react-icons/vsc'
import { useAuth } from '../../contexts/AuthContext'
import { api } from '../../services/api'

import * as S from './style'

export const LoginBox = () => {
    const { signInUrl, user } = useAuth()

    return(
        <S.Container>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href={signInUrl}>
                <VscGithubInverted 
                    size={24} 
                    style={{marginRight: 16}}
                />
                Entrar com github
            </a>
        </S.Container>
    )
}