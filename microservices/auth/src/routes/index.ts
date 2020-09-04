import { authController } from '../controllers';
import { signUpValidationRules, signInValidationRules, emailActivateValidationRules } from '../validation';

const { 
  signIn, 
  signUp, 
  activateAccount,
  notFound,
} = authController;

export const authPrefix = '/auth';

export default [
  {
    path: `${authPrefix}/sign-up`,
    method: 'POST',
    validations: signUpValidationRules,
    handler: signUp,
  },
  {
    path: `${authPrefix}/email-activate`,
    method: 'GET',
    validations: emailActivateValidationRules,
    handler: activateAccount,
  },
  {
    path: `${authPrefix}/login`,
    method: 'POST',
    validations: signInValidationRules,
    handler: signIn,
  },
  {
    path: '*',
    method: 'ALL',
    validations: [],
    handler: notFound,
  }
];