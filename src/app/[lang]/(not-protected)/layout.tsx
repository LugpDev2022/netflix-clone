import { getSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

interface Props {
  children: React.ReactNode;
}

const NotProtectedLayout: React.FC<Props> = async ({ children }) => {
  const session = await getSession();

  if (!!session) redirect('/');

  return <>{children}</>;
};

export default NotProtectedLayout;
