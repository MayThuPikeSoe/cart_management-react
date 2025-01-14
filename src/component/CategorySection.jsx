import React from "react";
import CategoryButton from "./CategoryButton";

const CategorySection = () => {
  const title = "Product Categories";
  const categories = [
  
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <section id="category-section" className="p-5">
      <p className="text-sm text-gray-500 mb-2"></p>
      <div className=" flex overflow-scroll category-button-group">
        <CategoryButton title="all" current={true} />
        {categories.map((category) => (
          <CategoryButton key={category} title={category} current={false} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
