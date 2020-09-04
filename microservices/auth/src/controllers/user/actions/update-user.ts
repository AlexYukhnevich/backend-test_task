import { User } from '../../../models';
import { InternalError } from "../../../errors/classes";

interface Updates {
  [x: string] : any;
}

export const updateUser = async (email: string, updates: Updates) => 
  User.update(updates, { where: { email }})
    .then((userId) => userId)
    .catch((message) => {
      throw new InternalError(message);
    });
