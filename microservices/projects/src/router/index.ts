import middlewares from '../middlewares';
import routes from '../routes';
import applyMiddlewares from './apply-middleware';
import applyRoutes from './apply-routes';

export default (router) => {
  applyMiddlewares(router, middlewares);
  applyRoutes(router, routes);
};