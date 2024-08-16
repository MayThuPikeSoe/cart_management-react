import React from "react";
import { Container } from "../component/Container";
import BreadCrumb from "../component/BreadCrumb";
import CartSection from "../component/CartSection";

const Mycart = () => {
  return (
    <Container>
      <BreadCrumb currentPageTitle="My cart" />
      <CartSection />
    </Container>
  );
};

export default Mycart;
