import { compareEntities } from '../../../helpers';
import { BadRequestError } from '../../../errors/classes';
import { signInErrors } from '../../../errors/messages';
import { getUserByEmail } from '../../user/actions';

interface SignIn {
  email: string;
  password: string;
}

export const checkUser = async (data: SignIn)  => {
  const { email, password } = data;
  const existingUser = await getUserByEmail(email);
  
  if (!existingUser) {
    throw new BadRequestError(signInErrors.invalidEmail);
  }
  // @ts-ignore
  if (!existingUser.confirmed) {
    throw new BadRequestError(signInErrors.notConfirmed);
  }
  // @ts-ignore
  const isValidPassword = await compareEntities(password, existingUser.password);

  if (!isValidPassword) {
    throw new BadRequestError(signInErrors.invalidPassword);
  } 
  return existingUser; 
}