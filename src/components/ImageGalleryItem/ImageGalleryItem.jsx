import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onModalOpen }) => {
  const { webformatURL, largeImageURL, tags } = image;

  const handleClick = modalImg => {
    onModalOpen(modalImg, tags);
  };

  return (
    <li
      className={styles.Item}
      onClick={() => handleClick(largeImageURL, tags)}
    >
      <img className={styles.Image} src={webformatURL} alt={tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onModalOpen: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
