import React, { useReducer } from "react";
import { useProvider } from "../../store/DataProvider";
import styles from "./Form.module.scss";
import { useForm } from "../../hooks/useForm";

const { FORM_ACTIONS, reducer } = useForm();

const initial = {
  name: "",
  text: "",
  rating: 0,
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initial);
  const { setData } = useProvider();

  const onNameChange = (e) => dispatch({
    type: FORM_ACTIONS.SET_NAME, payload: { name: e.target.value }
  });

  const onTextChange = (e) => dispatch({
    type: FORM_ACTIONS.SET_TEXT, payload: { text: e.target.value }
  });

  const onRatingChange = (e) => dispatch({
    type: FORM_ACTIONS.SET_RATING, payload: { rating: e.target.value }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prev) => [...prev, { name: state.name, text: state.text, rating: state.rating, id: Date.now() }]);
    dispatch({ type: FORM_ACTIONS.SET_NAME, payload: { name: "" } }); 
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <input
        type="text"
        value={state.name}
        onChange={onNameChange}
        placeholder="Name"
      />
      <input 
        type="text"
        value={state.text}
        onChange={onTextChange}
        placeholder="Some text" 
      />
      <input 
        type="number"
        value={state.rating}
        onChange={onRatingChange}
      />
      <button
        className={styles.button}
        onKeyPress={handleSubmit}
        disabled={!state.name}
      >
        Send
      </button>
    </form>
  );
};

export { Form };