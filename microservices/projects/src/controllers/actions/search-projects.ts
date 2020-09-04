import { Op } from 'sequelize';
import { Project } from '../../models';
import { InternalError } from '../../errors/classes';

export const searchProjects = async (value: string) => 
  Project.findAll(
    { 
      where: {
        search: {
          [Op.substring]: value
        }
      }
    }
  )
  .then((projects) => projects)
  .catch((message) => {
    throw new InternalError(message);
  });
  