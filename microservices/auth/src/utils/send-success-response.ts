import { Response } from "express";
import { OK } from 'http-status-codes';

interface ResponseData {
  redirectPath?: string;
  statusCode?: number;
}

export const sendSuccessResponse = (res: Response, data: ResponseData) => {
  const { redirectPath, statusCode } = data;
  if (redirectPath) {
    res.redirect(redirectPath);
  } else {
    res.status(statusCode || OK).json({ success: true, message: 'Success', data });
  }
};