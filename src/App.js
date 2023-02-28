import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from './redux/books/booksSlice';
import Router from './Router';
import Navbar from './components/Navbar';

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
    <main>
      <Navbar />
      <Router />
    </main>
  );
}

export default App;
