import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import OnlineUsers from "../components/OnlineUsers";
import SideBar from "../components/SideBar";

function MainLayout() {
  return (
    <div className="grid grid-cols-12 h-screen">
      <SideBar/>
      <main className="col-start-3 col-end-11 overflow-y-auto">
        <Navbar />
        <Outlet />
      </main>
        <div className="col-start-11 col-end-13 overflow-y-auto">
        <OnlineUsers/>
        </div>
    </div>
  );
}

export default MainLayout;
