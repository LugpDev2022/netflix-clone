import { FaCheckCircle } from 'react-icons/fa';

import data from '../plans.json';
import { Locale } from '@/src/types';

interface Props {
  lang: Locale;
}

const PlanSelector: React.FC<Props> = ({ lang }) => {
  return (
    <>
      <div className='grid grid-cols-3 gap-2 lg:gap-3'>
        {/* TODO: Add background radiants */}
        <div className='plan-card-selected bg-blue-600'>
          <h2>Premium</h2>
          <sub>4k + HDR</sub>

          <FaCheckCircle />
        </div>
        <div className='plan-card'>
          <h2>Standard</h2>
          <sub>1080p</sub>

          <FaCheckCircle />
        </div>
        <div className='plan-card'>
          <h2>Standard with ads</h2>
          <sub>1080p</sub>

          <FaCheckCircle />
        </div>
      </div>

      <ul className='plan-feature-list'>
        {data[lang].standard_with_ads.map(({ label, value }) => (
          <li key={label}>
            <h3>{label}</h3>
            <p>{value}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PlanSelector;
