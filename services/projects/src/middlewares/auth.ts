import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { UnauthorizedError } from '../errors/classes';
import { tokenErrors, jwtErrors } from '../errors/messages'
import { jwtConfig } from '../config'; 
import { getTokenFromRequest } from '../services/token';
import { sendErrorResponse } from '../utils';
import { FORBIDDEN } from 'http-status-codes';
import { pick } from 'lodash';

const { appSecret } = jwtConfig;

interface UserPayload {
  id: number;
  role: string;
  email?: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  
  if (!req.headers.authorization) {
    throw new UnauthorizedError(tokenErrors.noHeader);
  }

  const token = getTokenFromRequest(req);   
  const verified = await verify(token, appSecret);

  if (!verified) {
    sendErrorResponse(res, FORBIDDEN, jwtErrors.invalidToken); 
  } else {
    req.user = pick(verified, ['id', 'role']);
    return next();
  }
}