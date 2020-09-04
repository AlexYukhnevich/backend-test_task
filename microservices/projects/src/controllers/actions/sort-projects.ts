import { Project } from '../../models';
import { InternalError } from '../../errors/classes';

export const sortProjects = async (field: string) =>
  Project.findAll({ order: [[ field, 'ASC' ]]})
    .then((projects) => projects)
    .catch((message) => {
      throw new InternalError(message);
    });