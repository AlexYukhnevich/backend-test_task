import { Request, Response, NextFunction } from "express";
import { CustomError } from '../errors/classes';
import { BAD_REQUEST } from 'http-status-codes';

export const handleError = (err: Error, req: Request , res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).send({ error: err.message });
  }
  res.status(BAD_REQUEST).send({
    errors: { message: 'Something went wrong' }
  });
};
