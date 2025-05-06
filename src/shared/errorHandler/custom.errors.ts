import { HttpStatus } from '../enums/http-status-code'

// Base Exception Class

export class HttpException extends Error {
  public readonly type?: string
  public readonly code: number

  constructor(message: string, code: number, type?: string) {
    super(message)
    this.code = code
    this.type = type
    Object.setPrototypeOf(this, HttpException.prototype)
    Error.captureStackTrace(this, this.constructor)
  }
}

export class BadRequestException extends HttpException {
  constructor(message: string, type?: string) {
    super(message, HttpStatus.BAD_REQUEST, type || 'BAD_REQUEST')
  }
}

export class UnauthorizedException extends HttpException {
  constructor(message: string, type?: string) {
    super(message, HttpStatus.UNAUTHORIZED, type || 'UNAUTHORIZED')
  }
}

export class ForbiddenException extends HttpException {
  constructor(message: string, type?: string) {
    super(message, HttpStatus.FORBIDDEN, type || 'FORBIDDEN')
  }
}

export class NotFoundException extends HttpException {
  constructor(message: string, type?: string) {
    super(message, HttpStatus.NOT_FOUND, type || 'NOT_FOUND')
  }
}

export class MethodNotAllowedException extends HttpException {
  constructor(message = 'Method Not Allowed') {
    super(message, HttpStatus.METHOD_NOT_ALLOWED, 'METHOD_NOT_ALLOWED')
  }
}

export class NotAcceptableException extends HttpException {
  constructor(message = 'Not Acceptable') {
    super(message, HttpStatus.NOT_ACCEPTABLE, 'NOT_ACCEPTABLE')
  }
}

export class RequestTimeoutException extends HttpException {
  constructor(message = 'Request Timeout') {
    super(message, HttpStatus.REQUEST_TIMEOUT, 'REQUEST_TIMEOUT')
  }
}

export class ConflictException extends HttpException {
  constructor(message: string, type?: string) {
    super(message, HttpStatus.CONFLICT, type || 'CONFLICT')
  }
}

export class GoneException extends HttpException {
  constructor(message = 'Gone') {
    super(message, HttpStatus.GONE, 'GONE')
  }
}

export class PayloadTooLargeException extends HttpException {
  constructor(message = 'Payload Too Large') {
    super(message, HttpStatus.PAYLOAD_TOO_LARGE, 'PAYLOAD_TOO_LARGE')
  }
}

export class UnsupportedMediaTypeException extends HttpException {
  constructor(message = 'Unsupported Media Type') {
    super(message, HttpStatus.UNSUPPORTED_MEDIA_TYPE, 'UNSUPPORTED_MEDIA_TYPE')
  }
}

export class UnprocessableEntityException extends HttpException {
  constructor(message: string, type?: string) {
    super(message, HttpStatus.UNPROCESSABLE_ENTITY, type || 'UNPROCESSABLE_ENTITY')
  }
}

export class InternalServerErrorException extends HttpException {
  constructor(message: string, type?: string) {
    super(message, HttpStatus.INTERNAL_SERVER_ERROR, type || 'INTERNAL_SERVER_ERROR')
  }
}

export class NotImplementedException extends HttpException {
  constructor(message = 'Not Implemented') {
    super(message, HttpStatus.NOT_IMPLEMENTED, 'NOT_IMPLEMENTED')
  }
}

export class BadGatewayException extends HttpException {
  constructor(message = 'Bad Gateway') {
    super(message, HttpStatus.BAD_GATEWAY, 'BAD_GATEWAY')
  }
}

export class ServiceUnavailableException extends HttpException {
  constructor(message: string, type?: string) {
    super(message, HttpStatus.SERVICE_UNAVAILABLE, type || 'SERVICE_UNAVAILABLE')
  }
}

export class GatewayTimeoutException extends HttpException {
  constructor(message: string, type?: string) {
    super(message, HttpStatus.GATEWAY_TIMEOUT, type || 'GATEWAY_TIMEOUT')
  }
}

export class HttpVersionNotSupportedException extends HttpException {
  constructor(message = 'HTTP Version Not Supported') {
    super(message, HttpStatus.HTTP_VERSION_NOT_SUPPORTED, 'HTTP_VERSION_NOT_SUPPORTED')
  }
}

export class ImATeapotException extends HttpException {
  constructor(message = "I'm a teapot") {
    super(message, HttpStatus.IM_A_TEAPOT, 'IM_A_TEAPOT')
  }
}

export class PreconditionFailedException extends HttpException {
  constructor(message = 'Precondition Failed', type?: string) {
    super(message, HttpStatus.PRECONDITION_FAILED, type || 'PRECONDITION_FAILED')
  }
}
