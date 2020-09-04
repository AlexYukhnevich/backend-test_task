import { Request, Response } from 'express';
import { NotFoundError } from '../../errors/classes';

export const notFound = async (req: Request, res: Response) => {
  throw new NotFoundError();
};