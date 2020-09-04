import { 
  add, 
  getOne, 
  get, 
  remove, 
  update,
  sort,
  search, 
  getMy,
  getAcquired, 
  getSaved,
  notFound,
} from '../controllers';

import {
  addProjectValidationRules,
  removeProjectValidationRules,
  updateProjectValidationRules,
  sortProjectValidationRules,
  searchProjectValidationRules,
} from '../validation';

const projectPrefix = "/projects";

export default [
  {
    path: `${projectPrefix}/my`,
    method: "GET",
    validations: [],
    handler: getMy,
  },
  {
    path: `${projectPrefix}/acquired`,
    method: "GET",
    validations: [],
    handler: getAcquired,
  },
  {
    path: `${projectPrefix}/saved`,
    method: "GET",
    validations: [],
    handler: getSaved,
  },
  {
    path: `${projectPrefix}/search`,
    method: "GET",
    validations: searchProjectValidationRules,
    handler: search,
  },
  {
    path: `${projectPrefix}/sort`,
    method: "GET",
    validations: sortProjectValidationRules,
    handler: sort,
  },
  {
    path: `${projectPrefix}/`,
    method: "GET",
    validations: [],
    handler: get,
  },
  {
    path: `${projectPrefix}/:id`,
    method: "PUT",
    validations: updateProjectValidationRules,
    handler: update,
  },
  {
    path: `${projectPrefix}/`,
    method: "POST",
    validations: addProjectValidationRules,
    handler: add,
  },
  {
    path: `${projectPrefix}/:id`,
    method: "DELETE",
    validations: removeProjectValidationRules,
    handler: remove,
  },
  {
    path: '*',
    method: 'ALL',
    validations: [],
    handler: notFound,
  }
];