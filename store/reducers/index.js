import { combineReducers } from "redux";

import flightReducer from "./flightReducer";
import bookingReducer from "./bookingReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  flightReducer,
  bookingReducer,
  authReducer,
});

export default rootReducer;
