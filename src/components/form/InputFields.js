import { TextField } from "@material-ui/core";

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

export default InputFields;
