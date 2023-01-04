import { useState } from "react";

function counter(props) {
  const [count, setCounter] = useState(0);

  const increment = () => {
    setCounter(count + 1, props.setCount(props.count + 1));
    props.setTotal(props.total + props.price);
  };
  const decrement = () => {
    if (count === 0) {
      return;
    }
    setCounter(count - 1, props.setCount(props.count - 1));
    props.setTotal(props.total - props.price);
  };

  return (
    <div className="counter">
      <button id="plus" onClick={increment}>
        +
      </button>
      <span>{count}</span>
      <button id="minus" onClick={decrement}>
        -
      </button>
    </div>
  );
}

export default counter;
