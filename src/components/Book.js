import PropTypes from 'prop-types';
import Button from './Button';

function Book({ title, author, id }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{author}</p>
      <Button type="remove" id={id} />
    </article>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
