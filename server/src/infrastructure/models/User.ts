import mongoose from "mongoose";
import { User } from "../../types/user";

interface IUserModel extends User, mongoose.Document {}

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<IUserModel>("Users", UserSchema);
