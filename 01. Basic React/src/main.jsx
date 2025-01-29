import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyName() {
  return `Thor Odinson`;
}

/*const reactElement = {
  type: "input",
  props: {
    type: "text",
    placeholder: "Search",
  },
  Children: "",
};*/

const link = <a href="https://www.google.com">Google</a>;

const reactElement = React.createElement(
  "a",
  {
    href: "https://www.amazon.in",
    target: "_blank",
  },
  "Amazon"
);

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <MyName />
  </>

  //   link
  //   reactElement
);
