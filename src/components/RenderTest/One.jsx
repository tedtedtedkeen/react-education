import React, { useEffect } from 'react'

const One = ({
  fn
}) => {

  useEffect(() => {
    fn();
  }, [fn]);

  console.log("I'm one!");

  return (
    <div>
      One
    </div>
  )
}

export default One