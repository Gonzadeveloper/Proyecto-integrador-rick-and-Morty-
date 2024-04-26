import axios from 'axios'
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './actionsTypes'

const URL = 'http://localhost:3001/rickandmorty'

// * actions creators
export function addFav(character) {
    // console.log(character);
  return function (dispatch) {
    axios.post(`${URL}/fav`, character).then(({ data }) => {
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    });
  };
}

export function removeFav(id) {
  return (dispatch) => {
    axios.delete(`${URL}/fav/${id}`).then(({ data }) => {
        // console.log(data);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    });
  };
}

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function orderCards(payload) {
  return {
    type: ORDER,
    payload,
  };
}