import React, { useState } from "react";

const UseStateBasics = () => {
  //   console.log(useState("my old text"));
  const [text, setText] = useState("my old text");
  // console.log(text);
  //   let text = "my old text";

  const changeText = () => {
    // text = "my new text";
    // console.log(text);
    if (text === "my old text") {
      setText("my new text");
    } else {
      setText("my old text");
    }
  };

  return (
    <>
      <h1>{text}</h1>
      <button onClick={changeText}>change</button>
    </>
  );
};

export default UseStateBasics;
