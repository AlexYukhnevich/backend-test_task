import bodyParser from 'body-parser';

export const handleBodyParser = (router) => {
  router.use(bodyParser.urlencoded({ extended: false }));
  router.use(bodyParser.json());
}

