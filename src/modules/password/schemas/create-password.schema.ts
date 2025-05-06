import { z } from 'zod';

export const createPasswordSchema = z.object({
  length: z.number(),
})

export type CreatePasswordRequest = z.infer<typeof createPasswordSchema>;