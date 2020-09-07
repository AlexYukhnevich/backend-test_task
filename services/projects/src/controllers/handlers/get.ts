import { Request, Response } from 'express';
import { getProjects } from '../actions';
import { normalizeProject } from '../../normalize';

export const get = async (req: Request, res: Response) => {
  const projects = await getProjects();
  
  return {
    data: projects.map(normalizeProject),
    user: req.user
  }
};
