import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayouts;
