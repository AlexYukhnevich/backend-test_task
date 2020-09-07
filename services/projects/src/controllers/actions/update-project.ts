import { Project } from '../../models';
import { InternalError } from '../../errors/classes';

interface Updates {
  [key: string]: any;
}

export const updateProject = async (id: string, updates: Updates) => 
  Project.update(updates, { where: { id }})
    .then((projects) => projects)
    .catch((message) => {
      throw new InternalError(message);
    });