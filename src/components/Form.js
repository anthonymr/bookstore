import { useSelector, useDispatch } from 'react-redux';
import { setNewTitle, setNewAuthor } from '../redux/books/booksSlice';
import Button from './Button';
import styles from '../styles/Form.module.css';

function Form() {
  const dispatch = useDispatch();

  const { newTitle } = useSelector((state) => state.books);
  const { newAuthor } = useSelector((state) => state.books);

  const handleTitleChange = (event) => dispatch(setNewTitle(event.target.value));
  const handleAuthorChange = (event) => dispatch(setNewAuthor(event.target.value));

  return (
    <section className={styles.container}>
      <div className={styles['horizontal-divider']} />
      <h2 className={styles['form-title']}>ADD NEW BOOK</h2>
      <form className={styles['add-form']}>
        <input className={`${styles.input} ${styles['title-input']}`} type="text" placeholder="title" onChange={handleTitleChange} value={newTitle} />
        <input className={`${styles.input} ${styles['title-input']}`} type="text" placeholder="author" onChange={handleAuthorChange} value={newAuthor} />
        <Button className={styles['primary-button-big']} type="add" />
      </form>
    </section>
  );
}

export default Form;
