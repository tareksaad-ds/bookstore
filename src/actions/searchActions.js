import { SEARCH_BOOK } from "./Types";

export const searchBook = (title) => (dispatch) => {
  dispatch({
    type: SEARCH_BOOK,
    payload: title,
  });
};
