import * as types from "../actions/types";

const initialState = {
  search: {},
  departureFlights: [],
  returnFlights: [],
  airports: [],
  passengers: "",
  flightClass: "",
  loading: true,
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case types.FETCH_DEPARTURES:
      return {
        ...state,
        departureFlights: action.payload,
      };
    case types.FETCH_RETURNS:
      return {
        ...state,
        returnFlights: action.payload,
      };
    case types.FETCH_AIRPORTS:
      return {
        ...state,
        airports: action.payload,
      };
    case types.SET_PASSENGER:
      return {
        ...state,
        passengers: action.payload,
      };
    case types.SET_CLASS:
      return {
        ...state,
        flightClass: action.payload,
      };
    default:
      return state;
  }
};

export default flightReducer;
