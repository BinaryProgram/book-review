import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesRead from "../pages/PagesRead";
import BookDetails from "../pages/BookDetails";
import WishListBooks from "../components/WishListBooks";
import ReadBooks from "../components/ReadBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks />,
        children: [
          {
            index: true,
            element: <ReadBooks />,
          },
          {
            path: "wishlist",
            element: <WishListBooks />,
          },
        ],
      },
      {
        path: "/pagesRead",
        element: <PagesRead />,
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails />,
        // Static JSON files can only be fetched entirely (you can't access them like folders).
        // loader: ({params}) => fetch(`/books.json/${params.id}`)
        loader: async ({ params }) => {
          const res = await fetch("/books.json");
          const data = await res.json();
          return data.find((book) => params.id === book.bookId.toString());
        },
        hydrateFallbackElement: <BookDetails />,
      },
    ],
  },
]);
