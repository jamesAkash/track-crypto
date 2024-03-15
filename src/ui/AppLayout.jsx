import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className=" flex-1">
        <main className="mx-auto max-w-6xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
