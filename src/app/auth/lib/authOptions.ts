import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},

      authorize: async (credentials, req) => {
        return {
          id: '',
          email: '123@gmail.com',
        };
      },
    }),
  ],
};
