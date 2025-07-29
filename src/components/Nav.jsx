
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn pl-0 pr-2 btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content gap-4 bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23be0a] font-bold font-[work-sans] text-lg border border-[#23be0a] p-2 md:p-3 rounded-lg md:text-2xl"
                  : "font-[work-sans] text-lg md:text-2xl"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/listedBooks"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23be0a] font-bold font-[work-sans] text-lg border border-[#23be0a] p-2 md:p-3 rounded-lg md:text-2xl"
                  : "font-[work-sans] text-lg md:text-2xl text-[#131313cc]"
              }
            >
              Listed Books
            </NavLink>
            <NavLink
              to="/pagesRead"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23be0a] font-bold font-[work-sans] text-lg border border-[#23be0a] p-2 md:p-3 rounded-lg md:text-2xl"
                  : "font-[work-sans] text-lg md:text-2xl text-[#131313cc]"
              }
            >
              Pages to Read
            </NavLink>
          </ul>
        </div>
        <a className="text-xl md:text-3xl pl-0  font-[work-sans] font-bold text-[#131313]">
          Book Vibe
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#23be0a] font-bold font-[work-sans] text-lg border border-[#23be0a] p-2 md:p-3 rounded-lg md:text-2xl"
                : "font-[work-sans] text-lg md:text-2xl text-[#131313cc]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/listedBooks"
            className={({ isActive }) =>
              isActive
                ? "text-[#23be0a] font-bold font-[work-sans] text-lg border border-[#23be0a] rounded-lg md:text-2xl p-2 md:p-3"
                : "font-[work-sans] text-lg md:text-2xl text-[#131313cc]"
            }
          >
            Listed Books
          </NavLink>
          <NavLink
            to="/pagesRead"
            className={({ isActive }) =>
              isActive
                ? "text-[#23be0a] font-bold font-[work-sans] text-lg border border-[#23be0a] p-2 md:p-3 rounded-lg md:text-2xl"
                : "font-[work-sans] text-lg md:text-2xl text-[#131313cc]"
            }
          >
            Pages to Read
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end items-center gap-2">
        <a className="btn bg-[#23be0a] text-white rounder-lg p-2 md:p-5 font-[work-sans]font-semibold text-base md:text-lg">
          Sign In
        </a>
        <a className="btn bg-[#59c6d2] text-white rounder-lg p-2 md:p-5 font-[work-sans]font-semibold text-base md:text-lg">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Nav;
