import React, { useEffect } from 'react'

const Two = ({
  fn
}) => {

  useEffect(() => {
    fn();
  }, [fn]);
  
  console.log("I'm two!");

  return (
    <div>
      Two
    </div>
  )
}

export default Two