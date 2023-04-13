import React from "react";
import UglyThingsForm from "./UglyThingsForm";
import UglyThingsList from "./UglyThingsList";
import UglyThingsContextProvider from "./UglyThingsContext";
import "./styles.css"; // import custom styles

function App() {
  return (
    <UglyThingsContextProvider>
      <div className="App"> {/* Add App class */}
        <h1>Ugly Things App</h1>
        <div className="form-container"> {/* Add form-container class */}
          <UglyThingsForm />
        </div>
        <div className="image-container"> {/* Add image-container class */}
          <UglyThingsList />
        </div>
      </div>
    </UglyThingsContextProvider>
  );
}

export default App;


