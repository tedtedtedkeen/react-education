import React from "react";
import { Item } from "../Item/Item";
import styles from "./List.module.scss";
import { useProvider } from "../../store/DataProvider";

const List = () => {

  const { data } = useProvider();

  return (
    <>
      {
        data && 
        data.map(item => {
          return <Item 
            key={item.id}
            {...item}
          />
        })
      }
    </>
  );
};

export { List };