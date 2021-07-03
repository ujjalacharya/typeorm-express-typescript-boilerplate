import { Request, Response } from "express";
import { User } from "@entity/User";
import { failure, success } from "@utils/http-response";

export async function getTestBySlug(req: Request, res: Response) {
  return res.status(200).json(req['user'] || "Did not happen")
}

export async function getTestAction(req: Request, res: Response) {
  const users = await User.find()

  return res.status(200).json(success(users))
}

export async function postTestAction(req: Request, res: Response) {
  const user = new User()

  user.firstName = "ujjal";
  user.lastName = "acharya";
  user.age = 25;
  user.attributes = {...user.attributes, uzz: "acharya"}
  await user.save()


  return res.status(200).json(success(user))


}
