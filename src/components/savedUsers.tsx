"use client";

import { User } from "@/types/userTypes";
import { getUsersFromLocalStorage } from "@/utils/localStorage";
import { useEffect } from "react";
import Card from "./card";
import { useUserStore } from "@/store/userStore";

const SavedUsers = () => {
  const { setSavedUsers, savedUsers } = useUserStore();

  useEffect(() => {
    const users = getUsersFromLocalStorage();
    if (users) setSavedUsers(users);
  }, [setSavedUsers]);

  return (
    <div className="flex gap-10 my-16 items-center justify-center flex-wrap lg:flex-col">
      {!savedUsers.length ? (
        <p className="font-bold text-4xl">No saved users</p>
      ) : (
        savedUsers.map((user: User) => (
          <Card key={user.login.uuid} userData={user} />
        ))
      )}
    </div>
  );
};

export default SavedUsers;
