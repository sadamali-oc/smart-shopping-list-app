/* eslint-disable react-hooks/exhaustive-deps */
import { useReducer, useEffect } from "react";

function Button({ countToDisplay, buttonName }) {
  const reducer = (state, action) => {
    if (action.type === "increment") {
      return { count: state.count + 1 };
    } else if (action.type === "decrement") {
      return { count: state.count - 1 };
    } else {
      return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  useEffect(() => {
    countToDisplay(state.count);
  }, [state.count]);

  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>

      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}

export default Button;
