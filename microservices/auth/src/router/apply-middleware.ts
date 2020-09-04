import { Router } from 'express';
import { MiddlewareWrapper } from "../middlewares/middleware";

const applyMiddleware = (router: Router, middlewares: readonly MiddlewareWrapper[]) => {
  middlewares.forEach((middlewareWrapper) => middlewareWrapper(router));
};

export default applyMiddleware;
