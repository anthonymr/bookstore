import { useSelector } from 'react-redux';
import Book from './Book';

function BookList() {
  const { books } = useSelector((state) => state.books);
  return (
    <section>
      {
            books.map((book) => (
              <Book key={book.item_id} id={book.item_id} author={book.author} title={book.title} />
            ))
        }
    </section>
  );
}

export default BookList;
