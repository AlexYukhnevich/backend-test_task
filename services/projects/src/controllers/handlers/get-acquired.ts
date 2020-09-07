import { Request, Response } from 'express';
import { getAcquiredProjects } from '../actions';
import { normalizeProject } from '../../normalize';

export const getAcquired = async (req: Request, res: Response) => {
  const { id: userId } = req.user;
  const acquiredProjects = await getAcquiredProjects(userId);
  
  return {
    data: acquiredProjects.map(normalizeProject),
  }
};
