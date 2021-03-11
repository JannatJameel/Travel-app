import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

// Actions
import { fetchAirports } from "./actions/flightActions";

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(fetchAirports());

export default store;
