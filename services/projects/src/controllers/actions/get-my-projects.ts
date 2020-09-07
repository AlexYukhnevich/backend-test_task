import { Project } from '../../models';
import { InternalError } from '../../errors/classes';

export const getMyProjects = async (id: number) => 
  Project.findAll({ where: { userId: id, drafted: false } })
    .then((projects) => projects)
    .catch((message) => {
      throw new InternalError(message);
    });