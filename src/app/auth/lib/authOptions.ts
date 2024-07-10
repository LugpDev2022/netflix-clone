import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { compareEncryptedText } from '../../actions/compareEncryptedText';
import prisma from '@/src/db';

export const authOptions: AuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},

      authorize: async (credentials, req) => {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        if (!user) return null;

        const [error, result] = await compareEncryptedText(
          password,
          user.password
        );

        if (error) return null;

        if (!result) return null;

        const { id } = user;

        return {
          id: id as any,
          email,
        };
      },
    }),
  ],
};
