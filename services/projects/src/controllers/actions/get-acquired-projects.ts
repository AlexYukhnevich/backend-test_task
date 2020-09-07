import { Project } from '../../models';
import { InternalError } from '../../errors/classes';
import { Op } from 'sequelize';

export const getAcquiredProjects = async (id: number) => 
  Project.findAll({
    where: { 
      userId: {
        [Op.not]: id
      } 
    }
  })
  .then((projects) => projects)
  .catch((message) => {
    throw new InternalError(message);
  });