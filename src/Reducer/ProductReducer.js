const TotalProducts = (state = 0, action) => {
  switch (action.type) {
    case "INCCOUNTPRODUCTS":
      return state + 1;
    case "DECCOUNTPRODUCTS":
      return state - 1;
    default:
      return state;
  }
};

export default TotalProducts;
