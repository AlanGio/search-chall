import { Paper } from "@mui/material";
import { SearchResult } from "../../App";

const categories = {
  VIDEOS: "Video",
  PLAYLISTS: "Playlist",
  BLOG_POSTS: "Blog Post",
};

const Item = ({ id, category, url, title, description }: SearchResult) => (
  <Paper sx={{ my: 2, p: 2, border: "1px solid black" }} key={id}>
    {categories[category]}
    <h2>
      <a href={url} target="_blank" rel="noreferrer">
        {title}
      </a>
    </h2>
    <h3>{description}</h3>
  </Paper>
);

export default Item;
