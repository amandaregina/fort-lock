import { BadRequestException } from '../errorHandler/custom.errors'

/**
 * Safely parses a JSON string.
 *
 * @param {string} jsonString - The JSON string to be parsed.
 * @returns {T} Parsed JSON object.
 * @template T - The expected type of the parsed data.
 */
export function safeJSONParse<T>(jsonString: string): T {
  try {
    return JSON.parse(jsonString) as T
  } catch (error) {
    console.error('Invalid JSON string', error)
    throw new BadRequestException('Invalid JSON string')
  }
}

/**
 * Returns an HTTP success response.
 *
 * @param {T} data - The data to be included in the response body.
 * @returns {{ statusCode: number; body: string }} The HTTP success response object with status code 200.
 */
export function httpSuccessResponse<T>(data: T) {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}

/**
 * Returns an HTTP error response.
 *
 * @param {Error} error - The error object to be included in the response body.
 * @returns {{ statusCode: number; body: string }} The HTTP error response object with status code 500.
 */
export function httpErrorResponse(error: Error) {
  return {
    statusCode: 500,
    body: JSON.stringify({
      message: error.message,
      stack: error.stack,
    }),
  }
}
