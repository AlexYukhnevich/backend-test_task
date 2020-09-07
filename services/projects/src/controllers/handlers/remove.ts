import { Request, Response } from 'express';
import { removeProject } from '../actions';
import { NO_CONTENT } from 'http-status-codes';

export const remove = async (req: Request, res: Response) => {
  const { id: projectId } = req.params;
  const removedProject = await removeProject(projectId);
  
  return {
    data: removedProject,
    statusCode: NO_CONTENT
  }
};
