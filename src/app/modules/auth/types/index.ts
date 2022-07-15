import {IUser} from "../../../shared/models/auth";

export type LoginType = Pick<IUser, 'email' | 'password' >

export type LoginResponse = {
  access_token: string
  user: IUser
}
