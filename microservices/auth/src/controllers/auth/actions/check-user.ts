import { compareEntities } from '../../../helpers';
import { BadRequestError } from '../../../errors/classes';
import { signupErrors, userErrors } from '../../../errors/messages';
import { getUserByEmail } from '../../user/actions';

interface SignIn {
  email: string;
  password: string;
}

export const checkUser = async (data: SignIn)  => {
    const { email, password } = data;
    const existingUser = await getUserByEmail(email);
    // @ts-ignore
    if (!existingUser || !existingUser.confirmed) {
      throw new BadRequestError(userErrors.invalidData);
    }
    // @ts-ignore
    const isValidPassword = await compareEntities(password, existingUser.password);

    if (!isValidPassword) {
      throw new BadRequestError(signupErrors.invalidCredentials);
    } 
    return existingUser; 
}