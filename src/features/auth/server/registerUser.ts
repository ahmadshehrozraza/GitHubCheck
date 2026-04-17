"use server";

import { z } from "zod";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const signUpSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
});

type SignUpSchema = z.infer<typeof signUpSchema>;

export const registerUserAction = async (values: SignUpSchema) => {
  try {
    const validatedFields = signUpSchema.safeParse(values);
    if (!validatedFields.success) {
      return { error: "Invalid fields" };
    }

    const { name, email, password } = validatedFields.data;

    console.log("Registering user with:", { name, email, password });

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: "Email already in use" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || "secret-key-change-me", 
      { expiresIn: "7d" }
    );

    // ✅ UPDATE: Await cookies() here
    const cookieStore = await cookies();
    cookieStore.set("session_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return { success: "User created successfully", user };
  } catch (error) {
    console.error("Registration Error:", error);
    return { error: "Something went wrong" };
  }
};