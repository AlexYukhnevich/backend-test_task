import { Request, Response } from 'express';
import { getSavedProjects } from '../actions';
import { normalizeProject } from '../../normalize';

export const getSaved = async (req: Request, res: Response) => {
  const savedProjects = await getSavedProjects();
  
  return {
    data: savedProjects.map(normalizeProject),
    user: req.user
  }
};
