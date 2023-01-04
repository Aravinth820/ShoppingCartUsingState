const TotalPrice = (state = 0, action) => {
  switch (action.type) {
    case "TOTALINCPRICE":
      return state + action.payLoad;
    case "TOTALDECPRICE":
      return state - action.payLoad;
    default:
      return state;
  }
};

export default TotalPrice;
