
import React, { useState } from "react";
import styles from "./BookForm.module.css";

const BookForm = ({ onSubmit, bookToEdit }) => {
  const [book, setBook] = useState(
    bookToEdit || { title: "", author: "", genre: "", publishedYear: "" }
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book);
    setBook({ title: "", author: "", genre: "", publishedYear: "" })
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.heading}>Enter Book Details</h2>
      <div className={styles.inputFieldContainer}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={book.title}
          onChange={handleChange}
          className={styles.inputField}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
          className={styles.inputField}
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={book.genre}
          onChange={handleChange}
          className={styles.inputField}
        />
        <input
          type="number"
          name="publishedYear"
          placeholder="Published Year"
          value={book.publishedYear}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>
      <div className={styles.addButton}>
        <button type="submit" className={styles.submitButton}>
          {bookToEdit ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default BookForm;
