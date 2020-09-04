import { Router, Request, Response, NextFunction } from "express";

export type MiddlewareWrapper = (router: Router) => void;