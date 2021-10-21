import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

import { api } from '../../services/api'

import * as S from './styles'

import Logo from '../../assets/logo.svg'

interface Message {
    id: string
    text: string
    user: {
        id: string
        avatar_url: string
        name: string
    }
}

const messagesQueue: Message[] = []

const socket = io('http://localhost:3333')

socket.on('new_message', newMessage => {
    messagesQueue.push(newMessage)
})

export const MessageList = () => {
    const [messages, setMessages] = useState<Message[]>([])

    useEffect(()=>{
        api.get<Message[]>('/messages/last').then(response => {
            setMessages(response.data)
        })
    },[])

    useEffect(()=>{
        const timer = setInterval(()=>{
            if(messagesQueue.length > 0){
                setMessages(state=>{
                    return [
                        messagesQueue[0],
                        state[0],
                        state[1]
                    ].filter(Boolean)
                })

                messagesQueue.shift()
            }
        },2000)
    },[])

    return(
        <S.Container>
            <img src={Logo} alt="DoWhile 2021" />

            <ul>
                {messages.map(message => (
                    <S.Message key={message.id}>
                        <p>{message.text}</p>
                        <S.MessageUser>
                            <div>
                                <img src={message.user.avatar_url} alt={message.user.name} />
                            </div>
                            <span>{message.user.name}</span>
                        </S.MessageUser>
                    </S.Message>
                ))}
                
            </ul>
        </S.Container>
    )
}