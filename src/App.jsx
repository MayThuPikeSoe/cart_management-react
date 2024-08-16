import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import CategorySection from "./component/CategorySection";
import ProductSection from "./component/ProductSection";
import { Container } from "./component/Container";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Container>
        <Header />
       
        <Footer />
      </Container>
    </div>
  );
};

export default App;
