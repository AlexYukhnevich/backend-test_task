import { Request, Response } from 'express';
import { validationResult } from "express-validator";
import { sendErrorResponse, sendSuccessResponse } from "../utils";
import { BadRequestError } from '../errors/classes';

export const validationWrapper = (route) => 
async (req: Request, res: Response) => {
  try {
    const { handler } = route;
    const validationErrors = validationResult(req);  
    if (!validationErrors.isEmpty()) {
        const errorMessages = validationErrors.array().map(({ param, msg }) => `${param}: ${msg}`);
        throw new BadRequestError(errorMessages.join(';'));
    }
    
    const response = await handler(req, res);
    
    if (!response) {
        return;
    }
    
    sendSuccessResponse(res, response);

  } catch ({ message, statusCode }) {
    sendErrorResponse(res, statusCode, message);
  }
}