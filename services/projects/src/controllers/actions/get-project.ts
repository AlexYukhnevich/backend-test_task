import { Project } from '../../models';
import { InternalError } from '../../errors/classes';

export const getProject = async (id: string) => 
  Project.findOne({ where: { id }})
    .then((project) => project)
    .catch((message) => {
      throw new InternalError(message);
    });