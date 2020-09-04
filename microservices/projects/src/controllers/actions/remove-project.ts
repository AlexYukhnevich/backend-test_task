import { Project } from '../../models';
import { InternalError } from '../../errors/classes';

export const removeProject = async (id: string) => 
  Project.destroy({ where: { id } })
    .then((res) => res)
    .catch((message) => {
      throw new InternalError(message);
    })