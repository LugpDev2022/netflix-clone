import Link from 'next/link';

interface Props {
  children: React.ReactNode;
}

const SignInLink: React.FC<Props> = ({ children }) => {
  return (
    <Link
      href='/login'
      className='
        bg-red-600
        hover:bg-red-700
        px-3 
        py-1.5
        rounded-md
        text-sm
        tracking-wider
        transition
        duration-200
      '
    >
      {children}
    </Link>
  );
};

export default SignInLink;
