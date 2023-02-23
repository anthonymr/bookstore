import React from 'react';
import Book from '../components/Book';
import Form from '../components/Form';

function BooksRoute() {
  return (
    <section>
      <Book title="This is a book title" author="Anthony Martin" />
      <Book title="This is another book title" author="Anthony Martin" />
      <Book title={"I don't know what to say"} author="Anthony Martin" />
      <Form />
    </section>
  );
}

export default BooksRoute;
