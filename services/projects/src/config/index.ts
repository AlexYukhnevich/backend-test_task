import dotenv from 'dotenv';

dotenv.config();

const appConfig = {
  port: process.env.APP_PORT,
  clientHost: process.env.CLIENT_HOST,
  serverHost: process.env.SERVER_HOST,
  roleServiceHost: `${process.env.MACHINE_HOST}:${process.env.ROLE_PORT}`,
  userServiceHost: `${process.env.MACHINE_HOST}:${process.env.USER_PORT}`,
};

const dbConfig = {
  dbProtocol: process.env.DB_PROTOCOL,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbLogin: process.env.DB_LOGIN,
  dbName: process.env.DB_NAME,
  dbPassword: process.env.DB_PASSWORD,
  dialect: process.env.DB_DIALECT,
  environment: {
    development: {
      url: process.env.DB_DEV,
    },
    test: {
      url: process.env.DB_TEST,
    },
    production: {
      url: process.env.DB_PROD,
    },
  }
};

const jwtConfig = {
  appSecret: process.env.JWT_SECRET,
  refreshSecret: process.env.JWT_SECRET_REFRESH,
  expiresIn: String(process.env.JWT_EXPIRES_IN),
  refreshExpiresIn: String(process.env.JWT_REFRESH_EXPIRES_IN), 
};

// for sorted values
const allowedColumnValues = ['name', 'status', 'resources', 'price', 'provider', 'complicity', 'start_date', 'deadline', 'offers'];

export {
  appConfig,
  dbConfig,
  jwtConfig,
  allowedColumnValues,
};