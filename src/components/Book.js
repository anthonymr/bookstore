function Book({title, author}) {
  return (
    <article>
        <h3>{title}</h3>
        <p>{author}</p>
        <button type="button">Remove</button>
    </article>
  );
}

export default Book;
