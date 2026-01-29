import React from "react";
import ReactDOM from "react-dom/client";




const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is Namastey React 🚀"),
    React.createElement("h2", {}, "I'm an H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm H1 Tag"),
    React.createElement("h2", {}, "I'm an H2 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!",
);
console.log(parent);
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(parent);
