import { Router } from 'express';
import mediatorController from './controller';
import validationHandler from '../../../../M1/src/libs/routes/validationHandler';
import validation from '../../validation';

const routeHandler = Router();
console.log('in m3 roy');
routeHandler.post('/', validationHandler(validation.create) , mediatorController.create);
routeHandler.get('/', validationHandler(validation.get) , mediatorController.list);

 export default routeHandler;
