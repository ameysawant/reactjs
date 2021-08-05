import React from "react";
// import Dish from "./components/Dish";
// import MyHeader, { Header2, Header3 } from "./components/Header";
// // import Test from "./components/Test";
// import { list } from "./recipelist";
// import UseStateBasics from "./useState-hook/UseStateBasics";
// import UseStateArray from "./useState-hook/UseStateArray";
// import UseStateObject from "./useState-hook/UseStateObject";
// import UseStateNumber from "./useState-hook/UseStateNumber";
// import UseEffectBasics from "./useEffect-hook/UseEffectBasics";
// import CleanupFunction from "./useEffect-hook/CleanupFunction";
// import FetchData from "./useEffect-hook/FetchData";
// import ConditionalRendering from "./useEffect-hook/ConditionalRendering";
// import ShortCircuit from "./useEffect-hook/ShortCircuit";
// import FormBasics from "./forms/FormBasics";
// import FormBasicsPart2 from "./forms/FormBasics-part-2";
// import ReactHookForm from "./forms/ReactHookForm";
// import ReactHookForm2 from "./forms/ReactHookForm2";
// import ReactHookFormPart2 from "./forms/ReactHookFormPart2";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Home from "./react-router/Home";
// import About from "./react-router/About";
// import Product from "./react-router/Product";
// import Contact from "./react-router/Contact";
// import PageNotFound from "./react-router/PageNotFound";
// import Nav from "./react-router/Nav";
// import ProductDetail from "./react-router/ProductDetail";
// import ProductAPI from "./react-router/ProductAPI";
// import ProductDetailAPI from "./react-router/ProductDetailAPI";
// import Usereducer from "./useReducer-hook/Usereducer";
import LoginForm from "./useReducer-hook/LoginForm";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/product" component={Product} />
          <Route path="/productdetail/:id" children={<ProductDetail />} />
          <Route path="/productapi" component={ProductAPI} />
          <Route path="/productdetailapi/:id" children={<ProductDetailAPI />} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter> */}
      {/* <UseStateBasics /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      {/* <UseStateNumber /> */}
      {/* <UseEffectBasics /> */}
      {/* <CleanupFunction /> */}
      {/* <FetchData /> */}
      {/* <ConditionalRendering /> */}
      {/* <ShortCircuit /> */}
      {/* <FormBasics /> */}
      {/* <FormBasicsPart2 /> */}
      {/* <ReactHookForm /> */}
      {/* <ReactHookForm2 /> */}
      {/* <ReactHookFormPart2 /> */}
      {/* <MyHeader />
      <Header2 />
      <Header3 />
      {list.map((recipes) => {
        return <Dish {...recipes} key={recipes.id} />;
      })} */}
      {/* <Usereducer /> */}
      <LoginForm />
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
