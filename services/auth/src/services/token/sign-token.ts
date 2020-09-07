import { sign } from 'jsonwebtoken';
import { jwtConfig } from '../../config';

const { expiresIn, appSecret } = jwtConfig;

interface TokenPayload {
    [x: string]: any;
};

export const signToken = (payload: TokenPayload) => sign(payload, appSecret, { expiresIn });