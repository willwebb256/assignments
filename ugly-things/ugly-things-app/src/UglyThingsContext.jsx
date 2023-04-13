import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UglyThingsContext = createContext();

const UglyThingsContextProvider = (props) => {
  const [uglyThings, setUglyThings] = useState([]);

  useEffect(() => {
    axios.get("https://api.vschool.io/willwebb/thing").then((response) => {
      setUglyThings(response.data);
    });
  }, []);

  const addUglyThing = (newUglyThing) => {
    axios.post("https://api.vschool.io/willwebb/thing", newUglyThing).then((response) => {
      setUglyThings((prevUglyThings) => [...prevUglyThings, response.data]);
    });
  };

  const deleteUglyThing = (id) => {
    axios.delete(`https://api.vschool.io/willwebb/thing/${id}`).then(() => {
      setUglyThings((prevUglyThings) => prevUglyThings.filter((uglyThing) => uglyThing._id !== id));
    });
  };

  return (
    <UglyThingsContext.Provider value={{ uglyThings, addUglyThing, deleteUglyThing }}>
      {props.children}
    </UglyThingsContext.Provider>
  );
};

export default UglyThingsContextProvider;
