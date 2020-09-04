import { User } from '../../../models';
import { InternalError } from "../../../errors/classes";

export const getUserByEmail = async (email: string) => 
  User.findOne({ where: { email }, raw: true })
    .then((user) => user)
    .catch(({ message }) => {
      throw new InternalError(message);
    });
