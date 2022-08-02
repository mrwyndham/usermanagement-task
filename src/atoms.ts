import { atom } from "recoil";
import { IUser } from "./interfaces";

export const currentUserState = atom<IUser>({
    key: 'currentUser',
    default: {isLoggedIn: false} as IUser,
  });

  export const usersState = atom<IUser[]>({
    key: 'users',
    default: [] as IUser[],
  });