import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { jwtConfig, appConfig } from '../../../config';
import { InternalError, BadRequestError } from '../../../errors/classes';
import { signupErrors, userErrors, activateErrors } from '../../../errors/messages';
import { getUserByEmail, addUser } from '../../user/actions';
import { normalizeUser } from '../../../normalize/user.normalize';
import { CREATED } from 'http-status-codes';

const { appSecret } = jwtConfig;

export const activateAccount = async (req: Request, res: Response) => {

    var { id: tokenData } = req.query;
  
    if (tokenData) {  
      const decodedToken = await verify((tokenData as any), appSecret);

      if (!decodedToken) {
        throw new BadRequestError(activateErrors.invalidLink);
      }
      
      const { first_name, last_name, email, password, date_of_birth } = decodedToken as any;     
      const user = await getUserByEmail(email);
      
      if (user) {
        throw new BadRequestError(userErrors.existsData);
      }

      const newUser = await addUser({ 
        first_name, 
        last_name, 
        email, 
        password, 
        date_of_birth, 
        confirmed: true,
      }).then(normalizeUser);

      return {
        data: {
          user: newUser,
          redirectPath: `${appConfig.clientHost}/email-activate`,
          statusCode: CREATED,
        }
      }
    } else {
      throw new InternalError(signupErrors.sso);
    }
};
