import { useEffect, useState } from "react";
import { getWishListBooks } from "../utils/wishListBooks";
import WishListBook from "./WishListBook";

const WishListBooks = (props) => {
    const wishListBooks = getWishListBooks();
    const [filteredBooks, setFilteredBooks] = useState(wishListBooks);
      const { searchValue } = props;
      useEffect(() => {
        // When sorting in React state, you should always make a copy first before sorting
        let sortBooks = [...wishListBooks];
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
          setFilteredBooks(wishListBooks);
        }
      }, [searchValue]);

    return (
        <section className="flex flex-col gap-6 mt-8">
      {filteredBooks.map((book) => (
        <WishListBook book={book} key={book.bookId} />
      ))}
    </section>
    );
};

export default WishListBooks;