import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, AppLayout, Error } from "./ui";
import { loader as statsLoader } from "./ui/Home";
import { CryptoCurrencies, CryptoDetails } from "./features/cryptocurrencies";
import Exchanges from "./features/exchanges/Exchanges";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: statsLoader,
        errorElement: <Error />,
      },
      { path: "/crypto", element: <CryptoCurrencies /> },
      { path: "/crypto/:id", element: <CryptoDetails /> },
      { path: "/exchanges", element: <Exchanges /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
