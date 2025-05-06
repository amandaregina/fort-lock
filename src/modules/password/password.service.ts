import * as generatePassword from 'generate-password';
import { CreatePassword } from './types/create-password.types';

const createPassword = (createPasswordPayload: CreatePassword) => {
  return generatePassword.generate({
    length: createPasswordPayload.length,
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: true,
  });
};

export default {
  createPassword,
};
