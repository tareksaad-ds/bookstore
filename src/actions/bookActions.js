import { GET_BOOKS, GET_BOOK, CHANGE_CART } from "./Types";
import axios from "axios";

export const getBooks = () => async (dispatch) => {
  const res = await axios.get(
    "https://fakerestapi.azurewebsites.net/api/Books"
  );
  dispatch({
    type: GET_BOOKS,
    payload: res.data,
  });
};

export const getBook = (id) => async (dispatch) => {
  const res = await axios.get(
    `https://fakerestapi.azurewebsites.net/api/Books/${id}`
  );
  dispatch({
    type: GET_BOOK,
    payload: res.data,
  });
};

export const changeCart = (id) => async (dispatch) => {
  const cart = JSON.parse(localStorage.getItem("CART"));
  dispatch({
    type: CHANGE_CART,
    payload: cart ? cart.length : 0,
  });
};
