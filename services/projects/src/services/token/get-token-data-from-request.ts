import { Request } from "express";
import { BadRequestError } from "../../errors/classes";
import { tokenErrors } from '../../errors/messages'

export const getTokenDataFromRequest = (req: Request) => {
  const userData = (req as any).user ? (req as any).user : null;

  if (!userData) {
    throw new BadRequestError(tokenErrors.invalidData);
  }

  const userName: string | null = userData.firstName;
  const userEmail: string | null = userData.email;

  return {
    userName,
    userEmail,
  };
};
