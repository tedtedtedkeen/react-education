import React, { memo } from "react";
import styles from "./Item.module.scss";
import { FaTrash } from "react-icons/fa";

const Item = ({
  name,
  text,
  rating,
  id,
  deleteItem
}) => {

  console.log(`I'm ${name}`);

  return (
    <div className={styles.container}>
      { name }
      <button onClick={() => deleteItem(id)}>
        <FaTrash />
      </button>
    </div>
  );
};

const MemoItem = memo(Item, (prev, next) => prev.id === next.id);

export { MemoItem };