import { BadRequestException } from '@nestjs/common'
import { z, ZodSchema } from 'zod'
import { Request } from 'express'

/**
 * Validates the body of an Express request using a Zod schema and returns the validated data.
 *
 * @template T - The inferred type based on the provided Zod schema.
 * @param {Request} req - The Express request containing the body to be validated.
 * @returns {object} - The validated data as inferred from the provided schema.
 * @throws {BadRequestException} - Throws if the body is null or invalid according to the schema.
 */
export const validateHTTPEvent = <T>(req: Request) => {
  return {
    with: <U extends ZodSchema<T>>(schema: U): z.infer<U> => {
      const { body } = req

      console.log('Validate HTTP Event - Body - full Raw Data 🖥️ ', body)

      if (!body) {
        throw new BadRequestException('Body is required')
      }

      const validatedBody = schema.parse(body)

      return validatedBody
    },
  }
}
