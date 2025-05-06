import { errorHandlerDecorator } from "src/shared/errorHandler/error-handler.decorator"
import { validateHTTPEvent } from "../../shared/validate-schema"
import { createPasswordMapper } from "./mappers/create-password.mapper"
import passwordService from "./password.service"
import { createPasswordSchema } from "./schemas/create-password.schema"


const createPassword = async (event: any) => {
  const createPasswordPayload = validateHTTPEvent(event).with(createPasswordSchema)

  const domainCreatePasswordPayload = createPasswordMapper(createPasswordPayload)

  const createdPassaword = passwordService.createPassword(domainCreatePasswordPayload)

  return createdPassaword
}

export default errorHandlerDecorator({
  createPassword
})