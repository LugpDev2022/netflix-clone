import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

interface Props {
  children: React.ReactNode;
}

const NotProtectedLayout: React.FC<Props> = async ({ children }) => {
  const session = await getServerSession();

  if (!!session) redirect('/');

  return <>{children}</>;
};

export default NotProtectedLayout;
