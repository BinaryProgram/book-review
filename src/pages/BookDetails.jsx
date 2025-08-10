import { useLoaderData } from "react-router-dom";
import { saveReadBooks } from "../utils/readBooks";
import { saveWishListBooks } from "../utils/wishListBooks";
import ErrorPage from "./ErrorPage";

const BookDetails = () => {
  const bookDetails = useLoaderData();
  // must check bookDetails is undefine or not before destructuring
  if (!bookDetails) return <ErrorPage />;

  const {
    bookId,
    bookName,
    image,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = bookDetails;

  const handleRead = (book) => {
    saveReadBooks(book);
  };
  const handleWishList = (book) => {
    saveWishListBooks(book);
  };

  return (
    <section className="flex  gap-12 flex-col md:flex-row mt-16 justify-center ">
      <div className="bg-[#1313130d] flex p-16 flex-1 items-center justify-center rounded-lg">
        <img src={image} alt="book" className=" items object-contain w-2/3" />
      </div>
      <div className="flex-1 p-5 md:p-0">
        <h1 className="text-[#131313] font-[playFair-display] font-bold text-4xl md:text-5xl">
          {bookName}
        </h1>
        <h6 className="text-[#131313cc] font-[work-sans] text-xl font-medium mt-4">
          By : {author}
        </h6>
        <div className=" my-5 border-b border-[#13131326] border-dashed"></div>
        <h4 className="text-[#131313cc] font-[work-sans] text-xl font-medium mt-4">
          {category}
        </h4>
        <div className=" my-5 border-b border-[#13131326] border-dashed"></div>
        <p>
          <span className="text-[#131313] font-[work-sans] text-xl font-bold mt-6">
            Review :{" "}
          </span>
          <span className="text-[#131313cc] font-[work-sans] font-medium">
            {review}
          </span>
        </p>
        <div className="flex gap-3 pl-2 mt-8 items-center">
          <h1 className="text-[#131313] font-[work-sans] font-bold">Tag </h1>
          {tags.map((tag, idx) => {
            return (
              <p
                key={idx}
                className="bg-[#23be0a0d] text-[#23be0a] rounded-lg p-2 font-[work-sans] font-medium"
              >
                #{tag}
              </p>
            );
          })}
        </div>
        <div className=" my-5 border-b border-[#13131326] border-dashed"></div>
        <section className="space-y-5">
          <div className="grid grid-cols-2 gap-8">
            <h3 className="font-[work-sans] text-[#131313b3]">
              Number of Pages:
            </h3>
            <h3 className="font-[work-sans] font-semibold text-[#131313]">
              {totalPages}
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <h3 className="font-[work-sans] text-[#131313b3]">Publisher:</h3>
            <h3 className="font-[work-sans] font-semibold text-[#131313]">
              {publisher}
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <h3 className="font-[work-sans] text-[#131313b3]">
              Year of Publishing:
            </h3>
            <h3 className="font-[work-sans] font-semibold text-[#131313]">
              {yearOfPublishing}
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <h3 className="font-[work-sans] text-[#131313b3]">Rating:</h3>
            <h3 className="font-[work-sans] font-semibold text-[#131313]">
              {rating}
            </h3>
          </div>
        </section>
        <section className="mt-8 flex gap-5">
          <div
            onClick={() => handleRead(bookDetails)}
            className="px-5 py-2.5 cursor-pointer font-semibold font-[work-sans] bg-blue-50 hover:bg-fuchsia-200 text-lg hover:text-[#131313] text-blue-500 rounded-lg "
          >
            Read
          </div>
          <div
            onClick={() => handleWishList(bookDetails)}
            className="px-5 py-2.5 cursor-pointer bg-[#50b1c9] hover:bg-blue-100 hover:text-blue-600 font-[work-sans] font-semibold text-lg rounded-lg text-[#fff]"
          >
            Wishlist
          </div>
        </section>
      </div>
    </section>
  );
};

export default BookDetails;
