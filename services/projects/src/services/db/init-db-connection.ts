import { sequelize } from './connect-to-db';
import { DatabaseConnectionError } from '../../errors/classes';

export const initDbConnection = async () => {
  try {
    await sequelize.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    throw new DatabaseConnectionError();
  }
}
