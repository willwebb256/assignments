import React, { useContext } from "react";
import { UglyThingsContext } from "./UglyThingsContext";

const UglyThingsList = () => {
  const { uglyThings, deleteUglyThing } = useContext(UglyThingsContext);

  const handleDelete = (id) => {
    deleteUglyThing(id);
  };

  return (
    <div className="image-container">
      {uglyThings.map((uglyThing) => (
        <div key={uglyThing._id} className="image-card">
          <img className="UglyThingsList__image" src={uglyThing.imgUrl} alt={uglyThing.title} />
          <h3 className="UglyThingsList__title">{uglyThing.title}</h3>
          <p className="UglyThingsList__description">{uglyThing.description}</p>
          <button onClick={() => handleDelete(uglyThing._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UglyThingsList;

