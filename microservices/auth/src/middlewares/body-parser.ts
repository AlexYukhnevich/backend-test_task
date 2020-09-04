import bodyParser from 'body-parser';
import { Router } from 'express';

export const handleBodyParser = (router: Router) => {
  router.use(bodyParser.urlencoded({ extended: false }));
  router.use(bodyParser.json());
};

