import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const MainLayouts = () => {
  return (
    <div>
      <div className="relative">
        <Nav />
      </div>
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayouts;
