import { User } from '../../../models';
import { InternalError } from "../../../errors/classes";

interface User {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  date_of_birth: Date;
  confirmed?: boolean;
}

export const addUser = async (user: User) => 
  User.create(user)
    .then((user) => user)
    .catch((message) => {
      throw new InternalError(message);
    })

