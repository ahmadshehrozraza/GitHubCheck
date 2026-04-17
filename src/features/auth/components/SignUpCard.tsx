"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "lucide-react"; // Ya next/link agar navigation chahiye

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator"; // Optional decoration
import { useRegister } from "../api/useRegister";

// 1. Zod Schema Define karein
const signUpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

// Schema ki type infer karein
type SignUpSchema = z.infer<typeof signUpSchema>;

// Yahan apna custom hook ya API call setup karein

export default function SignUpCard() {
  // 2. Form Hook Setup
  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useRegister(); 

  // 3. Submit Handler
  const onSubmit = (values: SignUpSchema) => {
    console.log("Form Values:", values);
    // Yahan API call karein (e.g., registerUser(values))

    mutate({
        name: values.name,
        email: values.email,
        password: values.password
    });
  };

  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-2">
        <CardDescription>
          By signing up, you agree to our{" "}
          <span className="text-blue-700 cursor-pointer">Privacy Policy</span>{" "}
          and <span className="text-blue-700 cursor-pointer">Terms of Service</span>
        </CardDescription>
      </CardHeader>
      <div className="px-7 mb-2">
        <Separator />
      </div>
      <CardContent className="p-7">
        {/* 4. Shadcn Form Component */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter your name" 
                      type="text"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter email address" 
                      type="email"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter password" 
                      type="password" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={false} size="lg" className="w-full">
              Sign Up
            </Button>
          </form>
        </Form>
        <div className="px-7">
            <div className="flex items-center justify-center text-sm mt-4">
                <p className="text-neutral-500">Already have an account?</p>
                <Link href="/signin">
                    <span className="text-blue-700 cursor-pointer hover:underline ml-1">Sign In</span>
                </Link>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}