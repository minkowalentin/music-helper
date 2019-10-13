import { Request, Response, NextFunction } from "express";
import UserService from "../../services/user";

const service = new UserService();
export default class UserController {
  constructor() {}

  listAllUsers(req: Request, res: Response) {
    res.send(service.findAll());
  }

  async createNewUser(req: Request, res: Response) {
    res.send(service.createUser(req.body));
  }

  test(req: Request, res: Response) {
    res.send("uoba");
  }
}
