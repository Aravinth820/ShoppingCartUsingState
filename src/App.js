import "./styles.css";

import { react, useState } from "react";
import Total from "./Total";

export default function App() {
  const [total, setTotal] = useState(0);
  const [addcart, setAddCart] = useState(0);
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(0);

  return (
    <div>
      <header>
        <h1>My Shopping Cart </h1>
      </header>

      <div className="fullpage">
        <div className="page">
          <Total
            total={total}
            count={count}
            setTotal={setTotal}
            setCount={setCount}
          />
        </div>
      </div>
      <br />
      <br />
      <div>
        <footer>
          <div className="center">
            <button
              id="addproduct"
              onClick={() => {
                setAddCart(total);
                setDisplay(count);
              }}
            >
              addcart
            </button>
          </div>
          <p>
            Total Price:{addcart} <div className="divider">/</div>
            <span id="span">Total Products</span>
            {display}
          </p>
        </footer>
      </div>
    </div>
  );
}
