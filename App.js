import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namastey React🚀",
);

// console.log(heading);
//React Element

const Title = () => <h1 className="head">Namastey React using JSX 🚀</h1>;
// console.log(jsxHeading);
const Title1 = <h1 className="head">Namastey React using JSX1 🚀</h1>;

const root = ReactDOM.createRoot(document.querySelector("#root"));

//React Components

const HeadingComponent = () => <h1>Namastey React Functional Component</h1>;

//Component Composition

const HeadingComponent1 = () => (
  <div id="container">
    <Title />
    {Title1}
    <Title></Title>
    {Title()}
    {"hello world"}
    <h1>Namastey React Functional Component</h1>
  </div>
);
console.log(HeadingComponent1);

const HeadingComponent2 = () => {
  return <h1>Namastey React Functional Component</h1>;
};

// root.render(<HeadingComponent1 />);

const header = React.createElement("div", { className: "title" }, [
  React.createElement("h1", null, "I am H1"),
  React.createElement("h2", null, "I am H2"),
  React.createElement("h3", null, "I am H3"),
]);

// Now craeting the Same using JSX 

const newHeader = (
<div className="title">
<h1>I am h1</h1>
<h2>I am h2</h2>
<h3>I am h3</h3>
</div>
)

const NewHeader1 = ()=> (
<div className="title">
  {<h1>I am title h1 componenet</h1>}
<h1>I am h1</h1>
<h2>I am h2</h2>
<h3>I am h3</h3>
</div>
);
//  ALways remember component are always written using capittal leters




root.render(<NewHeader1 />)