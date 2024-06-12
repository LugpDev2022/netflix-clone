'use server';

import { prisma } from '../lib/prisma';

//TODO create the user type
type User = any;

export const findUserByEmail = async (
  email: string
): Promise<[String?, User?]> => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) return [new Error('User not found').message];

    return [undefined, user];
  } catch (error) {
    if (error instanceof Error) return [error.message];
  }

  return [new Error('Unkown error').message];
};
