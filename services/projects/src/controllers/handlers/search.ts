import { Request, Response } from 'express';
import { searchProjects } from '../actions';

export const search = async (req: Request, res: Response) => {
  const value = req.query.value as string;
  const projects = await searchProjects(value);
 
  return {
    data: projects,
  }
};
