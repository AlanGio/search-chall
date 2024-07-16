import React, { useEffect, useState } from "react";
import SearchForm from "./components/Search";
import axios from "axios";
import { Box, CircularProgress } from "@mui/material";
import Item from "./components/Item";

export type SearchResult = {
  id: string;
  title: string;
  url: string;
  description: string;
  category: "VIDEOS" | "PLAYLISTS" | "BLOG_POSTS";
};

const baseURL = "/api/data?search=";

function App() {
  const [error, setError] = useState<Error | null>(null);
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [resultValue, setResultValue] = useState<SearchResult[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchValue) {
      setIsLoading(true);
      setResultValue(null);
      axios
        .get(`${baseURL}${searchValue}`)
        .then((response) => {
          setResultValue(response.data);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => setIsLoading(false));
    }
  }, [searchValue]);

  return !error ? (
    <div className="App">
      <header className="App-header">
        <h1>Search UI Challenge</h1>
        <SearchForm handleSearch={setSearchValue} />
      </header>

      <Box sx={{ my: 2 }}>
        {isLoading && <CircularProgress />}

        {resultValue &&
          (resultValue.length > 0
            ? resultValue.map((item) => (
                <Item
                  category={item.category}
                  title={item.title}
                  url={item.url}
                  description={item.description}
                  id={item.id}
                />
              ))
            : "There are no results matching your query.")}
      </Box>
    </div>
  ) : (
    <>
      <h1>Error!</h1>
      {error.message}
      <p>Please try again doing a browser refresh</p>
    </>
  );
}

export default App;
