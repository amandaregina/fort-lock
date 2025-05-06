import { Request, Response } from 'express';
import { errorHandlerDecorator } from "src/shared/errorHandler/error-handler.decorator"
import { validateHTTPEvent } from "../../shared/validate-schema"
import { createPasswordMapper } from "./mappers/create-password.mapper"
import passwordService from "./password.service"
import { createPasswordSchema } from "./schemas/create-password.schema"

const createPassword = (req: Request, res: Response) => {
  const createPasswordPayload = validateHTTPEvent(req).with(createPasswordSchema)
  const domainCreatePasswordPayload = createPasswordMapper(createPasswordPayload)
  const createdPassword = passwordService.createPassword(domainCreatePasswordPayload)
  return res.json(createdPassword)
}

export default errorHandlerDecorator({
  createPassword
})