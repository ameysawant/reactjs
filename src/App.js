import React from "react";
// import Dish from "./components/Dish";
// import MyHeader, { Header2, Header3 } from "./components/Header";
// // import Test from "./components/Test";
// import { list } from "./recipelist";
// import UseStateBasics from "./hooks/UseStateBasics";
// import UseStateArray from "./hooks/UseStateArray";
import UseStateObject from "./hooks/UseStateObject";

function App() {
  return (
    <>
      {/* <UseStateBasics /> */}
      {/* <UseStateArray /> */}
      <UseStateObject />
      {/* <MyHeader />
      <Header2 />
      <Header3 />
      {list.map((recipes) => {
        return <Dish {...recipes} key={recipes.id} />;
      })} */}
    </>
  );
}

// function App() {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, 'This is my first Component"')
//   );
// }

export default App;
