import { Request, Response, NextFunction } from 'express';
import { errorHandler } from './error-handler'

/**
 * Wraps an asynchronous function with error handling.
 * If an error occurs during the execution of the function, the `errorHandler` is invoked.
 *
 * @template Args - The argument types of the function to be wrapped.
 * @template T - The return type of the function to be wrapped.
 * @param {(...args: Args) => Promise<T>} fn - The asynchronous function to be wrapped.
 * @returns {(...args: Args) => Promise<T>} A new function wrapped with error handling.
 */
const errorWrapper = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      const errorResponse = errorHandler(error);
      res.status(errorResponse.statusCode || 500).json(errorResponse);
    }
  }

/**
 * Takes an object of asynchronous functions and wraps each function with error handling.
 * The error handling is provided by the `errorWrapper`, which catches and processes errors using the `errorHandler`.
 *
 * @template T - An object where the values are functions.
 * @param {T} obj - The object containing functions to be wrapped with error handling.
 * @returns {T} A new object where each function is wrapped with error handling.
 */
export const errorHandlerDecorator = <T extends Record<string, (req: Request, res: Response, next: NextFunction) => Promise<any>>>(
  obj: T
): T => {
  const newObj = {} as T;

  for (const key in obj) {
    const fn = obj[key];
    if (typeof fn !== 'function') {
      continue;
    }
    newObj[key] = errorWrapper(fn) as T[typeof key];
  }

  return newObj;
}
