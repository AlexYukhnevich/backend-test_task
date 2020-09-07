import { Router } from 'express';
import applyMiddleware from './apply-middleware';
import applyRoutes from './apply-routes';
import middlewares from '../middlewares';
import routes from '../routes';

export const configureRouter = (router: Router) => {
  applyMiddleware(router, middlewares);
  applyRoutes(router, routes);
};