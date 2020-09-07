import dotenv from 'dotenv';

dotenv.config();

const appConfig = {
  port: process.env.APP_PORT,
  clientHost: process.env.CLIENT_HOST,
  serverHost: process.env.SERVER_HOST,
  gatewayHost: process.env.GATEWAY_HOST,
  userServiceHost: `${process.env.MACHINE_HOST}:${process.env.USER_PORT}`,
};

const dependenciesConfig = {
  saltRounds: 10,
};

const mailConfig = {
  mailSecret: process.env.MAIL_SECRET,
  senderMail: process.env.SMTP_USERNAME,
  senderPassword: process.env.SMTP_PASSWORD,
  smtpHost: process.env.SMTP_HOST,
  smtpPort: process.env.SMTP_PORT,
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
  activateKey: process.env.JWT_ACC_ACTIVATE,
};

export {
  appConfig,
  dependenciesConfig,
  mailConfig,
  dbConfig,
  jwtConfig,
};