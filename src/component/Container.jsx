// import React from "react";

export const Container = ({ children }) => {
  return (
    <div className={`w-full md:w-[720px]  lg:w-[1000px] mx-auto `}>
      {children}
    </div>
  );
};
