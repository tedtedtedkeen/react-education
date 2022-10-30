import React from 'react';
import { ACTIONS } from './Ex';

const Item = ({
  dispatch,
  id,
  name,
  completed
}) => {
  return (
    <div className={completed ? "active" : "disabled"}>
      { name }
      <button 
        onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: id } })}
      >
        DELETE
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: id } })}>
        TOGGLE
      </button>
    </div>
  )
}

export { Item };