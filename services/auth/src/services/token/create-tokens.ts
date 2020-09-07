import { sign } from 'jsonwebtoken';
import { pick } from 'lodash';
import { jwtConfig } from '../../config';

const { expiresIn, refreshExpiresIn } = jwtConfig;

export const createTokens = async (user, secret1, secret2) => {
  const token = sign({ user: pick(user, ['id', 'email']) }, secret1, { expiresIn });
  const refreshToken = sign({ user: pick(user, 'id') }, secret2, { expiresIn: String(refreshExpiresIn) });
  return Promise.all([token, refreshToken]);
};