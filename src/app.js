import React from "react";
import ReactDom from "react-dom/client";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "/index.css";
import About from "./About";
import Error from "./Error";
import Contact from "./Contact";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  }
]);


const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
