import { Request, Response } from 'express';
import { getMyProjects } from '../actions';
import { normalizeProject } from '../../normalize';

export const getMy = async (req: Request, res: Response) => {
  const { id: userId } = req.user;
  const myProjects = await getMyProjects(userId);
  
  return {
    data: myProjects.map(normalizeProject),
  }
};
