import { Document, model, Schema } from 'mongoose';
import { UserModelType } from '../types';
import { ROLES_DEFAULT_VALUES, ROLES_VALUES } from '../types/constants/roles';


const userSchema = new Schema<UserModelType & Document>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: false,
      default: null,
    },
    password: {
      type: String,
      required: true,
    },
    role: [
      {
        type: String,
        enum: ROLES_VALUES,
        required: true,
        default: ROLES_DEFAULT_VALUES,
      },
    ],
  },
  { timestamps: true }
);

const UserModel = model<UserModelType & Document>('User', userSchema);
export default UserModel;
