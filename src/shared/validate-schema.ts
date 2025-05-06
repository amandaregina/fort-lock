
import { BadRequestException } from '@nestjs/common'
import { z, ZodSchema } from 'zod'
import { safeJSONParse } from './patterns/api-patterns'



/**
 * Parses the body of an API Gateway event, validates it using a Zod schema, and returns the validated data.
 *
 * @template T - The inferred type based on the provided Zod schema.
 * @param {APIGatewayEvent} event - The API Gateway event containing the body to be validated.
 * @returns {object} - The validated data as inferred from the provided schema.
 * @throws {BadRequestException} - Throws if the body is null or invalid according to the schema.
 */
export const validateHTTPEvent = <T>(event: any) => {
  return {
    with: <U extends ZodSchema<T>>(schema: U): z.infer<U> => {
      const { body } = event

      console.log('Validate HTTP Event - Body - full Raw Data 🖥️ ', body)

      if (!body) {
        throw new BadRequestException('Body is required')
      }

      const parsedBody = safeJSONParse(body)

      const validatedBody = schema.parse(parsedBody)

      return validatedBody
    },
  }
}
