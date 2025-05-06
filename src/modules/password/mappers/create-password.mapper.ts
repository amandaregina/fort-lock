import { CreatePasswordRequest } from '../schemas/create-password.schema';

export const createPasswordMapper = (password: CreatePasswordRequest) => {
  return {
    length: password.length,
  };
};
