import { z } from 'zod';

const carZodSchema = z.object({
  doorsQty: z.number().positive().gte(2).lte(4),
  seatsQty: z.number().gte(2).lte(7),
  model: z.string().min(3),
  year: z.number().positive().lte(2022).gte(1900),
  color: z.string().min(3),
  status: z.boolean().optional(),
  buyValue: z.number(),
});

type ICar = z.infer<typeof carZodSchema>;

export default carZodSchema;
export { ICar };
