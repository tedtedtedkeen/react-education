import React from "react";
import drive from "../../assets/images/drive.jpg";
import styles from "./Poster.module.scss";
import { Rating } from "../Rating";

const Poster = () => {
  return (
    <div className={styles.poster}>
      <img 
        src={drive} 
        alt="drive"
        className={styles.img}
      />
      <Rating />
    </div>
  );
};

export { Poster };

