import z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({ message: "please enter a valid email" }),
    password: z.string().min(6, { message: "password must have at least 6 characters " })
})

export const registerSchema = z.object({
    name: z.string().min(3, { message: "Username must have 3 characters" }),
    email: z.string().email({ message: "please enter a valid email" }),
    password: z
        .string()
        .min(6, { message: "password must have at least 6 characters " })
})