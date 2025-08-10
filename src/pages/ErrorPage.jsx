import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <img src="../not-found.svg" alt="page not found" className="w-96" />
      <div className="flex flex-col items-center gap-2">
          <h1 className="font-[work-sans] font-bold text-2xl text-[#3749bb]">
            Oops!
          </h1>
          <h2 className="text-[#131313] font-semibold text-lg font-[work-sans]">The page you requested can't be found!</h2>
          <Link
            to={"/"}
            className="inline-flex font-[work-sans] items-center justify-center px-4 py-2 text-base font-bold leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            data-rounded="rounded-md"
            data-primary="blue-600"
            data-primary-reset="{}"
          >
            Continue
          </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
