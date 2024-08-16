import React from "react";

const CategoryButton = ({ title, current }) => {
  return (
    <button
      className={` ${
        current ? "bg-black text-white" : ""
      }  border border-black px-4 py-2 me-2 `}
    >
      {title}
    </button>
  );
};

export default CategoryButton;
