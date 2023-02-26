import { Component } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    input: '',
  };

  handleInputChange = event => {
    this.setState({ input: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { input } = this.state;
    const { changeSearch } = this.props;
    if (input.trim() === '') {
      return Notiflix.Notify.failure(`Please enter your search query`);
    }
    changeSearch(input);
  };

  render() {
    const { input } = this.state;
    return (
      <header className={styles.Searchbar}>
        <form className={styles.Form} onSubmit={this.handleSubmit}>
          <input
            className={styles.Input}
            type="text"
            autoComplete="off"
            autoFocus
            value={input}
            onChange={this.handleInputChange}
            placeholder="Search images and photos"
          />

          <button type="submit" className={styles.Button}>
            <span className={styles.ButtonLabel}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  changeSearch: PropTypes.func.isRequired,
};

export default Searchbar;