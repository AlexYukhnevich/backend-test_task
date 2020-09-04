import { Project } from '../../models';
import { InternalError } from '../../errors/classes';

export const getSavedProjects = async () => 
  Project.findAll({ where: { drafted: true }})
    .then((projects) => projects)
    .catch((message) => {
      throw new InternalError(message);
    });