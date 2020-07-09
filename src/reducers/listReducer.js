import { GET_BOOKS, GET_BOOK, CHANGE_CART } from "../actions/Types";

const initialState = {
  title: "",
  books: [],
  loading: false,
  book: [],
  cart: JSON.parse(localStorage.getItem("CART"))
    ? JSON.parse(localStorage.getItem("CART")).length
    : 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload,
        loading: false,
      };
    case GET_BOOK:
      return {
        ...state,
        book: action.payload,
      };
    case CHANGE_CART:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
}
