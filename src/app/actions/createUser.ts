'use server';

import { prisma } from '../lib/prisma';

//TODO: handle errors
export const createUser = async (
  email: string,
  password: string,
  plan: string
) => {
  const user = await prisma.user.create({ data: { email, password, plan } });

  return user;
};
