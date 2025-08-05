import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesRead from "../pages/PagesRead";
import BookDetails from "../pages/BookDetails";

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
