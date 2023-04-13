import React, { useState, useContext } from "react";
import { UglyThingsContext } from "./UglyThingsContext";

const UglyThingsForm = () => {
  const { addUglyThing } = useContext(UglyThingsContext);

  const [imgUrl, setImgUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const newUglyThing = {
          imgUrl,
          title,
          description,
        };
    
        addUglyThing(newUglyThing);
    
        setImgUrl("");
        setTitle("");
        setDescription("");
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <label>
            Img url:
            <input type="text" value={imgUrl} onChange={(event) => setImgUrl(event.target.value)} />
          </label>
          <br />
          <label>
            Title:
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
          </label>
          <br />
          <label>
            Description:
            <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      );
    };
    
    export default UglyThingsForm;
    