import { Request, Response } from 'express'
import { AuthenticateUser } from '../services/AuthenticateUser'

class AuthenticationController {
    async create(req: Request, res: Response){
        const {code} = req.body

        const service = new AuthenticateUser()

        try{
            const result = await service.execute(code)

            return res.json(result)
        }catch(err){

            return res.status(500).json({error: err})
        }   
    }
}

export { AuthenticationController }