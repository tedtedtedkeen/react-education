import React from "react";

const Item = ({
  name,
  text,
  rating,
}) => {
  return (
    <div>
      <h3> 
        { name }  
      </h3>
    </div>
  );
};

export { Item };