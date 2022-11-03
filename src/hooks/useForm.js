

export function useForm() {
  const FORM_ACTIONS = {
    SET_NAME: "setName",
    SET_TEXT: "setText",
    SET_RATING: "setRating",
    ADD_DATA: "addData",
  };

  const reducer = (state, action) => {
    switch (action?.type) {
      case FORM_ACTIONS.SET_NAME:
        return { name: action.payload.name, text: "", rating: 0, id: Date.now()};
      case FORM_ACTIONS.SET_TEXT:
        return {...state, text: action.payload.text };
      case FORM_ACTIONS.SET_RATING: 
        return { ...state, rating: action.payload.rating };
      default:
        return state;
    } 
  };

  return {
    FORM_ACTIONS,
    reducer
  };
}