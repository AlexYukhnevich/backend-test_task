import { Request, Response } from 'express';
import { addProject } from '../actions';
import { normalizeProject, normalizeValue } from '../../normalize';
import { concate } from '../../utils';


export const add = async (req: Request, res: Response) => {
  try {
    const {
      complicity,
      deadline,
      name,
      offers,
      price,
      provider,
      resources,
      start_date,
      status,
      drafted,
      userId,
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
      offers,
    });

    const createdProject = await addProject({ 
      complicity: normalizedComplicity, 
      deadline,
      name,
      offers: normalizedOffers,
      price: normalizedPrice,
      provider,
      resources: normalizedResources,
      start_date,
      status,
      drafted,
      userId,
      search: searchValue,
    });

    return {
      data: normalizeProject(createdProject)
    }
  } catch (err) {
    console.error({ err: err.message });
  }
}