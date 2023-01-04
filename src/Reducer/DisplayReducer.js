const DisplayPrice = (state = 0, action) => {
  switch (action.type) {
    case "DISPLAYPRICE":
      return (state = action.payLoad);

    default:
      return state;
  }
};

export default DisplayPrice;
