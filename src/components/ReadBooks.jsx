import { useEffect, useState } from "react";
import { getReadBooks } from "../utils/readBooks";
import ReadBook from "./ReadBook";

const ReadBooks = (props) => {
  const readBooksList = getReadBooks();
  const [filteredBooks, setFilteredBooks] = useState(readBooksList);
  const { searchValue } = props;
  useEffect(() => {
    let sortBooks = [...readBooksList];
    if (searchValue === "Rating") {
      setFilteredBooks(sortBooks.sort((a, b) => b.rating - a.rating));
    } else if (searchValue === "Number of pages") {
      setFilteredBooks(
        sortBooks.sort((a, b) => b.totalPages - a.totalPages)
      );
    } else if (searchValue === "Published year") {
      setFilteredBooks(
        sortBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
      );
    } else {
      setFilteredBooks(readBooksList);
    }
  }, [searchValue]);
  console.log(searchValue);
  return (
    <section className="flex flex-col gap-6 mt-8">
      {filteredBooks.map((book) => (
        <ReadBook book={book} key={book.bookId} />
      ))}
    </section>
  );
};

export default ReadBooks;
