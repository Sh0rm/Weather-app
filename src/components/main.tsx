"use client";

import useGetRandomUser from "@/hooks/useGetRandomUser";
import { User } from "@/types/userTypes";
import Card from "./card";
import { useUserStore } from "@/store/userStore";
import { CirclePlus } from "lucide-react";

const Main = () => {
  const { getRandomUserMutation } = useGetRandomUser();
  const { addRandomUser, randomUsers } = useUserStore();

  const handleAdd = async () => {
    const newUser = await getRandomUserMutation();
    addRandomUser(newUser);
  };

  return (
    <div className="flex gap-10 my-16 items-center justify-center flex-wrap lg:flex-col">
      {randomUsers.map((user: User) => (
        <Card key={user.login.uuid} userData={user} />
      ))}
      <div className="flex flex-col gap-5 justify-center items-center border-2 border-black rounded-md p-5 bg-card-main w-90 h-160 lg:w-3/4">
        <h2 className="font-bold text-5xl">Add new user</h2>
        <button onClick={handleAdd} className="flex justify-center items-center">
          <CirclePlus className="w-[200px] h-[200px]"/>
        </button>
      </div>
    </div>
  );
};

export default Main;
