import { useState } from "react";
import SearchForm from "./components/Search";
import { Box, CircularProgress } from "@mui/material";
import Item from "./components/Item";
import { useSearchQuery } from "./redux/slices/search";

export type SearchResult = {
  id: string;
  title: string;
  url: string;
  description: string;
  category: "VIDEOS" | "PLAYLISTS" | "BLOG_POSTS";
};

function App() {
  const [value, setValue] = useState<string | null>(null);
  const { data, error, isLoading } = useSearchQuery(value, {
    skip: value === null,
  });

  return !error ? (
    <div className="App">
      <header className="App-header">
        <h1>Search UI Challenge</h1>
        <SearchForm
          handleSearch={(value) => setValue(value) /*dispatch(search(value))*/}
        />
      </header>

      <Box sx={{ my: 2 }}>
        {isLoading && <CircularProgress />}

        {data &&
          (data.length > 0
            ? data.map((item) => (
                <Item
                  category={item.category}
                  title={item.title}
                  url={item.url}
                  description={item.description}
                  id={item.id}
                  key={item.id}
                />
              ))
            : "There are no results matching your query.")}
      </Box>
    </div>
  ) : (
    <>
      <h1>Error!</h1>
      <p>Please try again doing a browser refresh</p>
      <a href="/">Reload</a>
    </>
  );
}

export default App;
