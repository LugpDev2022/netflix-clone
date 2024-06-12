'use server';

import { prisma } from '../lib/prisma';

//TODO: Create user type
type User = any;

export const createUser = async (
  email: string,
  password: string,
  plan: string
): Promise<[string?, User?]> => {
  try {
    const user = await prisma.user.create({ data: { email, password, plan } });

    return [undefined, user];
  } catch (error) {
    if (error instanceof Error) {
      return [error.message];
    }
  }

  return ['Unknown error'];
};
