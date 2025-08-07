import { Link, Outlet } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";

const ListedBooks = () => {
  const [anime, setAnime] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="mt-8">
      <div className="bg-[#1313130d] text-center p-8 rounded-lg">
        <h1 className="font-bold font-[work-sans] text-2xl text-[#131313]">
          Books
        </h1>
      </div>
      <div
        onClick={() => setAnime(!anime)}
        className="dropdown dropdown-bottom flex mt-8 items-center justify-center"
      >
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 w-56 flex justify-between"
        >
          <span>Sort By</span>
          <span
            className={`${
              anime
                ? "transition duration-100 translate-y-1"
                : "transition duration-100 translate-y-0"
            }`}
          >
            <IoIosArrowDown />
          </span>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content flex items-center menu bg-base-100 rounded-box z-1 p-2 shadow-sm w-56"
        >
          <li>
            <a>Rating</a>
          </li>
          <li>
            <a>Number of Pages</a>
          </li>
          <li>
            <a>Published Year</a>
          </li>
        </ul>
      </div>
      <div className="flex mt-16 overflow-x-auto overflow-y-hidden ">
        <Link
          to={""}
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  rounded-t-lg border-[#1313134d] ${
            tabIndex === 0 ? "border-b-0 border" : "border-b"
          }`}
        >
          <span
            className={`${
              tabIndex === 0
                ? "text-[#131313cc] font-[work-sans] text-lg"
                : "text-lg text-[#13131380] font-[work-sans]"
            }`}
          >
            Read Books
          </span>
        </Link>
        <Link
          to={"wishlist"}
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  rounded-t-lg border-[#1313134d]  ${
            tabIndex === 1 ? "border-b-0 border" : "border-b grow-1"
          }`}
        >
          <span
            className={`${
              tabIndex === 1
                ? "text-[#131313cc] font-[work-sans] text-lg"
                : "text-lg text-[#13131380] font-[work-sans]"
            }`}
          >
            Wishlist Books
          </span>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default ListedBooks;
