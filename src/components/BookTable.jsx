// import React from 'react';
import React from "react";
import styles from "./BookTable.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const BookTable = ({ books, onEdit, onDelete }) => {
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  
  React.useEffect(() => {
    // Function to update windowSize state with the current window size
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener to listen for window resize events
    window.addEventListener('resize', updateWindowSize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);
  return(
  <div className={styles.tableContainer}>
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Published Year</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={index}>
            <td className={styles.title}>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.genre}</td>
            <td>{book.publishedYear}</td>
            <td>
              <button onClick={() => onEdit(index)} className={styles.editButton}>
                {windowSize.width <= 768 ? <FontAwesomeIcon icon={faEdit} />  : "Edit" }
              </button>
              <button
                onClick={() => onDelete(index)}
                className={styles.deleteButton}
              >
                {windowSize.width <= 768 ? <FontAwesomeIcon icon={faTrashAlt} />  : "Delete" }
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)};

export default BookTable;
