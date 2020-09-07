import { Router, Request, Response, NextFunction } from 'express';
import { logger } from '../logger';

export const initialLoggerMiddleware = (router: Router) => {
  router.use((req: Request, res: Response, next: NextFunction) => {
    const { method, url, query, body } = req;
    logger.log({
      level: 'info',
      message: JSON.stringify({ method, url, query, body })
    });
    next();
  })
};
