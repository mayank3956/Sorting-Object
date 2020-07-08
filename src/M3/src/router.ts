import { Router } from 'express';
import mediator from './controller/unsortMediator/routes';
import sortMediator from './controller/sortMediator/routes';
const mainRoute = Router();
console.log('in m3 route')
mainRoute.use('/unsort', mediator);
mainRoute.use('/sort', sortMediator);
export default mainRoute;
