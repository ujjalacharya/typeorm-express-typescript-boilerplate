import { Request, Response } from "express";

export const isNormalUser = (req: Request, res: Response, next: Function) => {
  if (false) {
    throw new Error("Testing middleware1");
  }
  next();
};

export const getUserByParams = (req: Request, res: Response, next: Function) => {
    req["user"] = {
        name: "uzz",
        slug: req.params.slug,
        admin: true
    }
    next();
  };