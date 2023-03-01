import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import { useDispatch, useSelector } from 'react-redux';
import {
  addBook, removeBook, setNewAuthor, setNewTitle,
} from '../redux/books/booksSlice';
import { filterCategories } from '../redux/categories/categoriesSlice';

function Button({
  type, id, category, className,
}) {
  const dispatch = useDispatch();

  const { newTitle, newAuthor } = useSelector((state) => state.books);

  const clickHandle = () => {
    switch (type) {
      case 'add':
        dispatch(addBook({
          item_id: uniqid(),
          title: newTitle,
          author: newAuthor,
          category: category || '',
        }));
        break;
      case 'remove':
        dispatch(removeBook(id));
        break;
      case 'filter':
        dispatch(filterCategories('Venezuela'));
        break;
      default:
        break;
    }

    dispatch(setNewAuthor(''));
    dispatch(setNewTitle(''));
  };

  return (
    <button className={className} type="button" onClick={clickHandle}>
      {type}
      <span> book</span>
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  category: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  category: '',
  id: '',
  className: '',
};

export default Button;
