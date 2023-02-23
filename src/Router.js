import { Routes, Route } from 'react-router-dom';
import BooksRoute from './routes/BooksRoute';
import CategoriesRoute from './routes/CategoriesRoute';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BooksRoute />} />
        <Route path="categories" element={<CategoriesRoute />} />
      </Routes>
    </>
  );
}

export default Router;
