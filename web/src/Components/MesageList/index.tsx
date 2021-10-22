import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'

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

    function delay(time: number) {
        return new Promise(resolve => setTimeout(resolve, time));
      }

    useEffect(()=>{
        api.get<Message[]>('/messages/last').then(response => {
            setMessages(response.data)
        })
    },[])

    useEffect(()=>{
        const timer = setInterval(()=>{
            if(messagesQueue.length > 0){
                setMessages(state=>[
                    messagesQueue[0],
                    state[0],
                    state[1]
                ].filter(Boolean))
                

                messagesQueue.shift()
            }
        },1000)
    },[])

    return(
        <S.Container>
            <img src={Logo} alt="DoWhile 2021" />

            <AnimateSharedLayout>
                <AnimatePresence >
                    <S.List>
                        {messages.map(message => (
                            
                            <S.Message 
                                key={message.id}
                                layoutId={message.id} 
                                layout 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{duration: 1}}
                            >
                                <p>{message.text}</p>
                                <S.MessageUser>
                                    <div>
                                        <img src={message.user.avatar_url} alt={message.user.name} />
                                    </div>
                                    <span>{message.user.name}</span>
                                </S.MessageUser>
                            </S.Message>
                            
                        ))}
                    </S.List>
                </AnimatePresence>
            </AnimateSharedLayout>
        </S.Container>
    )
}