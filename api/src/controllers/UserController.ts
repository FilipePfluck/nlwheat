import { Request, Response } from 'express'
import { ShowUserService } from '../services/ShowUser'


class UserController {
    async show(req: Request, res: Response){
        const {user_id} = req

        const service = new ShowUserService()

        try{
            const result = service.execute(user_id)
        
            return res.json(result)
        }catch(err){
            return res.status(404).json({error: err.message})
        }
        
    }
}

export { UserController }