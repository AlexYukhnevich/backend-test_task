import { DataTypes } from "sequelize";
import { sequelize } from '../services/db/connect-to-db';

const Schema = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  resources: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  price: {
    type: DataTypes.BIGINT,
    defaultValue: 0,
  },
  provider: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  complicity: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  deadline: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  offers: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  drafted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  search: {
    type: DataTypes.STRING,
    defaultValue: '',
  }
};

export const Project = sequelize.define('project', Schema);