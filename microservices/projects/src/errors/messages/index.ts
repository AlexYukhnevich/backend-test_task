const projectErrors = {
  notFound: "Project is not found",
  invalidData: "Project data is invalid",
  invalidSortColumn: 'Such column does\'t exist',
};

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
  tokenErrors,
  jwtErrors,
  projectErrors,
};