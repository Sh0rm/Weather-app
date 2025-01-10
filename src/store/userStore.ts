import { User } from "@/types/userTypes";
import { create } from "zustand";

type UserState = {
  randomUsers: User[];
  savedUsers: User[];
};

type UserActions = {
  addRandomUser: (user: User) => void;
  deleteRandomUser: (uuid: string) => void;
  setSavedUsers: (savedUsers: User[]) => void;
  addSavedUser: (user: User) => void;
  deleteSavedUser: (uuid: string) => void;
};

export type UserStore = UserState & UserActions;

export const useUserStore = create<UserStore>((set) => ({
  randomUsers: [],
  savedUsers: [],
  addRandomUser: (user: User) =>
    set((state: UserStore) => ({
      randomUsers: [...state.randomUsers, user],
    })),
  deleteRandomUser: (uuid: string) =>
    set((state: UserStore) => ({
      randomUsers: state.randomUsers.filter(
        (user: User) => user.login.uuid !== uuid
      ),
    })),
  setSavedUsers: (savedUsers: User[]) => set({ savedUsers: savedUsers }),
  addSavedUser: (user: User) =>
    set((state: UserStore) => ({
      randomUsers: [...state.randomUsers, user],
    })),
  deleteSavedUser: (uuid: string) =>
    set((state: UserStore) => ({
      savedUsers: state.savedUsers.filter(
        (user: User) => user.login.uuid !== uuid
      ),
    })),
}));
