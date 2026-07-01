import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter valid Email"),

  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "password must b 6 digit charcter"),
});
