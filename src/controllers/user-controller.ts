import { Request, Response } from "express";
import UserModel from "../models/user-model";
//import { validateUser, validatePartialUser } from "../schemas/user-schema";



abstract class UserController {
  static async getAll(req: Request, res: Response) {
    const users = await UserModel.getAll();
    res.json(users);
  }
}

export default UserController;