import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const ProductCard = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
  },
}) => {
  return (
    <Link
      to={`/product-detail/${id}`}
      className="border border-black p-5 flex flex-col items-start gap-5"
    >
      <img src={image} alt="" className="h-40 w-auto" />
      <p className="font-bold line-clamp-2">{title}</p>
      <Rating rate={rate} />
      <div className="flex justify-between w-full items-end ">
        <p>{price}</p>
        <button className="border px-3 py-2 border-black text-xs">
          {" "}
          Add Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
