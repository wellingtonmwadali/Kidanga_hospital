import {z} from 'zod';

export const userFormValidation = z.object({
    name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email("Invalid email address"),
    phone: z.string().refine((phone) => /^\+?[0-9]\d{1, 14}$/.test(phone), 'Invalid Phone Number')
  })