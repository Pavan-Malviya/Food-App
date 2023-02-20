import React from "react";
import ReactDom from "react-dom/client";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

import "/index.css";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
