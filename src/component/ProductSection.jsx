import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/Products";

const ProductSection = () => {
  return (
    <section className="px-5">
      <p className="text-sm text-gray-500 mb-2 ">Available Product lists</p>
      <div className="grid xl:grid-cols-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
