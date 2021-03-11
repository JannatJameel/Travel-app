import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

// Actions
import { fetchAirports } from "./actions/flightActions";
import { checkForToken } from "./actions/authActions";

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(fetchAirports());
store.dispatch(checkForToken());

export default store;
