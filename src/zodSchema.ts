import { z } from "zod";

export const formDetailsSchema = z.object({
  numberOfTravellers: z.coerce.number().min(1, {
    message: "Must have atleast one traveller.",
  }),
  adults: z.coerce.number().min(1, {
    message: "Must have atleast one adult.",
  }),
  children: z.coerce.number(),
  dateOfArrival: z.coerce.date(),
  duration: z.coerce.number().min(1, {
    message: "Must be more than one day.",
  }),
  name: z.string().min(1, {
    message: "Field cannot be empty.",
  }),
  email: z.string().email().min(1, {
    message: "Field cannot be empty.",
  }),
  phoneNumber: z.string().min(1, {
    message: "Field cannot be empty.",
  }),
  nationality: z.string().min(1, {
    message: "Field cannot be empty.",
  }),
  tripIdeas: z.string().optional(),
});
