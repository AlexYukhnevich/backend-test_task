import { CustomError } from './custom.error';

export class InternalError extends CustomError {
  statusCode = 500;
  
  constructor(public message: string) {
    super(message);
  }

}
