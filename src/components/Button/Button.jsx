import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ handleLoadMore }) => {
  return (
    <button type="button" className={styles.Button} onClick={handleLoadMore}>
      Load more
    </button>
  );
};

Button.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};

export default Button;