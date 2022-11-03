import { useReducer } from "react";

const FORM_ACTIONS = {
  SET_NAME: "setName",
  SET_TEXT: "setText",
  SET_RATING: "setRating"
};

const reducer = (state, action) => {
  switch (action?.type) {
    case FORM_ACTIONS.SET_NAME:
      return { name: action.payload.name, text: "", rating: 0, id: Date.now() };
    case FORM_ACTIONS.SET_TEXT:
      return { ...state, text: action.payload.text };
    case FORM_ACTIONS.SET_RATING:
      return { ...state, rating: action.payload.rating };
    default:
      return state;
  }
};

const initial = {
  name: "",
  text: "",
  rating: 0
};

export const useForm = () => {
  const [state, dispatch] = useReducer(reducer, initial);

  return { 
    FORM_ACTIONS, state, dispatch
  };
};