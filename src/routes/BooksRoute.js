import React from 'react';
import BooksList from '../components/BooksList';
import Form from '../components/Form';

function BooksRoute() {
  return (
    <section>
      <BooksList />
      <Form />
    </section>
  );
}

export default BooksRoute;
