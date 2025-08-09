import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import ReadBooks from "../components/ReadBooks";
import WishListBooks from "../components/WishListBooks";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [open, isOpen] = useState(false);
  const [selectOption, setSelectOption] = useState(null);
  const options = [
    {
      value: 1,
      item: "Rating",
    },
    {
      value: 2,
      item: "Number of pages",
    },
    {
      value: 3,
      item: "Published year",
    },
  ];
  const handleSelectOption = (items) => {
    setSelectOption(items.item);
  };

  return (
    <div className="mt-8">
      <div className="bg-[#1313130d] text-center p-8 rounded-lg">
        <h1 className="font-bold font-[work-sans] text-2xl text-[#131313]">
          Books
        </h1>
      </div>
      <div className="relative flex mt-8 items-center justify-center">
        <div
          onClick={() => {
            isOpen(!open);
          }}
          tabIndex={0}
          role="button"
          className="btn m-1 w-56 flex justify-center gap-2 bg-[#23be0a] text-lg font-[work-sans] font-semibold"
        >
          <span
            id="sort"
            className="text-lg font-[work-sans] font-semibold text-[#fff]"
          >
            {selectOption ? selectOption : "Sort By"}
          </span>
          <span
            className={`${
              open
                ? "transition duration-100 translate-y-1 text-white"
                : "transition duration-100 translate-y-0 text-white"
            }`}
          >
            <IoIosArrowDown />
          </span>
        </div>

        {open && (
          <ul
            className={`flex absolute items-center flex-col  rounded-box z-1  shadow-sm w-56 bg-[#1313130d] mt-44 ${
              open ? "block" : "hidden"
            }`}
          >
            <li className="font-[work-sans] text-[#131313cc]">Sort By</li>
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => {
                  handleSelectOption(option);
                  isOpen(!open);
                }}
                className="font-[work-sans] rounded-lg text-[#131313cc] cursor-pointer hover:bg-amber-100 p-2"
              >
                {option.item}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex mt-24 overflow-x-auto overflow-y-hidden ">
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
      {
        tabIndex ===0 && (<ReadBooks searchValue={selectOption} />)
      }
      {
        tabIndex === 1 && (<WishListBooks searchValue={selectOption} />)
      }
      
    </div>
  );
};

export default ListedBooks;
