import { Request, Response } from 'express';
import { appConfig, mailConfig, dependenciesConfig } from "../../../config";
import { getUserByEmail } from '../../user/actions';
import { getHashedEntity } from '../../../helpers'; 
import { sendMail } from '../../../services/mail';
import { clearSpaces } from '../../../utils';
import { signToken } from '../../../services/token';
import { BadRequestError } from '../../../errors/classes';
import { userErrors, mailErrors } from '../../../errors/messages';

const { clientHost, gatewayHost } = appConfig;
const { senderMail } = mailConfig;
const { saltRounds } = dependenciesConfig;

export const signUp = async (req: Request, res: Response) => {
  const { first_name, last_name, email, password, date_of_birth } = clearSpaces(req.body);
  const user = await getUserByEmail(email);

  if (user) {
    throw new BadRequestError(userErrors.existsData);
  }

  if (email !== senderMail) {
    const hashedPassword = await getHashedEntity(password, saltRounds);  
    const activateToken = await signToken({ 
      first_name, 
      last_name, 
      email, 
      password: hashedPassword, 
      date_of_birth,
    });   
        
    const query = `id=${activateToken}`;
    
    await sendMail({ 
      email, 
      password, 
      url: `${clientHost}/authentication/activate?${query}`,
      path: `${gatewayHost}/auth/email-activate?${query}`,
    });
    
  } else {
    throw new BadRequestError(mailErrors.invalidData);
  }
  return {
    data: {}
  }
};
