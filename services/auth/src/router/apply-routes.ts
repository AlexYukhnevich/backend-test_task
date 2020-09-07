import { Router } from 'express';
import { validationWrapper } from '../validation';

const applyRoutes = (
  router: Router, 
  routes
) => {
  routes.forEach(route => {
    const { path, method, validations } = route;
    (router as any)[method.toLowerCase()](
      path, 
      validations, 
      validationWrapper(route)
    );
  });
}

export default applyRoutes;

