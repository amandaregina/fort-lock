import { AxiosError } from 'axios'
import { ZodError } from 'zod'

import { HttpStatus } from '../enums/http-status-code'
import { HttpException } from './custom.errors'

/**
 * Handles errors and returns an appropriate HTTP error response.
 *
 * @param {Error} error - The error to be handled.
 * @returns {{ statusCode: number; message: string; type?: string }} The HTTP error response.
 */
export function errorHandler(error: unknown) {
  // Verificar se o erro é uma instância de HttpException (erros controlados)
  if (error instanceof HttpException) {
    console.error('Handled error:', error)
    return {
      statusCode: error.code,
      message: error.message,
      type: error.type || 'INTERNAL_SERVER_ERROR',
    }
  }

  if (error instanceof ZodError) {
    return {
      statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      message: 'Validation Error',
      issues: error.issues.map(issue => ({
        path: issue.path,
        message: issue.message,
      })),
    }
  }

  if (error instanceof AxiosError) {
    console.log('🚀 ~ errorHandler ~ error:', JSON.stringify(error.response?.data))
    return {
      statusCode: error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
      message: error.response?.data?.error || 'Internal Server Error',
    }
  }

  console.error('Unhandled error:', error)
  return {
    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
    message: 'Internal Server Error',
  }
}
