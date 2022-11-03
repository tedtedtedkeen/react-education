import React, { useReducer, useState } from 'react';
import { Item } from './Item';

/* 
  мы выносим типы экшенов в константу
  и также импортируем ее, чтобы использовать в чилдрике
*/

export const ACTIONS = {
  DELETE_TODO: "delete",
  ADD_TODO: "add",
  TOGGLE_TODO: "toggle"
};

/* 
  це наш редьюсер, смотри як фантастишно
  тудус - наш инишиал стейт
  экшон - объект с разнынственными действиями
  диспатч - как раз таки принимает экшон, 
  поэтому-то мы его там сразу и спредим
  со всеми этими тайпами и пэйлоудами (это тоже объект)
*/

function reducer(todos, action) {
  switch (action?.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.DELETE_TODO: 
      return todos.filter(todo => todo.id !== action.payload.id);
    case ACTIONS.TOGGLE_TODO: 
      return todos.map(todo => {
        return todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo;
      });
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, completed: false }
}

const Ex = () => {

  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
      >
        <input 
          type="text"
          value={name}
          onChange={e => setName(e.target.value)} 
        />
        <button>
          SEND
        </button>
      </form>
      {
        todos.map(todo => {
          return <Item 
            key={todo.id}
            {...todo}
            dispatch={dispatch}
          />
        })
      }
    </>
  );
};

export { Ex };