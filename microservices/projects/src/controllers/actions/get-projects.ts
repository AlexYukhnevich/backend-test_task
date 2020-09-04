import { Project } from '../../models';
import { InternalError } from '../../errors/classes';

export const getProjects = async () => 
  Project.findAll()
    .then((projects) => projects)
    .catch((message) => {
      throw new InternalError(message);
    });