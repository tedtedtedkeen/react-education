import React from 'react';
import { Form } from "./components/Form";
import { List } from './components/List/List';
import { Poster } from './components/Poster';
import { useData } from './store/DataProvider';

const App = () => {

  const { data } = useData();

  return (
    <div className="app">
      <Poster />
      <Form />
      <List />
    </div>
  );
};

export { App };