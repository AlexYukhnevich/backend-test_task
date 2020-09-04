import { Request, Response } from 'express';
import { updateProject } from '../actions';
import { normalizeValue } from '../../normalize';
import { concate } from '../../utils';

export const update = async (req: Request, res: Response) => {
  const { id: projectId } = req.params;
  const { 
    name, 
    provider, 
    complicity, 
    start_date, 
    deadline, 
    offers, 
    status, 
    price, 
    resources, 
    drafted, 
  } = req.body;

  const normalizedPrice = normalizeValue(price);
  const normalizedOffers = normalizeValue(offers);
  const normalizedResources = normalizeValue(resources);
  const normalizedComplicity = normalizeValue(complicity);

  const searchValue = concate({
    name, 
    status, 
    resources, 
    price, 
    provider, 
    complicity, 
    start_date, 
    deadline, 
    offers
  });
  
  const updatedProject = await updateProject(projectId, { 
    name, 
    provider, 
    complicity: normalizedComplicity, 
    start_date, 
    deadline, 
    offers: normalizedOffers, 
    status, 
    price: normalizedPrice, 
    resources: normalizedResources, 
    drafted,
    search: searchValue, 
  });
 
  return {
    data: {
      updatedProject,
    }
  }
 };
 