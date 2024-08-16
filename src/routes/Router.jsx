import Home from "../pages/Home.jsx";
import Mycart from "../pages/Mycart.jsx";
import ProductDetail from "../pages/ProductDetail.jsx";

import MainLayout from "../component/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },

      {
        path: "my-cart",
        element: <Mycart />,
      },
      {
        path: "product-detail/:productId",
        element: <ProductDetail />,
      },
    ],
  },
]);
export default router;
