import React, { useReducer } from "react";
import { list } from "../recipelist";

const initialState = {
  recipeList: [],
};

const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "GET_RECIPES") {
    return {
      ...state,
      recipeList: list,
    };
  } else {
    return state;
  }
};

const Usereducer = () => {
  const [updatedState, dispatch] = useReducer(reducer, initialState);
  console.log(updatedState);
  const { recipeList } = updatedState;
  return (
    <>
      <div className="container">
        <div className="row">
          {recipeList.map((item) => {
            const { id, heading, imageUrl, price } = item;
            return (
              <div key={id} className="col-4">
                <img className="img-fluid" src={imageUrl} alt={heading} />
                <h4>{heading}</h4>
                <p>{price}</p>
              </div>
            );
          })}
        </div>
      </div>
      <button onClick={() => dispatch({ type: "GET_RECIPES" })}>
        get recipes
      </button>
    </>
  );
};

export default Usereducer;
