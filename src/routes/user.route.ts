import express from 'express';
import { userController } from '../controllers';

export const userRouter = express.Router();
// default /users
userRouter.get('/', userController.getAll);
