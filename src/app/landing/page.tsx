import Navbar from './components/Navbar';
import styles from './landing.module.css';

const LandingPage = () => {
  return (
    <div className='bg-gray-700'>
      <section className={`${styles.background} px-6`}>
        <Navbar />

        <h1>
          The biggest local and international hits. The best stories. All
          streaming here.
        </h1>

        <p>Watch anywhere. Cancel anytime</p>

        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
      </section>

      <section className='bg-black mt-2'>
        <h2>Enjoy on your TV</h2>
        <p>
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </p>
      </section>
    </div>
  );
};

export default LandingPage;
