"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerUserAction } from "../server/registerUser"; // Action import karein
import { toast } from "sonner"; // Toast notifications ke liye
import { useRouter } from "next/navigation";

export const useRegister = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (values: any) => {
      // Server Action call karein
      const response = await registerUserAction(values);

      if (response.error) {
        throw new Error(response.error);
      }
      return response;
    },
    onSuccess: () => {
      toast.success("Account created!");
      queryClient.invalidateQueries({ queryKey: ["user"] });
      router.push("/dashboard"); // Redirect after login
    },
    onError: (error) => {
      toast.error(error.message);
      console.error("Registration Error:", error);
    },
  });

  return mutation;
};