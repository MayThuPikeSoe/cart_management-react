import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/Products";
import Rating from "../component/Rating";
import { Container } from "../component/Container";
import BreadCrumb from "../component/BreadCrumb";

const ProductDetail = () => {
  const { productId } = useParams();

  const currentProduct = products.find((product) => product.id == productId);

  return (
    <Container>
      <BreadCrumb currentPageTitle={currentProduct.title} />
      <div className="border border-black p-10">
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <img
              src={currentProduct.image}
              className="w-3/4 block mx-auto"
              alt=""
            />
          </div>
          <div className="col-span-1 flex flex-col gap-5 items-start">
            <h3>{currentProduct.title}</h3>
            <p className="bg-gray-200 text-gray-700 inline-block px-5 py-1">
              {currentProduct.category}
            </p>
            <Rating rate={currentProduct.rating.rate} />
            <div className="flex justify-between w-full items-end ">
              <p>Price: ({currentProduct.price})</p>
              <button className="border px-3 py-2 border-black text-xs">
                {" "}
                Add Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
