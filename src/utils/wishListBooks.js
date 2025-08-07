import toast from "react-hot-toast";
import { getReadBooks } from "./readBooks";
// to get the wishListBooks
export const getWishListBooks = () => {
  let wishListBooks = [];
  const storeWishListBooks = localStorage.getItem("wishListBooks");
  if (storeWishListBooks) {
    wishListBooks = JSON.parse(storeWishListBooks);
  }
  return wishListBooks;
};

// to save in local storage
export const saveWishListBooks = (clickBook) => {
  let wishListBooks = getWishListBooks();
  const isExist = wishListBooks.find(
    (book) => book.bookId === clickBook.bookId
  );
  /* If clickBook already added to read books, It will not added to the wishList books list */
  const readBooks = getReadBooks();
  const isReadBooksExist = readBooks.find(
    (book) => book.bookId === clickBook.bookId
  );
  if (isReadBooksExist) {
    return toast.error("Oops😔 You Have Already Read This Books");
  } else if (isExist) {
    return toast.error("Books Already Added To Wishlist");
  }
  wishListBooks.push(clickBook);
  localStorage.setItem("wishListBooks", JSON.stringify(wishListBooks));
  toast.success("Books Added to Wishlist😎");
};
