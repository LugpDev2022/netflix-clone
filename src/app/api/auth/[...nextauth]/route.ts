import NextAuth, { AuthOptions } from 'next-auth';

export const authOptions: AuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
