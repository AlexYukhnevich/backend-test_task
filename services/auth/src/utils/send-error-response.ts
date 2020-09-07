import { Response } from "express";
import { INTERNAL_SERVER_ERROR } from 'http-status-codes';

export const sendErrorResponse = (
    res: Response, 
    status = INTERNAL_SERVER_ERROR, 
    message = 'Something went wrong'
) => {
    res.status(status).json({ success: false, message, data: {} });
};