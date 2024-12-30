import { Request, Response, NextFunction } from 'express';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

export const validateBody = (type: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const input = plainToInstance(type, req.body);
    const errors = await validate(input);
    if (errors.length > 0) {
      res.status(400).send(errors);
    } else {
      next();
    }
  };
};
export const validateParams = (type: any) => {
  return async (req: Request<any>, res: Response, next: NextFunction) => {
    const input = plainToInstance(type, req.params);
    const errors = await validate(input);
    if (errors.length > 0) {
      res.status(400).send(errors);
    } else {
      next();
    }
  };
};
