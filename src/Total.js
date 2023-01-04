import item from "./items";
import Counter from "./counter";

export default function Total(props) {
  return item.map((item) => (
    <div className="note">
      <br />
      <br />
      <p> Product Name </p>
      <h1>{item.Item_Name}</h1>
      <br />
      <p>Price of the Product</p>
      <h1>{item.price}</h1>
      <img src={item.img} alt="mobile" />
      <br />
      <Counter
        price={item.price}
        total={props.total}
        setTotal={props.setTotal}
        count={props.count}
        setCount={props.setCount}
      />
    </div>
  ));
}
