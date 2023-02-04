import { Request, Response, Router } from 'express';
import User from '../entities/User';
import UserRepository from '../repositories/UserRepository';
import IUser from '../interfaces/IUser';

const userRouter = Router();

userRouter.get('/', async (_req: Request, res: Response): Promise<Response> => {
    const users = await UserRepository.getUsers();
    return res.status(200).json(users);
});

export default userRouter;