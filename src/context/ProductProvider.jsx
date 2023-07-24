import axios from "axios";
import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [listData, setlistData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(`https://reqres.in/api/users?page=1`);
      const data = res.data.data;
      setlistData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return <ProductContext.Provider value={{ listData, getData }}>{children}</ProductContext.Provider>;
};
