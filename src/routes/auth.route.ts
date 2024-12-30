import express, { Request, Response } from 'express';
import { ValidatorMiddleware, validators } from '../middlewares';
import { authController } from '../controllers';
export const authRouter = express.Router();

//se connecter
authRouter.post(
  '/signin',
  ValidatorMiddleware.validateBody(validators.SigninValidator),
  async (req: Request<unknown, unknown, validators.SigninValidator>, res: Response) => {
    const { body } = req;
    const token = await authController.signIn(body);
    res.status(200).send({ access_token: token });
    console.log({ token: token });
  },
);

//s'inscrire
authRouter.post(
  '/register',
  ValidatorMiddleware.validateBody(validators.RegisterValidator),
  async (req: Request<unknown, unknown, validators.RegisterValidator>, res: Response) => {
    const { body } = req;

    await authController.registerUser(body);
    res.status(200).send();
  },
);

// //vérifier compte
// authRouter.post('/register/verifycode', async (req: Request, res: Response) => {
//   const { body } = req.body;
//   const isVerified = authController.verifyUserAccount(body);
//   if (!isVerified) {
//     res.status(400).send();
//   }
//   res.status(200).send();
// });


export default authRouter;
