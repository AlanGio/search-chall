import { useState } from "react";
import { Button, TextField, Paper } from "@mui/material";

const SearchForm = ({
  handleSearch,
}: {
  handleSearch: (value: string) => void;
}) => {
  const [textValue, setTextValue] = useState<string>("");

  const onTextChange = (e: any) => setTextValue(e.target.value);
  const onSubmit = () => handleSearch(textValue);

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <TextField
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        onChange={onTextChange}
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
        sx={{ p: "10px", fontSize: 14 }}
        aria-label="search"
        onClick={onSubmit}
      >
        Search
      </Button>
    </Paper>
  );
};

export default SearchForm;
