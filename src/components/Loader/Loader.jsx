import { Rings } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.Loader}>
      <Rings height="100" width="100" color="#576849" arialLabel="loading" />
    </div>
  );
};

export default Loader;
