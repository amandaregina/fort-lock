import { CreatePasswordRequest } from '../schemas/create-password.schema';

export const createPasswordMapper = (password: CreatePasswordRequest) => {
  return {
    length: password.length,
    numbers: password.numbers,
    symbols: password.symbols,
    uppercase: password.uppercase,
    excludeSimilarCharacters: password.excludeSimilarCharacters
  };
};
