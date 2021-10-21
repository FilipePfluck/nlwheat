
import React, { FormEvent, useState } from 'react'
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc'
import { useAuth } from '../../contexts/AuthContext'
import { api } from '../../services/api'
import * as S from './styles'

export const SendMessageForm: React.FC = () => {
    const { user, signOut } = useAuth()
    const [message, setMessage] = useState('')

    async function handleSendMessage(e: FormEvent){
        e.preventDefault()

        if(!message.trim()){
            return
        }

        await api.post('messages', { message })

        setMessage('')
    }

    return(
        <S.Container>
            <S.SignOutButton>
                <VscSignOut size="32" onClick={signOut}/>
            </S.SignOutButton>
            <S.Header>
                <S.UserImage>
                    <img src={user?.avatar_url} alt={user?.name} />
                </S.UserImage>
                <strong>{user?.name}</strong>
                <span>
                    <VscGithubInverted size="16"/>
                    {user?.login}
                </span>
            </S.Header>
            <S.Form onSubmit={handleSendMessage}>
                <label htmlFor="message">Mensagem</label>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Qual sua expectativa para o evento?"
                    onChange={(e)=>setMessage(e.target.value)}
                    value={message}
                />
                <button type="submit">Enviar mensagem</button>
            </S.Form>
        </S.Container>
    )
}
