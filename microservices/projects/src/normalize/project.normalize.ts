import { normalizeDate } from '../utils'; 

export const normalizeProject = (project) => {
  const { 
    id,
    deadline,
    name,
    offers,
    price,
    provider,
    resources,
    start_date,
    status,
    drafted,
    complicity,
    userId
  } = project;
  return {
    id,
    name,
    status,
    resources,
    price,
    provider,
    complicity,
    start_date: normalizeDate(start_date),
    deadline: normalizeDate(deadline),
    offers,
    drafted,
    userId
  }
};