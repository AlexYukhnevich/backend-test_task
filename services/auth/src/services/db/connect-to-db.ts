import { Sequelize } from "sequelize";
import { dbConfig } from "../../config";
import { getDatabaseConfig } from "../../utils";

const { 
    dbName, 
    dbLogin, 
    dbPassword,
    dialect,
    environment 
} = dbConfig;

const config = getDatabaseConfig(process.env.NODE_ENV, environment);

const options = {
    Dialect: dialect,
    host: "localhost"
};

export const sequelize = config.url ? new Sequelize(config.url, options) : new Sequelize(dbName, dbLogin, dbPassword, options);