import React, { useReducer } from "react";

const initialState = {
  username: "",
  password: "",
  loggedIn: false,
  error: false,
};

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "SUCCESS":
      return {
        ...state,
        loggedIn: true,
        username: "",
        password: "",
        error: false,
      };
    case "ERROR":
      return {
        ...state,
        error: "invalid",
      };
    case "LOGOUT":
      return {
        ...state,
        loggedIn: false,
      };
    case "USERNAME":
      return {
        ...state,
        username: action.value,
      };
    case "PASSWORD":
      return {
        ...state,
        password: action.value,
      };
    default:
      return state;
  }
};

const LoginForm = () => {
  const [updatedState, dispatch] = useReducer(reducer, initialState);
  console.log(updatedState);
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [loggedIn, setLoggedIn] = useState(false);
  //   const [error, setError] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    if (
      updatedState.username === "kishori" &&
      updatedState.password === "admin"
    ) {
      console.log("success");
      //   setLoggedIn(true);
      //   setUsername("");
      //   setPassword("");
      dispatch({ type: "SUCCESS" });
    } else {
      console.log("error");
      //   setError("invalid");
      dispatch({ type: "ERROR" });
    }
  };

  return (
    <>
      {updatedState.loggedIn ? (
        <div>
          <h1>you have successfully logged in</h1>
          <button
            onClick={() => {
              //   setLoggedIn(false);
              //   setError(false);
              dispatch({ type: "LOGOUT" });
            }}
          >
            logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleForm} autoComplete="off">
          <p className="red">{updatedState.error}</p>
          <input
            value={updatedState.username}
            onChange={(e) =>
              dispatch({ type: "USERNAME", value: e.target.value })
            }
            type="text"
            placeholder="username"
            name="username"
          />
          <input
            value={updatedState.password}
            onChange={(e) =>
              dispatch({ type: "PASSWORD", value: e.target.value })
            }
            type="text"
            placeholder="password"
            name="password"
          />
          <button>submit</button>
        </form>
      )}
    </>
  );
};

export default LoginForm;
