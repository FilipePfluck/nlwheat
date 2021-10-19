import 'dotenv/config'
import express from 'express'
import { Server } from 'socket.io'
import http from 'http'
import cors from 'cors'

import { router } from './routes'

const app = express()

app.use(router)
app.use(express.json())
app.use(cors())

export const serverHttp = http.createServer(app)

export const io = new Server(serverHttp, {
    cors: {
        origin: "*"
    }
})

io.on("connection", socket => {
    console.log(`Usuário conectado no socker ${socket.id}`)
})