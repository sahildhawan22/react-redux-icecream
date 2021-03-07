import { combineReducers } from "redux";
import cakeReducer from "../redux/cake/cakeReducer";
import iceCreamReducer from "../redux/iceCream/iceCreamReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  iceCream: iceCreamReducer,
  cake: cakeReducer,
  user: userReducer,
});

export default rootReducer;
