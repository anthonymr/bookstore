import PropTypes from 'prop-types';

function Book({ title, author }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button">Remove</button>
    </article>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
