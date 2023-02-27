import { useSelector, useDispatch } from 'react-redux';
import { setNewTitle, setNewAuthor } from '../redux/books/booksSlice';
import Button from './Button';

function Form() {
  const dispatch = useDispatch();

  const { newTitle } = useSelector((state) => state.books);
  const { newAuthor } = useSelector((state) => state.books);

  const handleTitleChange = (event) => dispatch(setNewTitle(event.target.value));
  const handleAuthorChange = (event) => dispatch(setNewAuthor(event.target.value));

  return (
    <form>
      <input type="text" placeholder="title" onChange={handleTitleChange} value={newTitle} />
      <input type="text" placeholder="author" onChange={handleAuthorChange} value={newAuthor} />
      <Button type="add" />
    </form>
  );
}

export default Form;
