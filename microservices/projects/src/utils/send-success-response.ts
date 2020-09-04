import { Response } from "express";
import { OK } from 'http-status-codes';

interface Data {
  data: {
    [x: string] : any;
  };
  redirectPath?: string;
  statusCode?: number;
}

interface User {
  id: number;
  role: string;
  email?: string;
}

interface ResponseData {
  data: Data;
  user?: User;
}

export const sendSuccessResponse = (res: Response, responseData: ResponseData) => {
  const { data, user } = responseData;
  const { redirectPath, statusCode } = data;
  
  if (redirectPath) {
    res.redirect(redirectPath);
  } else {
    res.status(statusCode || OK).json({ success: true, message: 'Success', data, user: user || null });
  }
};