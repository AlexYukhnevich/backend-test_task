import { Router } from 'express';
import { validationWrapper } from '../validation/validation-wrapper';
import { auth } from '../middlewares/auth';

const applyRoutes = (
  router: Router, 
  routes
) => {
  routes.forEach(route => {
    const { path, method, validations } = route;
  
    (router as any)[method.toLowerCase()](
      path, 
      auth,
      validations, 
      validationWrapper(route)
    );
  });
}

export default applyRoutes;


