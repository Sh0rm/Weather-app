"use client"

import { User } from "@/types/userTypes";

export const getUsersFromLocalStorage = (): User[] => {
  if (typeof window === undefined) return [];
  const storedData = localStorage.getItem("users");
  return storedData ? JSON.parse(storedData) : [];
};

export const saveUsersToLocalStorage = (users: User[]): void => {
  if (typeof window === undefined) return;
  localStorage.setItem("users", JSON.stringify(users));
};

export const addUserToLocalStorage = (newUser: User): void => {
  if (typeof window === undefined) return;
  const users = getUsersFromLocalStorage();
  newUser.saved = true;
  users.push(newUser);
  saveUsersToLocalStorage(users);
};

export const removeUserFromLocalStorage = (uuid: string): void => {
  if (typeof window === undefined) return;
  const users = getUsersFromLocalStorage();
  const updatedUsers = users.filter((user: User) => user.login.uuid !== uuid);
  saveUsersToLocalStorage(updatedUsers);
};
