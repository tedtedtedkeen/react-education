import React from "react";
import styles from "./List.module.scss";
import { useData } from "../../store/DataProvider";
import { MemoItem } from "../Item/Item";

const List = () => {

  const { data, deleteItem } = useData(); 

  return (
    <div className={styles.list}>
      {
        data.map(item => {
          return <MemoItem 
            key={item.id}
            deleteItem={deleteItem}
            {...item}
          />
        })
      }
    </div>
  );
};

export { List };