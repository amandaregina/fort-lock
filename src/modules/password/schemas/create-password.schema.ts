import { z } from 'zod';

export const createPasswordSchema = z.object({
  length: z.number(),
  numbers: z.boolean().optional(),
  symbols: z.boolean().optional(),
  uppercase: z.boolean().optional(),
  excludeSimilarCharacters: z.boolean().optional(),
})

export type CreatePasswordRequest = z.infer<typeof createPasswordSchema>;