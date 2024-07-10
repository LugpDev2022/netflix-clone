'use server';

import { User } from '@prisma/client';
import prisma from '@/src/db';

export const findUserByEmail = async (
  email: string
): Promise<[string?, User?]> => {
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

  return [new Error('Unknown error').message];
};
