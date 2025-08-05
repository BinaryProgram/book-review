import toast from "react-hot-toast";
import { getWishListBooks } from "./wishListBooks";

// to get the readBooks
export const getReadBooks = () => {
  let readBooks = [];
  const storeReadBooks = localStorage.getItem("readBooks");
  if (storeReadBooks) {
    readBooks = JSON.parse(storeReadBooks);
  }
  return readBooks;
};

// to save in local storage
export const saveReadBooks = (clickBook) => {
  let readBooks = getReadBooks();
  const isExist = readBooks.find((book) => book.bookId === clickBook.bookId);

  /* If clickBook already added to wishlist books, It will not added to the read books list */
  const wishListBooks = getWishListBooks();
  const isWishListBooksExist = wishListBooks.find(
    (book) => book.bookId === clickBook.bookId
  );
  if (isWishListBooksExist) {
    return toast.error("Oops! Already in Wishlist Books😞");
  } else if (isExist) {
    return toast.error("Already added to read Books😞");
  }
  readBooks.push(clickBook);
  localStorage.setItem("readBooks", JSON.stringify(readBooks));
  toast.success("Read Books added Successful😎");
};
