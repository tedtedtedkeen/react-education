import React from "react";
import styles from "./Star.module.scss";
import { FaStar } from "react-icons/fa";

const Star = ({
  selected
}) => {
  return (
    <React.Fragment>
      <FaStar 
        className={selected ? styles.active : styles.disabled}
      />
    </React.Fragment>
  );
};

export { Star };