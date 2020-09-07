import express from 'express';
import { configureRouter } from './router';
import { handleError } from './middlewares/error';

export const app = express();

app.set('trust proxy', true);
configureRouter(app);

app.use(handleError);