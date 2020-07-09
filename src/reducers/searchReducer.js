import { SEARCH_BOOK } from "../actions/Types";

const initialState = {
  title: "",
  books: [],
  loading: false,
  book: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_BOOK:
      return {
        ...state,
        title: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
