/*
    * Developer: Nesrine jouini
    * Company: ISET_RADES
    * Date: 30/12/2024
    */ 
 

  import express, { NextFunction, Request } from 'express';

  import { formationController } from '../controllers';
import { ResponseType } from '../types';

  const formationRoutes = (app: express.Application) => {


    app.post(
      '/formations',
      //!jwtService.verifyToken,
      //!ValidatorMiddleware.validateBody(formationValidator.****),
      async function (req: Request, res: ResponseType<void>) {
        const {body} = req
        //await formationController.create(body);
        res.status(201).send();
      },
    );
  
    app.get(
      '/formations',
      //!jwtService.verifyToken,
      //!ValidatorMiddleware.validateQuery(formationValidator.****),
      async function (req: Request, res: ResponseType<{ result: string }>) {
        const {} = req
        //const result = await formationController.getAll();
        res.status(201).send({result:'result'});
      },
    );


  };

  export default formationRoutes;
    
  