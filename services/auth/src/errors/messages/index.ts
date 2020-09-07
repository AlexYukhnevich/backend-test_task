const userErrors = {
  notFound:  "User is not found",
  existsData: "Such user already exists",
  invalidData: "User data is invalid",
  unauthorized: "Unauthorized user",
  forbidden: "Forbidden",
};

const internalErrors = {
  default: "Oops, something went wrong...",
};

const signupErrors = {
  invalidData: "The email or password is not valid. Please, follow the format: example@domain.com",
  invalidCredentials:  "User's credentials are invalid",
  sso: "Something went wrong while logging in. Please try again",
};

const signInErrors = {
  invalidEmail: 'Invalid email',
  notConfirmed: 'Please confirm via email',
  invalidPassword: 'Invalid password',
}

const mailErrors = {
  invalidData: "Invalid email",
};

const activateErrors = {
  invalidLink: 'Incorrect or Expired link',
};

const tokenErrors = {
  invalidData: "Token data is invalid",
  noHeader: "Authorization header is not defined",
};

const jwtErrors = {
  invalidToken: "Token is expired",
};

export {
  userErrors,
  internalErrors,
  signupErrors,
  mailErrors,
  tokenErrors,
  jwtErrors,
  activateErrors,
  signInErrors,
};