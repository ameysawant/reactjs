import React from "react";
// import Dish from "./components/Dish";
// import MyHeader, { Header2, Header3 } from "./components/Header";
// // import Test from "./components/Test";
// import { list } from "./recipelist";
// import UseStateBasics from "./useState-hook/UseStateBasics";
// import UseStateArray from "./useState-hook/UseStateArray";
// import UseStateObject from "./useState-hook/UseStateObject";
// import UseStateNumber from "./useState-hook/UseStateNumber";
import UseEffectBasics from "./useEffect-hook/UseEffectBasics";

function App() {
  return (
    <>
      {/* <UseStateBasics /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      {/* <UseStateNumber /> */}
      <UseEffectBasics />
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
