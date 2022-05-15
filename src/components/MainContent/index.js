import React from "react";
import { Outlet } from "react-router-dom";

function MainContent() {
  return (
    <div>
      <h1>This is MainContent component</h1>
      <Outlet />
    </div>
  );
}

export default MainContent;
