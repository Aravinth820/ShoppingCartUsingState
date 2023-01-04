export const INCREMENT = (incprice) => {
  return {
    type: "TOTALINCPRICE",
    payLoad: incprice
  };
};

export const DECREMENT = (decprice) => {
  return {
    type: "TOTALDECPRICE",
    payLoad: decprice
  };
};

export const INCCOUNTPRODUCTS = () => {
  return {
    type: "INCCOUNTPRODUCTS"
  };
};

export const DECCOUNTPRODUCTS = () => {
  return {
    type: "DECCOUNTPRODUCTS"
  };
};

export const DisplayPrice = (displayprice) => {
  return {
    type: "DISPLAYPRICE",
    payLoad: displayprice
  };
};

export const DisplayProducts = (displayproducts) => {
  return {
    type: "DISPLAYPRODUCTS",
    payLoad: displayproducts
  };
};
