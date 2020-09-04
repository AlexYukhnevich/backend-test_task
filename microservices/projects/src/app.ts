import express from 'express';
import configureRoutes from './router';

export const app = express();

configureRoutes(app);