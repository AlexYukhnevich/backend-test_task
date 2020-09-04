import { Sequelize } from "sequelize";
import { dbConfig } from "../../config";
import { getDatabaseConfig } from "../../utils";

const { dialect, environment } = dbConfig;

const config = getDatabaseConfig('test', environment);

const options = {
    Dialect: dialect,
    host: "localhost"
};

export const sequelize = new Sequelize(config.url, options);