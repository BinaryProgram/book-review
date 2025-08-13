import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row-reverse  bg-base-200 mt-12 items-center justify-evenly p-5">
      <div>
        <img src="pngwing.png" />
      </div>
      <div>
        <h1 className="text-5xl font-bold font-[playfair-display] text-[#131313] leading-16">
          Books to freshen up <br /> your bookshelf
        </h1>
        <Link
          to="/listedBooks"
          className="btn bg-[#23be0a] text-white rounder-lg p-8 font-[work-sans] font-bold text-lg mt-12"
        >
          View The List
        </Link>
      </div>
    </div>
  );
};

export default Banner;
