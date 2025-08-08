import { getReadBooks } from "../utils/readBooks";
import ReadBook from "./ReadBook";

const ReadBooks = () => {
  const readBooksList = getReadBooks();

  return (
    <section className="flex flex-col gap-6 mt-8">
      {readBooksList.map((book) => (
        <ReadBook book={book} key={book.bookId} />
      ))}
    </section>
  );
};

export default ReadBooks;
