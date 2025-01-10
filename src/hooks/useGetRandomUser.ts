"use client";

import { getRandomUser } from "@/services/getRandomUser";
import { User } from "@/types/userTypes";
import { UseMutateAsyncFunction, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

type GetRandomUser = {
  isGetRandomUserPending: boolean;
  isGetRandomUserError: boolean;
  getRandomUserMutation: UseMutateAsyncFunction<User, AxiosError, void>;
};

const useGetRandomUser = (): GetRandomUser => {
    const {
      mutateAsync: getRandomUserMutation,
      isPending: isGetRandomUserPending,
      isError: isGetRandomUserError,
    } = useMutation<User, AxiosError, void>({
      mutationKey: ["user-email-check"],
      mutationFn: getRandomUser,
      onError: (error) => toast.error(error),
    });
  
    return {
        getRandomUserMutation,
        isGetRandomUserPending,
        isGetRandomUserError,
    };
  };

export default useGetRandomUser;
