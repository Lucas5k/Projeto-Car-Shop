import { z } from 'zod';

const motorcycleZodSchema = z.object({
  model: z.string().min(3),
  year: z.number().positive().lte(2022).gte(1900),
  color: z.string().min(3),
  status: z.boolean().optional(),
  buyValue: z.number(),
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().positive().lte(2500),
});

type IMotorcycle = z.infer<typeof motorcycleZodSchema>;

export default motorcycleZodSchema;
export { IMotorcycle };