import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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

const TownMenuItems = () => {
  const towns = [
    "Ang Mo Kio",
    "Bedok",
    "Bishan",
    "Bukit Batok",
    "Bukit Merah",
    "Bukit Panjang",
    "Bukit Timah",
    "Central Area",
    "Choa Chu Kang",
    "Clementi",
    "Geylang",
    "Hougang",
    "Jurong East",
    "Jurong West",
    "Kallang/Whampoa",
    "Marine Parade",
    "Pasir Ris",
    "Punggol",
    "Queenstown",
    "Sembawang",
    "Sengkang",
    "Serangoon",
    "Tampines",
    "Toa Payoh",
    "Woodlands",
    "Yishun",
  ];
  return towns.map((town) => {
    return <MenuItem value={town}>{town}</MenuItem>;
  });
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const TownSelection = () => {
  const classes = useStyles();
  const [town, setTown] = React.useState("");

  const handleChange = (event) => {
    setTown(event.target.value);
  };
  return (
    <FormControl required className={classes.formControl}>
      <InputLabel id="demo-simple-select-required-label">Town</InputLabel>
      <Select
        labelId="demo-simple-select-required-label"
        id="demo-simple-select-required"
        value={town}
        onChange={handleChange}
        className={classes.selectEmpty}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <TownMenuItems />
      </Select>
      <FormHelperText>Required</FormHelperText>
    </FormControl>
  );
};
const App = () => {
  return (
    <div className="App">
      <form className="input-box" noValidate autoComplete="off">
        <TownSelection />
        <InputFields />
      </form>
    </div>
  );
};

export default App;
