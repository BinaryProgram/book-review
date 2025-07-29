import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const BooksCard = (props) => {
  const { image, bookId, category, author, rating, tags, bookName } =
    props.book;
  return (
    <Link
      to={`/bookDetails/${bookId}`}
      className="card bg-base-100 shadow-sm p-6"
    >
      <div className=" flex items-center justify-center p-6 rounded-lg bg-[#f3f3f3]">
        <img src={image} alt="books" className="w-40 h-40 object-contain" />
      </div>
      <div className="flex gap-3 pl-2 mt-8">
        {tags.map((tag,idx) => {
          return (
            <p key={idx} className="bg-[#23be0a0d] text-[#23be0a] rounded-lg p-2 font-[work-sans] font-medium">
              {tag}
            </p>
          );
        })}
      </div>
      <div className="mt-3">
        <h2 className="font-bold font-[playFair-display] text-2xl text-[#131313]">
          {bookName}
        </h2>
        <h3 className="font-medium font-[work-sans] text-[#131313cc] mt-4">
          by : {author}
        </h3>
      </div>
      <div className=" my-5 border-b border-[#13131326] border-dashed"></div>
      <div className="flex justify-between">
        <p className="font-medium font-[work-sans] text-[#131313cc]">
          {category}
        </p>
        <p className="flex gap-2 items-center font-medium font-[work-sans] text-[#131313cc]">
          {rating} <FaRegStar size="20" />
        </p>
      </div>
    </Link>
  );
};

export default BooksCard;
