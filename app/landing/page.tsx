import Navbar from './components/Navbar';
import styles from './landing.module.css';

const LoginPage = () => {
  return (
    <div
      className={`${styles.background} relative 
        px-6
        sm:px-10
        lg:px-40
        md:px-20
      `}
    >
      <Navbar />

      <main className='h-full w-full pt-20'>
        <div className='w-[95%] h-full flex justify-center items-center mx-auto'>
          <h1 className='text-4xl font-bold text-center'>
            The biggest local and international hits. The best stories. All
            streaming here.
          </h1>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
