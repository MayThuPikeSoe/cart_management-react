import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ currentPageTitle }) => {
  return (
    <div className="w-full gap-3 flex">
      <Link to={"/"} className="text-gray-500">
        Home
      </Link>
      <span>/</span>
      <p>{currentPageTitle}</p>
    </div>
  );
};

export default BreadCrumb;
