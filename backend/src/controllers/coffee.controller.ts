import { Request, Response } from "express";
import Coffee from "../models/coffee.model";

export const getCoffees = async (_req: Request, res: Response) => {
  const coffees = await Coffee.find();
  res.json(coffees);
};
