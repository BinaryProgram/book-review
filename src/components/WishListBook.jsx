import { Link } from "react-router-dom";
import { IoLocationOutline, IoPeopleOutline } from "react-icons/io5";
import { PiFilmScriptLight } from "react-icons/pi";

const WishListBook = (props) => {
  const {
    bookId,
    bookName,
    image,
    author,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = props.book;
  return (
    <div className="flex flex-col md:flex-row gap-6 border border-[#13131326] p-4 rounded-2xl">
      <div className=" flex items-center justify-center p-6 rounded-lg bg-[#f3f3f3]">
        <img src={image} alt="books" className="w-40 h-40 object-contain" />
      </div>
      <div>
        <h1 className="font-[playFair-display] text-2xl font-bold text-[#131313]">
          {bookName}
        </h1>
        <h3 className="font-[work-sans] font-medium text-[#131313cc] mt-4">
          By : {author}
        </h3>
        <div className="flex flex-col md:flex-row gap-3 mt-6">
          <div className="flex gap-3 items-center">
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
          <div className="flex items-center gap-2">
            <span>
              <IoLocationOutline size={20} />
            </span>
            <p className="font-[work-sans] text-[#131313cc]">
              Year of Publishiing : {yearOfPublishing}
            </p>
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <p className="flex gap-2 items-center text-[#13131399] font-[work-sans]">
            <span>
              <IoPeopleOutline size={20} />
            </span>{" "}
            <span>Publisher : {publisher}</span>
          </p>
          <p className="flex gap-2  items-center text-[#13131399] font-[work-sans]">
            <span>
              <PiFilmScriptLight size={20} />
            </span>{" "}
            <span>Page {totalPages}</span>
          </p>
        </div>
        <div className="border-b border-[#13131326] my-4"></div>
        <div className="flex flex-col md:flex-row gap-3 items-center">
          <p className="px-5 py-2 bg-[#328eff26] text-[#328eff] rounded-2xl font-[work-sans]">
            Category : {category}
          </p>
          <p className="px-5 py-2 bg-[#ffac3326] text-[#ffac33] rounded-2xl font-[work-sans]">
            Rating : {rating}
          </p>
          <Link
            to={`/bookDetails/${bookId}`}
            className="px-5 py-2 bg-[#23be0a] text-[#fff] rounded-2xl text-lg font-medium font-[work-sans]"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishListBook;
