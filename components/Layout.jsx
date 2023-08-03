import React from "react";
import Sidebar from "./Sidebar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex">
        <Sidebar />
        <div className="flex-1 bg-primary p-4 text-white">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
