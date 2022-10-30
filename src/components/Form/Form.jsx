import React, { useReducer } from "react";

/* 
  доброго ранку хлопчики и дивчины!
  на повестке ()))))))) дня у нас некст квесченс: 
  1) а как нам реализовать эту форму с помощью одного редьюсера
  2) а так ли нам нужен инишиалСтейт в начале юзРедьюсера
  3) а можно ли как-то инкапсулировать юзРедьюсер, 
    потому что это все конечно круто,
    но писать мелеон строчек кода каждый раз - это какой-то pizdec 
  желаю всем продуктивного кодинха коллеги! 
*/

const FORM_ACTIONS = {
  setName: "setName",
  setText: "setText",
  setRating: "setRating",
};

const reducer = (state, action) => {
  switch (action?.type) {
    case FORM_ACTIONS.setName:
      return { name: action.payload.name, text: "", rating: 0 };
    case FORM_ACTIONS.setName:
      return {...state, text: action.payload.text };
    case FORM_ACTIONS.setRating: 
      return { ...state, rating: action.payload.rating };
    default:
      return state;
  }
};

const Form = () => {

  const [state, dispatch] = useReducer(reducer, []);

  return (
    <form>
      <input 
        type="text"
        // value={}
        // onChange={} 
      />
      <input 
        type="text"
        // value={}
        // onChange={} 
      />
      <input 
        type="checkbox"
      />
      <button>Send</button>
    </form>
  );
};

export { Form };