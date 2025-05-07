import * as generatePassword from 'generate-password';
import { CreatePassword } from './types/create-password.types';

const createPassword = (createPasswordPayload: CreatePassword) => {
  return generatePassword.generate({
    length: createPasswordPayload.length,
    numbers: createPasswordPayload.numbers,
    symbols: createPasswordPayload.symbols,
    uppercase: createPasswordPayload.uppercase,
    excludeSimilarCharacters: createPasswordPayload.excludeSimilarCharacters,
  });
};

export default {
  createPassword,
};
