import { body, param, query } from 'express-validator';

export const removeProjectValidationRules = [param("id").isString()];
export const sortProjectValidationRules = [query("column").isString()];
export const searchProjectValidationRules = [query("value").isString()];

export const addProjectValidationRules = [
  body("complicity").isNumeric(),
  body("name").isString().trim(),
  body("offers").isNumeric(),
  body("price").isNumeric(),
  body("provider").isString().trim(),
  body("resources").isString().trim(),
  body("status").isString().trim(),
  body("drafted").isBoolean(),
];

export const updateProjectValidationRules = [
  body("complicity").optional(),
  body("name").optional(),
  body("offers").optional(),
  body("price").optional(),
  body("provider").optional(),
  body("resources").optional(),
  body("status").optional(),
  body("drafted").optional(),
];