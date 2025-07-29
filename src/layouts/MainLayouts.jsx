import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <div className="container mx-auto">
      <div>
        <Nav />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayouts;
