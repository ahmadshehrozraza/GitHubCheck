"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link"; // Navigation ke liye

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// 1. Zod Schema (Sirf Email aur Password)
const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type SignInSchema = z.infer<typeof signInSchema>;

export default function SignInCard() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: SignInSchema) => {
    console.log(values); // Yahan Login API call hogi
  };

  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Welcome Back!</CardTitle>
        <CardDescription>
          Please enter your details to log in
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-7">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          {/* Email Field */}
          <div className="flex flex-col gap-y-2">
            <Input 
              {...register("email")}
              placeholder="Enter email address" 
              type="email"
            />
            {errors.email && (
              <span className="text-sm text-red-500">{errors.email.message}</span>
            )}
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-y-2">
            <Input 
              {...register("password")}
              placeholder="Enter password" 
              type="password" 
            />
            {errors.password && (
              <span className="text-sm text-red-500">{errors.password.message}</span>
            )}
          </div>

          <Button size="lg" className="w-full">
            Log In
          </Button>
        </form>

        <div className="px-7">
            <div className="flex items-center justify-center text-sm mt-4">
                <p className="text-neutral-500">Don&apos;t have an account?</p>
                <Link href="/signup">
                    <span className="text-blue-700 cursor-pointer hover:underline ml-1">Sign Up</span>
                </Link>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}