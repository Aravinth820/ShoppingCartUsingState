import AddCartReducer from "./AddCartReducer";
import DisplayReducer from "./DisplayReducer";
import ProductReducer from "./ProductReducer";
import TotalReducer from "./TotalReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  total: AddCartReducer,
  addcart: DisplayReducer,
  count: ProductReducer,
  display: TotalReducer
});

export default reducer;
