import React, { useLayoutEffect, useRef } from "react";
import { useData } from "../../store/DataProvider";
import { useForm } from "../../hooks/useForm";

const Form = () => {

  const { changeData } = useData();
  const { FORM_ACTIONS, state, dispatch } = useForm();
  const ref = useRef();

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
    return () => {};
  }, []);

  const onNameChange = (e) => {
    dispatch({ 
      type: FORM_ACTIONS.SET_NAME, payload: { name: e.target.value }
    });
  };

  const onTextChange = (e) => {
    dispatch({ 
      type: FORM_ACTIONS.SET_TEXT, payload: { text: e.target.value }
    });
  };

  const onRatingChange = (e) => {
    dispatch({ 
      type: FORM_ACTIONS.SET_RATING, payload: { rating: e.target.value }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    changeData(state);
    dispatch({
      type: FORM_ACTIONS.SET_NAME, payload: { name: "" }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={ref}
        type="text"
        value={state.name}
        onChange={onNameChange} 
        placeholder="name"
      />
      <textarea
        value={state.text}
        onChange={onTextChange}
        placeholder="text" 
      />
      <input 
        type="number"
        max={5}
        placeholder={"Number"}
        value={state.rating}
        onChange={onRatingChange}
      />
      <button>
        Send
      </button>
    </form>
  );
};

export { Form };