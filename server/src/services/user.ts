import { User } from "../types/user";
import UserModel from "../infrastructure/models/User";

export default class UserService {
  constructor() {}

  async findAll(): Promise<User[] | Error> {
    return UserModel.find({}, (err: Error, user: User[]) => {
      if (err) {
        return err;
      }
      return user;
    });
  }

  async createUser(user: User): Promise<User | Error> {
    const newUser = new UserModel(user);
    return await newUser.save((err: Error, user: User) => {
      if (err) {
        return err;
      }
      return user;
    });
  }
}
