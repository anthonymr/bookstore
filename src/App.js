import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from './redux/books/booksSlice';
import Router from './Router';
import Navbar from './components/Navbar';
import styles from './styles/App.module.css';

function App() {
  const { isLoading } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading) {
      dispatch(getBooks());
    }
  }, [isLoading, dispatch]);

  return (
    <main className={styles['Bookstore-CMS']}>
      <div className={styles['panel-bg']}>
        <Navbar />
        <div className={styles.Line} />
        <Router />
      </div>
    </main>
  );
}

export default App;
