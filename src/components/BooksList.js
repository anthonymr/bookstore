import { useSelector } from 'react-redux';
import Book from './Book';
import styles from '../styles/BooksList.module.css';

function BookList() {
  const { books } = useSelector((state) => state.books);
  return (
    <section className={styles.container}>
      <ul className={styles.books}>
        {
              books.map((book) => (
                <li key={book.item_id}>
                  <Book id={book.item_id} author={book.author} title={book.title} />
                </li>
              ))
          }
      </ul>
    </section>
  );
}

export default BookList;
