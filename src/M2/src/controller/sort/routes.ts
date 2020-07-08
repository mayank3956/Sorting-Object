import { Router } from 'express';
import SortedController from './controller';

const sortRoute = Router();
console.log('in m2 route')
sortRoute.post('/', SortedController.post);

export default sortRoute;
