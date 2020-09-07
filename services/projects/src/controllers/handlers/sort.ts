import { Request, Response } from 'express';
import { sortProjects } from '../actions';
import { allowedColumnValues } from '../../config';
import { BadRequestError } from '../../errors/classes';
import { projectErrors } from '../../errors/messages';
import { sendErrorResponse } from '../../utils';

export const sort = async (req: Request, res: Response) => {
  try {
    const column = req.query.column as string;  
    if (!allowedColumnValues.includes(column)) {
      throw new BadRequestError(projectErrors.invalidSortColumn);
    } 
    const sortedProjects = await sortProjects(column);
    return {
      data: sortedProjects,
    }
  } catch ({ message, statusCode }) {
    sendErrorResponse(res, statusCode, message);
  }
};
