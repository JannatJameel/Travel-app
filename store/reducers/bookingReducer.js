import * as types from "../actions/types";

const initialState = {
  bookings: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_FLIGHT:
      return {
        ...state,
        bookings: action.payload,
        bookings: [...state.bookings, action.payload],
      };
    case types.CHECKOUT:
      return {
        ...state,
        bookings: [],
      };
    default:
      return state;
  }
};

export default bookingReducer;
