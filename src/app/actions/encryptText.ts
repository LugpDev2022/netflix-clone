'use server';

import bcrypt from 'bcrypt';

export const encryptText = async (
  text: string
): Promise<[string?, string?]> => {
  try {
    const saltRounds = 10;
    const hashedText = await bcrypt.hash(text, saltRounds);
    return [undefined, hashedText];
  } catch (error) {
    if (error instanceof Error) {
      return [error.message];
    }
  }

  return [new Error('Unknown error').message];
};
