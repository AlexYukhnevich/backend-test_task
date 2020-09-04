import { DataTypes } from "sequelize";
import { sequelize } from '../services/db/connect-to-db';
import { Project } from './project.model';

 const Schema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date_of_birth: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  confirmed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  app_role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'user',
  },
};

export const User = sequelize.define('user', Schema);
User.hasMany(Project);