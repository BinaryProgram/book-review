import { getWishListBooks } from "../utils/wishListBooks";
import WishListBook from "./WishListBook";

const WishListBooks = () => {
    const wishListBooks = getWishListBooks();

    return (
        <section className="flex flex-col gap-6 mt-8">
      {wishListBooks.map((book) => (
        <WishListBook book={book} key={book.bookId} />
      ))}
    </section>
    );
};

export default WishListBooks;