import React, { useState } from "react";
import BookForm from "./components/BookForm";
import BookTable from "./components/BookTable";
import styles from "./App.module.css";

const App = () => {
  const [books, setBooks] = useState([
    {
      title: "Book 1",
      author: "Author 1",
      genre: "Genre 1",
      publishedYear: 2021,
    },
    {
      title: "Book 2",
      author: "Author 2",
      genre: "Genre 2",
      publishedYear: 2022,
    },
  ]);
  const [editIndex, setEditIndex] = useState(null);

  const addBook = (book) => {
    setBooks([...books, book]);
    setEditIndex(null);
  };

  const updateBook = (updatedBook) => {
    const updatedBooks = [...books];
    updatedBooks[editIndex] = updatedBook;
    setBooks(updatedBooks);
    setEditIndex(null);
  };

  const deleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Book Collection</h1>
      </div>
      <div className={styles.inputFields}>
        <BookForm
          onSubmit={editIndex !== null ? updateBook : addBook}
          bookToEdit={editIndex !== null ? books[editIndex] : null}
        />
      </div>
      <div className={styles.table}>
        <BookTable books={books} onEdit={setEditIndex} onDelete={deleteBook} />
      </div>
    </div>
  );
};

export default App;
