import { Request } from "express";
import { BadRequestError, UnauthorizedError } from "../../errors/classes";
import { tokenErrors } from "../../errors/messages";
import { split } from "lodash";

export const getTokenFromRequest = (req: Request) => {
    const rawToken = req.headers.authorization;
    if (!rawToken) {
      throw new UnauthorizedError(tokenErrors.noHeader);
    }
    const [bearer, token] = split(rawToken, " ");
    if (bearer !== "Bearer" && token) {
      throw new BadRequestError(tokenErrors.invalidData);
    }
    return token;
};