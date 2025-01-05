import express, { Request, Response } from 'express';
import { userController } from '../controllers';
import {jwtService, validators } from '../middlewares';
import { ResponseType, UserModelType,  } from '../types';

export const userRouter = express.Router();

userRouter.get('/', jwtService.verifyToken, async (req: Request, res: Response) => {
    const role = req.query.role as string;
    try {
      const result = await userController.getByRole(role);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({ message: (error as Error).message });
    }
  });

  userRouter.put('/:id', jwtService.verifyToken, async (req: Request, res: Response) => {
    const { id } = req.params;
    const { role } = req.body;  // Include role in the body to perform role-specific updates
    try {
    //   await jwtService.checkRole(req, role);  // Optional: Implement this function to validate user roles
      const updatedUser = await userController.updateById(id, req.body);
      res.status(200).send(updatedUser);
    } catch (error) {
      res.status(500).send({ message: (error as Error).message });
    }
});


userRouter.delete('/:id', jwtService.verifyToken, async (req: Request, res: Response) => {
    const { id } = req.params;
    const { role } = req.query;  // Assume role is passed as a query parameter
    try {
    //   await jwtService.checkRole(req, role);  // Check if the requesting user has the right role
      const result = await userController.deleteById(id);
      res.status(200).send({ message: 'User deleted successfully', result });
    } catch (error) {
      res.status(500).send({ message: (error as Error).message });
    }
});
