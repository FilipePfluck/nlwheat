import { Request, response, Response } from 'express'
import { io } from '../app'
import { CreateMessageService } from '../services/CreateMessage'
import { GetLastMessagesService } from '../services/GetLastMessages'


class MessageController {
    async create(req: Request, res: Response){
        const { message } = req.body
        const { user_id } = req

        const service = new CreateMessageService()

        const result = await service.execute(message, user_id)

        return res.json(result)
    }

    async getLastMessages(req: Request, res: Response){
        const service = new GetLastMessagesService()

        const result = await service.execute()

        return res.json(result)
    }
}

export { MessageController }