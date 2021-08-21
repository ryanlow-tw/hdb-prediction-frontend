import React from "react";
import { TextField } from "@material-ui/core";
import TownDropDown from "./components/form/ownDropDown";

const InputFields = () => {
  const columns = ["storey", "floor area (sqm)", "remaining lease"];
  return columns.map((column) => {
    return (
      <div>
        <TextField
          id={column}
          label={column}
          variant="outlined"
          color="secondary"
        />
        <br />
      </div>
    );
  });
};

const App = () => {
  return (
    <div className="App">
      <form className="input-box" noValidate autoComplete="off">
        <TownDropDown />
        <InputFields />
      </form>
    </div>
  );
};

export default App;
