import { Request, Response } from 'express';
import { getProject } from '../actions';

export const getOne = async (req: Request, res: Response) => {
  const { id: projectId } = req.params;
  const project = await getProject(projectId);
  
  return {
    data: project,
  }
};
