import { useData } from "../store/DataProvider";

export const useRating = () => {
  const { data } = useData();

  return Math.floor(
    data.reduce((max, cur) => {
      return max + +cur.rating;
    }, 0) / data.length
  );
};