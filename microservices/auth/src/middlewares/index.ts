import { handleBodyParser } from "./body-parser";
import { initialLoggerMiddleware } from './logger';

export default [ 
  handleBodyParser, 
  initialLoggerMiddleware,
];
