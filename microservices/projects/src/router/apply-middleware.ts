import { Router } from 'express';

const applyMiddleware = (router: Router, middlewares) => {
  middlewares.forEach((middlewareWrapper) => middlewareWrapper(router));
};

export default applyMiddleware;
