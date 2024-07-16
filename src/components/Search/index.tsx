import { ChangeEvent, useState } from "react";
import { Button, TextField, Paper } from "@mui/material";

const SearchForm = ({
  handleSearch,
}: {
  handleSearch: (value: string) => void;
}) => {
  const [textValue, setTextValue] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };
  const onSubmit = () => handleSearch(textValue);

  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        boxShadow: 0,
      }}
    >
      <TextField
        sx={{ mr: 1, flex: 1 }}
        placeholder="Search"
        onChange={onChange}
        value={textValue}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            ev.preventDefault();
            onSubmit();
          }
        }}
      />
      <Button
        variant="contained"
        sx={{ fontSize: 14 }}
        aria-label="search"
        onClick={onSubmit}
      >
        Search
      </Button>
    </Paper>
  );
};

export default SearchForm;
