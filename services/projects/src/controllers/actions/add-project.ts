import { Project } from '../../models';
import { InternalError } from '../../errors/classes';

interface ProjectData {
  complicity: number; 
  deadline: Date;
  name: string; 
  offers: number;
  price: number;
  provider?: string; 
  resources?: number;
  start_date: Date; 
  status: string;
  drafted: boolean;
  userId: number;
  search: string;
};

export const addProject = async (project: ProjectData) => 
  Project.create(project)
    .then((project) => project)
    .catch(({ message }) => {
      throw new InternalError(message);
    })


