import React, { useCallback, useState } from 'react';
import { Form } from './components/Form';
import { List } from './components/List';
import Counter from './components/RenderTest/Counter';
import One from './components/RenderTest/One';
import Two from './components/RenderTest/Two';
// import { useCount } from './hooks/useCount';

const App = () => {

  // const { count, decrement, increment } = useCount(0);

  const fn = useCallback(() => {
    console.log("I'm FN!");
  }, []);

  return (
    <div>
      <h1>
        React Education
      </h1>
      <Counter />
      <One 
        fn={fn}
      />
      <Two 
        fn={fn}
      />
      {/* <Form /> */}
      {/* <List /> */}
    </div>
  );
};

export { App };