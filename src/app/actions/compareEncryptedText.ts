'use server';

import bcrypt from 'bcrypt';

export const compareEncryptedText = async (
  text: string,
  encryptedText: string
): Promise<[string?, boolean?]> => {
  try {
    const result = await bcrypt.compare(text, encryptedText);

    return [undefined, result];
  } catch (error) {
    if (error instanceof Error) {
      return [error.message];
    }
  }

  return [new Error('Unknown error').message];
};
