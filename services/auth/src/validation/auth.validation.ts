import { body, query } from "express-validator";

export const signUpValidationRules = [
  body("email").isEmail(),
  body("password").isString().isLength({ min: 8 }),
  body("first_name").isString(),
  body("last_name").isString(),
  body("date_of_birth").isString(),
];

export const signInValidationRules = [
  body("email").isEmail().trim(),
  body("password").isString().isLength({ min: 8 }).trim(),
];

export const emailActivateValidationRules = [
  query("id").isString(),
];