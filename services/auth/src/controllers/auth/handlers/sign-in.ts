import { Request, Response } from 'express';
import { checkUser } from '../actions';
import { normalizeUser } from '../../../normalize';
import { clearSpaces } from '../../../utils';
import { signToken } from '../../../services/token';

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = clearSpaces(req.body);
  const user = await checkUser({ email, password });
   // @ts-ignore
  const token = await signToken({ id: user.id, role: user.app_role, email });

  return {
    data: {
      user: normalizeUser(user),
      access_token: token,
    }
  };
}