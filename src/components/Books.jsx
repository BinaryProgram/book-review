import axios from "axios";
import { useEffect, useState } from "react";
import BooksCard from "./BooksCard";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios.get("books.json").then((data) => {
      setBooks(data.data);
    });
  }, []);
  return (
    <div className="mt-24">
      <h1 className="text-center text-3xl font-bold font-[playFair-display]text-[#131313]">
        Books
      </h1>
      <section className="grid gap-6 md:grid-cols-3 mt-9">
        {books.map((book) => (
          <BooksCard key={book.bookId} book={book} />
        ))}
      </section>
    </div>
  );
};

export default Books;
